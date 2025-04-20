// AboutUs.jsx
import React from "react";
import { FaGraduationCap, FaUsers, FaLightbulb, FaMedal } from "react-icons/fa";
import about from "../assets/about-img.jpeg";
import teacher1 from "../assets/teacher1.jpeg";
import teacher2 from "../assets/teacher2.jpeg";
import teacher3 from "../assets/teacher3.jpeg";
import teacher4 from "../assets/teacher4.jpeg";

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-purple-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              About Our Learning Platform
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              We're dedicated to transforming education through innovative
              online learning experiences that empower students worldwide to
              achieve their full potential.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition duration-300">
              Join Our Community
            </button>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2018, our platform began with a simple mission: make
              quality education accessible to everyone, regardless of location
              or background.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small collection of courses has grown into a
              comprehensive learning ecosystem with over 750+ courses and 120+
              expert instructors from around the world.
            </p>
            <p className="text-gray-600">
              Today, we're proud to serve a global community of learners who are
              transforming their lives through education, developing new skills,
              and advancing their careers.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src={about}
              alt="Our team collaborating"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and reflect our commitment
              to creating an exceptional learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-purple-600 mb-4">
                <FaGraduationCap className="text-4xl mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Educational Excellence
              </h3>
              <p className="text-gray-600">
                We maintain the highest standards in course development and
                teaching methodologies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-purple-600 mb-4">
                <FaUsers className="text-4xl mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inclusive Learning</h3>
              <p className="text-gray-600">
                We design our platform to be accessible and welcoming to
                learners from all backgrounds.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-purple-600 mb-4">
                <FaLightbulb className="text-4xl mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly evolve our teaching methods and technology to
                improve learning outcomes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-purple-600 mb-4">
                <FaMedal className="text-4xl mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Student Success</h3>
              <p className="text-gray-600">
                We measure our success by the achievements and growth of our
                learners.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our diverse team of education experts, technologists, and industry
            veterans are committed to revolutionizing online education.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
              <img
                src={teacher1}
                alt="Team member"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Sarah Lee</h3>
            <p className="text-purple-600 mb-2">Chief Executive Officer</p>
            <p className="text-gray-600 text-sm">
              Former education policy advisor with 15+ years in EdTech
              leadership
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
              <img
                src={teacher2}
                alt="Team member"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Mark Smith</h3>
            <p className="text-purple-600 mb-2">Chief Technology Officer</p>
            <p className="text-gray-600 text-sm">
              Tech innovator focused on creating intuitive learning experiences
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
              <img
                src={teacher3}
                alt="Team member"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Dr. James Carter</h3>
            <p className="text-purple-600 mb-2">Chief Academic Officer</p>
            <p className="text-gray-600 text-sm">
              PhD in Education with expertise in curriculum development
            </p>
          </div>

          {/* Team Member 4 */}
          <div className="text-center">
            <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
              <img
                src={teacher4}
                alt="Team member"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold"> Michael Carter</h3>
            <p className="text-purple-600 mb-2">Head of Student Success</p>
            <p className="text-gray-600 text-sm">
              Dedicated to creating supportive learning environments for all
              students
            </p>
          </div>
        </div>
      </div>

      {/* Milestones Section */}
      <div className="bg-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key milestones that have shaped our growth and impact in the
              education space.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Milestone 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-purple-600 font-bold text-xl mb-2">
                  2018
                </div>
                <h3 className="text-lg font-semibold mb-2">Platform Launch</h3>
                <p className="text-gray-600">
                  Started with 20 courses and a vision to transform online
                  education
                </p>
              </div>

              {/* Milestone 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-purple-600 font-bold text-xl mb-2">
                  2019
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Reached 100,000 Students
                </h3>
                <p className="text-gray-600">
                  Expanded our course offerings and instructor community
                </p>
              </div>

              {/* Milestone 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-purple-600 font-bold text-xl mb-2">
                  2021
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Corporate Training Solutions
                </h3>
                <p className="text-gray-600">
                  Launched enterprise solutions for businesses and organizations
                </p>
              </div>

              {/* Milestone 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-purple-600 font-bold text-xl mb-2">
                  2023
                </div>
                <h3 className="text-lg font-semibold mb-2">Global Expansion</h3>
                <p className="text-gray-600">
                  Expanded to over 150 countries with multi-language support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 container mx-auto px-4">
        <div className="bg-purple-600 text-white rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Join Our Learning Community?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Start your learning journey today and discover why thousands of
            students choose our platform for their educational needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition duration-300">
              Explore Courses
            </button>
            <button className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 px-6 rounded-md transition duration-300">
              Sign Up for Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
