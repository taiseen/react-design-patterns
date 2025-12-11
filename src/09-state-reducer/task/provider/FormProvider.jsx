import { createContext, useReducer, useMemo, use } from "react";
import { formInputSteps, initialState } from "../const/data";
import { formReducer } from "../reducers/form-reducer";

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const progress = useMemo(() => {
    const totalSteps = formInputSteps.length - 1;
    const currentStepIndex = state.currentStep;

    // Special: if on Step 1 (index 0),
    // show 0% until user fills ANY required field
    if (currentStepIndex === 0) {
      const step1Data = state.formData.step1 || {};

      const hasAnyInput = formInputSteps[0].fields
        .filter((f) => f.required)
        .some((field) => step1Data[field.name]?.toString().trim() !== "");

      if (!hasAnyInput) return 0;
    }

    const percent = (currentStepIndex / totalSteps) * 100;

    return Math.min(100, Math.floor(percent));
  }, [state.currentStep, state.formData]);

  const shareInsideDom = { state, dispatch, progress };

  return <FormContext value={shareInsideDom}>{children}</FormContext>;
};

export const useFormContext = () => use(FormContext);

export default FormProvider;
