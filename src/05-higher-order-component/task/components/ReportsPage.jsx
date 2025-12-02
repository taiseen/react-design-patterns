const ReportsPage = ({ user }) => {
  return (
    <div className="p-4 border border-indigo-700 rounded mb-4 bg-indigo-700/70">
      <h2 className="text-xl font-bold mb-2">📈 Reports</h2>
      <p>Generating reports by {user.name}...</p>
    </div>
  );
};

export default ReportsPage;
