import userExamples from "../utils/userExamples";

const Roles = ({ userId = "", setUser }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      {userExamples.map((user) => (
        <div
          key={user.id}
          onClick={() => setUser(user)}
          className={`p-4 border transition rounded ${
            userId === user.id
              ? "border-blue-300 bg-blue-100/80 cursor-not-allowed"
              : "border-gray-700 hover:bg-gray-400 cursor-pointer"
          }`}
        >
          <pre className="whitespace-pre-wrap text-sm font-mono bg-slate-600 p-3 rounded">
            {`{
  id: "${user.id}",
  name: "${user.name}",
  role: "${user.role}",
  permissions: [${user.permissions.map((p) => `"${p}"`).join(", ")}]
}`}
          </pre>

          {userId === user.id ? (
            <p className="mt-2 text-sm text-slate-900">Current user context</p>
          ) : (
            <p className="mt-2 text-sm text-gray-600">
              Click to apply this user context
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Roles;
