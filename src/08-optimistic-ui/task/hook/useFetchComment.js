import { createComment, getComments } from "../components/utils";
import { useState, useEffect } from "react";

const useFetchComment = (postId = 1) => {
    // 💬 Real comments (source of truth)
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 📥 Fetch real comments on mount
    useEffect(() => {
        const loadComments = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getComments(postId);
                setComments(data);
            } catch (err) {
                setError("Failed to load comments");
            } finally {
                setLoading(false);
            }
        }

        loadComments();
    }, [postId]);


    // ✅ Add a function to create comment AND update real state
    const addComment = async (cId, text) => {
        const comeFromDB = await createComment(postId, cId, text);

        setComments((prev) => {
            // [...prev, realComment]

            // Remove optimistic version if it exists, then add real one
            const afterRemoveOptimisticData = prev.filter(c => c.id !== cId);
            return [...afterRemoveOptimisticData, comeFromDB];
        });
    }

    // 🔄 rollback trigger
    const rollbackComments = () => setComments((prev) => [...prev]); // no-op to trigger re-render

    return {
        rollbackComments,
        addComment,
        comments,
        loading,
        error,
    };
}

export default useFetchComment