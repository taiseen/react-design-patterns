import { SUPPORTED_LANGUAGES, TRANSLATIONS } from "../const";
import { use, useState, createContext } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const setLanguage = (langCode) => {
    if (SUPPORTED_LANGUAGES.includes(langCode)) {
      setCurrentLanguage(langCode);
    }
  };

  const getTranslation = (key) => TRANSLATIONS[currentLanguage]?.[key] || key;

  const shareInDomTree = {
    currentLanguage,
    getTranslation,
    setLanguage,
  };

  return <LanguageContext value={shareInDomTree}>{children}</LanguageContext>;
};

export const useLanguage = () => use(LanguageContext);

export default LanguageProvider;
