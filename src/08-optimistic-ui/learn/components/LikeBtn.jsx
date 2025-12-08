import { useState, useOptimistic, startTransition } from "react";
import { sendLikeToServer } from "./utils";

const LikeBtn = ({ postId, initialLikes = 0 }) => {
  // 🧠 Real, committed state (source of truth)
  const [likes, setLikes] = useState(initialLikes);

  // 🎭 Optimistic UI state + updater
  const updater = (currentLikes, predict) => currentLikes + predict;
  const [optimisticLikes, addOptimisticLike] = useOptimistic(likes, updater);

  const handleLike = async () => {
    // 💡 Instantly show the like (before server responds)
    addOptimisticLike(1); // predicted delta value

    try {
      // 🌐 Send to server
      await sendLikeToServer(postId);

      // ✅ On success: commit the real state
      setLikes((prev) => prev + 1);
    } catch (err) {
      // ❌ On failure: rollback UI to real state
      console.error("Like failed:", err);
      setLikes((s) => s); // 🔄 Forces optimistic UI to revert
      alert("❌ Failed to send like. Please try again.");
    }
  };

  return (
    <div className="text-4xl border border-gray-400 rounded-lg p-4">
      <button
        onClick={() => startTransition(async () => await handleLike())}
        className="cursor-pointer pr-2.5 py-2"
      >
        ❤️ {optimisticLikes}
      </button>
    </div>
  );
};

export default LikeBtn;
