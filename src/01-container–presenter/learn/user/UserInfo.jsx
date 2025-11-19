const UserInfo = ({ user, onEditing }) => {
	return (
		<div className="profile-info">
			<h1>{user.name}</h1>

			<p className="email">{user.email}</p>
			<p className="bio">{user.bio}</p>

			<button
				type="button"
				onClick={() => onEditing(true)}
				className="edit-btn"
			>
				Edit Profile
			</button>
		</div>
	);
};

export default UserInfo;
