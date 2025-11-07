import React, { useEffect, useState } from "react";
import { Globe, Sun, Moon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store/themeStore";

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [fontSize, setFontSize] = useState("normal");
  const { theme, setTheme } = useThemeStore();

  const handleFontSize = (size: string) => {
    setFontSize(size);
    document.documentElement.style.fontSize =
      size === "small" ? "14px" : size === "large" ? "18px" : "16px";
  };

  const toggleTheme = (mode: string) => setTheme(mode);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="px-6 py-2 flex items-center justify-between border-b border-gray-300 dark:border-gray-700">

        {/* Left Links */}
        <div className="flex space-x-4 text-sm font-semibold text-blue-900 dark:text-blue-300">
          <a href="https://eoffice.mahapolice.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            {t("e.office")}
          </a>
          <a href="https://accounts.mgovcloud.in/signin?servicename=VirtualOffice" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            {t("nic.email")}
          </a>
        </div>

        {/* ✅ Center Title (English smaller size, Marathi bigger) */}
        <div
          className={`text-center flex-1 font-merri tracking-wide leading-snug font-bold text-[#0A1E4A] dark:text-white 
          ${language === "mr" ? "text-base md:text-3xl" : "text-sm md:text-2xl"}`}
        >
          {language === "mr"
            ? "पोलीस दळणवळण व माहिती तंत्रज्ञान विभाग, पुणे"
            : "Police Communication & Information Technology Department, Pune"}
        </div>

        {/* Right Controls */}
        <div className="flex items-center space-x-4">

          {/* Font size controls */}
          <div className="hidden sm:flex items-center space-x-1 text-xs">
            <span>{t("font.size")}:</span>
            {["small", "normal", "large"].map((size) => (
              <button key={size} onClick={() => handleFontSize(size)} className={cn("px-1 hover:text-primary", fontSize === size && "text-primary font-bold")}>
                {size === "small" ? "A-" : size === "normal" ? "A" : "A+"}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-1">
            <button onClick={() => toggleTheme("light")} className={cn("p-1 rounded hover:bg-primary/10", theme === "light" && "bg-primary/20")}><Sun className="w-4 h-4" /></button>
            <button onClick={() => toggleTheme("dark")} className={cn("p-1 rounded hover:bg-primary/10", theme === "dark" && "bg-primary/20")}><Moon className="w-4 h-4" /></button>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer">
            <Globe className="w-4 h-4 text-blue-700 dark:text-blue-300" />
            <button onClick={() => setLanguage(language === "en" ? "mr" : "en")} className="text-sm font-bold text-primary hover:underline">
              {language === "en" ? "मराठी" : "English"}
            </button>
          </div>

        </div>

      </div>
    </header>
  );
};

export default Header;
