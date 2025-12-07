import { createContext, useState, use } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (name) => {
    if (!name.trim()) return;
    setUser({ id: Date.now(), name: name.trim() });
  };

  const logout = () => setUser(null);

  const shareInDomTree = {
    isAuthenticated: !!user,
    logout,
    login,
    user,
  };

  return <AuthContext value={shareInDomTree}>{children}</AuthContext>;
};

export const useAuth = () => use(AuthContext);

export default AuthProvider;
