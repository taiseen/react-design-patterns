import Button from "../../../components/ui/Button";
import useAuth from "../hooks/useAuth";
import { useState } from "react";

const AuthPanel = () => {
  const { user, login, logout, isAuthenticated } = useAuth();

  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(form.username, form.password);
    setForm({ username: "", password: "" });
  };

  return (
    <div className="px-4 py-3 pb-5 bg-slate-700 rounded flex flex-col gap-4 items-center">
      <h2 className="text-3xl">🧑‍💻 Authentication Panel</h2>

      {isAuthenticated ? (
        <>
          <p>
            Welcome, <strong>{user.name}</strong> 🎉
          </p>

          <Button variant="blue" onClick={logout}>
            Logout
          </Button>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            required
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="border border-slate-500 rounded p-2 outline-0"
          />

          <input
            required
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="border border-slate-500 rounded p-2 outline-0"
          />

          <Button type="submit">Login</Button>
        </form>
      )}
    </div>
  );
};

export default AuthPanel;
