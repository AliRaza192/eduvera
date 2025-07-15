// import { useEffect, useState } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import { getClassDetail, getCourseDetail, trackAttendance } from "../../services/courseService";
// import toast from "react-hot-toast";

// const ClassDetails = () => {
//   const { classSlug } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [classData, setClassData] = useState(null);
//   const [allClasses, setAllClasses] = useState([]);
//   const [currentClass, setCurrentClass] = useState(null);
//   const [nextClass, setNextClass] = useState(null);
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [watchedPercentage, setWatchedPercentage] = useState(0);

//   useEffect(() => {
//     const fetchClassDetail = async () => {
//       try {
//         const res = await getClassDetail(classSlug);

//         if (res.data?.status === true) {
//           const data = res.data.data;
//           setClassData(data);
//           setCurrentClass(data.current_class);
//           setNextClass(data.next_class);
//           setCourse(data.course);

//           // Get course details to fetch all classes
//           if (location.state?.courseSlug) {
//             const courseRes = await getCourseDetail(location.state.courseSlug);
//             if (courseRes.data?.status === true) {
//               setAllClasses(courseRes.data.data.classes || []);
//             }
//           }
//         } else {
//           toast.error("Class not found");
//         }
//       } catch (err) {
//         console.error("Error fetching class:", err);
//         toast.error("Failed to load class details");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClassDetail();
//   }, [classSlug, location.state]);

//   // Track video progress
//   const handleVideoProgress = async (e) => {
//     const video = e.target;
//     const percentage = (video.currentTime / video.duration) * 100;
//     setWatchedPercentage(percentage);

//     // Track attendance when video reaches certain milestones
//     if (percentage >= 25 && percentage % 25 === 0) {
//       try {
//         await trackAttendance({
//           course_class_id: currentClass.id,
//           watched_percentage: Math.floor(percentage)
//         });
//       } catch (error) {
//         console.error("Failed to track attendance:", error);
//       }
//     }
//   };

//   // Navigate to different class
//   const handleClassClick = (classItem) => {
//     navigate(`/dashboard/class-details/${classItem.slug}`, {
//       state: {
//         courseId: location.state?.courseId,
//         courseTitle: location.state?.courseTitle,
//         courseSlug: location.state?.courseSlug
//       }
//     });
//   };

//   // Navigate to next class
//   const handleNextClass = () => {
//     if (nextClass) {
//       navigate(`/dashboard/class-details/${nextClass.slug}`, {
//         state: {
//           courseId: location.state?.courseId,
//           courseTitle: location.state?.courseTitle,
//           courseSlug: location.state?.courseSlug
//         }
//       });
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700"></div>
//         <p className="text-lg text-gray-600 ml-4">Loading class...</p>
//       </div>
//     );
//   }

//   if (!currentClass) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-red-600 mb-4">Class Not Found</h2>
//           <p className="text-gray-600 mb-4">The class you're looking for doesn't exist.</p>
//           <button
//             onClick={() => navigate("/dashboard/my-courses")}
//             className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition-colors"
//           >
//             Back to My Courses
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Course Header */}
//       <div className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-800">{course?.title}</h1>
//               <p className="text-gray-600 mt-1">{currentClass.title}</p>
//             </div>
//             <button
//               onClick={() => navigate("/dashboard/my-courses")}
//               className="text-purple-700 hover:text-purple-800 font-medium"
//             >
//               ← Back to My Courses
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

//           {/* Main Video Section */}
//           <div className="lg:col-span-3">
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">

//               {/* Video Player */}
//               <div className="relative">
//                 {currentClass.class_video ? (
//                   <video
//                     controls
//                     className="w-full h-[400px] md:h-[500px] object-cover"
//                     src={currentClass.class_video}
//                     onTimeUpdate={handleVideoProgress}
//                     poster={course?.thumbnail}
//                   >
//                     Your browser does not support the video tag.
//                   </video>
//                 ) : (
//                   <div className="w-full h-[400px] md:h-[500px] bg-gray-200 flex items-center justify-center">
//                     <p className="text-gray-500">No video available for this class</p>
//                   </div>
//                 )}

//                 {/* Progress Bar */}
//                 <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300">
//                   <div
//                     className="h-full bg-purple-600 transition-all duration-300"
//                     style={{ width: `${watchedPercentage}%` }}
//                   ></div>
//                 </div>
//               </div>

//               {/* Class Info */}
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <h2 className="text-2xl font-bold text-gray-800">{currentClass.title}</h2>
//                   <span className="text-sm text-gray-500">
//                     Duration: {currentClass.watch_time || "N/A"}
//                   </span>
//                 </div>

//                 <p className="text-gray-600 mb-6">{currentClass.description}</p>

//                 {/* Class Contents */}
//                 {currentClass.contents && currentClass.contents.length > 0 && (
//                   <div className="border-t pt-4">
//                     <h3 className="text-lg font-semibold mb-3">Class Materials</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                       {currentClass.contents.map((content, index) => (
//                         <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
//                           <div className="text-purple-600 mr-3">
//                             {content.type === 'pdf' && '📄'}
//                             {content.type === 'video' && '🎥'}
//                             {content.type === 'document' && '📋'}
//                           </div>
//                           <div className="flex-1">
//                             <h4 className="font-medium text-gray-800">{content.title}</h4>
//                             <p className="text-sm text-gray-600 capitalize">{content.type}</p>
//                           </div>
//                           {content.url && (
//                             <a
//                               href={content.url}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="text-purple-600 hover:text-purple-800 text-sm font-medium"
//                             >
//                               View
//                             </a>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Next Class Button */}
//                 {nextClass && (
//                   <div className="mt-6 pt-4 border-t">
//                     <button
//                       onClick={handleNextClass}
//                       className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors font-medium"
//                     >
//                       Next: {nextClass.title} →
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Sidebar - Course Classes */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-lg shadow-lg p-4 sticky top-4">
//               <h3 className="text-lg font-bold mb-4">Course Content</h3>

//               {allClasses.length > 0 ? (
//                 <div className="space-y-2 max-h-[600px] overflow-y-auto">
//                   {allClasses.map((classItem, index) => (
//                     <div
//                       key={index}
//                       className={`p-3 rounded-lg border cursor-pointer transition-all ${
//                         classItem.slug === classSlug
//                           ? "bg-purple-100 border-purple-500"
//                           : "hover:bg-gray-50 border-gray-200"
//                       }`}
//                       onClick={() => handleClassClick(classItem)}
//                     >
//                       <div className="flex items-center justify-between">
//                         <div className="flex-1">
//                           <h4 className="font-medium text-gray-800 text-sm mb-1">
//                             {index + 1}. {classItem.title}
//                           </h4>
//                           <p className="text-xs text-gray-500">
//                             {classItem.watch_time || "N/A"}
//                           </p>
//                         </div>
//                         {classItem.slug === classSlug && (
//                           <div className="text-purple-600 text-sm">
//                             ▶️
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-gray-500 text-sm">No classes available</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClassDetails;
import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getClassDetail, getCourseDetail, trackAttendance } from "../../services/courseService";
import toast from "react-hot-toast";

const ClassDetails = () => {
  const { classSlug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [classData, setClassData] = useState(null);
  const [currentClass, setCurrentClass] = useState(null);
  const [nextClass, setNextClass] = useState(null);
  const [course, setCourse] = useState(null);
  const [allClasses, setAllClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [watchedPercentage, setWatchedPercentage] = useState(0);

  useEffect(() => {
    const fetchClassDetail = async () => {
      if (!classSlug || !location.state?.courseSlug) {
        toast.error("Invalid class or course information");
        navigate("/dashboard/my-courses");
        return;
      }

      try {
        const res = await getClassDetail(classSlug);
        if (res.data?.status === true) {
          const data = res.data.data;
          setClassData(data);
          setCurrentClass(data.current_class || data); // Fallback to data if current_class not provided
          setNextClass(data.next_class || null);
          setCourse(data.course || null);

          // Fetch course details for all classes
          const courseRes = await getCourseDetail(location.state.courseSlug);
          if (courseRes.data?.status === true) {
            setAllClasses(courseRes.data.data.classes || []);
          } else {
            toast.error("Failed to load course classes");
          }
        } else {
          toast.error("Class not found");
          navigate("/dashboard/my-courses");
        }
      } catch (err) {
        console.error("Error fetching class:", err);
        toast.error("Failed to load class details");
        navigate("/dashboard/my-courses");
      } finally {
        setLoading(false);
      }
    };

    fetchClassDetail();
  }, [classSlug, location.state, navigate]);

  const handleVideoProgress = async (e) => {
    const video = e.target;
    const percentage = (video.currentTime / video.duration) * 100;
    setWatchedPercentage(percentage);

    if (percentage >= 25 && percentage % 25 === 0) {
      try {
        await trackAttendance({
          course_class_id: currentClass?.id,
          watched_percentage: Math.floor(percentage),
        });
      } catch (error) {
        console.error("Failed to track attendance:", error);
      }
    }
  };

  const handleClassClick = (classItem) => {
    navigate(`/dashboard/class-details/${classItem.slug}`, {
      state: {
        courseId: location.state?.courseId,
        courseTitle: location.state?.courseTitle,
        courseSlug: location.state?.courseSlug,
      },
    });
  };

  const handleNextClass = () => {
    if (nextClass) {
      navigate(`/dashboard/class-details/${nextClass.slug}`, {
        state: {
          courseId: location.state?.courseId,
          courseTitle: location.state?.courseTitle,
          courseSlug: location.state?.courseSlug,
        },
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700"></div>
        <p className="text-lg text-gray-600 ml-4">Loading class...</p>
      </div>
    );
  }

  if (!currentClass) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Class Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            The class you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/dashboard/my-courses")}
            className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition-colors"
          >
            Back to My Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {course?.title || location.state?.courseTitle}
              </h1>
              <p className="text-gray-600 mt-1">{currentClass.title}</p>
            </div>
            <button
              onClick={() => navigate("/dashboard/my-courses")}
              className="text-purple-700 hover:text-purple-800 font-medium"
            >
              ← Back to My Courses
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                {currentClass.class_video ? (
                  <video
                    controls
                    className="w-full h-[400px] md:h-[500px] object-cover"
                    src={currentClass.class_video}
                    onTimeUpdate={handleVideoProgress}
                    poster={course?.thumbnail || currentClass.thumbnail}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="w-full h-[400px] md:h-[500px] bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">
                      No video available for this class
                    </p>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300">
                  <div
                    className="h-full bg-purple-600 transition-all duration-300"
                    style={{ width: `${watchedPercentage}%` }}
                  ></div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {currentClass.title}
                  </h2>
                  <span className="text-sm text-gray-500">
                    Duration: {currentClass.watch_time || "N/A"}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{currentClass.description}</p>
                {currentClass.contents && currentClass.contents.length > 0 && (
                  <div className="border-t pt-4">
                    <h3 className="text-lg font-semibold mb-3">
                      Class Materials
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {currentClass.contents.map((content, index) => (
                        <div
                          key={index}
                          className="flex items-center p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="text-purple-600 mr-3">
                            {content.type === "pdf" && "📄"}
                            {content.type === "video" && "🎥"}
                            {content.type === "document" && "📋"}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-800">
                              {content.title}
                            </h4>
                            <p className="text-sm text-gray-600 capitalize">
                              {content.type}
                            </p>
                          </div>
                          {content.url && (
                            <a
                              href={content.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-600 hover:text-purple-800 text-sm font-medium"
                            >
                              View
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {nextClass && (
                  <div className="mt-6 pt-4 border-t">
                    <button
                      onClick={handleNextClass}
                      className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors font-medium"
                    >
                      Next: {nextClass.title} →
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-4 sticky top-4">
              <h3 className="text-lg font-bold mb-4">Course Content</h3>
              {allClasses.length > 0 ? (
                <div className="space-y-2 max-h-[600px] overflow-y-auto">
                  {allClasses.map((classItem, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border cursor-pointer transition-all ${
                        classItem.slug === classSlug
                          ? "bg-purple-100 border-purple-500"
                          : "hover:bg-gray-50 border-gray-200"
                      }`}
                      onClick={() => handleClassClick(classItem)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800 text-sm mb-1">
                            {index + 1}. {classItem.title}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {classItem.watch_time || "N/A"}
                          </p>
                        </div>
                        {classItem.slug === classSlug && (
                          <div className="text-purple-600 text-sm">▶️</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No classes available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;