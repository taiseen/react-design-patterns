import ThemeSwitcher from "./components/ThemeSwitcher";
import MoviesList from "./components/MoviesList";
import AuthPanel from "./components/AuthPanel";

const CustomHookLearn = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-3">
      <ThemeSwitcher />
      <MoviesList />
      <AuthPanel />
    </div>
  );
};

export default CustomHookLearn;
