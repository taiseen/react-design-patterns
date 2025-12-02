const ProfilePage = ({ user }) => {
  return (
    <div className="p-4 border border-slate-600 rounded">
      <h2 className="text-xl font-bold mb-1">👤 Profile</h2>
      <div className="grid grid-cols-[auto_1fr] gap-y-1 gap-x-16">
        <span className="font-semibold">Name:</span>
        <span>{user.name}</span>

        <span className="font-semibold">Role:</span>
        <span>{user.role}</span>

        <span className="font-semibold">Permissions:</span>
        <span>
          [{user.permissions.length > 0 ? user.permissions.join(", ") : "none"}]
        </span>
      </div>
    </div>
  );
};

export default ProfilePage;
