import { use, createContext, useReducer } from "react";

const FormContext = createContext(null);

const FormProvider = ({ reducer = defaultFormReducer, children }) => {
  const defaultValue = {
    values: { name: "", email: "" },
    errors: {},
  };

  const [state, dispatch] = useReducer(reducer, defaultValue);

  const shareInsideDom = { state, dispatch };

  return <FormContext value={shareInsideDom}>{children}</FormContext>;
};

export const useFormContext = () => use(FormContext);

export default FormProvider;
