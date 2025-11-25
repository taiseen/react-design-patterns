import { aiModels, options } from "./data";
import Select from "./SelectPattern";

const DisplaySelect = () => {
  const selectOptions = aiModels.map((ai) => ({
    value: ai.model, // use the actual model ID as value
    label: `${ai.icon} ${ai.label}`, // show icon + label
  }));

  // 🔍 Find the default model (for initial selection)
  const defaultModel =
    aiModels.find((m) => m.isDefault)?.model || aiModels[0]?.model;

  const onSelect = (selectedAi) => {
    console.log("Selected AI Model:", selectedAi);
    // Do something with the selected AI model
    // alert(`Selected AI Model: ${selectedAi.label} (${selectedAi.model})`);
  };

  return (
    <div className="w-1/2 mx-auto p-6">
      <Select
        direction="bottom"
        options={options}
        placeholder="Pick a fruit"
        defaultValue="banana"
        onChange={(value) => console.log("Selected:", value)}
      />

      <div className="mt-6">
        <label className="block text-sm font-medium text-yellow-500 mb-1">
          Select AI Model
        </label>
        
        <Select
          direction="top"
          options={selectOptions}
          defaultValue={defaultModel}
          placeholder="Choose an AI model"
          onChange={(selectedModel) => {
            // Find full object to pass up (optional)
            const selectedAi = aiModels.find(
              (ai) => ai.model === selectedModel
            );

            onSelect(selectedAi); // or just pass selectedModel
          }}
        />
      </div>
    </div>
  );
};

export default DisplaySelect;
