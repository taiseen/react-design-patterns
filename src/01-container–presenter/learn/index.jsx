import { fetchUserData, fetchUserPosts, updateUserData } from "./api";
import { useEffect, useState } from "react";
import PresenterUserProfile from "./user";
import PresenterPosts from "./posts";
import "./styles/index.css";

const ContainerUserProfile = ({ userId = 1 }) => {
	const [user, setUser] = useState(null);
	const [posts, setPosts] = useState([]);

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		loadData();
	}, [userId]);

	const loadData = async () => {
		setLoading(true);
		setError(null);

		try {
			const [userRes, postsRes] = await Promise.all([
				fetchUserData(userId),
				fetchUserPosts(userId),
			]);

			setUser(userRes.data);
			setPosts(postsRes.data);
		} catch (err) {
			// Axios errors have rich info
			const axiosError = err.response?.data?.message || err.message;
			const message = axiosError || "Failed to load profile";
			setError(message);
		} finally {
			setLoading(false);
		}
	};

	const handleUpdateUser = async (updatedData) => {
		try {
			const response = await updateUserData(user.id, updatedData);
			setUser(response.data);
			return { success: true };
		} catch (err) {
			const axiosError = err.response?.data?.message || err.message;
			const message = axiosError || "Failed to update profile";
			return { success: false, error: message };
		}
	};

	const handleRetry = () => loadData();

	return (
		<div className="user-profile relative">
			<button
				type="button"
				title="Reload data"
				className="absolute top-1 right-1 text-2xl cursor-pointer"
				onClick={handleRetry}
			>
				🔄️
			</button>

			<PresenterUserProfile
				onUpdateUser={handleUpdateUser}
				onRetry={handleRetry}
				loading={loading}
				error={error}
				user={user}
			/>

			<PresenterPosts
				onRetry={handleRetry}
				loading={loading}
				error={error}
				posts={posts}
			/>
		</div>
	);
};

export default ContainerUserProfile;
