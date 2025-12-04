import useLocalStorage from "../hooks/useLocalStorage";
import Button from "../../../components/ui/Button";

const ThemeToggle = () => {
  const [theme, setTheme] = useLocalStorage("app-theme", "light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`p-4 flex flex-col gap-4 items-center rounded 
        ${theme === "light" ? "bg-slate-300 text-slate-800" : "bg-slate-700"} `}
    >
      <p>Current theme: {theme}</p>

      <Button onClick={toggleTheme}>
        Toggle to {theme === "light" ? "dark" : "light"}
      </Button>
    </div>
  );
};

export default ThemeToggle;
