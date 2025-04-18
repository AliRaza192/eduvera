import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import teacher1 from "../assets/teacher1.jpeg";
import teacher2 from "../assets/teacher2.jpeg";
import teacher3 from "../assets/teacher3.jpeg";
import teacher4 from "../assets/teacher4.jpeg";


const OurTeachersSection = () => {
  const teachers = [
    {
      id: 1,
      name: "Emily Davis",
      role: "PROFESSIONAL DESIGNER",
      image: teacher1
    },
    {
      id: 2,
      name: "John Smith",
      role: "SENIOR WEB DEVELOPER",
      image: teacher2,

    },
    {
      id: 3,
      name: "Sarah Lee",
      role: "MARKETING EXPERT",
      image: teacher3

    },
    {
      id: 4,
      name: "Dr. Michael Carter",
      role: "DATA SCIENTIST SPECIALIST",
      image: teacher4

    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div className="mb-6 lg:mb-0">
            <p className="text-purple-600 font-medium mb-2">Our Teachers</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-lg">
              The Experts Supporting Your Journey
            </h2>
          </div>
          
          <div className="lg:max-w-md">
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="px-6 py-2 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition-colors">
              Explore More
            </button>
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="text-center">
              {/* Teacher Image */}
              <div className="rounded-lg overflow-hidden mb-4">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full aspect-square object-cover"
                />
              </div>
              
              {/* Social Icons */}
              <div className="flex justify-center space-x-4 mb-4">
                <a href="#" className="bg-gray-100 p-2 rounded-full text-gray-700 hover:text-purple-600 transition-colors">
                  <FaFacebookF />
                </a>
                <a href="#" className="bg-gray-100 p-2 rounded-full text-gray-700 hover:text-purple-600 transition-colors">
                  <FaTwitter />
                </a>
                <a href="#" className="bg-gray-100 p-2 rounded-full text-gray-700 hover:text-purple-600 transition-colors">
                  <FaLinkedinIn />
                </a>
              </div>
              
              {/* Teacher Details */}
              <div>
                <h3 className="text-xl font-bold text-gray-900">{teacher.name}</h3>
                <p className="text-purple-600 text-sm uppercase tracking-wider font-medium">
                  {teacher.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeachersSection;