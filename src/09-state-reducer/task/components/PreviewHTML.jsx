import { useFormContext } from "../provider/FormProvider";
import { formInputSteps } from "../const/data";

const PreviewHTML = () => {
  const { state } = useFormContext();

  const { formData } = state;

  // Build a flat map of all field definitions: { fieldName => { label, type, ... } }
  const allFieldDefs = {};

  formInputSteps.forEach((step) => {
    if (step.fields) {
      step.fields.forEach((field) => {
        allFieldDefs[field.name] = {
          label: field.label,
          type: field.type,
          options: field.options, // for radio/select
        };
      });
    }
  });

  // Build flat data object from formData
  const flatData = {};

  formInputSteps.forEach((step) => {
    const stepData = formData[step.key] || {};

    Object.entries(stepData).forEach(([name, value]) => {
      flatData[name] = value;
    });
  });

  // Helper: format value for display
  const formatValue = (fieldName, value) => {
    if (value == null || value === "") return "—";

    const fieldDef = allFieldDefs[fieldName];
    if (!fieldDef) return String(value);

    // Handle special types
    if (fieldDef.type === "checkbox") {
      return value ? "Yes" : "No";
    }

    if (fieldDef.type === "radio" || fieldDef.type === "select") {
      const selectedOption = fieldDef.options?.find(
        (opt) => opt.value === value
      );

      return selectedOption ? selectedOption.label : String(value);
    }

    return String(value);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-slate-200">Review Your Info</h2>

      <div className="bg-slate-800 p-4 rounded space-y-3">
        {Object.entries(flatData).map(([fieldName, value]) => (
          <div key={fieldName} className="grid grid-cols-2">
            <span className="text-slate-400 min-w-[120px]">
              {allFieldDefs[fieldName]?.label || fieldName}:
            </span>

            <span className="text-slate-300">
              {formatValue(fieldName, value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewHTML;
