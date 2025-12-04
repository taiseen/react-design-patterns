import DropdownMenu from "./components/DropdownMenu";
import ThemeToggle from "./components/ThemeToggle";
import CopyDemo from "./components/CopyDemo";

const CustomHookTask = () => {
  return (
    <div className="flex flex-col gap-4 p-2">
      <ThemeToggle />

      <CopyDemo />

      <DropdownMenu />
    </div>
  );
};

export default CustomHookTask;
