import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // ✅ Auth state detect karne ke liye

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileSubDropdown, setOpenMobileSubDropdown] = useState(null);

  const { user, handleLogout } = useAuth(); // ✅ Auth state

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMobileSubDropdown = (name) => {
    setOpenMobileSubDropdown(openMobileSubDropdown === name ? null : name);
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileSubDropdown(null);
  };

  const courseData = [
    {
      id: "web-development",
      name: "Web Development",
      subItems: [
        { id: "html-css", name: "HTML & CSS" },
        { id: "javascript", name: "JavaScript" },
        { id: "react", name: "React" },
        { id: "nodejs", name: "Node.js" },
      ],
    },
    // ... rest of your course data
  ];

  return (
    <nav className="bg-white py-4 shadow-md w-full fixed z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-black text-2xl" onClick={closeMenus}>
          <span className="text-purple-700">MY</span> LOGO
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
          <li>
            <Link to="/" className="hover:text-purple-700 transition">
              Home
            </Link>
          </li>

          {/* Course Dropdown */}
          <li className="group relative cursor-pointer">
            <div className="flex items-center gap-1 hover:text-purple-700 transition">
              Course
              <ChevronDown
                size={16}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </div>
            <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-48 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-10">
              {courseData.map((course) => (
                <li key={course.id} className="relative group/course">
                  <Link
                    to={`/courses/${course.id}`}
                    className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 hover:text-purple-700"
                  >
                    {course.name}
                    <ChevronRight size={14} />
                  </Link>
                  <ul className="absolute left-full top-0 bg-white shadow-lg rounded-md w-48 opacity-0 invisible group-hover/course:opacity-100 group-hover/course:visible transition-all duration-200">
                    {course.subItems.map((subItem) => (
                      <li key={subItem.id}>
                        <Link
                          to={`/courses/${course.id}/${subItem.id}`}
                          className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-700"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li>
                <Link
                  to="/courses"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-700"
                >
                  All Courses
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/about" className="hover:text-purple-700 transition">
              About Us
            </Link>
          </li>

          {/* Pages Dropdown */}
          <li className="group relative cursor-pointer">
            <div className="flex items-center gap-1 hover:text-purple-700 transition">
              Pages
              <ChevronDown
                size={16}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </div>
            <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-48 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
              <li>
                <Link
                  to="/testimonial"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-700"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-700"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/contact" className="hover:text-purple-700 transition">
              Contact
            </Link>
          </li>

          {/* ✅ Conditional Auth Buttons */}
          <div className="hidden md:flex space-x-4 ml-4">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="bg-white text-purple-700 px-4 py-2 rounded-full hover:bg-purple-100 border transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
              >
                Logout
              </button>
            )}
          </div>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-purple-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white px-4 pb-4 shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-2 text-gray-800 font-medium mt-2">
          <li>
            <Link
              to="/"
              className="block hover:text-purple-700 transition py-1"
              onClick={closeMenus}
            >
              Home
            </Link>
          </li>

          {/* Mobile Course Dropdown */}
          <li className="cursor-pointer">
            <div
              className="flex justify-between items-center hover:text-purple-700 transition"
              onClick={() => toggleDropdown("course")}
            >
              Course
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  openDropdown === "course" ? "rotate-180" : ""
                }`}
              />
            </div>
            {openDropdown === "course" && (
              <ul className="ml-4 mt-1 space-y-1 text-sm">
                {courseData.map((course) => (
                  <li key={course.id}>
                    <div
                      className="flex justify-between items-center hover:text-purple-700 transition pl-2 py-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMobileSubDropdown(course.name);
                      }}
                    >
                      <Link
                        to={`/courses/${course.id}`}
                        className="block flex-grow"
                        onClick={closeMenus}
                      >
                        {course.name}
                      </Link>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          openMobileSubDropdown === course.name
                            ? "rotate-180"
                            : ""
                        }`}
                        />
                    </div>
                    {openMobileSubDropdown === course.name && (
                      <ul className="ml-4 mt-1 space-y-1">
                        {course.subItems.map((subItem) => (
                          <li key={subItem.id}>
                            <Link
                              to={`/courses/${course.id}/${subItem.id}`}
                              className="block hover:text-purple-700 transition pl-2 py-1"
                              onClick={closeMenus}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                <li>
                  <Link
                    to="/courses"
                    className="block hover:text-purple-700 transition pl-2 py-1"
                    onClick={closeMenus}
                  >
                    All Courses
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/about"
              className="block hover:text-purple-700 transition py-1"
              onClick={closeMenus}
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="block hover:text-purple-700 transition py-1"
              onClick={closeMenus}
            >
              Contact
            </Link>
          </li>

          {/* ✅ Mobile Auth Buttons */}
          <div className="flex flex-col space-y-2 mt-4">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="text-center bg-white text-purple-700 px-4 py-2 rounded-full hover:bg-purple-100 border transition"
                  onClick={closeMenus}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-center bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition"
                  onClick={closeMenus}
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  closeMenus();
                }}
                className="bg-red-600 text-white py-2 rounded-full hover:bg-red-700 transition"
              >
                Logout
              </button>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
