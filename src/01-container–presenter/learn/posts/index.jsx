import LoadingSpinner from "../common/LoadingSpinner";
import ErrorMessage from "../common/ErrorMessage";
import Post from "./Post";

const PresenterPosts = ({ posts, loading, errorMessage, onRetry }) => {
  if (loading) return <LoadingSpinner message="Loading posts..." />;

  if (errorMessage) {
    return (
      <ErrorMessage
        title="Posts Error"
        message={errorMessage}
        onRetry={onRetry}
      />
    );
  }

  const totalPosts = posts.length;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span>Recent Posts</span>({totalPosts})
      </h2>

      {totalPosts === 0 ? (
        <p className="text-gray-500 italic text-center py-12">No posts yet.</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PresenterPosts;
