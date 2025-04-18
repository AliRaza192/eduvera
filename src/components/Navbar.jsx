import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="bg-white py-4 shadow-md w-full fixed z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="font-black text-2xl">
          <span className="text-purple-700">MY</span> LOGO
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
          <li className="hover:text-purple-700 transition">Home</li>

          {/* Course Dropdown */}
          <li className="group relative cursor-pointer">
            <div className="flex items-center gap-1 hover:text-purple-700 transition">
              Course
              <ChevronDown
                size={16}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </div>
            <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-40 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
              <li className="px-4 py-2 hover:bg-gray-100 hover:text-purple-700">
                Course
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 hover:text-purple-700">
                Course List
              </li>
            </ul>
          </li>

          <li className="hover:text-purple-700 transition">About Us</li>

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
              <li className="px-4 py-2 hover:bg-gray-100 hover:text-purple-700">
                Career FAQ
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 hover:text-purple-700">
                Teacher
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 hover:text-purple-700">
                Testimonial
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 hover:text-purple-700">
                Blog Single Page
              </li>
            </ul>
          </li>

          <li className="hover:text-purple-700 transition">Contact</li>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4 ml-4">
            <button className="bg-white text-purple-700 px-4 py-2 rounded-full hover:bg-purple-100 border transition">
              Login
            </button>
            <button className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition">
              Sign Up
            </button>
          </div>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-purple-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white px-4 pb-4 shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-2 text-gray-800 font-medium mt-2">
          <li className="hover:text-purple-700 transition">Home</li>

          <li
            onClick={() => toggleDropdown("course")}
            className="cursor-pointer"
          >
            <div className="flex justify-between items-center hover:text-purple-700 transition">
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
                <li className="hover:text-purple-700 transition pl-2 py-1">
                  Course
                </li>
                <li className="hover:text-purple-700 transition pl-2 py-1">
                  Course List
                </li>
              </ul>
            )}
          </li>

          <li className="hover:text-purple-700 transition">About Us</li>

          <li
            onClick={() => toggleDropdown("pages")}
            className="cursor-pointer"
          >
            <div className="flex justify-between items-center hover:text-purple-700 transition">
              Pages
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  openDropdown === "pages" ? "rotate-180" : ""
                }`}
              />
            </div>
            {openDropdown === "pages" && (
              <ul className="ml-4 mt-1 space-y-1 text-sm">
                <li className="hover:text-purple-700 transition pl-2 py-1">
                  Career FAQ
                </li>
                <li className="hover:text-purple-700 transition pl-2 py-1">
                  Teacher
                </li>
                <li className="hover:text-purple-700 transition pl-2 py-1">
                  Testimonial
                </li>
                <li className="hover:text-purple-700 transition pl-2 py-1">
                  Blog Single Page
                </li>
              </ul>
            )}
          </li>

          <li className="hover:text-purple-700 transition">Contact</li>

          {/* Buttons */}
          <div className="flex flex-col space-y-2 mt-4">
            <button className="bg-white text-purple-700 px-4 py-2 rounded-full hover:bg-purple-100 border transition">
              Login
            </button>
            <button className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition">
              Sign Up
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
