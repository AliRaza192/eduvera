const Success = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Payment Successful</h1>
      <p className="text-lg text-gray-700 mb-6">
        You have been successfully enrolled in the course.
      </p>
      <a
        href="/dashboard"
        className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800"
      >
        Go to Dashboard
      </a>
    </div>
  );
};

export default Success;
