import instance from "./api";

export const getCategories = (params) =>
  instance.post("categories", null, { params });

export const getMenuCategories = () => instance.post("menu-categories");

export const getCoursesByCategory = (slug, params) =>
  instance.post(`category/${slug}/courses`, null, { params });

export const getAllCourses = (params) =>
  instance.post("courses", null, { params });

export const getCourseDetail = (slug) => instance.post(`course-detail/${slug}`);

export const checkoutCourse = (data) =>
  instance.post("buy-course/checkout", data);


export const getMyCourses = () => instance.post("my-courses");

export const getClassDetail = (slug) => instance.post(`course/class/${slug}`);

export const trackAttendance = (data) =>
  instance.post("classes/track-watch", data);

export const getStudentProgress = () => instance.post("my-progress");

export const confirmPayment = (data) =>
  instance.post("payment-success-callback", data);
