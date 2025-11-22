const LoadingSpinner = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] py-8">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-4"></div>
      <p className="text-gray-500 font-medium">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
