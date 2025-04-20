import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { coursesData } from "../data/CoursesData";
import Breadcrumb from "./Breadcrumb";
import SubCourseHero from "./SubCourseHero";
import TopicsList from "./TopicsList";
import LessonList from "./LessonList";

const SubCourseList = () => {
  const { courseId, subCourseId } = useParams();
  const [subCourse, setSubCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      if (coursesData[courseId] && coursesData[courseId][subCourseId]) {
        setSubCourse(coursesData[courseId][subCourseId]);
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

  const formattedCourseTitle = courseId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumb 
        courseId={courseId} 
        courseTitle={formattedCourseTitle} 
        subCourseName={subCourse.name} 
      />
      
      <SubCourseHero subCourse={subCourse} />
      
      <TopicsList topics={subCourse.topics} />
      
      <LessonList lessons={subCourse.lessons} />

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