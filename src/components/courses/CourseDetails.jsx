// import { useState, useEffect } from "react";

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import course1 from "../../assets/course1.jpg";
import course2 from "../../assets/course2.jpg";
import course3 from "../../assets/course3.jpg";
// import teacher1 from "../../assets/teacher1.jpeg";
// import teacher2 from "../../assets/teacher2.jpeg";
// import teacher3 from "../../assets/teacher3.jpeg";

const CourseDetail = () => {
  const { courseId } = useParams();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    courseInterested: "",
    consent: false
  });

  // In a real app, you'd fetch this specific course from your backend
  useEffect(() => {
    // Simulating backend data
    const coursesData = [
      {
        id: "web-development",
        name: "Web Development",
        description: "Learn modern web development techniques and frameworks",
        image: course1,
        longDescription: "Master the art of building responsive and interactive web applications using the latest technologies and frameworks in the industry. This comprehensive course covers everything from fundamentals to advanced concepts.",
        subCourses: [
          { id: "html-css", name: "HTML & CSS", duration: "4 weeks" },
          { id: "javascript", name: "JavaScript", duration: "6 weeks" },
          { id: "react", name: "React", duration: "8 weeks" },
          { id: "nodejs", name: "Node.js", duration: "6 weeks" },
        ],
      },
      {
        id: "data-science",
        name: "Data Science",
        description: "Master data analysis, machine learning and statistics",
        image: course2,
        longDescription: "Become a data science expert by learning how to analyze data, create visualizations, and build machine learning models. This course covers Python, statistical analysis, and modern data science workflows.",
        subCourses: [
          { id: "python", name: "Python", duration: "4 weeks" },
          { id: "machine-learning", name: "Machine Learning", duration: "8 weeks" },
          { id: "data-analysis", name: "Data Analysis", duration: "6 weeks" },
          { id: "statistics", name: "Statistics", duration: "4 weeks" },
        ],
      },
      {
        id: "cloud-computing",
        name: "Cloud Computing",
        description: "Gain expertise in cloud services and infrastructure management",
        image: course3,
        longDescription: "Gain an in-depth understanding of Cloud Computing concepts and implement its various services. Stand out in the industry by signing up for our top cloud computing training and certified to boost your cloud career.",
        subCourses: [
          { id: "aws", name: "AWS", duration: "6 weeks" },
          { id: "azure", name: "Microsoft Azure", duration: "6 weeks" },
          { id: "gcp", name: "Google Cloud Platform", duration: "6 weeks" },
          { id: "cloud-security", name: "Cloud Security", duration: "4 weeks" },
        ],
      },
      {
        id: "mobile-development",
        name: "Mobile Development",
        description: "Build native and cross-platform mobile applications",
        image: course3,
        longDescription: "Learn to develop mobile applications for iOS and Android using both native and cross-platform frameworks. This course will equip you with the skills to build, test, and deploy mobile apps.",
        subCourses: [
          { id: "android", name: "Android", duration: "8 weeks" },
          { id: "ios", name: "iOS", duration: "8 weeks" },
          { id: "react-native", name: "React Native", duration: "6 weeks" },
          { id: "flutter", name: "Flutter", duration: "6 weeks" },
        ],
      },
    ];

    const course = coursesData.find((c) => c.id === courseId);
    setSelectedCourse(course);
    if (course) {
      setFormData(prev => ({...prev, courseInterested: course.name}));
    }
  }, [courseId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this data to your backend
    console.log("Form submitted:", formData);
    alert("Demo class scheduled! We'll contact you soon.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      courseInterested: selectedCourse?.name || "",
      consent: false
    });
  };

  if (!selectedCourse) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-xl text-center">Loading course details...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center text-gray-600">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span>{selectedCourse.name}</span>
        </div>
      </div>

      {/* Course Hero Section */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Leverage Your {selectedCourse.name} Career with {selectedCourse.name} Training
              </h1>
              <div className="border-l-4 border-blue-600 pl-4 mb-8">
                <p className="text-lg text-gray-700">
                  {selectedCourse.longDescription}
                </p>
              </div>
              <Link
                to="#course-modules"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-md inline-block transition duration-300"
              >
                View Courses
              </Link>
            </div>

            {/* Demo Class Form */}
            <div className="lg:w-1/3 bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">Free Demo Class <span className="text-blue-600">Form</span></h2>
                <p className="text-gray-600">Enter your details to attend Course Demo Class</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <select
                    name="courseInterested"
                    value={formData.courseInterested}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                  >
                    <option value="">Course Interested In</option>
                    <option value={selectedCourse.name}>{selectedCourse.name}</option>
                    {selectedCourse.subCourses.map(sub => (
                      <option key={sub.id} value={`${selectedCourse.name} - ${sub.name}`}>
                        {selectedCourse.name} - {sub.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mr-2"
                      required
                    />
                    <span className="text-sm text-gray-600">
                      By submitting my contact details, I agree Privacy Policy and I consent to 
                      receiving SMS/call/email, including marketing and promotional SMS.
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded"
                >
                  Schedule Demo Class
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Course Modules */}
      <div id="course-modules" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          {selectedCourse.name} Modules
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {selectedCourse.subCourses.map((module) => (
            <div key={module.id} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{module.name}</h3>
              <p className="text-gray-600 mb-4">Duration: {module.duration}</p>
              <Link
                to={`/courses/${selectedCourse.id}/${module.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Ratings */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center bg-white rounded-full px-6 py-2 shadow-md">
              <span className="text-gray-800 font-bold mr-2">Google</span>
              <span className="text-lg font-bold">4.9</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-6 py-2 shadow-md">
              <span className="text-gray-800 font-bold mr-2">Course Report</span>
              <span className="text-lg font-bold">4.5</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-6 py-2 shadow-md">
              <span className="text-gray-800 font-bold mr-2">Facebook</span>
              <span className="text-lg font-bold">4.9</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-6 py-2 shadow-md">
              <span className="text-gray-800 font-bold mr-2">Trustpilot</span>
              <span className="text-lg font-bold">4.8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;