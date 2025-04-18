import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const exploreLinks = [
    { text: "Home", href: "#" },
    { text: "About", href: "#" },
    { text: "Course", href: "#" },
    { text: "Teachers", href: "#" },
    { text: "Process", href: "#" },
    { text: "Pricing", href: "#" }
  ];

  const supportLinks = [
    { text: "Help Center", href: "#" },
    { text: "About", href: "#" },
    { text: "My Account", href: "#" },
    { text: "Ticket Suport", href: "#" },
    { text: "FAQs", href: "#" },
    { text: "Contact", href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-purple-500 font-bold text-xl mr-1">MY</span>
              <span className="font-bold text-xl">LOGO</span>
            </div>
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button 
                type="submit" 
                className="w-full bg-purple-600 text-white font-medium py-2 px-4 rounded-full hover:bg-purple-700 transition-colors"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;