const UserInfo = ({ user, onEditing }) => {
  return (
    <div className="flex flex-col justify-center flex-1 text-slate-300">
      <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
      <p className="text-lg mb-4 font-medium">{user.email}</p>
      <p className="leading-relaxed mb-6">{user.bio}</p>

      <button
        type="button"
        onClick={() => onEditing(true)}
        className="self-start px-6 py-3 bg-linear-to-r from-blue-500 to-blue-700 text-white font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 hover:-translate-y-0.5 transform transition-all cursor-pointer duration-300"
      >
        Edit Profile
      </button>
    </div>
  );
};

export default UserInfo;
