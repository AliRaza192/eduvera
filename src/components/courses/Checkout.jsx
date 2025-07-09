import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { checkoutCourse, getCourseDetail } from "../../services/courseService";
import toast from "react-hot-toast";

const Checkout = () => {
  const { courseSlug } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await getCourseDetail(courseSlug);
        console.log("Course details from checkout:", res.data);
        setCourse(res.data.data);
      } catch (err) {
        toast.error("Failed to load course details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseSlug]);

  const handleCheckout = async () => {
    if (!course) return;

    try {
      setProcessing(true);
      const res = await checkoutCourse({ course_slug: course.slug });
      console.log("Checkout response:", res.data);

      if (res.data?.status === true && res.data?.data?.url) {
        // ✅ Redirect to Stripe Checkout
        window.location.href = res.data.data.url;
      } else {
        toast.error(res.data?.message || "Payment failed.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Checkout failed.");
    } finally {
      setProcessing(false);
    }
  };

  if (loading)
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-lg font-semibold">Loading checkout...</p>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {course && (
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full sm:w-1/3 h-40 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-2">{course.description}</p>
              <p className="text-purple-700 font-bold text-lg">
                Price: ${course.price}
              </p>
            </div>
          </div>

          <div className="mt-6 text-right">
            <button
              onClick={handleCheckout}
              disabled={processing}
              className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-6 rounded-lg font-semibold shadow-md transition disabled:opacity-50"
            >
              {processing ? "Processing..." : "Pay & Enroll"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
