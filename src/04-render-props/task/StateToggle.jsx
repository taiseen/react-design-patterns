import Button from "../../components/ui/Button";
import Toggle from "./Toggle";

const StateToggle = () => {
  return (
    <Toggle>
      {({ isOpen, toggle }) => (
        <div className="flex items-center justify-between">
          <p className="text-2xl">Status: {isOpen ? "✅ Open" : "🔒 Closed"}</p>

          <Button onClick={toggle}>Toggle</Button>
        </div>
      )}
    </Toggle>
  );
};

export default StateToggle;
