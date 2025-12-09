import { useState, useEffect, useRef } from "react";

const CommentInput = ({ onAddComment, isDisabled }) => {
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    onAddComment(inputValue); // ✅ call parent handler

    setInputValue("");

    inputRef.current.focus();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
      <input
        type="text"
        ref={inputRef}
        value={inputValue}
        onKeyDown={handleKeyPress}
        placeholder="Write a comment..."
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-1 border border-slate-600 p-2 rounded outline-none"
      />

      <button
        type="submit"
        disabled={!inputValue.trim() || isDisabled}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        Post
      </button>
    </form>
  );
};

export default CommentInput;
