// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import { Home, AboutUs, Contact, Login, SignUp } from "./pages";
// // import { CourseList, CourseDetails, SubCourseList } from "./components/courses";
// import CourseList from "./components/courses/CourseList";
// import CourseDetails from "./components/courses/CourseDetails";
// import SubCourseList from "./components/courses/SubCourseList";

// import ForgotPassword from "./components/auth/ForgotPassword";
// import ResetPassword from "./components/auth/ResetPassword";
// import OTPVerification from "./components/auth/OTPVerification";
// import AuthProvider from "./context/AuthContext";
// import EmailVerified from "./pages/Auth/EmailVerified";
// import VerifyEmail from "./pages/Auth/EmailVerification";
// import EmailVerificationHandler from "./components/auth/EmailVerificationHandler"; // Add this import
// import useAuth from "./hooks/useAuth";
// import { Toaster } from "react-hot-toast";
// import EmailVerification from "./pages/Auth/EmailVerification";

// const PrivateRoute = ({ children }) => {
//   const { user, loading } = useAuth();

//   if (loading)
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-lg font-semibold">Loading...</p>
//       </div>
//     );

//   if (!user) return <Navigate to="/login" />;
//   return children;
// };

// function App() {
//   return (
//     <Router>
//       <Toaster position="top-center" />

//       <AuthProvider>
//         <Navbar />
//         <div className="pt-20 pb-10 min-h-screen bg-gray-50">
//           <Routes>
//             {/* Public Routes */}
//             <Route path="/" element={<Home />} />
//             <Route path="/courses" element={<CourseList />} />
//             <Route path="/courses/:courseId" element={<CourseDetails />} />
//             <Route
//               path="/courses/:courseId/:subCourseId"
//               element={<SubCourseList />}
//             />
//             <Route path="/about" element={<AboutUs />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<SignUp />} />
//             <Route path="/email-verified" element={<EmailVerified />} />
//             <Route path="/verification" element={<EmailVerification />} />
//             <Route path="/verify-email" element={<EmailVerificationHandler />} />

//             {/* <Route path="/verify-email/:token" element={<EmailVerificationHandler />} /> Add this route */}
//             <Route path="/forgot-password" element={<ForgotPassword />} />
//             <Route path="/reset-password" element={<ResetPassword />} />
//             <Route path="/otp-verification" element={<OTPVerification />} />

//             {/* Protected Routes */}
//             <Route
//               path="/dashboard"
//               element={
//                 <PrivateRoute>
//                   <div className="p-8">
//                     Dashboard: Only logged in users can see this.
//                   </div>
//                 </PrivateRoute>
//               }
//             />
//           </Routes>
//         </div>
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import { Home, AboutUs, Contact, Login, SignUp } from "./pages";
// import CourseList from "./components/courses/CourseList";
// import CourseDetails from "./components/courses/CourseDetails";
// import CategoryCourses from "./components/courses/CategoryCourses"; // ✅ New Component for Category-wise courses
// import ForgotPassword from "./components/auth/ForgotPassword";
// import ResetPassword from "./components/auth/ResetPassword";
// import OTPVerification from "./components/auth/OTPVerification";
// import AuthProvider from "./context/AuthContext";
// import EmailVerified from "./pages/Auth/EmailVerified";
// import VerifyEmail from "./pages/Auth/EmailVerification";
// import EmailVerificationHandler from "./components/auth/EmailVerificationHandler";
// import useAuth from "./hooks/useAuth";
// import { Toaster } from "react-hot-toast";
// import Checkout from "./components/courses/Checkout";
// import Success from "./pages/payment/Success";
// import Cancel from "./pages/payment/Cancel";

// const PrivateRoute = ({ children }) => {
//   const { user, loading } = useAuth();

//   if (loading)
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-lg font-semibold">Loading...</p>
//       </div>
//     );

//   if (!user) return <Navigate to="/login" />;
//   return children;
// };

// function App() {
//   return (
//     <Router>
//       <Toaster position="top-center" />
//       <AuthProvider>
//         <Navbar />
//         <div className="pt-20 pb-10 min-h-screen bg-gray-50">
//           <Routes>
//             {/* Public Routes */}
//             <Route path="/" element={<Home />} />
//             <Route path="/courses" element={<CourseList />} />
//             <Route
//               path="/courses/:categorySlug"
//               element={<CategoryCourses />}
//             />
//             <Route
//               path="/courses/:categorySlug/:courseSlug"
//               element={<CourseDetails />}
//             />
//             <Route
//               path="/courses/:categorySlug/:courseSlug/checkout"
//               element={<Checkout />}
//             />
//             <Route path="/payment-success" element={<Success />} />
//             <Route path="/payment-cancel" element={<Cancel />} />

//             <Route path="/about" element={<AboutUs />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<SignUp />} />
//             <Route path="/email-verified" element={<EmailVerified />} />
//             <Route path="/verification" element={<VerifyEmail />} />
//             <Route
//               path="/verify-email"
//               element={<EmailVerificationHandler />}
//             />
//             <Route path="/forgot-password" element={<ForgotPassword />} />
//             <Route path="/reset-password" element={<ResetPassword />} />
//             <Route path="/otp-verification" element={<OTPVerification />} />

//             {/* Protected Routes */}
//             <Route
//               path="/dashboard"
//               element={
//                 <PrivateRoute>
//                   <div className="p-8">
//                     Dashboard: Only logged in users can see this.
//                   </div>
//                 </PrivateRoute>
//               }
//             />
//           </Routes>
//         </div>
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, AboutUs, Contact, Login, SignUp } from "./pages";
import CourseList from "./components/courses/CourseList";
import CourseDetails from "./components/courses/CourseDetails";
import CategoryCourses from "./components/courses/CategoryCourses";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import OTPVerification from "./components/auth/OTPVerification";
import AuthProvider from "./context/AuthContext";
import EmailVerified from "./pages/Auth/EmailVerified";
import VerifyEmail from "./pages/Auth/EmailVerification";
import EmailVerificationHandler from "./components/auth/EmailVerificationHandler";
import useAuth from "./hooks/useAuth";
import { Toaster } from "react-hot-toast";
import Checkout from "./components/courses/Checkout";
import Success from "./pages/payment/Success";
import Cancel from "./pages/payment/Cancel";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700 mx-auto mb-4"></div>
        <p className="text-lg font-semibold text-gray-600">Loading...</p>
      </div>
    );

  if (!user) return <Navigate to="/login" />;
  return children;
};

function App() {
  return (
    <Router>
      <Toaster 
        position="top-center" 
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <AuthProvider>
        <Navbar />
        <div className="pt-20 pb-10 min-h-screen bg-gray-50">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CourseList />} />
            <Route
              path="/courses/:categorySlug"
              element={<CategoryCourses />}
            />
            <Route
              path="/courses/:categorySlug/:courseSlug"
              element={<CourseDetails />}
            />
            <Route
              path="/courses/:categorySlug/:courseSlug/checkout"
              element={<Checkout />}
            />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />

            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/email-verified" element={<EmailVerified />} />
            <Route path="/verification" element={<VerifyEmail />} />
            <Route
              path="/verify-email"
              element={<EmailVerificationHandler />}
            />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/otp-verification" element={<OTPVerification />} />

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <div className="container mx-auto px-4 py-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h1 className="text-2xl font-bold text-gray-800 mb-4">
                        Dashboard
                      </h1>
                      <p className="text-gray-600">
                        Welcome to your dashboard! Only logged in users can see this.
                      </p>
                    </div>
                  </div>
                </PrivateRoute>
              }
            />
            <Route
              path="/my-courses"
              element={
                <PrivateRoute>
                  <div className="container mx-auto px-4 py-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h1 className="text-2xl font-bold text-gray-800 mb-4">
                        My Courses
                      </h1>
                      <p className="text-gray-600">
                        Your enrolled courses will appear here.
                      </p>
                    </div>
                  </div>
                </PrivateRoute>
              }
            />

            {/* Catch all route - 404 */}
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <div className="text-gray-400 text-6xl mb-4">404</div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    Page Not Found
                  </h1>
                  <p className="text-gray-600 mb-6">
                    The page you're looking for doesn't exist.
                  </p>
                  <button
                    onClick={() => window.location.href = '/'}
                    className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition-colors"
                  >
                    Go Home
                  </button>
                </div>
              </div>
            } />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;