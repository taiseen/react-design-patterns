export const generateId = () => crypto.randomUUID();



export const updater = (currentComments, predicatedComment) => [
    ...currentComments,
    predicatedComment,
];



// ===== MOCK SERVER (in-memory) =====
const mockComments = {
    1: [
        { id: generateId(), text: "Great post!", createdAt: "2025-04-01" },
        { id: generateId(), text: "Thanks for sharing", createdAt: "2025-04-02" },
    ],
};



// Simulate GET /api/posts/:id/comments
export async function getComments(postId) {
    await new Promise(r => setTimeout(r, 300)); // network delay

    return mockComments[postId] || [];
}



// Simulate POST /api/posts/:id/comments
export async function createComment(postId, cId, text) {
    await new Promise(r => setTimeout(r, 800)); // slower than read

    if (Math.random() < 0.4) {
        throw new Error("Failed to save comment");
    }

    const newComment = {
        id: cId,
        text,
        createdAt: new Date().toISOString().split('T')[0], // e.g., "2025-12-08"
    };

    if (!mockComments[postId]) mockComments[postId] = [];

    mockComments[postId].push(newComment);

    return newComment;
}