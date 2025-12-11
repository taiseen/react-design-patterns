import { useFormContext } from "../provider/FormProvider";
import { formInputSteps } from "../const/data";

const Navigation = () => {
  const { state, dispatch } = useFormContext();

  const currentStep = state.currentStep;

  const isLast = currentStep === formInputSteps.length - 1;
  const isFirst = currentStep === 0;

  const handleNext = () => dispatch({ type: "NEXT" });
  const handlePrev = () => dispatch({ type: "PREV" });
  const handleReset = () => dispatch({ type: "RESET" });
  const handleSubmit = () => dispatch({ type: "SUBMIT" });

  return (
    <div className="flex justify-between mt-6">
      <WizardButton variant="danger" onClick={handleReset}>
        Reset
      </WizardButton>

      <div className="space-x-3">
        {!isFirst && <WizardButton onClick={handlePrev}>Previous</WizardButton>}

        {isLast ? (
          <WizardButton variant="success" type="submit" onClick={handleSubmit}>
            Submit
          </WizardButton>
        ) : (
          <WizardButton onClick={handleNext}>Next</WizardButton>
        )}
      </div>
    </div>
  );
};

const WizardButton = ({
  variant = "primary",
  type = "button",
  children,
  onClick,
}) => {
  const BUTTON_STYLES = {
    base: "px-4 py-2 rounded cursor-pointer duration-300 text-slate-300",
    danger: "border border-slate-800 hover:text-white hover:bg-red-800",
    primary: "bg-slate-600 text-slate-200 hover:bg-slate-500",
    success: "bg-green-600 text-white hover:bg-green-500",
  };

  const className = `${BUTTON_STYLES.base} 
  ${BUTTON_STYLES[variant] || BUTTON_STYLES.primary}`;

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Navigation;
