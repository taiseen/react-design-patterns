import FormProvider from "./provider/FormProvider";
import FormWizard from "./components/FormWizard";

const StateReducerTask = () => {
  return (
    <div className="p-2 w-[620px] mx-auto">
      <FormProvider>
        <FormWizard />
      </FormProvider>
    </div>
  );
};

export default StateReducerTask;
