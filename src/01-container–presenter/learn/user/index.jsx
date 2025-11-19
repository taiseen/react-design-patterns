import { useEffect, useState } from "react";
import LoadingSpinner from "../common/LoadingSpinner";
import ErrorMessage from "../common/ErrorMessage";
import UserInfoInput from "./UserInfoInput";
import UserInfo from "./UserInfo";

const PresenterUserProfile = ({
	onUpdateUser,
	onRetry,
	loading,
	error,
	user,
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [formError, setFormError] = useState(null);
	const [userInfo, setUserInfo] = useState(user);

	useEffect(() => {
		setUserInfo({ ...user });
	}, [user]);

	const handleInputChange = (field, value) => {
		setUserInfo((prev) => ({ ...prev, [field]: value }));

		// Clear form error when user starts typing
		if (formError) setFormError(null);
	};

	const handleSaveProfile = async () => {
		const result = await onUpdateUser(userInfo);

		if (result.success) {
			setIsEditing(false);
			setFormError(null);
		} else {
			setFormError(result.error);
		}
	};

	const handleCancelEdit = () => {
		setIsEditing(false);
		setFormError(null);

		// Reset form data
		if (user) setUserInfo({ ...user });
	};

	if (loading) return <LoadingSpinner message="Loading user info..." />;

	if (error) {
		return (
			<ErrorMessage
				title="Oops! User Info Error"
				onRetry={onRetry}
				message={error}
			/>
		);
	}

	if (!user) return null;

	return (
		<div className="profile-header">
			<img
				src={user.avatar || "/default-avatar.png"}
				alt={`${user.name}'s avatar`}
				className="avatar"
			/>

			{isEditing ? (
				<UserInfoInput
					userInfo={userInfo}
					onCancelEdit={handleCancelEdit}
					onInputChange={handleInputChange}
					onSaveProfile={handleSaveProfile}
				/>
			) : (
				<UserInfo user={user} onEditing={setIsEditing} />
			)}
		</div>
	);
};

export default PresenterUserProfile;
