import { useFormContext } from "../provider/FormProvider";

const ProgressBar = ({ total = 0 }) => {
  const { progress, state } = useFormContext();

  const current = state.currentStep + 1;

  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm text-slate-400 mb-1">
        <span>{progress}%</span>
        <span>
          Step <span className="text-slate-300">{current}</span> of {total}
        </span>
      </div>

      <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
        <div
          className="bg-green-600 h-full transition-all duration-300 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
