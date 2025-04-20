import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import course1 from "../../assets/course1.jpg";
import course2 from "../../assets/course2.jpg";
import course3 from "../../assets/course3.jpg";
const CourseList = () => {
  // In a real app, you'd fetch this from your backend
  const [courses, setCourses] = useState([
    {
      id: "web-development",
      name: "Web Development",
      description: "Learn modern web development techniques and frameworks",
      image: course1,
      subCourses: [
        { id: "html-css", name: "HTML & CSS" },
        { id: "javascript", name: "JavaScript" },
        { id: "react", name: "React" },
        { id: "nodejs", name: "Node.js" },
      ],
    },
    {
      id: "data-science",
      name: "Data Science",
      description: "Master data analysis, machine learning and statistics",
      image: course2,
      subCourses: [
        { id: "python", name: "Python" },
        { id: "machine-learning", name: "Machine Learning" },
        { id: "data-analysis", name: "Data Analysis" },
        { id: "statistics", name: "Statistics" },
      ],
    },
    {
      id: "mobile-development",
      name: "Mobile Development",
      description: "Build native and cross-platform mobile applications",
      image: course3,
      subCourses: [
        { id: "android", name: "Android" },
        { id: "ios", name: "iOS" },
        { id: "react-native", name: "React Native" },
        { id: "flutter", name: "Flutter" },
      ],
    },
  ]);

  // Simulating data fetch from backend
  useEffect(() => {
    // Replace with actual API call when backend is ready
    // const fetchCourses = async () => {
    //   try {
    //     const response = await fetch('/api/courses');
    //     const data = await response.json();
    //     setCourses(data);
    //   } catch (error) {
    //     console.error('Error fetching courses:', error);
    //   }
    // };
    // fetchCourses();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our wide range of courses designed to help you master new
          skills and advance your career.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {course.name}
              </h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Includes:
                </h3>
                <ul className="space-y-1">
                  {course.subCourses.slice(0, 3).map((subCourse) => (
                    <li
                      key={subCourse.id}
                      className="text-gray-600 flex items-center"
                    >
                      <span className="mr-2">•</span> {subCourse.name}
                    </li>
                  ))}
                  {course.subCourses.length > 3 && (
                    <li className="text-gray-600">
                      + {course.subCourses.length - 3} more
                    </li>
                  )}
                </ul>
              </div>
              <Link
                to={`/courses/${course.id}`}
                className="block text-center bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition"
              >
                View Course Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
