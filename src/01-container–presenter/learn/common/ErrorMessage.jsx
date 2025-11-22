const ErrorMessage = ({ title, message = "local-server down", onRetry }) => {
  if (!message) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] py-8 mx-4 bg-red-100 border border-red-200 rounded-xl text-center mb-2">
      <h3 className="text-xl font-semibold text-red-600 mb-2">Oops! {title}</h3>
      <p className="mb-6 text-lg text-red-600">{message} - server down</p>
      <button
        type="button"
        onClick={onRetry}
        className="px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 active:translate-y-0.5 transition cursor-pointer"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorMessage;
