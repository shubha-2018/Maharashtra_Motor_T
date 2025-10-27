// import React, { createContext, useContext, useState, ReactNode } from "react";
// import {MR, EN} from "@/constants/Language";

// type Language = "en" | "mr";

// interface LanguageContextType {
//   language: Language;
//   setLanguage: (lang: Language) => void;
//   t: (key: string) => string;
// }

// const LanguageContext = createContext<LanguageContextType | undefined>(
//   undefined
// );

// const translations = {
//   en: EN,
//   mr: MR
// };

// export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [language, setLanguage] = useState<Language>("mr");

//   const t = (key: string): string => {
//     return (
//       translations[language][key as keyof (typeof translations)["en"]] || key
//     );
//   };

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage, t }}>
//       <div lang={language === "mr" ? "mr" : "en"}>{children}</div>
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = (): LanguageContextType => {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error("useLanguage must be used within a LanguageProvider");
//   }
//   return context;
// };



import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { MR, EN } from "@/constants/Language";

type Language = "en" | "mr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: EN,
  mr: MR,
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // ✅ Load language from localStorage or default to Marathi
  const [language, setLanguageState] = useState<Language>(
    (localStorage.getItem("language") as Language) || "mr"
  );

  // ✅ Save language preference in localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  // ✅ Translation function
  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  // ✅ Update <html lang="..."> dynamically
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div lang={language}>{children}</div>
    </LanguageContext.Provider>
  );
};

// ✅ Custom hook for easy use
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
