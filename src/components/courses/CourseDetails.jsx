// import { useState } from "react";
// import featureCourse1 from "../../assets/feauteCourse1.jpeg";
// import featureCourse2 from "../../assets/feauteCourse2.jpeg";
// import featureCourse3 from "../../assets/feauteCourse3.jpeg";
// import featureCourse4 from "../../assets/feauteCourse4.jpeg";
// const CourseDetail = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     courseInterested: "",
//     consent: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Demo class scheduled! We'll contact you soon.");
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       courseInterested: "",
//       consent: false,
//     });
//   };

//   // Course data
//   const courses = [
//     {
//       id: 1,
//       title: "AWS Solution Architect - Master",
//       image: featureCourse1,
//       logo: "aws",
//       enrollments: "1.5K+",
//       rating: 4.8,
//       upcomingClass: "April 28",
//     },
//     {
//       id: 2,
//       title: "AWS SysOps Admin",
//       image: featureCourse2,
//       logo: "aws-orange",
//       enrollments: "1.9K+",
//       rating: 4.9,
//       upcomingClass: "April 24",
//     },
//     {
//       id: 3,
//       title: "AWS Developer",
//       image: featureCourse3,
//       logo: "aws-orange",
//       enrollments: "1.9K+",
//       rating: 4.9,
//       upcomingClass: "April 24",
//     },
//     {
//       id: 4,
//       title: "Azure Solution Architect - Master",
//       image: featureCourse4,
//       logo: "azure",
//       enrollments: "1.9K+",
//       rating: 4.6,
//       upcomingClass: "April 25",
//     },
//     {
//       id: 5,
//       title: "VMware Administrator",
//       image: featureCourse1,
//       logo: "vmware",
//       enrollments: "1.5K+",
//       rating: 4.8,
//       ratingScale: 5,
//       upcomingClass: "May 2",
//     },
//   ];

//   const renderLogo = (logoType) => {
//     switch (logoType) {
//       case "aws":
//         return (
//           <div className="bg-white rounded-full p-2 absolute bottom-4 left-4 w-12 h-12 flex items-center justify-center">
//             <span className="font-bold text-gray-800">aws</span>
//           </div>
//         );
//       case "aws-orange":
//         return (
//           <div className="bg-white rounded-full p-2 absolute bottom-4 left-4 w-12 h-12 flex items-center justify-center">
//             <div className="bg-orange-500 w-8 h-8 rounded-md flex items-center justify-center text-white font-bold text-xs">
//               aws
//             </div>
//           </div>
//         );
//       case "azure":
//         return (
//           <div className="bg-white rounded-full p-2 absolute bottom-4 left-4 w-12 h-12 flex items-center justify-center">
//             <div className="text-blue-600 font-bold text-xl">A</div>
//           </div>
//         );
//       case "vmware":
//         return (
//           <div className="bg-white rounded-full p-2 absolute bottom-4 left-4 w-12 h-12 flex items-center justify-center">
//             <div className="bg-blue-500 w-8 h-8 rounded-md flex items-center justify-center">
//               <div className="bg-white w-4 h-4"></div>
//             </div>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   const renderStarRating = (rating) => {
//     const stars = [];
//     for (let i = 0; i < 5; i++) {
//       stars.push(
//         <span
//           key={i}
//           className={
//             i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
//           }
//         >
//           ★
//         </span>
//       );
//     }
//     return stars;
//   };

//   return (
//     <div className="bg-gray-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//       {/* Breadcrumb */}
//       <div className="">
//         <div className="flex items-center text-gray-600">
//           <a href="/" className="hover:text-blue-600">
//             Home
//           </a>
//           <span className="mx-2">/</span>
//           <span>Web Development</span>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="w-full flex flex-col lg:flex-row">
//         {/* Left section */}
//         <div className="lg:w-2/3 p-8">
//           <h1 className="text-4xl font-bold text-gray-900 mb-6">
//             Leverage Your Cloud Career with Cloud Computing Training
//           </h1>

//           <div className="border-l-4 border-blue-600 pl-4 mb-8">
//             <p className="text-lg text-gray-700">
//               Gain an in-depth understanding of Cloud Computing concepts and
//               implement its various services. Stand out in the industry by
//               signing up for our top cloud computing training and certified to
//               boost your cloud career.
//             </p>
//           </div>

//           <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-md transition duration-300">
//             View Courses
//           </button>
//         </div>

//         {/* Right section - Form */}
//         <div className="lg:w-1/3 p-6">
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <div className="text-center mb-6">
//               <h2 className="text-2xl font-bold">
//                 Free Demo Class <span className="text-blue-600">Form</span>
//               </h2>
//               <p className="text-gray-600">
//                 Enter your details to attend Course Demo Class
//               </p>
//             </div>

//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Name"
//                   className="w-full p-3 border border-gray-300 rounded"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email Address"
//                   className="w-full p-3 border border-gray-300 rounded"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Phone number"
//                   className="w-full p-3 border border-gray-300 rounded"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <select
//                   name="courseInterested"
//                   value={formData.courseInterested}
//                   onChange={handleChange}
//                   className="w-full p-3 border border-gray-300 rounded appearance-none"
//                   required
//                 >
//                   <option value="">Course Interested In</option>
//                   <option value="Cloud Computing">Cloud Computing</option>
//                   <option value="AWS">AWS</option>
//                   <option value="Microsoft Azure">Microsoft Azure</option>
//                   <option value="Google Cloud Platform">
//                     Google Cloud Platform
//                   </option>
//                   <option value="Cloud Security">Cloud Security</option>
//                 </select>
//               </div>

//               <div className="mb-6">
//                 <label className="flex items-start">
//                   <input
//                     type="checkbox"
//                     name="consent"
//                     checked={formData.consent}
//                     onChange={handleChange}
//                     className="mt-1 mr-2"
//                     required
//                   />
//                   <span className="text-sm text-gray-600">
//                     By submitting my contact details, I agree Privacy Policy and
//                     I consent to receiving SMS/call/email, including marketing
//                     and promotional SMS.
//                   </span>
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded"
//               >
//                 Schedule Demo Class
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Course Catalog Section */}
//       <div className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
//             A Comprehensive Overview Of Cloud Computing Courses
//           </h2>
//           <p className="text-center text-gray-700 mb-12 max-w-4xl mx-auto">
//             Enroll in our cloud computing courses and learn how to design,
//             implement and manage cloud computing systems. Our courses will teach
//             you to implement cloud security solutions to protect against
//             threats.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {courses.slice(0, 4).map((course) => (
//               <div
//                 key={course.id}
//                 className="bg-white rounded-lg shadow-md overflow-hidden"
//               >
//                 <div className="relative">
//                   <img
//                     src={course.image}
//                     alt={course.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   {renderLogo(course.logo)}
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-blue-800 mb-2">
//                     {course.title}
//                   </h3>
//                   <div className="flex items-center mb-2">
//                     <span className="font-semibold text-gray-700 mr-2">
//                       {course.enrollments}
//                     </span>
//                     <div className="flex text-sm">
//                       {renderStarRating(course.rating)}
//                     </div>
//                     <span className="text-sm text-gray-500 ml-1">
//                       ({course.rating})
//                     </span>
//                   </div>
//                   <div className="flex items-center text-sm text-gray-600">
//                     <span className="mr-1">📅</span>
//                     <span>Upcoming Class : {course.upcomingClass}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Centered fifth course */}
//           <div className="mt-6 flex justify-center">
//             <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm">
//               <div className="relative">
//                 <img
//                   src={courses[4].image}
//                   alt={courses[4].title}
//                   className="w-full h-48 object-cover"
//                 />
//                 {renderLogo(courses[4].logo)}
//               </div>
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-blue-800 mb-2">
//                   {courses[4].title}
//                 </h3>
//                 <div className="flex items-center mb-2">
//                   <span className="font-semibold text-gray-700 mr-2">
//                     {courses[4].enrollments}
//                   </span>
//                   <div className="flex text-sm">
//                     {renderStarRating(courses[4].rating)}
//                   </div>
//                   <span className="text-sm text-gray-500 ml-1">
//                     ({courses[4].rating}/{courses[4].ratingScale})
//                   </span>
//                 </div>
//                 <div className="flex items-center text-sm text-gray-600">
//                   <span className="mr-1">📅</span>
//                   <span>Upcoming Class : {courses[4].upcomingClass}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Ratings Section */}
//       <div className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-wrap justify-center gap-6">
//             <div className="flex items-center bg-white rounded-full px-6 py-2 shadow-md">
//               <span className="flex items-center">
//                 <svg
//                   viewBox="0 0 24 24"
//                   width="24"
//                   height="24"
//                   className="mr-2"
//                 >
//                   <path fill="#4285F4" d="M12 11v8h-9v-8h9z" />
//                   <path fill="#34A853" d="M12 11v8h9v-8h-9z" />
//                   <path fill="#FBBC05" d="M3 11v-7h9v7h-9z" />
//                   <path fill="#EA4335" d="M21 11v-7h-9v7h9z" />
//                 </svg>
//                 <span className="text-lg font-bold">4.9</span>
//               </span>
//             </div>

//             <div className="flex items-center bg-white rounded-full px-6 py-2 shadow-md">
//               <span className="flex items-center">
//                 <svg
//                   viewBox="0 0 24 24"
//                   width="24"
//                   height="24"
//                   className="mr-2 text-red-500"
//                 >
//                   <circle cx="12" cy="12" r="10" fill="#E74C3C" />
//                 </svg>
//                 <span className="text-lg font-bold">4.5</span>
//               </span>
//             </div>

//             <div className="flex items-center bg-white rounded-full px-6 py-2 shadow-md">
//               <span className="flex items-center">
//                 <svg
//                   viewBox="0 0 24 24"
//                   width="24"
//                   height="24"
//                   className="mr-2 text-blue-600"
//                 >
//                   <path
//                     fill="#1877F2"
//                     d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
//                   />
//                 </svg>
//                 <span className="text-lg font-bold">4.9</span>
//               </span>
//             </div>

//             <div className="flex items-center bg-white rounded-full px-6 py-2 shadow-md">
//               <span className="flex items-center">
//                 <svg
//                   viewBox="0 0 24 24"
//                   width="24"
//                   height="24"
//                   className="mr-2"
//                 >
//                   <path
//                     fill="#00B67A"
//                     d="M12 17.25L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.45 4.73L5.82 21z"
//                   />
//                 </svg>
//                 <span className="text-lg font-bold">4.8</span>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll to Top Button */}
//       <div className="fixed bottom-6 right-6">
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded-full shadow-lg"
//         >
//           ↑
//         </button>
//       </div>

//       {/* Chat Button */}
//       <div className="fixed bottom-6 right-24">
//         <button className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg">
//           💬
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CourseDetail;

// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { getCourseDetail } from "../../services/courseService.js";

// const CourseDetail = () => {
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { courseId } = useParams();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     courseInterested: "",
//     consent: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Demo class scheduled! We'll contact you soon.");
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       courseInterested: "",
//       consent: false,
//     });
//   };

//   useEffect(() => {
//     const fetchCourseDetail = async () => {
//       try {
//         const res = await getCourseDetail(courseId);
//         setCourse(res.data?.data); // Adjust according to API response
//       } catch (err) {
//         console.error("Failed to fetch course detail:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourseDetail();
//   }, [courseId]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-xl">Loading...</p>
//       </div>
//     );
//   }

//   if (!course) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-xl text-red-600">Course not found!</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//       {/* Breadcrumb */}
//       <div className="flex items-center text-gray-600 mb-4">
//         <a href="/" className="hover:text-blue-600">Home</a>
//         <span className="mx-2">/</span>
//         <span>{course?.title}</span>
//       </div>

//       {/* Main content */}
//       <div className="w-full flex flex-col lg:flex-row">
//         <div className="lg:w-2/3 p-8">
//           <h1 className="text-4xl font-bold text-gray-900 mb-6">
//             {course?.title}
//           </h1>
//           <p className="text-lg text-gray-700 mb-6">{course?.description}</p>
//           <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-md transition">
//             Enroll Now
//           </button>
//         </div>

//         {/* Form */}
//         <div className="lg:w-1/3 p-6">
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-2xl font-bold text-center mb-4">Schedule Demo Class</h2>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Name"
//                 className="w-full mb-3 p-3 border border-gray-300 rounded"
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email"
//                 className="w-full mb-3 p-3 border border-gray-300 rounded"
//                 required
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Phone Number"
//                 className="w-full mb-3 p-3 border border-gray-300 rounded"
//                 required
//               />
//               <select
//                 name="courseInterested"
//                 value={formData.courseInterested}
//                 onChange={handleChange}
//                 className="w-full mb-3 p-3 border border-gray-300 rounded"
//                 required
//               >
//                 <option value="">Course Interested In</option>
//                 <option value={course?.title}>{course?.title}</option>
//               </select>
//               <label className="flex items-start text-sm text-gray-600 mb-3">
//                 <input
//                   type="checkbox"
//                   name="consent"
//                   checked={formData.consent}
//                   onChange={handleChange}
//                   className="mt-1 mr-2"
//                   required
//                 />
//                 I agree to the Privacy Policy and consent to receive communications.
//               </label>
//               <button
//                 type="submit"
//                 className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded"
//               >
//                 Schedule Demo Class
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetail;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getCourseDetail } from "../../services/courseService";

// const CourseDetails = () => {
//   const { categorySlug, courseSlug } = useParams();
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDetails = async () => {
//       try {
//         const res = await getCourseDetail(courseSlug);
//         console.log("Course Detail API Response:", res.data);
//         setCourse(res.data.data);
//       } catch (err) {
//         console.error("Failed to fetch course detail:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDetails();
//   }, [courseSlug]);

//   if (loading) return <p className="text-center mt-20">Loading...</p>;
//   if (!course)
//     return <p className="text-center text-red-600 mt-20">Course not found!</p>;

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-10">
//       <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
//       <p className="text-lg mb-6">{course.description}</p>
//       <p className="mb-4">Duration: {course.duration}</p>
//       {course.price && (
//         <p className="mb-4 text-purple-700 font-semibold">
//           Price: ${course.price}
//         </p>
//       )}
//       <button className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800">
//         Enroll Now
//       </button>
//     </div>
//   );
// };

// export default CourseDetails;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getCourseDetail } from "../../services/courseService";

// const CourseDetails = () => {
//   const { categorySlug, courseSlug } = useParams();
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDetails = async () => {
//       try {
//         const res = await getCourseDetail(courseSlug);
//         console.log("Course Detail API Response:", res.data);
//         setCourse(res.data.data);
//       } catch (err) {
//         console.error("Failed to fetch course detail:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDetails();
//   }, [courseSlug]);

//   if (loading) return <p className="text-center mt-20">Loading...</p>;
//   if (!course)
//     return <p className="text-center text-red-600 mt-20">Course not found!</p>;

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-2">
//             {/* Course Thumbnail */}
//             <div className="mb-8">
//               <img
//                 src={course.thumbnail}
//                 alt={course.title}
//                 className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
//               />
//             </div>

//             {/* Course Title & Description */}
//             <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//               <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//                 {course.title}
//               </h1>
//               <p className="text-gray-600 leading-relaxed text-lg">
//                 {course.description}
//               </p>
//             </div>

//             {/* Demo Video Section */}
//             {course.demo_video_url && (
//               <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//                   Course Preview
//                 </h2>
//                 <div className="aspect-video">
//                   <video
//                     controls
//                     className="w-full h-full rounded-lg"
//                     poster={course.thumbnail}
//                   >
//                     <source src={course.demo_video_url} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 </div>
//               </div>
//             )}

//             {/* Course Content/Classes */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//                 Course Content
//               </h2>
//               {course.classes && course.classes.length > 0 ? (
//                 <div className="space-y-3">
//                   {course.classes.map((classItem, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
//                     >
//                       <div className="flex items-center">
//                         <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mr-3">
//                           {index + 1}
//                         </span>
//                         <span className="text-gray-700">{classItem.title}</span>
//                       </div>
//                       <span className="text-gray-500 text-sm">
//                         {classItem.duration}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="text-center py-8 text-gray-500">
//                   <svg
//                     className="mx-auto h-12 w-12 text-gray-400 mb-4"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                     />
//                   </svg>
//                   <p>Course content will be available soon</p>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-8">
//               {/* Course Info Card */}
//               <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//                 <div className="text-center mb-6">
//                   <div className="text-3xl font-bold text-purple-700 mb-2">
//                     ${course.price}
//                   </div>
//                   <p className="text-gray-600">One-time payment</p>
//                 </div>

//                 <div className="space-y-4 mb-6">
//                   <div className="flex items-center justify-between py-2 border-b border-gray-100">
//                     <span className="text-gray-600">Duration</span>
//                     <span className="font-semibold text-gray-800">
//                       {course.duration}
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-between py-2 border-b border-gray-100">
//                     <span className="text-gray-600">Classes</span>
//                     <span className="font-semibold text-gray-800">
//                       {course.classes ? course.classes.length : 0} Lessons
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-between py-2 border-b border-gray-100">
//                     <span className="text-gray-600">Access</span>
//                     <span className="font-semibold text-gray-800">Lifetime</span>
//                   </div>
//                 </div>

//                 <button className="w-full bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-800 transition-colors duration-200 shadow-md">
//                   Enroll Now
//                 </button>
//               </div>

//               {/* Instructor Card */}
//               {course.teachers && course.teachers.length > 0 && (
//                 <div className="bg-white rounded-lg shadow-md p-6">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                     Instructor
//                   </h3>
//                   {course.teachers.map((teacher, index) => (
//                     <div key={index} className="flex items-center">
//                       <img
//                         src={teacher.profile_picture}
//                         alt={teacher.name}
//                         className="w-16 h-16 rounded-full object-cover mr-4"
//                       />
//                       <div>
//                         <h4 className="font-semibold text-gray-800">
//                           {teacher.name}
//                         </h4>
//                         <p className="text-gray-600 text-sm">Course Instructor</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetails;

import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getCourseDetail } from "../../services/courseService";
import useAuth from "../../hooks/useAuth";

const CourseDetails = () => {
  const { categorySlug, courseSlug } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth(); // 🔐 Check login
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await getCourseDetail(courseSlug);
        console.log("Course Detail API Response:", res.data);
        setCourse(res.data.data);
      } catch (err) {
        console.error("Failed to fetch course detail:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [courseSlug]);

  const handleEnroll = () => {
    if (!user) {
      navigate("/login", {
        state: {
          from: location.pathname,
          redirectAfterLogin: `/courses/${categorySlug}/${courseSlug}/checkout`,
        },
      });
    } else {
      navigate(`/courses/${categorySlug}/${courseSlug}/checkout`);
    }
  };

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (!course)
    return <p className="text-center text-red-600 mt-20">Course not found!</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {course.title}
              </h1>
              <p className="text-gray-600 leading-relaxed text-lg">
                {course.description}
              </p>
            </div>

            {course.demo_video_url && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Course Preview
                </h2>
                <div className="aspect-video">
                  <video
                    controls
                    className="w-full h-full rounded-lg"
                    poster={course.thumbnail}
                  >
                    <source src={course.demo_video_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )}

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Course Content
              </h2>
              {course.classes && course.classes.length > 0 ? (
                <div className="space-y-3">
                  {course.classes.map((classItem, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mr-3">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{classItem.title}</span>
                      </div>
                      <span className="text-gray-500 text-sm">
                        {classItem.duration}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <p>Course content will be available soon</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-purple-700 mb-2">
                    ${course.price}
                  </div>
                  <p className="text-gray-600">One-time payment</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold text-gray-800">
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Classes</span>
                    <span className="font-semibold text-gray-800">
                      {course.classes ? course.classes.length : 0} Lessons
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Access</span>
                    <span className="font-semibold text-gray-800">
                      Lifetime
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleEnroll}
                  className="w-full bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-800 transition-colors duration-200 shadow-md"
                >
                  Enroll Now
                </button>
              </div>

              {course.teachers && course.teachers.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Instructor
                  </h3>
                  {course.teachers.map((teacher, index) => (
                    <div key={index} className="flex items-center mb-4">
                      <img
                        src={teacher.profile_picture}
                        alt={teacher.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {teacher.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Course Instructor
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
