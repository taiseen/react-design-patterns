export const TextField = ({ field, value, onChange, isError }) => (
  <input
    value={value}
    type={field.type}
    placeholder={field.placeholder}
    onChange={(e) => onChange(e.target.value)}
    className={`w-full p-2 bg-slate-800 text-slate-200 rounded focus:outline-none focus:ring-1 placeholder:text-slate-600 
      ${
        isError
          ? "border-red-500 focus:ring-red-500"
          : "border-slate-600 focus:ring-slate-500"
      }`}
  />
);

export const TextAreaField = ({ field, value, onChange, isError }) => (
  <textarea
    // rows="3"
    style={{
      minHeight: "5em",
      maxHeight: "15em",
      overflowY: "auto", // Scrollbar when max reached
    }}
    value={value}
    placeholder={field.placeholder}
    onChange={(e) => onChange(e.target.value)}
    className={`w-full p-2 bg-slate-800 text-slate-200 rounded focus:outline-none focus:ring-1 placeholder:text-slate-600 
         ${
           isError
             ? "border-red-500 focus:ring-red-500"
             : "border-slate-600 focus:ring-slate-500"
         }`}
  />
);

export const CheckboxField = ({ field, value, onChange }) => (
  <label className="flex items-center cursor-pointer gap-2">
    <input
      type="checkbox"
      checked={!!value}
      className="h-4 w-4"
      onChange={(e) => onChange(e.target.checked)}
    />

    <span className="text-slate-300">{field.label}</span>
  </label>
);

export const RadioField = ({ field, value, onChange, isError, stepKey }) => (
  <div>
    <div className="flex flex-wrap gap-4">
      {field.options.map((option) => (
        <label
          key={option.value}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <input
            type="radio"
            name={`${stepKey}-${field.name}`}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className="h-4 w-4 text-slate-400 bg-slate-800 border-slate-600 focus:ring-slate-500"
          />

          <span className="text-slate-200">{option.label}</span>
        </label>
      ))}
    </div>

    {isError && (
      <p className="text-red-400 text-xs mt-1">Please select an option</p>
    )}
  </div>
);

export const SelectField = ({ field, value, onChange, isError }) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className={`w-full p-2 bg-slate-800 text-slate-200 rounded focus:outline-none focus:ring-1 
        ${
          isError
            ? "border-red-500 focus:ring-red-500"
            : "border-slate-600 focus:ring-slate-500"
        }`}
  >
    {field.options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);
