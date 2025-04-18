import React from 'react';
import testimonial1 from "../assets/testimonial1.jpeg";
import testimonial2 from "../assets/testimonial2.jpeg";
import testimonial3 from "../assets/testimonial3.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ethan Carter",
      role: "Software Engineer",
      avatar: testimonial1,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      id: 2,
      name: "Lila Patel",
      role: "Data Analyst",
      avatar: testimonial2,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      id: 3,
      name: "James Nguyen",
      role: "Digital Marketing Specialist",
      avatar: testimonial3,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-purple-600 font-medium mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Our Community
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="border border-gray-200 rounded-lg p-8 text-center"
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
              <p className="text-purple-600 text-sm mb-4">{testimonial.role}</p>
              <p className="text-gray-600 text-sm">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;