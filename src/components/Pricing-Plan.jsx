import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "Virtura Basic Plan",
      price: "$124",
      isPopular: false,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      features: [
        "Access to 5 courses",
        "Community forum support",
        "Completion certificates"
      ],
      buttonColor: "bg-purple-600"
    },
    {
      id: 2,
      name: "Virtura Premium Plan",
      price: "$312",
      isPopular: true,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      features: [
        "All Pro Plan features",
        "1-on-1 mentoring sessions",
        "Live webinars and workshops",
        "Personalized learning roadmap"
      ],
      buttonColor: "bg-white text-purple-700"
    },
    {
      id: 3,
      name: "Virtura Pro Plan",
      price: "$246",
      isPopular: false,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      features: [
        "Unlimited course access",
        "Priority instructor support",
        "Completion certificates"
      ],
      buttonColor: "bg-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-purple-600 font-medium mb-2">Pricing Plan</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Affordable Pricing, Exceptional Value
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`rounded-xl overflow-hidden shadow-lg ${
                plan.isPopular ? 'bg-purple-600 text-white' : 'bg-white'
              }`}
            >
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-1">
                  {plan.price} <span className="text-base font-normal">/month</span>
                </h3>
                <h4 className="text-xl font-bold mb-3">{plan.name}</h4>
                <p className={`text-sm mb-6 ${plan.isPopular ? 'text-purple-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <FaCheck className={`mr-2 ${plan.isPopular ? 'text-white' : 'text-purple-600'}`} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  className={`w-full py-3 rounded-full ${plan.isPopular ? 'bg-white text-purple-700' : 'bg-purple-600 text-white'} font-medium hover:opacity-90 transition-opacity`}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;