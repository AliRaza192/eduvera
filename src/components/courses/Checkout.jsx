import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { checkoutCourse, getCourseDetail } from "../../services/courseService";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Checkout = () => {
  // Fix: Get both categorySlug and courseSlug from params
  const { categorySlug, courseSlug } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  const { user } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      navigate("/login", {
        state: {
          from: location.pathname,
          message: "Please login to proceed with checkout",
        },
      });
      return;
    }
  }, [user, navigate]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Debug logs
        console.log("Category Slug:", categorySlug);
        console.log("Course Slug:", courseSlug);
        
        const res = await getCourseDetail(courseSlug);
        console.log("Course details from checkout:", res.data);

        if (res.data?.status === true && res.data?.data) {
          setCourse(res.data.data);
        } else {
          setError(res.data?.message || "Failed to load course details");
        }
      } catch (err) {
        console.error("Failed to fetch course:", err);
        setError(
          err.response?.data?.message || "Failed to load course details"
        );
        toast.error(
          err.response?.data?.message || "Failed to load course details."
        );
      } finally {
        setLoading(false);
      }
    };

    if (courseSlug && user) {
      fetchCourse();
    }
  }, [courseSlug, user, categorySlug]);

  const handleCheckout = async () => {
    if (!course || !user) return;

    try {
      setProcessing(true);

      console.log("Course data:", course);
      console.log("Course slug:", course.slug);
      console.log("Course ID:", course.id);
      console.log("Category slug:", categorySlug);

      if (!course.slug && !course.id) {
        toast.error("Course information is missing");
        return;
      }

      // Try different payload formats based on API expectations
      const checkoutData = {
        course_slug: course.slug,
        course_id: course.id,
        ...(categorySlug && { category_slug: categorySlug })
      };

      console.log("Sending checkout request with:", checkoutData);

      const res = await checkoutCourse(checkoutData);
      console.log("Checkout response:", res.data);

      // FIXED: Check for URL directly instead of status field
      if (res.data?.url) {
        // Redirect to Stripe Checkout
        toast.success("Redirecting to payment...");
        setTimeout(() => {
          window.location.href = res.data.url;
        }, 1000);
      } else if (res.data?.id && !res.data?.url) {
        // If only session ID is present but no URL
        toast.error("Payment URL not found. Please contact support.");
      } else if (res.data?.status === true) {
        // Handle success cases without URL (like free courses)
        if (res.data?.message) {
          toast.success(res.data.message);
          navigate('/my-courses');
        } else {
          toast.success("Successfully enrolled!");
          navigate('/my-courses');
        }
      } else {
        // Handle other error cases
        toast.error(res.data?.message || "Payment initialization failed.");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      console.error("Error response:", err.response?.data);
      console.error("Error status:", err.response?.status);
      
      let errorMessage = "Checkout failed.";
      
      if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err.response?.data?.errors) {
        // Handle validation errors
        const errors = err.response.data.errors;
        if (typeof errors === 'object') {
          errorMessage = Object.values(errors).flat().join(', ');
        } else {
          errorMessage = errors;
        }
      }
      
      toast.error(errorMessage);

      // Handle specific error cases
      if (err.response?.status === 401) {
        navigate('/login');
      } else if (err.response?.status === 404) {
        toast.error("Course not found or checkout not available.");
      } else if (err.response?.status === 422) {
        toast.error("Invalid checkout data. Please check course details.");
      }
    } finally {
      setProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700 mx-auto mb-4"></div>
          <p className="text-lg font-semibold text-gray-600">
            Loading checkout...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <p className="text-xl font-semibold text-red-600 mb-4">{error}</p>
          <div className="space-y-2">
            <button
              onClick={() => window.location.reload()}
              className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition-colors mr-2"
            >
              Try Again
            </button>
            <button
              onClick={() => navigate("/courses")}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Browse Courses
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">📚</div>
          <p className="text-xl font-semibold text-gray-600">
            Course not found!
          </p>
          <button
            onClick={() => navigate("/courses")}
            className="mt-4 bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition-colors"
          >
            Browse Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <button
                onClick={() => navigate('/courses')}
                className="text-purple-600 hover:text-purple-800"
              >
                Courses
              </button>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <button
                  onClick={() => navigate(`/courses/${categorySlug}`)}
                  className="text-purple-600 hover:text-purple-800"
                >
                  {categorySlug}
                </button>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <button
                  onClick={() => navigate(`/courses/${categorySlug}/${courseSlug}`)}
                  className="text-purple-600 hover:text-purple-800"
                >
                  {course.title}
                </button>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-500">Checkout</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>
          <p className="text-gray-600 mt-2">
            Complete your purchase to access the course
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Course Info */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Course Details
              </h2>
              <div className="space-y-4">
                <img
                  src={course.thumbnail || "/placeholder-course.jpg"}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.src = "/placeholder-course.jpg";
                  }}
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{course.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">
                      {course.duration || "Self-paced"}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Lessons</p>
                    <p className="font-semibold">
                      {course.classes ? course.classes.length : 0}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Level</p>
                    <p className="font-semibold">
                      {course.level || "All Levels"}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Language</p>
                    <p className="font-semibold">
                      {course.language || "English"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Payment Summary
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Course Price</span>
                    <span className="text-xl font-bold text-purple-700">
                      ${course.price || "Free"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-600">$0.00</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-2xl font-bold text-purple-700">
                        ${course.price || "0.00"}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={handleCheckout}
                      disabled={processing}
                      className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 px-6 rounded-lg font-semibold shadow-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {processing ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing...
                        </div>
                      ) : (
                        `${course.price && parseFloat(course.price) > 0 ? `Pay $${course.price}` : 'Enroll for Free'} & Start Learning`
                      )}
                    </button>
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-500">
                      🔒 Secure payment powered by Stripe
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2">
                  What you'll get:
                </h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>✅ Lifetime access to course content</li>
                  <li>✅ All course materials and resources</li>
                  <li>✅ Certificate of completion</li>
                  <li>✅ Student support and community access</li>
                  <li>✅ Mobile and desktop access</li>
                  <li>✅ 30-day money-back guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;