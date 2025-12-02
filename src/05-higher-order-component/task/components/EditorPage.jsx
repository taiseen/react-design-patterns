const EditorPage = ({ user }) => {
  return (
    <div className="p-4 border border-yellow-700 rounded mb-4 bg-yellow-700/70">
      <h2 className="text-xl font-bold mb-2">✏️ Editor</h2>
      <p>Editing content by {user.name}...</p>
    </div>
  );
};

export default EditorPage;
