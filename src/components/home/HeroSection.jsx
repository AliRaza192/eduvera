import image1 from "../../assets/01-hero-img.jpeg";
import image2 from "../../assets/02-hero-img.jpeg";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Text Content */}
          <div className="lg:w-1/2 pr-0 lg:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Transform Your Future with Expert-Led Online{" "}
              <span className="text-purple-600">Courses</span>
            </h1>

            <p className="text-lg text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-md font-medium transition duration-300">
                Get Started
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-700 px-6 py-2.5 rounded-md font-medium border border-gray-300 transition duration-300">
                Free Trial
              </button>
            </div>
          </div>

          {/* Right Image with Stats */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
            <div className="flex gap-2 border-l border-blue-200 pl-2">
              {/* First image with stats underneath */}
              <div className="w-1/2">
                <div className="rounded-lg overflow-hidden">
                  <img src={image1} className="w-full h-auto" />
                </div>

                {/* Stats Box under first image */}
                <div className="bg-white rounded-lg shadow-md p-4 flex justify-around mt-4 mx-auto border  border-purple-700 ">
                  <div className="text-center">
                    <p className="text-xl md:text-2xl font-bold text-gray-900">
                      700+
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">Students</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl md:text-2xl font-bold text-gray-900">
                      120+
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">Courses</p>
                  </div>
                </div>
              </div>

              {/* Second Image - full height */}
              <div className="rounded-lg overflow-hidden w-1/2">
                <img
                  src={image2}
                  alt="Student studying"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
