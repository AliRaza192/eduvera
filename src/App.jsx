import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, AboutUs, Contact, Login, SignUp } from "./pages";
import { CourseList, CourseDetails, SubCourseList } from "./components/courses";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import OTPVerification from "./components/auth/OTPVerification";
import AuthProvider from "./context/AuthContext";
import EmailVerified from "./pages/Auth/EmailVerified";
import VerifyEmail from "./pages/Auth/VerifyEmail";
import EmailVerificationHandler from "./components/auth/EmailVerificationHandler"; // Add this import
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
            <Route path="/courses/:courseId" element={<CourseDetails />} />
            <Route
              path="/courses/:courseId/:subCourseId"
              element={<SubCourseList />}
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/email-verified" element={<EmailVerified />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/verify/:token" element={<EmailVerificationHandler />} /> {/* Add this route */}

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