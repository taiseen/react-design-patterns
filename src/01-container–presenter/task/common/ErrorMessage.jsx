const ErrorMessage = ({ message }) => {
	return (
		<div className="h-screen flex items-center justify-center text-3xl text-red-600">
			{message}
		</div>
	);
};

export default ErrorMessage;
