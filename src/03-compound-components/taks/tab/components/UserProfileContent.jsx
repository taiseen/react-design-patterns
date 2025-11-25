const UserProfileContent = () => {
  const imgUrl =
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&crop=face";

  return (
    <div className="flex items-start gap-6">
      <img
        src={imgUrl}
        alt="User avatar"
        className="w-24 h-24 rounded-full border-2 border-gray-200"
      />

      <div>
        <h3 className="text-xl font-semibold">Alex Morgan</h3>
        <p className="text-gray-200">Frontend Developer • San Francisco</p>
        <p className="mt-2 text-gray-300">
          Passionate about clean code, UI/UX, and open-source contributions.
        </p>

        <button className="mt-3 text-sm bg-indigo-600 text-white px-4 py-1.5 rounded hover:bg-indigo-400 cursor-pointer">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfileContent;
