const ErrorMessage = ({ error, onRetry }) => {
	if (!error) return null;

	return (
		<div className="error-container">
			<h3>Oops! Something went wrong</h3>
			<p>{error}</p>

			<button type="button" onClick={onRetry}>
				Try Again
			</button>
		</div>
	);
};

export default ErrorMessage;
