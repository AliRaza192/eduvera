// import { useEffect, useState } from "react";
// import { getMyCourses } from "../../services/courseService";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";

// const MyCourses = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await getMyCourses();
//         console.log("My Courses API Response:", res.data);

//         // Based on your backend structure, data is in res.data.data
//         const coursesData = res.data?.data || [];
//         console.log("Courses Data:", coursesData);

//         setCourses(coursesData);
//       } catch (err) {
//         console.error("Failed to load courses:", err);
//         toast.error("Failed to load your courses.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-[60vh] flex justify-center items-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700"></div>
//         <p className="text-lg font-semibold ml-4">Loading your courses...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold mb-6">My Enrolled Courses</h1>

//       {courses.length === 0 ? (
//         <div className="text-center py-12">
//           <div className="text-gray-400 text-6xl mb-4">📚</div>
//           <h2 className="text-xl font-semibold text-gray-700 mb-2">No courses yet</h2>
//           <p className="text-gray-600 mb-6">
//             You haven't enrolled in any courses yet. Start your learning journey today!
//           </p>
//           <Link
//             to="/courses"
//             className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors font-medium"
//           >
//             Browse Courses
//           </Link>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map((course, idx) => {
//             console.log(`Course ${idx}:`, course);

//             return (
//               <div
//                 key={course.id || idx}
//                 className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
//               >
//                 <div className="relative">
//                   <img
//                     src={course.thumbnail_url}
//                     alt={course.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   {course.demo_video_url && (
//                     <div className="absolute top-4 left-4">
//                       <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
//                         Demo Available
//                       </span>
//                     </div>
//                   )}
//                 </div>

//                 <div className="p-6">
//                   <h2 className="text-xl font-semibold text-purple-700 mb-2">
//                     {course.title}
//                   </h2>
//                   <p className="text-gray-600 text-sm mb-4 line-clamp-3">
//                     {course.description}
//                   </p>

//                   <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
//                     <span>Duration: {course.duration}</span>
//                     <span className="text-purple-600 font-semibold">
//                       ${course.price}
//                     </span>
//                   </div>

//                   {/* Teachers */}
//                   <div className="flex items-center mb-4">
//                     <span className="text-sm text-gray-500 mr-2">Instructors:</span>
//                     <div className="flex items-center space-x-2">
//                       {course.teachers?.slice(0, 2).map((teacher, i) => (
//                         <div key={i} className="flex items-center">
//                           <img
//                             src={teacher.profile_photo_url}
//                             alt={teacher.full_name}
//                             className="w-6 h-6 rounded-full object-cover"
//                           />
//                           <span className="text-xs text-gray-700 ml-1">
//                             {teacher.full_name}
//                           </span>
//                         </div>
//                       ))}
//                       {course.teachers?.length > 2 && (
//                         <span className="text-xs text-gray-500">
//                           +{course.teachers.length - 2} more
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex gap-2">
//                     <Link
//                       to={`/dashboard/course-detail/${course.slug}`}
//                       state={{
//                         courseId: course.id,
//                         courseTitle: course.title,
//                         courseSlug: course.slug
//                       }}
//                       className="flex-1 bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold text-sm hover:bg-purple-800 transition text-center"
//                     >
//                       View Course
//                     </Link>

//                     {course.slug && (
//                       <Link
//                         to={`/dashboard/course-classes/${course.slug}`}
//                         state={{
//                           courseId: course.id,
//                           courseTitle: course.title,
//                           courseSlug: course.slug
//                         }}
//                         className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-semibold text-sm hover:bg-green-700 transition text-center"
//                       >
//                         Start Learning
//                       </Link>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyCourses;

// import { useEffect, useState } from "react";
// import { getMyCourses, getCourseDetail, getClassDetail } from "../../services/courseService";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";
// import ProgressBar from "../../components/courses/ProgressBar";

// const MyCourses = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);

//   const fetchCourses = async (showRefreshing = false) => {
//     if (showRefreshing) setRefreshing(true);

//     try {
//       // Clean up old progress data (older than 30 days)
//       const storedProgress = JSON.parse(localStorage.getItem('course_progress')) || {};
//       const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
//       Object.keys(storedProgress).forEach(courseSlug => {
//         Object.keys(storedProgress[courseSlug]).forEach(classSlug => {
//           if (storedProgress[courseSlug][classSlug].timestamp < thirtyDaysAgo) {
//             delete storedProgress[courseSlug][classSlug];
//           }
//         });
//         if (Object.keys(storedProgress[courseSlug]).length === 0) {
//           delete storedProgress[courseSlug];
//         }
//       });
//       localStorage.setItem('course_progress', JSON.stringify(storedProgress));
//       console.log("Stored Progress after cleanup:", JSON.stringify(storedProgress, null, 2));

//       const res = await getMyCourses();
//       console.log("My Courses API Response:", JSON.stringify(res.data, null, 2));

//       const coursesData = res.data?.data || [];
//       const enrichedCourses = await Promise.all(
//         coursesData.map(async (course) => {
//           try {
//             const courseRes = await getCourseDetail(course.slug);
//             console.log(`Course Detail for ${course.slug}:`, JSON.stringify(courseRes.data, null, 2));
//             if (courseRes.data?.status === true) {
//               const classes = courseRes.data.data.classes || [];

//               const detailedClasses = await Promise.all(
//                 classes.map(async (cls) => {
//                   try {
//                     const classRes = await getClassDetail(cls.slug);
//                     console.log(`Class Detail for ${cls.slug}:`, JSON.stringify(classRes.data, null, 2));
//                     if (classRes.data?.status === true) {
//                       // Merge API data with stored progress
//                       const storedClassProgress = storedProgress[course.slug]?.[cls.slug] || {};
//                       return {
//                         ...cls,
//                         is_completed: storedClassProgress.is_completed || classRes.data.data.current_class.is_attended || false,
//                         watched_percentage: storedClassProgress.watched_percentage || classRes.data.data.current_class.watched_percentage || 0,
//                       };
//                     }
//                     return { ...cls, is_completed: false, watched_percentage: 0 };
//                   } catch (err) {
//                     console.error(`Failed to load class details for ${cls.slug}:`, err);
//                     return { ...cls, is_completed: false, watched_percentage: 0 };
//                   }
//                 })
//               );

//               const completedClasses = detailedClasses.filter(cls =>
//                 cls.is_completed || cls.watched_percentage >= 80
//               ).length;
//               const totalClasses = detailedClasses.length;
//               const progress = totalClasses > 0 ? (completedClasses / totalClasses) * 100 : 0;

//               console.log(`Progress for ${course.title}: ${completedClasses}/${totalClasses} = ${progress}%`, {
//                 detailedClasses: JSON.stringify(detailedClasses, null, 2)
//               });

//               const currentClass = detailedClasses.find(cls =>
//                 !cls.is_completed && cls.watched_percentage < 80
//               ) || detailedClasses[0];

//               return {
//                 ...course,
//                 classes: detailedClasses,
//                 current_class: currentClass,
//                 progress: Math.round(progress),
//                 completed_classes: completedClasses,
//                 total_classes: totalClasses,
//               };
//             }
//             return { ...course, progress: 0, classes: [], completed_classes: 0, total_classes: 0 };
//           } catch (err) {
//             console.error(`Failed to load classes for ${course.slug}:`, err);
//             return { ...course, progress: 0, classes: [], completed_classes: 0, total_classes: 0 };
//           }
//         })
//       );

//       console.log("Enriched Courses Data:", JSON.stringify(enrichedCourses, null, 2));
//       setCourses(enrichedCourses);
//     } catch (err) {
//       console.error("Failed to load courses:", err);
//       toast.error("Failed to load your courses.");
//     } finally {
//       setLoading(false);
//       if (showRefreshing) setRefreshing(false);
//     }
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   useEffect(() => {
//     const handleFocus = () => {
//       console.log("Window focused, refreshing courses...");
//       fetchCourses(true);
//     };

//     const updateCoursesState = (progressData) => {
//       console.log("Updating courses state with:", JSON.stringify(progressData, null, 2));
//       setCourses(prevCourses => {
//         const updatedCourses = prevCourses.map(course => {
//           if (course.slug === progressData.courseSlug) {
//             const updatedClasses = course.classes?.map(cls => {
//               if (cls.id === progressData.classId) {
//                 console.log("Updating class:", cls.id, {
//                   is_completed: progressData.is_completed || progressData.percentage >= 80,
//                   watched_percentage: progressData.percentage || 0,
//                 });
//                 return {
//                   ...cls,
//                   is_completed: progressData.is_completed || progressData.percentage >= 80,
//                   watched_percentage: progressData.percentage || 0,
//                 };
//               }
//               return cls;
//             }) || [];

//             const completedClasses = updatedClasses.filter(cls =>
//               cls.is_completed || cls.watched_percentage >= 80
//             ).length;
//             const totalClasses = updatedClasses.length;
//             const progress = totalClasses > 0 ? (completedClasses / totalClasses) * 100 : 0;

//             console.log(`Updated progress for ${course.title}: ${completedClasses}/${totalClasses} = ${progress}%`);

//             const currentClass = updatedClasses.find(cls =>
//               !cls.is_completed && cls.watched_percentage < 80
//             ) || updatedClasses[0];

//             // Update localStorage with the latest class data
//             const storedProgress = JSON.parse(localStorage.getItem('course_progress')) || {};
//             const courseProgress = storedProgress[course.slug] || {};
//             courseProgress[progressData.classSlug] = {
//               classId: progressData.classId,
//               is_completed: progressData.is_completed || progressData.percentage >= 80,
//               watched_percentage: progressData.percentage || 0,
//               timestamp: progressData.timestamp,
//             };
//             storedProgress[course.slug] = courseProgress;
//             localStorage.setItem('course_progress', JSON.stringify(storedProgress));
//             console.log("Stored Progress:", JSON.stringify(storedProgress, null, 2));

//             return {
//               ...course,
//               classes: updatedClasses,
//               current_class: currentClass,
//               progress: Math.round(progress),
//               completed_classes: completedClasses,
//               total_classes: totalClasses,
//             };
//           }
//           return course;
//         });

//         console.log("Updated Courses:", JSON.stringify(updatedCourses, null, 2));
//         return updatedCourses;
//       });
//     };

//     const handleStorageChange = (e) => {
//       if (e.key !== "course_progress_updated") return;

//       console.log("Storage changed, processing course_progress_updated:", e.newValue);
//       try {
//         const progressData = JSON.parse(e.newValue);
//         updateCoursesState(progressData);
//       } catch (error) {
//         console.error("Error parsing storage data:", error);
//         fetchCourses(true);
//       }
//     };

//     const handleCustomEvent = (e) => {
//       console.log("Custom event courseProgressUpdated:", JSON.stringify(e.detail, null, 2));
//       updateCoursesState(e.detail);
//     };

//     window.addEventListener("focus", handleFocus);
//     window.addEventListener("storage", handleStorageChange);
//     window.addEventListener("courseProgressUpdated", handleCustomEvent);

//     return () => {
//       window.removeEventListener("focus", handleFocus);
//       window.removeEventListener("storage", handleStorageChange);
//       window.removeEventListener("courseProgressUpdated", handleCustomEvent);
//     };
//   }, []);

//   const refreshCourses = () => {
//     console.log("Manual refresh triggered");
//     fetchCourses(true);
//   };

//   if (loading) {
//     return (
//       <div className="min-h-[60vh] flex justify-center items-center">
//         <div className="flex items-center gap-4">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700"></div>
//           <p className="text-lg font-semibold text-gray-700">Loading your courses...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-gray-800">My Enrolled Courses</h1>
//         <button
//           onClick={refreshCourses}
//           disabled={refreshing}
//           className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
//             refreshing
//               ? "bg-gray-400 text-white cursor-not-allowed"
//               : "bg-purple-600 text-white hover:bg-purple-700"
//           }`}
//         >
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
//             />
//           </svg>
//           {refreshing ? "Refreshing..." : "Refresh"}
//         </button>
//       </div>

//       {courses.length === 0 ? (
//         <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-lg py-12">
//           <div className="text-center">
//             <div className="mb-6">
//               <svg
//                 className="mx-auto h-24 w-24 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={1.5}
//                   d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 006 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
//                 />
//               </svg>
//             </div>
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">
//               No Courses Enrolled Yet
//             </h2>
//             <p className="text-gray-600 max-w-md mx-auto mb-8">
//               Start your learning journey today! Explore our wide range of
//               courses and find the perfect one for you.
//             </p>
//             <Link
//               to="/all-courses"
//               className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
//             >
//               Buy Courses
//               <svg
//                 className="inline-block w-4 h-4 ml-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map((course, idx) => {
//             console.log(`Course ${idx}:`, JSON.stringify(course, null, 2));
//             console.log(`Progress: ${course.progress}%`);
//             console.log(
//               `Completed Classes: ${course.completed_classes}/${course.total_classes}`
//             );

//             return (
//               <div
//                 key={course.id || idx}
//                 className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-200 overflow-hidden relative"
//               >
//                 {course.progress >= 100 && (
//                   <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     Completed
//                   </div>
//                 )}
//                 <img
//                   src={course.thumbnail_url}
//                   alt={course.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h2 className="text-xl font-semibold text-purple-700">
//                     {course.title}
//                   </h2>
//                   <ProgressBar percentage={course.progress || 0} />
//                   <div className="text-xs text-gray-400 mb-2">
//                     Progress: {Math.round(course.progress || 0)}% (
//                     {course.completed_classes || 0}/{course.total_classes || 0} classes)
//                   </div>
//                   <details className="text-sm mb-4">
//                     <summary className="cursor-pointer text-purple-600 hover:text-purple-700">
//                       Show Classes
//                     </summary>
//                     <div className="mt-2 space-y-2">
//                       {course.classes.map((cls, index) => (
//                         <div key={cls.id} className="flex items-center gap-2">
//                           {(cls.is_completed || cls.watched_percentage >= 80) && (
//                             <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                             </svg>
//                           )}
//                           <span className="text-gray-700">{index + 1}. {cls.title}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </details>
//                   <p className="text-gray-600 text-sm mt-2 mb-4">
//                     {course.description?.slice(0, 100)}...
//                   </p>
//                   <p className="text-sm text-gray-500 mb-2">
//                     Duration: {course.duration}
//                   </p>
//                   <div className="flex items-center mb-4">
//                     {course.teachers?.map((teacher, i) => (
//                       <div key={i} className="flex items-center mr-4">
//                         <img
//                           src={teacher.profile_photo_url}
//                           alt={teacher.full_name}
//                           className="w-8 h-8 rounded-full object-cover mr-1"
//                         />
//                         <span className="text-sm text-gray-700">
//                           {teacher.full_name}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                   {course.current_class?.slug ? (
//                     <Link
//                       to={`/dashboard/class-details/${course.current_class.slug}`}
//                       state={{
//                         courseId: course.id,
//                         courseTitle: course.title,
//                         courseSlug: course.slug,
//                       }}
//                       className="inline-block bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold text-sm hover:bg-purple-800 transition"
//                     >
//                       {course.progress >= 100 ? "Review Course" : "Continue Learning"}
//                     </Link>
//                   ) : (
//                     <div>
//                       <button
//                         disabled
//                         className="inline-block bg-gray-400 text-white py-2 px-4 rounded-lg font-semibold text-sm cursor-not-allowed"
//                       >
//                         No Classes Available
//                       </button>
//                       <p className="text-sm text-gray-500 mt-2">
//                         Contact support if you believe this is an error.
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyCourses;

import { useEffect, useState } from "react";
import {
  getMyCourses,
  getCourseDetail,
  getClassDetail,
} from "../../services/courseService";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import ProgressBar from "../../components/courses/ProgressBar";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchCourses = async (showRefreshing = false) => {
    if (showRefreshing) setRefreshing(true);

    try {
      // Clean up old progress data (older than 30 days)
      const storedProgress =
        JSON.parse(localStorage.getItem("course_progress")) || {};
      const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
      Object.keys(storedProgress).forEach((courseSlug) => {
        Object.keys(storedProgress[courseSlug]).forEach((classSlug) => {
          if (storedProgress[courseSlug][classSlug].timestamp < thirtyDaysAgo) {
            delete storedProgress[courseSlug][classSlug];
          }
        });
        if (Object.keys(storedProgress[courseSlug]).length === 0) {
          delete storedProgress[courseSlug];
        }
      });
      localStorage.setItem("course_progress", JSON.stringify(storedProgress));
      console.log(
        "Stored Progress after cleanup:",
        JSON.stringify(storedProgress, null, 2)
      );

      const res = await getMyCourses();
      console.log(
        "My Courses API Response:",
        JSON.stringify(res.data, null, 2)
      );

      const coursesData = res.data?.data || [];
      const enrichedCourses = await Promise.all(
        coursesData.map(async (course) => {
          try {
            const courseRes = await getCourseDetail(course.slug);
            console.log(
              `Course Detail for ${course.slug}:`,
              JSON.stringify(courseRes.data, null, 2)
            );
            if (courseRes.data?.status === true) {
              const classes = courseRes.data.data.classes || [];

              const detailedClasses = await Promise.all(
                classes.map(async (cls) => {
                  try {
                    const classRes = await getClassDetail(cls.slug);
                    console.log(
                      `Class Detail for ${cls.slug}:`,
                      JSON.stringify(classRes.data, null, 2)
                    );
                    if (classRes.data?.status === true) {
                      // Merge API data with stored progress
                      const storedClassProgress =
                        storedProgress[course.slug]?.[cls.slug] || {};
                      return {
                        ...cls,
                        is_completed:
                          storedClassProgress.is_completed ||
                          classRes.data.data.current_class.is_attended ||
                          false,
                        watched_percentage:
                          storedClassProgress.watched_percentage ||
                          classRes.data.data.current_class.watched_percentage ||
                          0,
                      };
                    }
                    return {
                      ...cls,
                      is_completed: false,
                      watched_percentage: 0,
                    };
                  } catch (err) {
                    console.error(
                      `Failed to load class details for ${cls.slug}:`,
                      err
                    );
                    return {
                      ...cls,
                      is_completed: false,
                      watched_percentage: 0,
                    };
                  }
                })
              );

              // Fixed completion criteria - using 95% and is_completed flag
              const completedClasses = detailedClasses.filter(
                (cls) => cls.is_completed || cls.watched_percentage >= 95
              ).length;
              const totalClasses = detailedClasses.length;
              const progress =
                totalClasses > 0 ? (completedClasses / totalClasses) * 100 : 0;

              console.log(
                `Progress for ${course.title}: ${completedClasses}/${totalClasses} = ${progress}%`,
                {
                  detailedClasses: JSON.stringify(detailedClasses, null, 2),
                }
              );

              // Fixed current class logic - find first incomplete class
              const currentClass =
                detailedClasses.find(
                  (cls) => !cls.is_completed && cls.watched_percentage < 95
                ) || detailedClasses[0];

              return {
                ...course,
                classes: detailedClasses,
                current_class: currentClass,
                progress: Math.round(progress),
                completed_classes: completedClasses,
                total_classes: totalClasses,
              };
            }
            return {
              ...course,
              progress: 0,
              classes: [],
              completed_classes: 0,
              total_classes: 0,
            };
          } catch (err) {
            console.error(`Failed to load classes for ${course.slug}:`, err);
            return {
              ...course,
              progress: 0,
              classes: [],
              completed_classes: 0,
              total_classes: 0,
            };
          }
        })
      );

      console.log(
        "Enriched Courses Data:",
        JSON.stringify(enrichedCourses, null, 2)
      );
      setCourses(enrichedCourses);
    } catch (err) {
      console.error("Failed to load courses:", err);
      toast.error("Failed to load your courses.");
    } finally {
      setLoading(false);
      if (showRefreshing) setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    const handleFocus = () => {
      console.log("Window focused, refreshing courses...");
      fetchCourses(true);
    };

    const updateCoursesState = (progressData) => {
      console.log(
        "Updating courses state with:",
        JSON.stringify(progressData, null, 2)
      );
      setCourses((prevCourses) => {
        const updatedCourses = prevCourses.map((course) => {
          if (course.slug === progressData.courseSlug) {
            const updatedClasses =
              course.classes?.map((cls) => {
                if (cls.id === progressData.classId) {
                  console.log("Updating class:", cls.id, {
                    is_completed:
                      progressData.is_completed ||
                      progressData.percentage >= 95,
                    watched_percentage: progressData.percentage || 0,
                  });
                  return {
                    ...cls,
                    is_completed:
                      progressData.is_completed ||
                      progressData.percentage >= 95,
                    watched_percentage: progressData.percentage || 0,
                  };
                }
                return cls;
              }) || [];

            // Fixed completion criteria - using 95% and is_completed flag
            const completedClasses = updatedClasses.filter(
              (cls) => cls.is_completed || cls.watched_percentage >= 95
            ).length;
            const totalClasses = updatedClasses.length;
            const progress =
              totalClasses > 0 ? (completedClasses / totalClasses) * 100 : 0;

            console.log(
              `Updated progress for ${course.title}: ${completedClasses}/${totalClasses} = ${progress}%`
            );

            // Fixed current class logic - find first incomplete class
            const currentClass =
              updatedClasses.find(
                (cls) => !cls.is_completed && cls.watched_percentage < 95
              ) || updatedClasses[0];

            // Update localStorage with the latest class data
            const storedProgress =
              JSON.parse(localStorage.getItem("course_progress")) || {};
            const courseProgress = storedProgress[course.slug] || {};
            courseProgress[progressData.classSlug] = {
              classId: progressData.classId,
              is_completed:
                progressData.is_completed || progressData.percentage >= 95,
              watched_percentage: progressData.percentage || 0,
              timestamp: progressData.timestamp,
            };
            storedProgress[course.slug] = courseProgress;
            localStorage.setItem(
              "course_progress",
              JSON.stringify(storedProgress)
            );
            console.log(
              "Stored Progress:",
              JSON.stringify(storedProgress, null, 2)
            );

            return {
              ...course,
              classes: updatedClasses,
              current_class: currentClass,
              progress: Math.round(progress),
              completed_classes: completedClasses,
              total_classes: totalClasses,
            };
          }
          return course;
        });

        console.log(
          "Updated Courses:",
          JSON.stringify(updatedCourses, null, 2)
        );
        return updatedCourses;
      });
    };

    const handleStorageChange = (e) => {
      if (e.key !== "course_progress_updated") return;

      console.log(
        "Storage changed, processing course_progress_updated:",
        e.newValue
      );
      try {
        const progressData = JSON.parse(e.newValue);
        updateCoursesState(progressData);
      } catch (error) {
        console.error("Error parsing storage data:", error);
        fetchCourses(true);
      }
    };

    const handleCustomEvent = (e) => {
      console.log(
        "Custom event courseProgressUpdated:",
        JSON.stringify(e.detail, null, 2)
      );
      updateCoursesState(e.detail);
    };

    window.addEventListener("focus", handleFocus);
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("courseProgressUpdated", handleCustomEvent);

    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("courseProgressUpdated", handleCustomEvent);
    };
  }, []);

  const refreshCourses = () => {
    console.log("Manual refresh triggered");
    fetchCourses(true);
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <div className="flex items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700"></div>
          <p className="text-lg font-semibold text-gray-700">
            Loading your courses...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          My Enrolled Courses
        </h1>
        <button
          onClick={refreshCourses}
          disabled={refreshing}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
            refreshing
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-purple-600 text-white hover:bg-purple-700"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          {refreshing ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {courses.length === 0 ? (
        <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-lg py-12">
          <div className="text-center">
            <div className="mb-6">
              <svg
                className="mx-auto h-24 w-24 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              No Courses Enrolled Yet
            </h2>
            <p className="text-gray-600 max-w-md mx-auto mb-8">
              Start your learning journey today! Explore our wide range of
              courses and find the perfect one for you.
            </p>
            <Link
              to="/all-courses"
              className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Buy Courses
              <svg
                className="inline-block w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => {
            console.log(`Course ${idx}:`, JSON.stringify(course, null, 2));
            console.log(`Progress: ${course.progress}%`);
            console.log(
              `Completed Classes: ${course.completed_classes}/${course.total_classes}`
            );

            return (
              <div
                key={course.id || idx}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-200 overflow-hidden relative"
              >
                {course.progress >= 100 && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Completed
                  </div>
                )}
                <img
                  src={course.thumbnail_url}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-purple-700">
                    {course.title}
                  </h2>
                  <ProgressBar percentage={course.progress || 0} />
                  <div className="text-xs text-gray-400 mb-2">
                    Progress: {Math.round(course.progress || 0)}% (
                    {course.completed_classes || 0}/{course.total_classes || 0}{" "}
                    classes)
                  </div>
                  <details className="text-sm mb-4">
                    <summary className="cursor-pointer text-purple-600 hover:text-purple-700">
                      Show Classes
                    </summary>
                    <div className="mt-2 space-y-2">
                      {course.classes.map((cls, index) => (
                        <div key={cls.id} className="flex items-center gap-2">
                          {(cls.is_completed ||
                            cls.watched_percentage >= 95) && (
                            <svg
                              className="w-4 h-4 text-green-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                          <span className="text-gray-700">
                            {index + 1}. {cls.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </details>
                  <p className="text-gray-600 text-sm mt-2 mb-4">
                    {course.description?.slice(0, 100)}...
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    Duration: {course.duration}
                  </p>
                  <div className="flex items-center mb-4">
                    {course.teachers?.map((teacher, i) => (
                      <div key={i} className="flex items-center mr-4">
                        <img
                          src={teacher.profile_photo_url}
                          alt={teacher.full_name}
                          className="w-8 h-8 rounded-full object-cover mr-1"
                        />
                        <span className="text-sm text-gray-700">
                          {teacher.full_name}
                        </span>
                      </div>
                    ))}
                  </div>
                  {course.current_class?.slug ? (
                    <Link
                      to={`/dashboard/class-details/${course.current_class.slug}`}
                      state={{
                        courseId: course.id,
                        courseTitle: course.title,
                        courseSlug: course.slug,
                      }}
                      className="inline-block bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold text-sm hover:bg-purple-800 transition"
                    >
                      {course.progress >= 100
                        ? "Review Course"
                        : "Continue Learning"}
                    </Link>
                  ) : (
                    <div>
                      <button
                        disabled
                        className="inline-block bg-gray-400 text-white py-2 px-4 rounded-lg font-semibold text-sm cursor-not-allowed"
                      >
                        No Classes Available
                      </button>
                      <p className="text-sm text-gray-500 mt-2">
                        Contact support if you believe this is an error.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyCourses;
