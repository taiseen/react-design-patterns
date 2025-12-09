const CommentList = ({ allComments }) => {
  return (
    <div className="space-y-3">
      {allComments.length === 0 ? (
        <p className="text-slate-400 italic text-center">
          No comments yet. Be the first!
        </p>
      ) : (
        allComments.map((comment) => (
          <div
            key={comment.id}
            className={`p-2 border bg-slate-700 rounded 
              ${
                comment.isOptimistic
                  ? " border-yellow-300"
                  : " border-slate-600"
              }`}
          >
            <p>{comment.text}</p>
            <p className="text-xs text-slate-500 mt-1">{comment.createdAt}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CommentList;
