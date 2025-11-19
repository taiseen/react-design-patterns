import ErrorMessage from "../common/ErrorMessage";
import LoadingSpinner from "../common/LoadingSpinner";
import Post from "./Post";

const PresenterPosts = ({ posts, loading, error, onRetry }) => {
	if (loading) return <LoadingSpinner message="Loading posts..." />;

	if (error) {
		return (
			<ErrorMessage
				title="Oops! Posts Error"
				onRetry={onRetry}
				message={error}
			/>
		);
	}

	const totalPosts = posts.length;

	return (
		<div className="user-posts">
			<h2>Recent Posts ({totalPosts})</h2>

			{totalPosts === 0 ? (
				<p>No posts yet.</p>
			) : (
				posts.map((post) => <Post key={post.id} post={post} />)
			)}
		</div>
	);
};

export default PresenterPosts;
