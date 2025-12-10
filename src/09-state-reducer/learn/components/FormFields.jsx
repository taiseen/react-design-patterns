import { useFormContext } from "../provider/FormProvider";

const FormFields = () => {
  const { state, dispatch } = useFormContext();

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_FIELD",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  return (
    <div className="w-1/2 flex flex-col items-center gap-8">
      <form className="flex flex-col space-y-4">
        <input
          name="name"
          className="inputV1"
          onChange={handleChange}
          value={state.values.name}
          placeholder="Enter your name"
        />

        <input
          name="email"
          className="inputV1"
          onChange={handleChange}
          value={state.values.email}
          placeholder="Enter your email"
        />

        <div>
          {Object.entries(state.errors).map(([field, msg]) => (
            <p key={field} className="text-red-400 text-sm text-center mb-2">
              {msg}
            </p>
          ))}
        </div>
      </form>

      <div className="border border-slate-500 p-4 w-full rounded">
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
};

export default FormFields;
