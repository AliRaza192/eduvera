const LessonList = ({ lessons }) => {
    return (
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Course Content
        </h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {lessons.map((lesson, index) => (
            <div
              key={index}
              className={`p-6 ${
                index !== lessons.length - 1
                  ? "border-b border-gray-200"
                  : ""
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium text-gray-900">
                    {lesson.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{lesson.description}</p>
                </div>
                <div className="text-sm text-gray-500 whitespace-nowrap ml-4">
                  {lesson.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default LessonList;