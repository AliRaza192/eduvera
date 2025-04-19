import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import htmlcss from "../assets/html-css.jpg";
import js from "../assets/js.png";
import python from "../assets/python.png";
const SubCourseList = () => {
  const { courseId, subCourseId } = useParams();
  const [subCourse, setSubCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  // In a real app, you'd fetch this from your backend based on courseId and subCourseId
  useEffect(() => {
    // This is sample data that would normally come from your backend
    const subCourseData = {
      "web-development": {
        "html-css": {
          id: "html-css",
          name: "HTML & CSS",
          description: "Master the fundamentals of web structure and styling",
          longDescription:
            "In this comprehensive module, you'll learn everything about HTML5 and CSS3 to build modern, responsive websites. Starting with basic document structure and moving to advanced layout techniques like Grid and Flexbox, you'll develop the core skills every web developer needs.",
          image: htmlcss,
          duration: "3 weeks",
          topics: [
            "HTML5 Document Structure",
            "Semantic HTML Elements",
            "CSS Selectors and Properties",
            "Box Model and Layout",
            "Responsive Design Principles",
            "Flexbox and CSS Grid",
            "CSS Animations and Transitions",
            "Web Accessibility Basics",
          ],
          lessons: [
            {
              title: "Introduction to HTML",
              duration: "45 minutes",
              description: "Learn the basics of HTML structure and elements",
            },
            {
              title: "Working with Text and Lists",
              duration: "60 minutes",
              description: "Format text and create ordered and unordered lists",
            },
            {
              title: "Introduction to CSS",
              duration: "45 minutes",
              description: "Learn how to style HTML elements with CSS",
            },
            {
              title: "CSS Box Model",
              duration: "60 minutes",
              description:
                "Understand padding, borders, margin and content areas",
            },
            {
              title: "Flexbox Layout",
              duration: "75 minutes",
              description: "Create flexible page layouts with CSS Flexbox",
            },
          ],
        },
        javascript: {
          id: "javascript",
          name: "JavaScript",
          description: "Learn the core programming language of the web",
          longDescription:
            "This module covers JavaScript from the ground up. You'll start with basic syntax and programming concepts, then progress to DOM manipulation, event handling, asynchronous programming, and modern ES6+ features. By the end, you'll be able to create interactive, dynamic web experiences.",
          image: js,
          duration: "4 weeks",
          topics: [
            "JavaScript Syntax and Data Types",
            "Functions and Scope",
            "DOM Manipulation",
            "Event Handling",
            "Asynchronous JavaScript",
            "Promises and Async/Await",
            "ES6+ Features",
            "Error Handling",
          ],
          lessons: [
            {
              title: "JavaScript Fundamentals",
              duration: "60 minutes",
              description: "Learn variables, data types, and basic operations",
            },
            {
              title: "Functions and Control Flow",
              duration: "75 minutes",
              description: "Create functions and use conditional statements",
            },
            {
              title: "Working with Arrays and Objects",
              duration: "60 minutes",
              description: "Use JavaScript's core data structures effectively",
            },
            {
              title: "DOM Manipulation",
              duration: "90 minutes",
              description: "Select and modify HTML elements with JavaScript",
            },
            {
              title: "Event Handling",
              duration: "60 minutes",
              description: "Respond to user interactions with event listeners",
            },
          ],
        },
      },
      "data-science": {
        python: {
          id: "python",
          name: "Python",
          description:
            "Learn the primary programming language for data science",
          longDescription:
            "This module provides a comprehensive introduction to Python programming with a focus on data science applications. You'll learn syntax, data structures, functions, and libraries essential for data manipulation and analysis.",
          image: python,
          duration: "4 weeks",
          topics: [
            "Python Syntax and Data Types",
            "Control Flow and Functions",
            "Lists, Dictionaries, and Sets",
            "File Handling",
            "Object-Oriented Programming",
            "NumPy for Numerical Computing",
            "Pandas for Data Analysis",
            "Data Visualization with Matplotlib",
          ],
          lessons: [
            {
              title: "Python Basics",
              duration: "60 minutes",
              description: "Learn Python syntax, variables, and data types",
            },
            {
              title: "Control Structures",
              duration: "75 minutes",
              description: "Work with if statements, loops, and functions",
            },
            {
              title: "Data Structures",
              duration: "90 minutes",
              description: "Master lists, dictionaries, tuples, and sets",
            },
            {
              title: "NumPy Fundamentals",
              duration: "60 minutes",
              description: "Perform efficient numerical operations",
            },
            {
              title: "Pandas for Data Analysis",
              duration: "90 minutes",
              description: "Learn data manipulation with DataFrames",
            },
          ],
        },
      },
    };

    // Simulate API call
    setTimeout(() => {
      if (subCourseData[courseId] && subCourseData[courseId][subCourseId]) {
        setSubCourse(subCourseData[courseId][subCourseId]);
      }
      setLoading(false);
    }, 500);

    // Replace with actual API call when backend is ready
    // const fetchSubCourse = async () => {
    //   try {
    //     const response = await fetch(`/api/courses/${courseId}/subcourses/${subCourseId}`);
    //     const data = await response.json();
    //     setSubCourse(data);
    //   } catch (error) {
    //     console.error('Error fetching sub-course details:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchSubCourse();
  }, [courseId, subCourseId]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-center">
        <div className="text-xl">Loading course content...</div>
      </div>
    );
  }

  if (!subCourse) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">
            Course Content Not Found
          </h2>
          <p className="mt-2 text-gray-600">
            The course content you're looking for doesn't exist.
          </p>
          <Link
            to={`/courses/${courseId}`}
            className="mt-4 inline-block bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition"
          >
            Back to Course
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="my-6">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="text-gray-600 hover:text-purple-700">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <Link
                  to="/courses"
                  className="text-gray-600 hover:text-purple-700 ml-1 md:ml-2"
                >
                  Courses
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <Link
                  to={`/courses/${courseId}`}
                  className="text-gray-600 hover:text-purple-700 ml-1 md:ml-2"
                >
                  {courseId
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-500 ml-1 md:ml-2 font-medium">
                  {subCourse.name}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        <div className="lg:w-1/2">
          <img
            src={subCourse.image}
            alt={subCourse.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {subCourse.name}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {subCourse.longDescription}
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <span className="text-gray-500 text-sm">Duration</span>
            <p className="font-medium text-gray-900">{subCourse.duration}</p>
          </div>
          <button className="bg-purple-700 text-white py-3 px-6 rounded-md hover:bg-purple-800 transition font-semibold">
            Start Learning
          </button>
        </div>
      </div>

      {/* Topics Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          What You'll Learn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subCourse.topics.map((topic, index) => (
            <div key={index} className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">{topic}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lessons Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Course Content
        </h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {subCourse.lessons.map((lesson, index) => (
            <div
              key={index}
              className={`p-6 ${
                index !== subCourse.lessons.length - 1
                  ? "border-b border-gray-200"
                  : ""
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium text-gray-900">
                    {lesson.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{lesson.description}</p>
                </div>
                <div className="text-sm text-gray-500 whitespace-nowrap ml-4">
                  {lesson.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-purple-50 rounded-xl p-8 text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to start learning?
        </h2>
        <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
          Begin your journey to mastering {subCourse.name} today and take the
          first step towards your new skills.
        </p>
        <button className="bg-purple-700 text-white py-3 px-8 rounded-md hover:bg-purple-800 transition font-semibold text-lg">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default SubCourseList;
