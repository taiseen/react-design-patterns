import Button from "../../../components/ui/Button";
import useClipboard from "../hooks/useClipboard";

const CopyDemo = () => {
  const { copy, copied, error } = useClipboard();

  const textToCopy = "Hello, world!";

  return (
    <div className="p-4 flex flex-col gap-4 items-center">
      <p className="text-2xl">Text: "{textToCopy}"</p>

      <Button onClick={() => copy(textToCopy)}>
        {copied ? "✅ Copied!" : "📋 Copy"}
      </Button>

      {error && <p className="text-red-500">Error: {error}</p>}
    </div>
  );
};

export default CopyDemo;
