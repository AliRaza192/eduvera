import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, AboutUs, Contact } from "./pages";
import { CourseList, CourseDetails, SubCourseList } from "./components/courses";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20 pb-10">
        {" "}
        {/* Add padding-top to account for fixed navbar */}
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
