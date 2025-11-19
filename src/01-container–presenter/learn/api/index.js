import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 10_000,
    headers: {
        "Content-Type": "application/json",
    },
});


export const fetchUserData = async (userId) => api.get(`/api/users/${userId}`);

export const fetchUserPosts = async (userId) => api.get(`/api/users/${userId}/posts`);

export const updateUserData = async (userId, data) => api.put(`/api/users/${userId}`, data);


export default api;