const Light = () => {
  console.log("[Light] rendered");

  return (
    <div className="p-4">
      <h2>Light Component</h2>

      <p>This component is small and always included in the initial bundle.</p>
    </div>
  );
};

export default Light;
