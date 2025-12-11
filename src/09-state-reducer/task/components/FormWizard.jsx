import { useFormContext } from "../provider/FormProvider";
import { formInputSteps } from "../const/data";
import PreviewHTML from "./PreviewHTML";
import PreviewJSON from "./PreviewJSON";
import ProgressBar from "./ProgressBar";
import Navigation from "./Navigation";
import FormInput from "./FormInput";

const FormWizard = () => {
  const { state } = useFormContext();

  const currentStepObject = formInputSteps[state.currentStep];

  const renderStep = () => {
    const lastStep = formInputSteps.length - 1;

    return state.currentStep === lastStep ? (
      <PreviewHTML />
    ) : (
      <FormInput stepObjectInfo={currentStepObject} />
    );
  };

  return (
    <div className="p-5 bg-slate-900/50 text-slate-200 rounded-lg shadow-xl">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Multi-Step Form Wizard
      </h1>

      <ProgressBar total={formInputSteps.length} />

      {renderStep()}

      <Navigation />

      <PreviewJSON />
    </div>
  );
};

export default FormWizard;
