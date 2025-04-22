import about from "../../assets/about-img.jpeg";

const AboutUs = () => {
  const features = [
    {
      title: "Expert Instructors",
      description: "to learn from industry leading professionals.",
    },
    {
      title: "Flexible Learning",
      description: "to study anytime anywhere at your pace.",
    },
    {
      title: "Interactive Courses",
      description: "to engaging materials for the best experience.",
    },
    {
      title: "Affordable Excellence",
      description: "and high-quality education at a reasonable cost.",
    },
  ];

  const stats = [
    { count: "700+", label: "Students" },
    { count: "120+", label: "Courses" },
    { count: "90+", label: "Teachers" },
    { count: "30+", label: "Partners" },
  ];

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Image */}
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={about}
                  alt="Students learning together"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2 space-y-6">
              <div>
                <p className="text-purple-600 font-medium">About Us</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                  Empowering Minds, Shaping Futures
                </h2>
              </div>

              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>

              {/* Features List */}
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-5 w-5 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="ml-2 text-gray-700">
                      <span className="font-medium">{feature.title}</span>{" "}
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-md font-medium transition duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-12 border-t border-gray-200">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`py-6 text-center ${
                  index !== stats.length - 1 ? "border-r border-gray-200" : ""
                }`}
              >
                <p className="text-3xl font-bold text-gray-900">{stat.count}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
