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
  const [previousClass, setPreviousClass] = useState(null);
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

          // Fetch course details for all classes
          const courseRes = await getCourseDetail(location.state.courseSlug);
          if (courseRes.data?.status === true) {
            const classes = courseRes.data.data.classes || [];
            setAllClasses(classes);
            setCourse(courseRes.data.data);

            // Find current class index and set previous/next
            const currentIndex = classes.findIndex(cls => cls.slug === classSlug);
            if (currentIndex > 0) {
              setPreviousClass(classes[currentIndex - 1]);
            }
            if (currentIndex < classes.length - 1) {
              setNextClass(classes[currentIndex + 1]);
            }
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

  const handlePreviousClass = () => {
    if (previousClass) {
      navigate(`/dashboard/class-details/${previousClass.slug}`, {
        state: {
          courseId: location.state?.courseId,
          courseTitle: location.state?.courseTitle,
          courseSlug: location.state?.courseSlug,
        },
      });
    }
  };

  // Function to safely render HTML content
  const renderHtmlContent = (htmlContent) => {
    if (!htmlContent) return "";
    
    // Clean and sanitize the HTML content
    const cleanHtml = htmlContent
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ''); // Remove style tags
    
    return { __html: cleanHtml };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-200 border-t-purple-700 mx-auto"></div>
          <p className="text-lg text-gray-700 mt-4 font-medium">Loading class...</p>
        </div>
      </div>
    );
  }

  if (!currentClass) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Class Not Found</h2>
          <p className="text-gray-600 mb-6">The class you're looking for doesn't exist or may have been removed.</p>
          <button
            onClick={() => navigate("/dashboard/my-courses")}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Back to My Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                {course?.title || location.state?.courseTitle}
              </h1>
              <p className="text-purple-600 font-medium mt-1">{currentClass.title}</p>
            </div>
            <button
              onClick={() => navigate("/dashboard/my-courses")}
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Courses
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden flex flex-col">
              {/* Video Player */}
              <div className="relative bg-black">
                {currentClass.class_video ? (
                  <video
                    controls
                    className="w-full aspect-video object-cover"
                    src={currentClass.class_video}
                    onTimeUpdate={handleVideoProgress}
                    poster={course?.thumbnail || currentClass.thumbnail}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="w-full aspect-video bg-gray-900 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-400">No video available for this class</p>
                    </div>
                  </div>
                )}
                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700">
                  <div
                    className="h-full bg-purple-600 transition-all duration-300"
                    style={{ width: `${watchedPercentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Content - Flex grow to take available space */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                    {currentClass.title}
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {currentClass.watch_time || "N/A"}
                  </div>
                </div>

                {/* Description - Flex grow to take available space */}
                <div className="flex-1">
                  <div 
                    className="text-gray-700 leading-relaxed mb-6"
                    dangerouslySetInnerHTML={renderHtmlContent(currentClass.description)}
                  />

                  {/* Class Materials */}
                  {currentClass.contents && currentClass.contents.length > 0 && (
                    <div className="border-t pt-6 mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Class Materials
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {currentClass.contents.map((content, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border hover:bg-gray-100 transition-colors"
                          >
                            <div className="text-2xl">
                              {content.type === "pdf" && "📄"}
                              {content.type === "video" && "🎥"}
                              {content.type === "document" && "📋"}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-gray-800 truncate">
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
                                className="bg-purple-600 text-white px-3 py-1 rounded text-sm hover:bg-purple-700 transition-colors"
                              >
                                View
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Navigation Buttons - Always at bottom */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t mt-auto">
                  <button
                    onClick={handlePreviousClass}
                    disabled={!previousClass}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      previousClass
                        ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        : "bg-gray-50 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    {previousClass ? `Previous: ${previousClass.title}` : "No Previous Class"}
                  </button>
                  
                  <button
                    onClick={handleNextClass}
                    disabled={!nextClass}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      nextClass
                        ? "bg-purple-600 text-white hover:bg-purple-700"
                        : "bg-gray-50 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {nextClass ? `Next: ${nextClass.title}` : "No Next Class"}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-4 sticky top-4">
              <h3 className="font-semibold text-gray-800 mb-4">Course Content</h3>
              
              {allClasses.length > 0 ? (
                <div className="space-y-2" style={{ maxHeight: `${Math.min(allClasses.length * 70, 600)}px`, overflowY: 'auto' }}>
                  {allClasses.map((classItem, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border cursor-pointer transition-all ${
                        classItem.slug === classSlug
                          ? "bg-purple-50 border-purple-200"
                          : "hover:bg-gray-50 border-gray-200"
                      }`}
                      onClick={() => handleClassClick(classItem)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                          classItem.slug === classSlug
                            ? "bg-purple-600 text-white"
                            : "bg-gray-200 text-gray-600"
                        }`}>
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-800 text-sm truncate">
                            {classItem.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {classItem.watch_time || "N/A"}
                          </p>
                        </div>
                        {classItem.slug === classSlug && (
                          <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-gray-500 text-sm">No classes available</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;