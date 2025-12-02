const AdminPanel = ({ user }) => {
  return (
    <div className="p-4 border border-green-700 rounded mb-4 bg-green-700/70">
      <h2 className="text-xl font-bold mb-2">🛡️ Admin Panel</h2>
      <p>Welcome, super admin - {user.name}!</p>
    </div>
  );
};

export default AdminPanel;
