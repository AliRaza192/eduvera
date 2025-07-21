import React from 'react';

const ProgressBar = ({ percentage }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-3 mt-2 mb-4 relative">
      <div
        className="bg-gradient-to-r from-purple-600 to-indigo-600 h-3 rounded-full transition-all duration-300"
        style={{ width: `${Math.min(percentage, 100)}%` }}
      >
        <span className="absolute right-0 -top-6 text-sm font-semibold text-gray-700">
          {Math.round(percentage)}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;