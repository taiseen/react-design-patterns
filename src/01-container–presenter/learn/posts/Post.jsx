const Post = ({ post }) => {
  return (
    <div className="bg-gray-800 border border-gray-500 rounded-xl p-6 hover:bg-gray-700 hover:border-gray-400 hover:-translate-y-0.5 transform transition-all shadow-sm cursor-pointer text-slate-400">
      <h3 className="text-xl font-semibold text-gray-300 mb-3 leading-tight">
        {post.title}
      </h3>

      <p className="mb-4 line-clamp-3">{post.content.substring(0, 150)}...</p>

      <span className="text-sm text-gray-500 font-medium">
        {new Date(post.createdAt).toLocaleDateString()}
      </span>
    </div>
  );
};

export default Post;
