import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

// Import translations
import { MR, EN } from "../constants/Language";

// Language type
type Language = "en" | "mr";

// Context type
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

// Create context
const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined);

// Translations object
const translations = {
  en: EN,
  mr: MR,
};

// Provider
export const LanguageProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [language, setLanguage] =
    useState<Language>("mr");

  // Toggle language
  const toggleLanguage = () => {
    setLanguage((prev) =>
      prev === "mr" ? "en" : "mr"
    );
  };

  // Translation function
  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof typeof translations.en
      ] || key
    );
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      <div lang={language}>{children}</div>
    </LanguageContext.Provider>
  );
};

// Custom Hook
export const useLanguageContext = (): LanguageContextType => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguageContext must be used within LanguageProvider"
    );
  }

  return context;
};

// ✅ Alias (fixes your Footer.tsx error)
export const useLanguage = useLanguageContext;