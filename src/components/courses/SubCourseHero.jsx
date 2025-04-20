const SubCourseHero = ({ subCourse }) => {
    return (
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        <div className="lg:w-1/2">
          <img
            src={subCourse.image}
            alt={subCourse.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {subCourse.name}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {subCourse.longDescription}
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <span className="text-gray-500 text-sm">Duration</span>
            <p className="font-medium text-gray-900">{subCourse.duration}</p>
          </div>
          <button className="bg-purple-700 text-white py-3 px-6 rounded-md hover:bg-purple-800 transition font-semibold">
            Start Learning
          </button>
        </div>
      </div>
    );
  };
  
  export default SubCourseHero;