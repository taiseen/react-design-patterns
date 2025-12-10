import { customToggleReducer } from "./reducers/toggle-reducer";
import { customFormReducer } from "./reducers/form-reducer";
import FormProvider from "./provider/FormProvider";
import FormFields from "./components/FormFields";
import Toggle from "./components/Toggle";

const StateReducerLearn = () => {
  return (
    <div className="flex flex-col items-center m-8 space-y-8">
      <Toggle reducer={customToggleReducer} onToggle={(v) => console.log(v)} />

      <FormProvider reducer={customFormReducer}>
        <FormFields />
      </FormProvider>
    </div>
  );
};

export default StateReducerLearn;
