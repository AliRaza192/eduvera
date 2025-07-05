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
import CategoryCourses from "./components/courses/CategoryCourses"; // ✅ New Component for Category-wise courses
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import OTPVerification from "./components/auth/OTPVerification";
import AuthProvider from "./context/AuthContext";
import EmailVerified from "./pages/Auth/EmailVerified";
import VerifyEmail from "./pages/Auth/EmailVerification";
import EmailVerificationHandler from "./components/auth/EmailVerificationHandler";
import useAuth from "./hooks/useAuth";
import { Toaster } from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );

  if (!user) return <Navigate to="/login" />;
  return children;
};

function App() {
  return (
    <Router>
      <Toaster position="top-center" />
      <AuthProvider>
        <Navbar />
        <div className="pt-20 pb-10 min-h-screen bg-gray-50">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/courses/:categorySlug" element={<CategoryCourses />} />
            <Route path="/courses/:categorySlug/:courseSlug" element={<CourseDetails />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/email-verified" element={<EmailVerified />} />
            <Route path="/verification" element={<VerifyEmail />} />
            <Route path="/verify-email" element={<EmailVerificationHandler />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/otp-verification" element={<OTPVerification />} />

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <div className="p-8">
                    Dashboard: Only logged in users can see this.
                  </div>
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
