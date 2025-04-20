const TopicsList = ({ topics }) => {
    return (
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          What You'll Learn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((topic, index) => (
            <div key={index} className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">{topic}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TopicsList;