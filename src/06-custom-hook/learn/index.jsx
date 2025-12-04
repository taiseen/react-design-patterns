import ThemeSwitcher from "./components/ThemeSwitcher";
import MoviesList from "./components/MoviesList";
import AuthPanel from "./components/AuthPanel";

const CustomHookLearn = () => {
  return (
    <div className="flex flex-col items-center gap-6 mt-6">
      <ThemeSwitcher />
      <MoviesList />
      <AuthPanel />
    </div>
  );
};

export default CustomHookLearn;
