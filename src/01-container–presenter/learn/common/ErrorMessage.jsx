import Button from "@/components/ui/Button";

const ErrorMessage = ({ title, message = "local-server down", onRetry }) => {
  if (!message) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] py-8 mx-4 bg-red-100 border border-red-200 rounded-xl text-center mb-2">
      <h3 className="text-xl font-semibold text-red-600 mb-2">Oops! {title}</h3>
      <p className="mb-6 text-lg text-red-600">{message} - server down</p>

      <Button
        type="button"
        variant="danger"
        className="w-fit"
        onClick={onRetry}
      >
        Try Again
      </Button>
    </div>
  );
};

export default ErrorMessage;
