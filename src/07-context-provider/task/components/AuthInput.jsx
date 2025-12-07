import { useLanguage } from "../provider/LanguageProvider";
import { useAuth } from "../provider/AuthProvider";
import { useState, useRef } from "react";
import Button from "../../../components/ui/Button";

const AuthInput = () => {
  const { getTranslation } = useLanguage();
  const { login } = useAuth();

  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const inputRef = useRef(null);

  const handleLogin = () => {
    const trimmedInput = userName.trim();

    if (!trimmedInput) {
      setError("nameRequired");
      inputRef.current.focus();
      return;
    }

    login(trimmedInput);
    setUserName("");
    setError("");
  };

  const handleUserNameInputChange = (e) => {
    setUserName(e.target.value);
    setError("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleLogin();
    }
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-center p-12 border border-slate-600 rounded text-slate-300 bg-slate-800">
      <p className="text-lg">{getTranslation("login")}</p>

      <input
        autoFocus
        type="text"
        ref={inputRef}
        value={userName}
        placeholder="Enter Name"
        onKeyDown={handleKeyDown}
        onChange={handleUserNameInputChange}
        className="p-1.5 border border-slate-600 rounded outline-0 bg-slate-700 text-white w-64"
      />

      {error && <p className="text-red-400 text-sm">{getTranslation(error)}</p>}

      <Button onClick={handleLogin} className="bg-indigo-600" size="md">
        {getTranslation("login")}
      </Button>
    </div>
  );
};

export default AuthInput;
