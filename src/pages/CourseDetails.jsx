import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  // In a real app, you'd fetch this from your backend based on courseId
  useEffect(() => {
    const courseData = {
      "web-development": {
        id: "web-development",
        name: "Web Development",
        description: "Learn modern web development techniques and frameworks",
        longDescription:
          "Our comprehensive Web Development course takes you from the basics of HTML and CSS to advanced concepts in modern JavaScript frameworks. You'll build real-world projects, learn to work with APIs, and understand both frontend and backend development.",
        image: "/api/placeholder/800/400",
        duration: "12 weeks",
        level: "Beginner to Advanced",
        price: "$499",
        instructor: "Sarah Johnson",
        instructorImage: "/api/placeholder/150/150",
        subCourses: [
          {
            id: "html-css",
            name: "HTML & CSS",
            description: "Master the fundamentals of web structure and styling",
          },
          {
            id: "javascript",
            name: "JavaScript",
            description: "Learn the core programming language of the web",
          },
          {
            id: "react",
            name: "React",
            description: "Build interactive UIs with the popular React library",
          },
          {
            id: "nodejs",
            name: "Node.js",
            description: "Create server-side applications with JavaScript",
          },
        ],
      },
      "data-science": {
        id: "data-science",
        name: "Data Science",
        description: "Master data analysis, machine learning and statistics",
        longDescription:
          "Our Data Science program will give you the skills needed to analyze complex datasets and extract meaningful insights. Learn Python, statistics, machine learning algorithms, and data visualization techniques through hands-on projects using real-world data.",
        image: "/api/placeholder/800/400",
        duration: "16 weeks",
        level: "Intermediate",
        price: "$699",
        instructor: "Dr. Michael Chen",
        instructorImage: "/api/placeholder/150/150",
        subCourses: [
          {
            id: "python",
            name: "Python",
            description:
              "Learn the primary programming language for data science",
          },
          {
            id: "machine-learning",
            name: "Machine Learning",
            description: "Implement algorithms that learn from data",
          },
          {
            id: "data-analysis",
            name: "Data Analysis",
            description: "Extract insights from complex datasets",
          },
          {
            id: "statistics",
            name: "Statistics",
            description: "Master the mathematical foundations of data science",
          },
        ],
      },
      "mobile-development": {
        id: "mobile-development",
        name: "Mobile Development",
        description: "Build native and cross-platform mobile applications",
        longDescription:
          "Our Mobile Development course teaches you how to create engaging, high-performance mobile applications for iOS and Android. Learn both platform-specific development and cross-platform frameworks to maximize your skills and career opportunities.",
        image: "/api/placeholder/800/400",
        duration: "14 weeks",
        level: "Intermediate",
        price: "$599",
        instructor: "James Wilson",
        instructorImage: "/api/placeholder/150/150",
        subCourses: [
          {
            id: "android",
            name: "Android",
            description:
              "Develop applications for the world's most popular mobile OS",
          },
          {
            id: "ios",
            name: "iOS",
            description: "Create apps for Apple's iPhone and iPad devices",
          },
          {
            id: "react-native",
            name: "React Native",
            description: "Build cross-platform apps with JavaScript and React",
          },
          {
            id: "flutter",
            name: "Flutter",
            description:
              "Google's UI toolkit for building natively compiled applications",
          },
        ],
      },
    };

    // Simulate API call
    setTimeout(() => {
      setCourse(courseData[courseId]);
      setLoading(false);
    }, 500);

    // Replace with actual API call when backend is ready
    // const fetchCourse = async () => {
    //   try {
    //     const response = await fetch(`/api/courses/${courseId}`);
    //     const data = await response.json();
    //     setCourse(data);
    //   } catch (error) {
    //     console.error('Error fetching course details:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchCourse();
  }, [courseId]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-center">
        <div className="text-xl">Loading course details...</div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">Course Not Found</h2>
          <p className="mt-2 text-gray-600">
            The course you're looking for doesn't exist.
          </p>
          <Link
            to="/courses"
            className="mt-4 inline-block bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition"
          >
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        <div className="lg:w-1/2">
          <img
            src={course.image}
            alt={course.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {course.name}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{course.longDescription}</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <span className="text-gray-500 text-sm">Duration</span>
              <p className="font-medium text-gray-900">{course.duration}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <span className="text-gray-500 text-sm">Level</span>
              <p className="font-medium text-gray-900">{course.level}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <span className="text-gray-500 text-sm">Price</span>
              <p className="font-medium text-gray-900">{course.price}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <span className="text-gray-500 text-sm">Instructor</span>
              <p className="font-medium text-gray-900">{course.instructor}</p>
            </div>
          </div>
          <button className="bg-purple-700 text-white py-3 px-6 rounded-md hover:bg-purple-800 transition font-semibold">
            Enroll Now
          </button>
        </div>
      </div>

      {/* Sub-courses Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Course Modules
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {course.subCourses.map((subCourse) => (
            <Link
              key={subCourse.id}
              to={`/courses/${course.id}/${subCourse.id}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-l-4 border-purple-700"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {subCourse.name}
              </h3>
              <p className="text-gray-600">{subCourse.description}</p>
              <div className="mt-4 flex justify-end">
                <span className="text-purple-700 font-medium flex items-center">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
