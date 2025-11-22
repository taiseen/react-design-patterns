import { useEffect, useState } from "react";
import LoadingSpinner from "../common/LoadingSpinner";
import ErrorMessage from "../common/ErrorMessage";
import UserInfoInput from "./UserInfoInput";
import UserInfo from "./UserInfo";

const PresenterUserProfile = ({
  onUpdateUser,
  errorMessage,
  onRetry,
  loading,
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

  if (errorMessage) {
    return (
      <ErrorMessage
        title="User Info Error"
        message={errorMessage}
        onRetry={onRetry}
      />
    );
  }

  if (!user) return null;

  return (
    <div className="flex flex-col md:flex-row gap-8 mb-12 pb-8 border-b border-gray-400">
      <img
        src={user.avatar || "/default-avatar.png"}
        alt={`${user.name}'s avatar`}
        className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 shrink-0"
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
