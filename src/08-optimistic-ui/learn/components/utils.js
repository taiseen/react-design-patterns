export const sendLikeToServer = async (postId) => {

    // ⏱️ Simulate network delay (700ms)
    await new Promise((r) => setTimeout(r, 700));

    // 🎲 20% chance of failure (for testing rollback)
    if (Math.random() < 0.5) throw new Error("Network failed");

    console.log(`✅ Sent a like for post ID: ${postId}`);

    return { success: true };
}