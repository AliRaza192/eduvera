import instance from "./api";

export const getCategories = (params) =>
  instance.post("categories", null, { params });

export const getMenuCategories = () =>
  instance.post("menu-categories");

export const getCoursesByCategory = (slug, params) =>
  instance.post(`category/${slug}/courses`, null, { params });

export const getAllCourses = (params) =>
  instance.post("courses", null, { params });

export const getCourseDetail = (slug) =>
  instance.post(`course-detail/${slug}`);

export const getClassDetail = (slug) =>
  instance.post(`course/class/${slug}`);

export const getCourseIdBySlug = (slug) =>
  instance.post(`course-detail/${slug}`);

export const checkoutCourse = (data) =>
  instance.post("buy-course/checkout", data);

export const getMyCourses = () =>
  instance.post("my-courses");

export const trackAttendance = (data) =>
  instance.post("classes/track-watch", data);

export const getStudentProgress = () =>
  instance.post("my-progress");

export const confirmPayment = (data) =>
  instance.post("payment-success-callback", data);


// // src/services/courseService.js
// import instance from "./api";

// // ✅ Get all course categories (paginated or filtered)
// export const getCategories = (params) =>
//   instance.post("categories", null, { params });

// // ✅ Get categories for menu (no filters)
// export const getMenuCategories = () =>
//   instance.post("menu-categories");

// // ✅ Get courses by category slug
// export const getCoursesByCategory = (slug, params) =>
//   instance.post(`category/${slug}/courses`, null, { params });

// // ✅ Get all published courses
// export const getAllCourses = (params) =>
//   instance.post("courses", null, { params });

// // ✅ Get detailed course info by slug
// export const getCourseDetail = (slug) =>
//   instance.post(`course-detail/${slug}`);

// // ✅ 🚨 Get class detail by class slug (not course slug)
// export const getClassDetail = (slug) =>
//   instance.post(`course/class/${slug}`);

// // ✅ (Optional - same as getCourseDetail)
// export const getCourseIdBySlug = (slug) =>
//   instance.post(`course-detail/${slug}`);

// // ✅ Checkout API to enroll in course
// export const checkoutCourse = (data) =>
//   instance.post("buy-course/checkout", data);

// // ✅ Get enrolled courses
// export const getMyCourses = () =>
//   instance.post("my-courses");

// // ✅ Track watch percentage for attendance
// export const trackAttendance = (data) =>
//   instance.post("classes/track-watch", data);

// // ✅ Get overall progress (dashboard stats)
// export const getStudentProgress = () =>
//   instance.post("my-progress");

// // ✅ Confirm payment success after redirection from gateway
// export const confirmPayment = (data) =>
//   instance.post("payment-success-callback", data);
