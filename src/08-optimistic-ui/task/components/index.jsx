import { useState, useOptimistic, startTransition } from "react";
import { generateId, updater } from "./utils";
import useFetchComment from "../hook/useFetchComment";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

const OptimisticComment = ({ postId = 1 }) => {
  const {
    rollbackComments,
    addComment,
    comments,
    loading,
    error,
  } = useFetchComment(postId);

  const [errorSms, setErrorSms] = useState("");

  // 🎭 Optimistic comments + updater
  const [optimisticData, addOptimisticData] = useOptimistic(comments, updater);

  const handleAddComment = async (text) => {
    const id = generateId();

    const optimisticItem = {
      id,
      text,
      createdAt: "Sending...",
      isOptimistic: true,
    };

    addOptimisticData(optimisticItem);

    try {
      await addComment(id, text); // ← Hook handles real update
    } catch (err) {
      rollbackComments(); // ← Rollback optimistic UI, trigger reconciliation
      setErrorSms(err.message);
    }
  };

  // 🖼️ Render
  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="max-w-2xl mx-auto p-4 border border-slate-600 rounded-lg mt-6 relative">
      {errorSms && (
        <div className="text-red-400 text-right">
          Network Error:- {errorSms}
        </div>
      )}

      <h1 className="text-2xl font-bold mb-4">Your Comments</h1>

      <CommentInput
        isDisabled={loading}
        onAddComment={(userInput) => {
          setErrorSms("");
          startTransition(async () => handleAddComment(userInput));
        }}
      />

      <CommentList allComments={optimisticData} />
    </div>
  );
};

const Loading = () => (
  <div className="max-w-2xl mx-auto p-4 text-center text-lg text-indigo-500">
    Loading comments...
  </div>
);

const Error = ({ message }) => (
  <div className="max-w-2xl mx-auto p-4 text-center text-lg text-red-500">
    {message}
  </div>
);

export default OptimisticComment;
