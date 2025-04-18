import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import faqsImg from "../assets/faqs.jpeg";

const FAQs = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "What is Virtura?",
      answer:
        "Virtura is an online learning platform offering high-quality courses taught by industry experts.",
    },
    {
      id: 2,
      question: "How do I enroll in a course?",
      answer:
        "To enroll in a course, simply browse our catalog, select your desired course, and click the 'Enroll Now' button. Follow the payment instructions to complete your enrollment.",
    },
    {
      id: 3,
      question: "Do I receive a certificate after completing a course?",
      answer:
        "Yes, upon successful completion of a course, you will receive a verified certificate that you can download, print, and share on your professional profiles.",
    },
    {
      id: 4,
      question: "Can I access the courses on mobile devices?",
      answer:
        "Yes, all Virtura courses are fully responsive and can be accessed on smartphones, tablets, and other mobile devices through our website or dedicated mobile app.",
    },
    {
      id: 5,
      question: "What if I need help during a course?",
      answer:
        "We offer multiple support channels including a dedicated help center, community forums, and direct instructor support. You can reach out anytime you encounter difficulties.",
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="py-16 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* Left column with title and FAQs */}
          <div className="w-full lg:w-7/12 pr-0 lg:pr-8 mb-8 lg:mb-0">
            <p className="text-purple-600 font-medium mb-2">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Helping You Understand
              <br />
              Virtura Better
            </h2>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border border-gray-200 rounded-lg bg-white overflow-hidden"
                >
                  <button
                    className={`w-full flex items-center justify-between p-4 text-left ${
                      openFaq === faq.id
                        ? "bg-purple-600 text-white"
                        : "text-gray-900"
                    }`}
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    {openFaq === faq.id ? <FaChevronUp /> : <FaChevronDown />}
                  </button>

                  {openFaq === faq.id && (
                    <div className="p-4 bg-white text-gray-700">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right column with image and text */}
          <div className="w-full lg:w-5/12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <button className="px-6 py-2 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition-colors">
                Explore More
              </button>
            </div>
            <div className="mt-6 rounded-lg overflow-hidden">
              <img
                src={faqsImg}
                alt="Student studying online"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
