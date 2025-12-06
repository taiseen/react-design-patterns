import { useBrand } from "../provider/BrandProvider";
import { useTheme } from "../provider/ThemeProvider";
import Button from "../../../components/ui/Button";

const ThemeContainer = () => {
  const { theme, toggleTheme } = useTheme();

  const { brand } = useBrand();

  return (
    <div
      className={`p-2 h-[75vh] 
        ${
          theme ? "bg-slate-200 text-slate-800" : "bg-slate-700 text-slate-200"
        }`}
    >
      <nav className="flex justify-between bg-slate-500 p-1 rounded">
        <h1 className="text-3xl">My App</h1>
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </nav>

      <main className="p-4 text-center">
        <p className="text-xl m-3">
          {theme ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </p>

        <div>
          {brand && (
            <p style={{ color: brand.color }}>
              Brand:- {brand.name} &lt;&lt;||&gt;&gt; Color:- {brand.color}
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default ThemeContainer;
