import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-purple-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h1>
            <p className="text-gray-600 text-lg mb-6">
              We're here to help! Whether you have a question about courses, need technical support,
              or want to explore partnership opportunities, our team is ready to assist you.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information and Form Section */}
      <div className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Contact Information */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-purple-600 mr-4 mt-1">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Office Address</h3>
                    <p className="text-gray-600">
                      123 Education Street<br />
                      Tech City, TC 10001<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-purple-600 mr-4 mt-1">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-purple-600 mr-4 mt-1">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">info@learningplatform.com</p>
                    <p className="text-gray-600">support@learningplatform.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-purple-600 mr-4 mt-1">
                    <FaClock className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold text-gray-800 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-purple-600 hover:text-purple-700">
                    <FaFacebook className="text-2xl" />
                  </a>
                  <a href="#" className="text-purple-600 hover:text-purple-700">
                    <FaTwitter className="text-2xl" />
                  </a>
                  <a href="#" className="text-purple-600 hover:text-purple-700">
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a href="#" className="text-purple-600 hover:text-purple-700">
                    <FaLinkedin className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Your email address"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Message subject"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="inquiryType" className="block text-gray-700 mb-2">Inquiry Type *</label>
                  <select
                    id="inquiryType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="general">General Inquiry</option>
                    <option value="courses">Course Information</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing & Payment</option>
                    <option value="partnership">Partnership Opportunities</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message *</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="flex items-center">
                    <input type="checkbox" className="w-5 h-5 text-purple-600" required />
                    <span className="ml-2 text-gray-700">
                      I agree to the privacy policy and terms of service
                    </span>
                  </label>
                </div>
                
                <button type="submit" className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-md transition duration-300">
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-10">
        <div className="container mx-auto px-4">
          <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
            {/* Placeholder for a map */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-600 mb-2">Map placeholder</p>
                <p className="text-gray-700 font-medium">
                  123 Education Street, Tech City, TC 10001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* CTA Section */}
      <div className="py-16 container mx-auto px-4">
        <div className="bg-purple-600 text-white rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Our support team is available via live chat during business hours for quick questions and technical support.
          </p>
          <button className="bg-white text-purple-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition duration-300">
            Start Live Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;