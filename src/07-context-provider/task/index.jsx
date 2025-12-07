import LanguageProvider from "./provider/LanguageProvider";
import AuthProvider from "./provider/AuthProvider";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

const ContextProviderTask = () => {
  return (
    <AuthProvider>
      <LanguageProvider>
        <div className="bg-slate-700 h-[70vh]">
          <Navbar />
          <main className="p-6 ">
            <Dashboard />
          </main>
        </div>
      </LanguageProvider>
    </AuthProvider>
  );
};

export default ContextProviderTask;
