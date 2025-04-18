import React from 'react';

const GetStarted = () => {
  return (
    <section className="py-16 bg-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-purple-600 font-medium mb-2">Get Started</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Prepared to Start Your Journey? Let's Discuss!
          </h2>
          <p className="text-gray-600 mt-2 max-w-3xl mx-auto mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="px-6 py-2 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;