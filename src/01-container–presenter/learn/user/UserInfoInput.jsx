const UserInfoInput = ({
	onInputChange,
	onSaveProfile,
	onCancelEdit,
	userInfo,
}) => {
	return (
		<div className="profile-form">
			<input
				type="text"
				placeholder="Name"
				value={userInfo?.name}
				onChange={(e) => onInputChange("name", e.target.value)}
			/>

			<input
				type="email"
				placeholder="Email"
				value={userInfo?.email}
				onChange={(e) => onInputChange("email", e.target.value)}
			/>

			<textarea
				placeholder="Bio"
				value={userInfo?.bio}
				onChange={(e) => onInputChange("bio", e.target.value)}
			/>

			<div className="form-actions">
				<button type="button" onClick={onCancelEdit}>
					Cancel
				</button>

				<button type="button" onClick={onSaveProfile}>
					Save
				</button>
			</div>
		</div>
	);
};

export default UserInfoInput;
