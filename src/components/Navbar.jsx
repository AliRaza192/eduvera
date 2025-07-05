// import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import useAuth from "../hooks/useAuth"; // ✅ Auth state detect karne ke liye

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [openMobileSubDropdown, setOpenMobileSubDropdown] = useState(null);

//   const { user, handleLogout } = useAuth(); // ✅ Auth state

//   const toggleDropdown = (name) => {
//     setOpenDropdown(openDropdown === name ? null : name);
//   };

//   const toggleMobileSubDropdown = (name) => {
//     setOpenMobileSubDropdown(openMobileSubDropdown === name ? null : name);
//   };

//   const closeMenus = () => {
//     setIsMobileMenuOpen(false);
//     setOpenDropdown(null);
//     setOpenMobileSubDropdown(null);
//   };

//   const courseData = [
//     {
//       id: "web-development",
//       name: "Web Development",
//       subItems: [
//         { id: "html-css", name: "HTML & CSS" },
//         { id: "javascript", name: "JavaScript" },
//         { id: "react", name: "React" },
//         { id: "nodejs", name: "Node.js" },
//       ],
//     },
//     // ... rest of your course data
//   ];

//   return (
//     <nav className="bg-white py-4 shadow-md w-full fixed z-50 top-0 left-0">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
//         <Link to="/" className="font-black text-2xl" onClick={closeMenus}>
//           <span className="text-purple-700">MY</span> LOGO
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
//           <li>
//             <Link to="/" className="hover:text-purple-700 transition">
//               Home
//             </Link>
//           </li>

//           {/* Course Dropdown */}
//           <li className="group relative cursor-pointer">
//             <div className="flex items-center gap-1 hover:text-purple-700 transition">
//               Course
//               <ChevronDown
//                 size={16}
//                 className="transition-transform duration-200 group-hover:rotate-180"
//               />
//             </div>
//             <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-48 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-10">
//               {courseData.map((course) => (
//                 <li key={course.id} className="relative group/course">
//                   <Link
//                     to={`/courses/${course.id}`}
//                     className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 hover:text-purple-700"
//                   >
//                     {course.name}
//                     <ChevronRight size={14} />
//                   </Link>
//                   <ul className="absolute left-full top-0 bg-white shadow-lg rounded-md w-48 opacity-0 invisible group-hover/course:opacity-100 group-hover/course:visible transition-all duration-200">
//                     {course.subItems.map((subItem) => (
//                       <li key={subItem.id}>
//                         <Link
//                           to={`/courses/${course.id}/${subItem.id}`}
//                           className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-700"
//                         >
//                           {subItem.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </li>
//               ))}
//               <li>
//                 <Link
//                   to="/courses"
//                   className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-700"
//                 >
//                   All Courses
//                 </Link>
//               </li>
//             </ul>
//           </li>

//           <li>
//             <Link to="/about" className="hover:text-purple-700 transition">
//               About Us
//             </Link>
//           </li>

//           {/* Pages Dropdown */}
//           <li className="group relative cursor-pointer">
//             <div className="flex items-center gap-1 hover:text-purple-700 transition">
//               Pages
//               <ChevronDown
//                 size={16}
//                 className="transition-transform duration-200 group-hover:rotate-180"
//               />
//             </div>
//             <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-48 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
//               <li>
//                 <Link
//                   to="/testimonial"
//                   className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-700"
//                 >
//                   Testimonials
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/blog"
//                   className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-700"
//                 >
//                   Blogs
//                 </Link>
//               </li>
//             </ul>
//           </li>

//           <li>
//             <Link to="/contact" className="hover:text-purple-700 transition">
//               Contact
//             </Link>
//           </li>

//           {/* ✅ Conditional Auth Buttons */}
//           <div className="hidden md:flex space-x-4 ml-4">
//             {!user ? (
//               <>
//                 <Link
//                   to="/login"
//                   className="bg-white text-purple-700 px-4 py-2 rounded-full hover:bg-purple-100 border transition"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/signup"
//                   className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition"
//                 >
//                   Sign Up
//                 </Link>
//               </>
//             ) : (
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
//               >
//                 Logout
//               </button>
//             )}
//           </div>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-purple-700 focus:outline-none"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden bg-white px-4 pb-4 shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
//           isMobileMenuOpen ? "max-h-screen" : "max-h-0"
//         }`}
//       >
//         <ul className="flex flex-col space-y-2 text-gray-800 font-medium mt-2">
//           <li>
//             <Link
//               to="/"
//               className="block hover:text-purple-700 transition py-1"
//               onClick={closeMenus}
//             >
//               Home
//             </Link>
//           </li>

//           {/* Mobile Course Dropdown */}
//           <li className="cursor-pointer">
//             <div
//               className="flex justify-between items-center hover:text-purple-700 transition"
//               onClick={() => toggleDropdown("course")}
//             >
//               Course
//               <ChevronDown
//                 size={16}
//                 className={`transition-transform duration-200 ${
//                   openDropdown === "course" ? "rotate-180" : ""
//                 }`}
//               />
//             </div>
//             {openDropdown === "course" && (
//               <ul className="ml-4 mt-1 space-y-1 text-sm">
//                 {courseData.map((course) => (
//                   <li key={course.id}>
//                     <div
//                       className="flex justify-between items-center hover:text-purple-700 transition pl-2 py-1"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         toggleMobileSubDropdown(course.name);
//                       }}
//                     >
//                       <Link
//                         to={`/courses/${course.id}`}
//                         className="block flex-grow"
//                         onClick={closeMenus}
//                       >
//                         {course.name}
//                       </Link>
//                       <ChevronDown
//                         size={14}
//                         className={`transition-transform duration-200 ${
//                           openMobileSubDropdown === course.name
//                             ? "rotate-180"
//                             : ""
//                         }`}
//                         />
//                     </div>
//                     {openMobileSubDropdown === course.name && (
//                       <ul className="ml-4 mt-1 space-y-1">
//                         {course.subItems.map((subItem) => (
//                           <li key={subItem.id}>
//                             <Link
//                               to={`/courses/${course.id}/${subItem.id}`}
//                               className="block hover:text-purple-700 transition pl-2 py-1"
//                               onClick={closeMenus}
//                             >
//                               {subItem.name}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 ))}
//                 <li>
//                   <Link
//                     to="/courses"
//                     className="block hover:text-purple-700 transition pl-2 py-1"
//                     onClick={closeMenus}
//                   >
//                     All Courses
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li>
//             <Link
//               to="/about"
//               className="block hover:text-purple-700 transition py-1"
//               onClick={closeMenus}
//             >
//               About Us
//             </Link>
//           </li>

//           <li>
//             <Link
//               to="/contact"
//               className="block hover:text-purple-700 transition py-1"
//               onClick={closeMenus}
//             >
//               Contact
//             </Link>
//           </li>

//           {/* ✅ Mobile Auth Buttons */}
//           <div className="flex flex-col space-y-2 mt-4">
//             {!user ? (
//               <>
//                 <Link
//                   to="/login"
//                   className="text-center bg-white text-purple-700 px-4 py-2 rounded-full hover:bg-purple-100 border transition"
//                   onClick={closeMenus}
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/signup"
//                   className="text-center bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition"
//                   onClick={closeMenus}
//                 >
//                   Sign Up
//                 </Link>
//               </>
//             ) : (
//               <button
//                 onClick={() => {
//                   handleLogout();
//                   closeMenus();
//                 }}
//                 className="bg-red-600 text-white py-2 rounded-full hover:bg-red-700 transition"
//               >
//                 Logout
//               </button>
//             )}
//           </div>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { getMenuCategories } from "../services/courseService";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileSubDropdown, setOpenMobileSubDropdown] = useState(null);
  const [menuCategories, setMenuCategories] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  const { user, handleLogout } = useAuth();

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileSubDropdown(null);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await getMenuCategories();
        console.log("Menu Categories API Response:", res.data);
        setMenuCategories(res.data.categories);
      } catch (err) {
        console.error("Menu Categories Error:", err);
      }
    };
    fetchMenu();
  }, []);

  return (
    <nav className={`bg-white/95 backdrop-blur-md py-4 w-full fixed z-50 top-0 left-0 transition-all duration-300 ${
      scrolled ? 'shadow-xl' : 'shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="font-black text-2xl group" onClick={closeMenus}>
          <span className="text-purple-700 group-hover:text-purple-800 transition-colors duration-200">MY</span>
          <span className="text-gray-800 group-hover:text-gray-900 transition-colors duration-200"> LOGO</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
          <li>
            <Link to="/" className="hover:text-purple-700 transition-colors duration-200 relative group" onClick={closeMenus}>
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>

          {/* Courses Dropdown */}
          <li className="group relative cursor-pointer">
            <div className="flex items-center gap-1 hover:text-purple-700 transition-colors duration-200">
              Courses
              <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
            </div>

            <ul className="absolute top-full left-0 mt-3 bg-white/95 backdrop-blur-md shadow-xl rounded-xl w-52 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-gray-100 z-10">
              {menuCategories.map((cat) => (
                <li key={cat.slug} className="relative group/course">
                  <Link 
                    to={`/courses/${cat.slug}`}
                    className="flex justify-between items-center px-5 py-3 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200 first:rounded-t-xl"
                  >
                    <span className="font-medium">{cat.name}</span>
                    {cat.courses.length > 0 && <ChevronRight size={14} className="text-gray-400" />}
                  </Link>

                  {cat.courses.length > 0 && (
                    <ul className="absolute left-full top-0 bg-white/95 backdrop-blur-md shadow-xl rounded-xl w-52 opacity-0 invisible group-hover/course:opacity-100 group-hover/course:visible transition-all duration-300 transform translate-x-2 group-hover/course:translate-x-0 border border-gray-100">
                      {cat.courses.map((sub) => (
                        <li key={sub.slug}>
                          <Link 
                            to={`/courses/${cat.slug}/${sub.slug}`}
                            className="block px-5 py-3 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="border-t border-gray-100">
                <Link 
                  to="/courses"
                  className="block px-5 py-3 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200 rounded-b-xl font-semibold"
                >
                  All Courses
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/about" className="hover:text-purple-700 transition-colors duration-200 relative group">
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-purple-700 transition-colors duration-200 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>

          {/* Auth Buttons */}
          <div className="hidden md:flex space-x-4 ml-4">
            {!user ? (
              <>
                <Link 
                  to="/login" 
                  className="bg-white text-purple-700 px-6 py-2.5 rounded-full hover:bg-purple-50 border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 font-semibold transform hover:scale-105"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="bg-purple-700 text-white px-6 py-2.5 rounded-full hover:bg-purple-800 transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <span className="text-gray-700 font-medium">Welcome, {user.name || 'User'}</span>
                <button 
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2.5 rounded-full hover:bg-red-700 transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-gray-700" />
          ) : (
            <Menu size={24} className="text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 py-6 space-y-4">
          <Link 
            to="/"
            onClick={closeMenus}
            className="block w-full text-left py-3 px-4 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200 rounded-lg font-medium"
          >
            Home
          </Link>

          {/* Mobile Courses Dropdown */}
          <div>
            <button
              onClick={() => setOpenMobileSubDropdown(openMobileSubDropdown === 'courses' ? null : 'courses')}
              className="flex items-center justify-between w-full text-left py-3 px-4 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200 rounded-lg font-medium"
            >
              Courses
              <ChevronDown size={16} className={`transition-transform duration-300 ${
                openMobileSubDropdown === 'courses' ? 'rotate-180' : ''
              }`} />
            </button>

            <div className={`ml-6 mt-2 space-y-2 transition-all duration-300 ${
              openMobileSubDropdown === 'courses' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
              {menuCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/courses/${cat.slug}`}
                  onClick={closeMenus}
                  className="block w-full text-left py-2 px-4 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200 rounded-lg"
                >
                  {cat.name}
                </Link>
              ))}
              <Link
                to="/courses"
                onClick={closeMenus}
                className="block w-full text-left py-2 px-4 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200 rounded-lg font-semibold"
              >
                All Courses
              </Link>
            </div>
          </div>

          <Link 
            to="/about"
            onClick={closeMenus}
            className="block w-full text-left py-3 px-4 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200 rounded-lg font-medium"
          >
            About Us
          </Link>

          <Link 
            to="/contact"
            onClick={closeMenus}
            className="block w-full text-left py-3 px-4 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200 rounded-lg font-medium"
          >
            Contact
          </Link>

          {/* Mobile Auth Buttons */}
          <div className="pt-4 border-t border-gray-200 space-y-3">
            {!user ? (
              <>
                <Link 
                  to="/login"
                  onClick={closeMenus}
                  className="block w-full text-center bg-white text-purple-700 py-3 rounded-lg hover:bg-purple-50 border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 font-semibold"
                >
                  Login
                </Link>
                <Link 
                  to="/signup"
                  onClick={closeMenus}
                  className="block w-full text-center bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg transition-all duration-300 font-semibold"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="space-y-3">
                <div className="text-center py-2">
                  <span className="text-gray-700 font-medium">Welcome, {user.name || 'User'}</span>
                </div>
                <button 
                  onClick={() => { closeMenus(); handleLogout(); }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-all duration-300 font-semibold"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;