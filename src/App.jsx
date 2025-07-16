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
import MyCourses from "./pages/dashboard/MyCourses";
import ClassDetails from "./pages/dashboard/ClassDetails";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700 mx-auto mb-4"></div>
        <p className="text-lg font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

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
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <AuthProvider>
        <Navbar />
        <div className="pt-20 pb-10 min-h-screen bg-gray-50">
          <Routes>
            {/* 🌐 Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/all-courses" element={<CourseList />} />
            <Route
              path="/courses/:categorySlug"
              element={<CategoryCourses />}
            />
            <Route
              path="/courses/:categorySlug/:courseSlug"
              element={<CourseDetails />}
            />

            {/* 💳 Checkout & Payment */}
            <Route
              path="/courses/:categorySlug/:courseSlug/checkout"
              element={<Checkout />}
            />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />

            {/* 🔐 Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/otp-verification" element={<OTPVerification />} />
            <Route path="/email-verified" element={<EmailVerified />} />
            <Route path="/verification" element={<VerifyEmail />} />
            <Route
              path="/verify-email"
              element={<EmailVerificationHandler />}
            />

            {/* 🧑‍🎓 Protected Dashboard Routes */}
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
                        Welcome to your dashboard! Only logged in users can see
                        this.
                      </p>
                    </div>
                  </div>
                </PrivateRoute>
              }
            />

            <Route
              path="/dashboard/my-courses"
              element={
                <PrivateRoute>
                  <MyCourses />
                </PrivateRoute>
              }
            />
            
            {/* ✅ Fixed: ClassDetails route with proper class slug parameter */}
            <Route
              path="/dashboard/class-details/:classSlug"
              element={
                <PrivateRoute>
                  <ClassDetails />
                </PrivateRoute>
              }
            />

            {/* ❌ 404 Page */}
            <Route
              path="*"
              element={
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
                      onClick={() => (window.location.href = "/")}
                      className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition-colors"
                    >
                      Go Home
                    </button>
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;