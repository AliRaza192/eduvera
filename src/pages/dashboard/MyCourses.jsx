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

import { useEffect, useState } from "react";
import { getMyCourses, getCourseDetail } from "../../services/courseService";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await getMyCourses();
        console.log("My Courses API Response:", res.data);

        const coursesData = res.data?.data || [];
        // Fetch classes for each course to get the first class
        const enrichedCourses = await Promise.all(
          coursesData.map(async (course) => {
            try {
              const courseRes = await getCourseDetail(course.slug);
              if (courseRes.data?.status === true) {
                const classes = courseRes.data.data.classes || [];
                return {
                  ...course,
                  classes,
                  current_class: classes.length > 0 ? classes[0] : null, // First class as current_class
                };
              }
              return course;
            } catch (err) {
              console.error(`Failed to load classes for ${course.slug}:`, err);
              return course;
            }
          })
        );

        console.log("Enriched Courses Data:", enrichedCourses);
        setCourses(enrichedCourses);
      } catch (err) {
        console.error("Failed to load courses:", err);
        toast.error("Failed to load your courses.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <p className="text-lg font-semibold">Loading your courses...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">My Enrolled Courses</h1>

      {courses.length === 0 ? (
        <p className="text-gray-600">
          You haven't enrolled in any courses yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => {
            console.log(`Course ${idx}:`, course);
            console.log(`First Class:`, course.current_class);

            return (
              <div
                key={course.id || idx}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-200 overflow-hidden"
              >
                <img
                  src={course.thumbnail_url}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-purple-700">
                    {course.title}
                  </h2>
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
                      Continue Learning
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