const UserInfoInput = ({
  onInputChange,
  onSaveProfile,
  onCancelEdit,
  userInfo,
}) => {
  return (
    <div className="flex-1 flex flex-col gap-4">
      <input
        type="text"
        placeholder="Name"
        value={userInfo?.name || ""}
        onChange={(e) => onInputChange("name", e.target.value)}
        className="w-2/3 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
      />
      <input
        type="email"
        placeholder="Email"
        value={userInfo?.email || ""}
        onChange={(e) => onInputChange("email", e.target.value)}
        className="w-2/3 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
      />
      <textarea
        placeholder="Bio"
        value={userInfo?.bio || ""}
        onChange={(e) => onInputChange("bio", e.target.value)}
        className="w-2/3 px-4 py-3 border-2 border-gray-300 rounded-lg min-h-[100px] resize-vertical focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
      />

      <div className="flex gap-4 mt-2">
        <button
          type="button"
          onClick={onCancelEdit}
          className="px-6 py-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onSaveProfile}
          className="px-6 py-3 bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-medium rounded-lg shadow-md hover:from-emerald-600 hover:to-emerald-700 hover:-translate-y-0.5 transition-all"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default UserInfoInput;
