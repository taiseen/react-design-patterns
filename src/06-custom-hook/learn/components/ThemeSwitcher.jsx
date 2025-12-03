import Button from "../../../components/ui/Button";
import useToggle from "../hooks/useToggle";

const ThemeSwitcher = () => {
  const [isDark, toggleTheme] = useToggle();

  return (
    <Button onClick={toggleTheme} variant={`${isDark ? "ghost" : "solid"}`}>
      {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </Button>
  );
};

export default ThemeSwitcher;
