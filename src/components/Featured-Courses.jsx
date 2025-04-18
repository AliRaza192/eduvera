import featureCourse1 from "../assets/feauteCourse1.jpeg";
import featureCourse2 from "../assets/feauteCourse2.jpeg";
import featureCourse3 from "../assets/feauteCourse3.jpeg";
import featureCourse4 from "../assets/feauteCourse4.jpeg";
import person1 from "../assets/person1.jpeg";
import person2 from "../assets/person2.jpeg";
import person3 from "../assets/person3.jpeg";
import person4 from "../assets/person4.jpeg";

const FeaturedCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Strategic Leadership and Management Skills",
      image: featureCourse1,
      hours: "18 Hours",
      certified: true,
      popular: true,
      description: "Lorem ipsum dolor sit amet",
      instructor: {
        name: "Dr. Michael Carter",
        role: "MBA Business Specialist",
        avatar: person1,
      },
    },
    {
      id: 2,
      title: "Cybersecurity Essentials for Modern Enterprises",
      image: featureCourse2,
      hours: "15 Hours",
      certified: true,
      popular: true,
      description: "Lorem ipsum dolor sit amet",
      instructor: {
        name: "John Smith",
        role: "Senior Web Developer",
        avatar: person2,
      },
    },
    {
      id: 3,
      title: "Graphic Design for Beginners",
      image: featureCourse3,
      hours: "12 Hours",
      certified: true,
      popular: true,
      description: "Lorem ipsum dolor sit amet",
      instructor: {
        name: "Emily Davis",
        role: "Professional Designer",
        avatar: person3,
      },
    },
    {
      id: 4,
      title: "Financial Planning and Wealth Management",
      image: featureCourse4,
      hours: "14 Hours",
      certified: true,
      popular: true,
      description: "Lorem ipsum dolor sit amet",
      instructor: {
        name: "Sarah Lee",
        role: "Marketing Expert",
        avatar: person4,
      },
    },
  ];

  return (
    <section className="py-16 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-purple-600 font-medium mb-2">Featured Courses</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Comprehensive Courses for Every Learner
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100"
            >
              {/* Course Image */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Course Details */}
              <div className="p-5">
                {/* Course Metadata */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className="flex items-center text-xs text-gray-600">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-1"></span>
                    <span>{course.hours}</span>
                  </div>

                  {course.certified && (
                    <div className="flex items-center text-xs text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                      <span>Certified</span>
                    </div>
                  )}

                  {course.popular && (
                    <div className="flex items-center text-xs text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                      <span>Popular</span>
                    </div>
                  )}
                </div>

                {/* Course Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>

                {/* Course Description */}
                <p className="text-gray-600 text-sm mb-4">
                  {course.description}
                </p>

                <p className="border border-gray-300 ">

                </p>

                {/* Instructor Info */}
                <div className="flex items-center pt-6 justify-between">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {course.instructor.name}
                    </p>
                    <p className="text-xs text-gray-600">
                      {course.instructor.role}
                    </p>
                  </div>
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
