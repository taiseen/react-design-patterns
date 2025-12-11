import { CheckboxField, RadioField, SelectField, TextAreaField, TextField } from "./Inputs";
import { useFormContext } from "../provider/FormProvider";

const FormInput = ({ stepObjectInfo }) => {
  const { state, dispatch } = useFormContext();

  const data = state.formData[stepObjectInfo.key] || {};

  const isFieldValid = (field) => {
    if (!field.required) return true;

    const value = data[field.name];

    // For select: value must not be empty string
    // For others: must be non-empty string or true (for checkbox)
    if (field.type === "select") return value !== undefined && value !== "";

    if (typeof value === "string") return value.trim() !== "";

    return value !== undefined && value !== null;
  };

  const handleChange = (stepKey, fieldName, value) => {
    dispatch({
      type: "UPDATE_FIELD",
      payload: { stepKey, field: fieldName, value },
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-slate-400">
        {stepObjectInfo.title}
      </h2>

      {stepObjectInfo.fields.map((field) => {
        const value = data[field.name] || (field.type === "select" ? "" : "");
        const isValid = isFieldValid(field);
        const isError = field.required && !isValid;

        return (
          <div key={field.name}>
            <label className="block text-slate-400 text-sm mb-1">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>

            {field.type === "radio" ? (
              <RadioField
                field={field}
                value={value}
                onChange={(val) =>
                  handleChange(stepObjectInfo.key, field.name, val)
                }
                isError={isError}
                stepKey={stepObjectInfo.key}
              />
            ) : field.type === "textarea" ? (
              <TextAreaField
                field={field}
                value={value}
                onChange={(val) =>
                  handleChange(stepObjectInfo.key, field.name, val)
                }
                isError={isError}
              />
            ) : field.type === "checkbox" ? (
              <CheckboxField
                field={field}
                value={value}
                onChange={(val) =>
                  handleChange(stepObjectInfo.key, field.name, val)
                }
                isError={isError}
              />
            ) : field.type === "select" ? (
              <SelectField
                field={field}
                value={value}
                onChange={(val) =>
                  handleChange(stepObjectInfo.key, field.name, val)
                }
                isError={isError}
              />
            ) : (
              <TextField
                field={field}
                value={value}
                onChange={(val) =>
                  handleChange(stepObjectInfo.key, field.name, val)
                }
                isError={isError}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FormInput;
