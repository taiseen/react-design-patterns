import { useFormContext } from "../provider/FormProvider";
import { formInputSteps } from "../const/data";

const PreviewJSON = () => {
  const { state } = useFormContext();

  // Build full structure with defaults
  const fullData = {};

  formInputSteps.forEach((step) => {
    if (step.fields && step.fields.length > 0) {
      fullData[step.key] = {};

      step.fields.forEach((field) => {
        // Use saved value or empty string
        fullData[step.key][field.name] =
          state.formData[step.key]?.[field.name] || "";
      });
    }
  });

  const hasAnyData = Object.values(fullData).some((stepData) =>
    Object.values(stepData).some((value) => value !== "" && value != null)
  );

  return (
    <div className="mt-6 p-2 bg-slate-800 rounded border border-slate-700/70">
      <div className="flex pl-0.5 pb-2 mb-2 border-b border-slate-700/70 items-center justify-between">
        <h3 className="text-slate-300 font-medium">Live Form State:</h3>

        {hasAnyData && (
          <button
            type="button"
            className="text-xs text-slate-500 hover:text-slate-300 cursor-pointer duration-300"
            onClick={() =>
              navigator.clipboard.writeText(JSON.stringify(fullData, null, 2))
            }
          >
            Copy JSON
          </button>
        )}
      </div>

      <pre className="text-slate-400 overflow-x-auto whitespace-pre-wrap break-words">
        {/* {JSON.stringify(fullData, null, 2)} */}
        <ColoredJson data={fullData} />
      </pre>
    </div>
  );
};

const ColoredJson = ({ data, depth = 0 }) => {
  const spacer = "  ".repeat(depth); // indentation

  if (data === null) return <span className="text-emerald-400">null</span>;

  if (typeof data !== "object" || Array.isArray(data)) {
    // Handle primitives and arrays (optional: extend if needed)
    const valueStr = JSON.stringify(data);
    return <span className="text-emerald-500 wrap">{valueStr}</span>;
  }

  const entries = Object.entries(data);

  return (
    <span>
      {"{"}
      {entries.length > 0 && "\n"}

      {entries.map(([key, value], index) => (
        <span key={key}>
          {spacer} <span className="text-yellow-600">"{key}"</span>:{" "}
          <ColoredJson data={value} depth={depth + 1} />
          {index < entries.length - 1 ? "," : ""}
          {"\n"}
        </span>
      ))}

      {entries.length > 0 ? spacer : ""}
      {"}"}
    </span>
  );
};

export default PreviewJSON;
