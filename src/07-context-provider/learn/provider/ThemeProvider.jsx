import { useState, createContext, use } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => !prev);
    document.body.classList.toggle("dark");
  };

  const shareInDomTree = { theme, toggleTheme };

  return <ThemeContext value={shareInDomTree}>{children}</ThemeContext>;
};

export const useTheme = () => use(ThemeContext);

export default ThemeProvider;
