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
// import { useEffect, useState, useRef } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import { getClassDetail, getCourseDetail, trackAttendance } from "../../services/courseService";
// import toast from "react-hot-toast";

// const ClassDetails = () => {
//   const { classSlug } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const videoRef = useRef(null);
//   const attendanceTrackedRef = useRef(false);
//   const [classData, setClassData] = useState(null);
//   const [currentClass, setCurrentClass] = useState(null);
//   const [nextClass, setNextClass] = useState(null);
//   const [previousClass, setPreviousClass] = useState(null);
//   const [course, setCourse] = useState(null);
//   const [allClasses, setAllClasses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [watchedPercentage, setWatchedPercentage] = useState(0);
//   const [isCompleted, setIsCompleted] = useState(false);
//   const [hasMarkedAttendance, setHasMarkedAttendance] = useState(false);

//   useEffect(() => {
//     const fetchClassDetail = async () => {
//       if (!classSlug || !location.state?.courseSlug) {
//         toast.error("Invalid class or course information");
//         navigate("/dashboard/my-courses");
//         return;
//       }

//       try {
//         const res = await getClassDetail(classSlug);
//         console.log("Class Detail Response:", JSON.stringify(res.data, null, 2));
//         if (res.data?.status === true) {
//           const data = res.data.data;
//           setClassData(data);

//           // Get stored progress from localStorage
//           const storedProgress = JSON.parse(localStorage.getItem('course_progress')) || {};
//           const courseProgress = storedProgress[location.state.courseSlug] || {};
//           const classProgress = courseProgress[classSlug] || {};

//           // Get current class data, prioritizing localStorage
//           const currentClassData = {
//             ...data.current_class,
//             is_completed: classProgress.is_completed || data.current_class.is_attended || false,
//             watched_percentage: classProgress.watched_percentage || data.current_class.watched_percentage || 0,
//           };

//           setCurrentClass(currentClassData);
//           setNextClass(data.next_class || null);

//           const isAlreadyCompleted = currentClassData.is_completed || currentClassData.watched_percentage >= 80;
//           setIsCompleted(isAlreadyCompleted);
//           setHasMarkedAttendance(isAlreadyCompleted);
//           attendanceTrackedRef.current = isAlreadyCompleted;

//           if (currentClassData.watched_percentage) {
//             setWatchedPercentage(currentClassData.watched_percentage);
//           }

//           // Fetch course details and enrich classes
//           const courseRes = await getCourseDetail(location.state.courseSlug);
//           console.log("Course Detail Response:", JSON.stringify(courseRes.data, null, 2));
//           if (courseRes.data?.status === true) {
//             const classes = courseRes.data.data.classes || [];
//             const detailedClasses = await Promise.all(
//               classes.map(async (cls) => {
//                 try {
//                   const classRes = await getClassDetail(cls.slug);
//                   if (classRes.data?.status === true) {
//                     const storedClassProgress = storedProgress[location.state.courseSlug]?.[cls.slug] || {};
//                     return {
//                       ...cls,
//                       is_completed: storedClassProgress.is_completed || classRes.data.data.current_class.is_attended || false,
//                       watched_percentage: storedClassProgress.watched_percentage || classRes.data.data.current_class.watched_percentage || 0,
//                     };
//                   }
//                   return { ...cls, is_completed: false, watched_percentage: 0 };
//                 } catch (err) {
//                   console.error(`Failed to load class details for ${cls.slug}:`, err);
//                   return { ...cls, is_completed: false, watched_percentage: 0 };
//                 }
//               })
//             );
//             setAllClasses(detailedClasses);
//             setCourse(courseRes.data.data);

//             const currentIndex = detailedClasses.findIndex(cls => cls.slug === classSlug);
//             if (currentIndex > 0) {
//               setPreviousClass(detailedClasses[currentIndex - 1]);
//             }
//             if (currentIndex < detailedClasses.length - 1) {
//               setNextClass(detailedClasses[currentIndex + 1]);
//             }
//           } else {
//             toast.error("Failed to load course classes");
//           }
//         } else {
//           toast.error("Class not found");
//           navigate("/dashboard/my-courses");
//         }
//       } catch (err) {
//         console.error("Error fetching class:", err);
//         toast.error("Failed to load class details");
//         navigate("/dashboard/my-courses");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClassDetail();
//     attendanceTrackedRef.current = false;
//   }, [classSlug, location.state, navigate]);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleLoadedMetadata = () => {
//       console.log("Video metadata loaded, duration:", video.duration);
//       if (currentClass?.watched_percentage && currentClass.watched_percentage > 0) {
//         const savedTime = (currentClass.watched_percentage / 100) * video.duration;
//         video.currentTime = savedTime;
//       }
//     };

//     const handleVideoProgress = async () => {
//       if (!video.duration || isNaN(video.duration)) return;

//       const percentage = (video.currentTime / video.duration) * 100;
//       setWatchedPercentage(percentage);

//       if (percentage % 5 < 0.5) {
//         console.log(`Video Progress: ${percentage.toFixed(2)}%`);
//       }

//       if (percentage >= 80 && !attendanceTrackedRef.current && !isCompleted) {
//         attendanceTrackedRef.current = true;

//         try {
//           console.log("Marking attendance for class:", currentClass?.id, { percentage });
//           const response = await trackAttendance({
//             course_class_id: currentClass?.id,
//             watched_percentage: Math.floor(percentage),
//           });
//           console.log("Track Attendance Response:", JSON.stringify(response, null, 2));

//           const isAttended = response.data?.is_attended ?? (percentage >= 80);

//           // Update local state immediately
//           setIsCompleted(isAttended);
//           setHasMarkedAttendance(isAttended);

//           // Update current class state
//           const updatedCurrentClass = {
//             ...currentClass,
//             is_completed: isAttended,
//             watched_percentage: Math.floor(percentage),
//           };
//           setCurrentClass(updatedCurrentClass);

//           // Update allClasses state for sidebar
//           setAllClasses(prev => prev.map(cls =>
//             cls.id === currentClass?.id
//               ? { ...cls, is_completed: isAttended, watched_percentage: Math.floor(percentage) }
//               : cls
//           ));

//           // Store completion data in localStorage
//           const progressData = {
//             courseSlug: location.state.courseSlug,
//             classId: currentClass?.id,
//             classSlug: classSlug,
//             percentage: Math.floor(percentage),
//             is_completed: isAttended,
//             timestamp: Date.now(),
//           };

//           console.log("Dispatching course_progress_updated:", JSON.stringify(progressData, null, 2));

//           // Update course_progress in localStorage
//           const storedProgress = JSON.parse(localStorage.getItem('course_progress')) || {};
//           const courseProgress = storedProgress[location.state.courseSlug] || {};
//           courseProgress[classSlug] = {
//             classId: currentClass?.id,
//             is_completed: isAttended,
//             watched_percentage: Math.floor(percentage),
//             timestamp: Date.now(),
//           };
//           storedProgress[location.state.courseSlug] = courseProgress;
//           localStorage.setItem('course_progress', JSON.stringify(storedProgress));
//           console.log("Stored Progress:", JSON.stringify(storedProgress, null, 2));

//           // Trigger localStorage event for MyCourses component
//           localStorage.setItem('course_progress_updated', JSON.stringify(progressData));

//           // Dispatch custom event for immediate update
//           window.dispatchEvent(new CustomEvent('courseProgressUpdated', {
//             detail: progressData
//           }));

//           // Also dispatch storage event for cross-tab sync
//           window.dispatchEvent(new StorageEvent('storage', {
//             key: 'course_progress_updated',
//             newValue: JSON.stringify(progressData),
//           }));

//           toast.success("🎉 Attendance marked! Class completed successfully!");
//         } catch (error) {
//           console.error("Failed to track attendance:", error);
//           attendanceTrackedRef.current = false;
//           toast.error("Failed to mark attendance");
//         }
//       }
//     };

//     video.addEventListener("loadedmetadata", handleLoadedMetadata);
//     video.addEventListener("timeupdate", handleVideoProgress);

//     return () => {
//       video.removeEventListener("loadedmetadata", handleLoadedMetadata);
//       video.removeEventListener("timeupdate", handleVideoProgress);
//     };
//   }, [currentClass?.id, classSlug, isCompleted, location.state.courseSlug]);

//   const handleClassClick = (classItem) => {
//     attendanceTrackedRef.current = false;
//     navigate(`/dashboard/class-details/${classItem.slug}`, {
//       state: {
//         courseId: location.state?.courseId,
//         courseTitle: location.state?.courseTitle,
//         courseSlug: location.state?.courseSlug,
//       },
//     });
//   };

//   const handleNextClass = () => {
//     if (nextClass) {
//       attendanceTrackedRef.current = false;
//       navigate(`/dashboard/class-details/${nextClass.slug}`, {
//         state: {
//           courseId: location.state?.courseId,
//           courseTitle: location.state?.courseTitle,
//           courseSlug: location.state?.courseSlug,
//         },
//       });
//     }
//   };

//   const handlePreviousClass = () => {
//     if (previousClass) {
//       attendanceTrackedRef.current = false;
//       navigate(`/dashboard/class-details/${previousClass.slug}`, {
//         state: {
//           courseId: location.state?.courseId,
//           courseTitle: location.state?.courseTitle,
//           courseSlug: location.state?.courseSlug,
//         },
//       });
//     }
//   };

//   const renderHtmlContent = (htmlContent) => {
//     if (!htmlContent) return "";
//     const cleanHtml = htmlContent
//       .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
//       .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
//     return { __html: cleanHtml };
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-200 border-t-purple-700 mx-auto"></div>
//           <p className="text-lg text-gray-700 mt-4 font-medium">Loading class...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!currentClass) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//         <div className="text-center bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
//           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
//             </svg>
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Class Not Found</h2>
//           <p className="text-gray-600 mb-6">The class you're looking for doesn't exist or may have been removed.</p>
//           <button
//             onClick={() => navigate("/dashboard/my-courses")}
//             className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
//           >
//             Back to My Courses
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <div className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//             <div className="flex-1">
//               <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
//                 {course?.title || location.state?.courseTitle}
//               </h1>
//               <p className="text-purple-600 font-medium mt-1">{currentClass.title}</p>
//             </div>
//             <button
//               onClick={() => navigate("/dashboard/my-courses")}
//               className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors"
//             >
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//               </svg>
//               Back to Courses
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-lg shadow-sm border overflow-hidden flex flex-col">
//               <div className="relative bg-black">
//                 {currentClass.class_video ? (
//                   <video
//                     ref={videoRef}
//                     controls
//                     className="w-full aspect-video object-cover"
//                     src={currentClass.class_video}
//                     poster={course?.thumbnail || currentClass.thumbnail}
//                     preload="metadata"
//                   >
//                     Your browser does not support the video tag.
//                   </video>
//                 ) : (
//                   <div className="w-full aspect-video bg-gray-900 flex items-center justify-center">
//                     <div className="text-center">
//                       <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
//                       </svg>
//                       <p className="text-gray-400">No video available for this class</p>
//                     </div>
//                   </div>
//                 )}
//                 <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-700 bg-opacity-50">
//                   <div
//                     className="h-full bg-purple-600 transition-all duration-300"
//                     style={{ width: `${Math.min(watchedPercentage, 100)}%` }}
//                   ></div>
//                 </div>
//                 <div className="absolute top-4 left-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-sm font-medium">
//                   {Math.round(watchedPercentage)}% watched
//                 </div>
//                 {isCompleted && (
//                   <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     Completed
//                   </div>
//                 )}
//               </div>

//               <div className="p-6 flex-1 flex flex-col">
//                 <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
//                   <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
//                     {currentClass.title}
//                   </h2>
//                   <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-lg">
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                     {currentClass.watch_time || "N/A"}
//                   </div>
//                 </div>

//                 <div className="flex-1">
//                   <div
//                     className="text-gray-700 leading-relaxed mb-6 prose prose-gray max-w-none"
//                     dangerouslySetInnerHTML={renderHtmlContent(currentClass.description)}
//                   />

//                   {currentClass.contents && currentClass.contents.length > 0 && (
//                     <div className="border-t pt-6 mb-6">
//                       <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                         Class Materials
//                       </h3>
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                         {currentClass.contents.map((content, index) => (
//                           <div
//                             key={index}
//                             className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border hover:bg-gray-100 transition-colors"
//                           >
//                             <div className="text-2xl">
//                               {content.type === "pdf" && "📄"}
//                               {content.type === "video" && "🎥"}
//                               {content.type === "document" && "📋"}
//                               {content.type === "link" && "🔗"}
//                             </div>
//                             <div className="flex-1 min-w-0">
//                               <h4 className="font-medium text-gray-800 truncate">
//                                 {content.title}
//                               </h4>
//                               <p className="text-sm text-gray-600 capitalize">
//                                 {content.type}
//                               </p>
//                             </div>
//                             {content.url && (
//                               <a
//                                 href={content.url}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="bg-purple-600 text-white px-3 py-1 rounded text-sm hover:bg-purple-700 transition-colors"
//                               >
//                                 View
//                               </a>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t mt-auto">
//                   <button
//                     onClick={handlePreviousClass}
//                     disabled={!previousClass}
//                     className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
//                       previousClass
//                         ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                         : "bg-gray-50 text-gray-400 cursor-not-allowed"
//                     }`}
//                   >
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                     </svg>
//                     <span className="truncate">
//                       {previousClass ? `Previous: ${previousClass.title}` : "No Previous Class"}
//                     </span>
//                   </button>
//                   <button
//                     onClick={handleNextClass}
//                     disabled={!nextClass}
//                     className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
//                       nextClass
//                         ? "bg-purple-600 text-white hover:bg-purple-700"
//                         : "bg-gray-50 text-gray-400 cursor-not-allowed"
//                     }`}
//                   >
//                     <span className="truncate">
//                       {nextClass ? `Next: ${nextClass.title}` : "No Next Class"}
//                     </span>
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-lg shadow-sm border p-4 sticky top-4">
//               <h3 className="font-semibold text-gray-800 mb-4">Course Content</h3>
//               <div className="space-y-2 max-h-96 overflow-y-auto">
//                 {allClasses.map((classItem, index) => (
//                   <div
//                     key={classItem.id}
//                     onClick={() => handleClassClick(classItem)}
//                     className={`p-3 rounded-lg cursor-pointer transition-colors ${
//                       classItem.slug === classSlug
//                         ? "bg-purple-100 border-purple-300 border"
//                         : "bg-gray-50 hover:bg-gray-100"
//                     }`}
//                   >
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-3 flex-1 min-w-0">
//                         <div className="flex-shrink-0">
//                           {classItem.is_completed || classItem.watched_percentage >= 80 ? (
//                             <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                             </svg>
//                           ) : (
//                             <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
//                           )}
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h4 className="font-medium text-gray-800 text-sm truncate">
//                             {index + 1}. {classItem.title}
//                           </h4>
//                           <p className="text-xs text-gray-500 truncate">
//                             {classItem.watch_time || "N/A"}
//                           </p>
//                         </div>
//                       </div>
//                       {(classItem.is_completed || classItem.watched_percentage >= 80) && (
//                         <div className="text-xs text-green-600 font-medium">
//                           {classItem.watched_percentage || 100}%
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClassDetails;

import { useEffect, useState, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  getClassDetail,
  getCourseDetail,
  trackAttendance,
} from "../../services/courseService";
import toast from "react-hot-toast";

const ClassDetails = () => {
  const { classSlug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const attendanceTrackedRef = useRef(false);
  const [classData, setClassData] = useState(null);
  const [currentClass, setCurrentClass] = useState(null);
  const [nextClass, setNextClass] = useState(null);
  const [previousClass, setPreviousClass] = useState(null);
  const [course, setCourse] = useState(null);
  const [allClasses, setAllClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [watchedPercentage, setWatchedPercentage] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [hasMarkedAttendance, setHasMarkedAttendance] = useState(false);

  useEffect(() => {
    const fetchClassDetail = async () => {
      if (!classSlug || !location.state?.courseSlug) {
        toast.error("Invalid class or course information");
        navigate("/dashboard/my-courses");
        return;
      }

      try {
        console.log("🔍 FETCHING CLASS DETAIL FOR:", classSlug);
        const res = await getClassDetail(classSlug);
        console.log(
          "📊 Class Detail API Response:",
          JSON.stringify(res.data, null, 2)
        );

        if (res.data?.status === true) {
          const data = res.data.data;
          setClassData(data);

          // Get stored progress from localStorage
          const storedProgress =
            JSON.parse(localStorage.getItem("course_progress")) || {};
          console.log(
            "💾 FULL STORED PROGRESS:",
            JSON.stringify(storedProgress, null, 2)
          );

          const courseProgress =
            storedProgress[location.state.courseSlug] || {};
          console.log(
            "📚 COURSE PROGRESS:",
            JSON.stringify(courseProgress, null, 2)
          );

          const classProgress = courseProgress[classSlug] || {};
          console.log(
            "🎯 CURRENT CLASS PROGRESS:",
            JSON.stringify(classProgress, null, 2)
          );

          // Determine completion status more carefully
          const apiCompleted = data.current_class.is_attended || false;
          const apiWatchedPercentage =
            data.current_class.watched_percentage || 0;
          const storedCompleted = classProgress.is_completed || false;
          const storedWatchedPercentage = classProgress.watched_percentage || 0;

          console.log("🔄 COMPLETION STATUS COMPARISON:");
          console.log("API Completed:", apiCompleted);
          console.log("API Watched %:", apiWatchedPercentage);
          console.log("Stored Completed:", storedCompleted);
          console.log("Stored Watched %:", storedWatchedPercentage);

          // Use stored data if it's more recent or shows completion
          const finalCompleted =
            storedCompleted ||
            apiCompleted ||
            storedWatchedPercentage >= 95 ||
            apiWatchedPercentage >= 95;
          const finalWatchedPercentage = Math.max(
            storedWatchedPercentage,
            apiWatchedPercentage
          );

          console.log("✅ FINAL STATUS:");
          console.log("Final Completed:", finalCompleted);
          console.log("Final Watched %:", finalWatchedPercentage);

          const currentClassData = {
            ...data.current_class,
            is_completed: finalCompleted,
            watched_percentage: finalWatchedPercentage,
          };

          setCurrentClass(currentClassData);
          setNextClass(data.next_class || null);
          setIsCompleted(finalCompleted);
          setHasMarkedAttendance(finalCompleted);
          setWatchedPercentage(finalWatchedPercentage);

          // Reset attendance tracking ref for new class
          attendanceTrackedRef.current = finalCompleted;

          console.log(
            "🎬 CURRENT CLASS FINAL DATA:",
            JSON.stringify(currentClassData, null, 2)
          );
          console.log(
            "🔄 attendanceTrackedRef.current set to:",
            attendanceTrackedRef.current
          );

          // Fetch course details and enrich classes
          console.log(
            "📚 FETCHING COURSE DETAILS FOR:",
            location.state.courseSlug
          );
          const courseRes = await getCourseDetail(location.state.courseSlug);
          console.log(
            "📊 Course Detail API Response:",
            JSON.stringify(courseRes.data, null, 2)
          );

          if (courseRes.data?.status === true) {
            const classes = courseRes.data.data.classes || [];
            console.log(
              "📝 CLASSES FROM API:",
              JSON.stringify(classes, null, 2)
            );

            const detailedClasses = await Promise.all(
              classes.map(async (cls, index) => {
                try {
                  console.log(
                    `🔍 Fetching details for class ${index + 1}:`,
                    cls.slug
                  );
                  const classRes = await getClassDetail(cls.slug);

                  if (classRes.data?.status === true) {
                    const storedClassProgress =
                      storedProgress[location.state.courseSlug]?.[cls.slug] ||
                      {};
                    console.log(
                      `💾 Stored progress for ${cls.slug}:`,
                      JSON.stringify(storedClassProgress, null, 2)
                    );

                    const clsApiCompleted =
                      classRes.data.data.current_class.is_attended || false;
                    const clsApiWatchedPercentage =
                      classRes.data.data.current_class.watched_percentage || 0;
                    const clsStoredCompleted =
                      storedClassProgress.is_completed || false;
                    const clsStoredWatchedPercentage =
                      storedClassProgress.watched_percentage || 0;

                    console.log(`📊 ${cls.slug} Status:`);
                    console.log("  API Completed:", clsApiCompleted);
                    console.log("  API Watched %:", clsApiWatchedPercentage);
                    console.log("  Stored Completed:", clsStoredCompleted);
                    console.log(
                      "  Stored Watched %:",
                      clsStoredWatchedPercentage
                    );

                    const clsFinalCompleted =
                      clsStoredCompleted ||
                      clsApiCompleted ||
                      clsStoredWatchedPercentage >= 95 ||
                      clsApiWatchedPercentage >= 95;
                    const clsFinalWatchedPercentage = Math.max(
                      clsStoredWatchedPercentage,
                      clsApiWatchedPercentage
                    );

                    console.log(`✅ ${cls.slug} Final Status:`);
                    console.log("  Final Completed:", clsFinalCompleted);
                    console.log(
                      "  Final Watched %:",
                      clsFinalWatchedPercentage
                    );

                    return {
                      ...cls,
                      is_completed: clsFinalCompleted,
                      watched_percentage: clsFinalWatchedPercentage,
                    };
                  }
                  console.log(`❌ Failed to get details for ${cls.slug}`);
                  return { ...cls, is_completed: false, watched_percentage: 0 };
                } catch (err) {
                  console.error(
                    `❌ Failed to load class details for ${cls.slug}:`,
                    err
                  );
                  return { ...cls, is_completed: false, watched_percentage: 0 };
                }
              })
            );

            console.log(
              "🎬 ALL DETAILED CLASSES:",
              JSON.stringify(detailedClasses, null, 2)
            );
            setAllClasses(detailedClasses);
            setCourse(courseRes.data.data);

            const currentIndex = detailedClasses.findIndex(
              (cls) => cls.slug === classSlug
            );
            console.log("🎯 CURRENT CLASS INDEX:", currentIndex);

            if (currentIndex > 0) {
              setPreviousClass(detailedClasses[currentIndex - 1]);
              console.log(
                "⬅️ PREVIOUS CLASS SET:",
                detailedClasses[currentIndex - 1]
              );
            }
            if (currentIndex < detailedClasses.length - 1) {
              setNextClass(detailedClasses[currentIndex + 1]);
              console.log(
                "➡️ NEXT CLASS SET:",
                detailedClasses[currentIndex + 1]
              );
            }
          } else {
            console.log("❌ Failed to load course classes");
            toast.error("Failed to load course classes");
          }
        } else {
          console.log("❌ Class not found in API response");
          toast.error("Class not found");
          navigate("/dashboard/my-courses");
        }
      } catch (err) {
        console.error("❌ Error fetching class:", err);
        toast.error("Failed to load class details");
        navigate("/dashboard/my-courses");
      } finally {
        setLoading(false);
        console.log("✅ LOADING COMPLETE");
      }
    };

    fetchClassDetail();
  }, [classSlug, location.state, navigate]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      console.log("🎥 Video metadata loaded, duration:", video.duration);
      console.log("🎥 isCompleted:", isCompleted);
      console.log(
        "🎥 currentClass?.watched_percentage:",
        currentClass?.watched_percentage
      );

      // Only set video time if class is not completed and has valid progress
      if (
        !isCompleted &&
        currentClass?.watched_percentage &&
        currentClass.watched_percentage > 0 &&
        currentClass.watched_percentage < 95
      ) {
        const savedTime =
          (currentClass.watched_percentage / 100) * video.duration;
        if (savedTime > 0 && savedTime < video.duration) {
          video.currentTime = savedTime;
          console.log("🎥 Set video time to:", savedTime, "seconds");
        }
      } else {
        console.log(
          "🎥 Video time NOT set - either completed or no valid progress"
        );
      }
    };

    const handleVideoProgress = async () => {
      if (!video.duration || isNaN(video.duration)) return;

      const percentage = (video.currentTime / video.duration) * 100;
      setWatchedPercentage(percentage);

      // Log progress less frequently
      if (Math.floor(percentage) % 10 === 0 && percentage > 0) {
        console.log(`🎥 Video Progress: ${percentage.toFixed(2)}%`);
        console.log(
          `🎥 attendanceTrackedRef.current: ${attendanceTrackedRef.current}`
        );
        console.log(`🎥 isCompleted: ${isCompleted}`);
      }

      // Only track attendance if not already completed and threshold reached
      if (percentage >= 95 && !attendanceTrackedRef.current && !isCompleted) {
        attendanceTrackedRef.current = true;
        console.log("🎯 ATTEMPTING TO MARK ATTENDANCE...");
        console.log("🎯 Current class ID:", currentClass?.id);
        console.log("🎯 Watched percentage:", Math.floor(percentage));

        try {
          const response = await trackAttendance({
            course_class_id: currentClass?.id,
            watched_percentage: Math.floor(percentage),
          });
          console.log(
            "📊 Track Attendance API Response:",
            JSON.stringify(response, null, 2)
          );

          const isAttended = response.data?.is_attended ?? true; // Default to true if response doesn't specify
          console.log("✅ Attendance marked - isAttended:", isAttended);

          // Update all states immediately
          setIsCompleted(isAttended);
          setHasMarkedAttendance(isAttended);

          // Update current class state
          const updatedCurrentClass = {
            ...currentClass,
            is_completed: isAttended,
            watched_percentage: Math.floor(percentage),
          };
          setCurrentClass(updatedCurrentClass);
          console.log(
            "🔄 Updated current class:",
            JSON.stringify(updatedCurrentClass, null, 2)
          );

          // Update allClasses state for sidebar
          setAllClasses((prev) => {
            const updated = prev.map((cls) =>
              cls.id === currentClass?.id
                ? {
                    ...cls,
                    is_completed: isAttended,
                    watched_percentage: Math.floor(percentage),
                  }
                : cls
            );
            console.log(
              "🔄 Updated allClasses:",
              JSON.stringify(updated, null, 2)
            );
            return updated;
          });

          // Store completion data in localStorage
          const progressData = {
            courseSlug: location.state.courseSlug,
            classId: currentClass?.id,
            classSlug: classSlug,
            percentage: Math.floor(percentage),
            is_completed: isAttended,
            timestamp: Date.now(),
          };

          console.log(
            "💾 Storing progress data:",
            JSON.stringify(progressData, null, 2)
          );

          // Update course_progress in localStorage
          const storedProgress =
            JSON.parse(localStorage.getItem("course_progress")) || {};
          const courseProgress =
            storedProgress[location.state.courseSlug] || {};
          courseProgress[classSlug] = {
            classId: currentClass?.id,
            is_completed: isAttended,
            watched_percentage: Math.floor(percentage),
            timestamp: Date.now(),
          };
          storedProgress[location.state.courseSlug] = courseProgress;
          localStorage.setItem(
            "course_progress",
            JSON.stringify(storedProgress)
          );

          console.log(
            "💾 Updated localStorage course_progress:",
            JSON.stringify(storedProgress, null, 2)
          );

          // Trigger localStorage event for MyCourses component
          localStorage.setItem(
            "course_progress_updated",
            JSON.stringify(progressData)
          );

          // Dispatch custom event for immediate update
          window.dispatchEvent(
            new CustomEvent("courseProgressUpdated", {
              detail: progressData,
            })
          );

          // Also dispatch storage event for cross-tab sync
          window.dispatchEvent(
            new StorageEvent("storage", {
              key: "course_progress_updated",
              newValue: JSON.stringify(progressData),
            })
          );

          console.log("📡 Events dispatched for progress update");
          toast.success("🎉 Attendance marked! Class completed successfully!");
        } catch (error) {
          console.error("❌ Failed to track attendance:", error);
          attendanceTrackedRef.current = false; // Reset on error
          toast.error("Failed to mark attendance");
        }
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", handleVideoProgress);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleVideoProgress);
    };
  }, [currentClass?.id, classSlug, isCompleted, location.state.courseSlug]);

  const handleClassClick = (classItem) => {
    console.log("🎯 CLASS CLICK - Navigating to:", classItem.slug);
    console.log("🎯 Current class completion status:", classItem.is_completed);

    // Reset attendance tracking for new class
    attendanceTrackedRef.current = false;
    console.log("🔄 attendanceTrackedRef.current reset to false");

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
      console.log("➡️ NEXT CLASS - Navigating to:", nextClass.slug);
      attendanceTrackedRef.current = false;
      console.log("🔄 attendanceTrackedRef.current reset to false");

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
      console.log("⬅️ PREVIOUS CLASS - Navigating to:", previousClass.slug);
      attendanceTrackedRef.current = false;
      console.log("🔄 attendanceTrackedRef.current reset to false");

      navigate(`/dashboard/class-details/${previousClass.slug}`, {
        state: {
          courseId: location.state?.courseId,
          courseTitle: location.state?.courseTitle,
          courseSlug: location.state?.courseSlug,
        },
      });
    }
  };

  const renderHtmlContent = (htmlContent) => {
    if (!htmlContent) return "";
    const cleanHtml = htmlContent
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "");
    return { __html: cleanHtml };
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <div className="flex items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700"></div>
          <p className="text-lg font-semibold text-gray-700">
            Loading your Classes...
          </p>
        </div>
      </div>
    );
  }

  if (!currentClass) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Class Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The class you're looking for doesn't exist or may have been removed.
          </p>
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

  // Debug log for render
  console.log("🎨 RENDERING COMPONENT - Current State:");
  console.log("  classSlug:", classSlug);
  console.log("  isCompleted:", isCompleted);
  console.log("  watchedPercentage:", watchedPercentage);
  console.log("  attendanceTrackedRef.current:", attendanceTrackedRef.current);
  console.log(
    "  currentClass:",
    currentClass
      ? {
          id: currentClass.id,
          title: currentClass.title,
          is_completed: currentClass.is_completed,
          watched_percentage: currentClass.watched_percentage,
        }
      : null
  );
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                {course?.title || location.state?.courseTitle}
              </h1>
              <p className="text-purple-600 font-medium mt-1">
                {currentClass.title}
              </p>
            </div>
            <button
              onClick={() => navigate("/dashboard/my-courses")}
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors"
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Courses
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden flex flex-col">
              <div className="relative bg-black">
                {currentClass.class_video ? (
                  <video
                    ref={videoRef}
                    controls
                    className="w-full aspect-video object-cover"
                    src={currentClass.class_video}
                    poster={course?.thumbnail || currentClass.thumbnail}
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="w-full aspect-video bg-gray-900 flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        className="w-16 h-16 text-gray-400 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-gray-400">
                        No video available for this class
                      </p>
                    </div>
                  </div>
                )}
                {isCompleted && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
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
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                    {currentClass.title}
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-lg">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {currentClass.watch_time || "N/A"}
                  </div>
                </div>

                <div className="flex-1">
                  <div
                    className="text-gray-700 leading-relaxed mb-6 prose prose-gray max-w-none"
                    dangerouslySetInnerHTML={renderHtmlContent(
                      currentClass.description
                    )}
                  />

                  {currentClass.contents &&
                    currentClass.contents.length > 0 && (
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
                                {content.type === "link" && "🔗"}
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
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    <span className="truncate">
                      {previousClass
                        ? `Previous: ${previousClass.title}`
                        : "No Previous Class"}
                    </span>
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
                    <span className="truncate">
                      {nextClass ? `Next: ${nextClass.title}` : "No Next Class"}
                    </span>
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-4 sticky top-4">
              <h3 className="font-semibold text-gray-800 mb-4">
                Course Content
              </h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {allClasses.map((classItem, index) => (
                  <div
                    key={classItem.id}
                    onClick={() => handleClassClick(classItem)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      classItem.slug === classSlug
                        ? "bg-purple-100 border-purple-300 border"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="flex-shrink-0">
                          {classItem.is_completed ||
                          classItem.watched_percentage >= 95 ? (
                            <svg
                              className="w-5 h-5 text-green-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-800 text-sm truncate">
                            {index + 1}. {classItem.title}
                          </h4>
                          <p className="text-xs text-gray-500 truncate">
                            {classItem.watch_time || "N/A"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
