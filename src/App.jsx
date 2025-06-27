import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, AboutUs, Contact, Login, SignUp } from "./pages";
import { CourseList, CourseDetails, SubCourseList } from "./components/courses";
import AuthProvider from "./context/AuthContext";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";

import useAuth from "./hooks/useAuth";
import OTPVerification from "./components/auth/OTPVerification";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" />;
  return children;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <div className="pt-20 pb-10">
          <Routes>
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

            {/* Example Protected Route */}
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

            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="otp-verification" element={<OTPVerification />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
