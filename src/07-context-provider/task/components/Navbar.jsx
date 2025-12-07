import { useLanguage } from "../provider/LanguageProvider";
import { useAuth } from "../provider/AuthProvider";
import { LANGUAGE_NAMES } from "../const";
import Button from "../../../components/ui/Button";

const Navbar = () => {
  const { getTranslation, currentLanguage, setLanguage } = useLanguage();
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="bg-indigo-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">{getTranslation("dashboard")}</h1>

      <div className="flex gap-2 items-center">
        <div>
          {isAuthenticated && (
            <div className="flex items-center gap-3">
              <span>Hello, {user.name}</span>

              <Button
                onClick={logout}
                className="w-fit"
                variant="danger"
                size="sm"
              >
                {getTranslation("logout")}
              </Button>
            </div>
          )}
        </div>

        {/* Language Selector */}
        <div className="relative">
          <select
            value={currentLanguage}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-slate-700 text-white rounded px-2 py-1 text-sm focus:outline-none"
          >
            {Object.entries(LANGUAGE_NAMES).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
