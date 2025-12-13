import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeViewer = ({ codeSnippet = "", icon = "💥" }) => {
  return (
    <div className="relative min-w-[500px] self-start px-2 rounded border border-slate-600">
      <h3 className="font-mono text-sm text-slate-400 absolute top-2.5 right-3.5">
        {icon}Code
      </h3>

      <SyntaxHighlighter
        showLineNumbers={true}
        language="javascript"
        wrapLongLines={true}
        wrapLines={true}
        style={oneDark}
      >
        {codeSnippet}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeViewer;
