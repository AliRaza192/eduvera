const Cancel = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Payment Cancelled</h1>
      <p className="text-lg text-gray-700 mb-6">
        Your payment was not completed. You can try again anytime.
      </p>
      <a
        href="/courses"
        className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800"
      >
        Back to Courses
      </a>
    </div>
  );
};

export default Cancel;
