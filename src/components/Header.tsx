import React, { useEffect, useState } from "react";
import { Globe, Sun, Moon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store/themeStore";
import { Link } from "react-router-dom";
import PoliceLogo from "@/assets/police-logo.png";

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [fontSize, setFontSize] = useState("normal");
  const [scrolled, setScrolled] = useState(false);
  const [showNewsBar, setShowNewsBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, setTheme } = useThemeStore();

  const handleFontSize = (size: string) => {
    setFontSize(size);
    const root = document.documentElement;
    root.style.fontSize = size === "small" ? "14px" : size === "large" ? "18px" : "16px";
  };

  const toggleTheme = (newTheme: string) => setTheme(newTheme);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark", "high-contrast");
    document.documentElement.classList.add(theme);
  }, [theme]);

  // 🧭 Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 0);
      setShowNewsBar(currentY < lastScrollY || currentY < 100);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // 📰 Clickable News List (each with bilingual text + link)
  const latestNews = [
    {
      text_en: "New police recruitment process has started.",
      text_mr: "पोलीस विभागामध्ये नवीन भरती प्रक्रिया सुरु आहे.",
      link: "https://mahapolice.gov.in/recruitment", // Example link
    },
    {
      text_en: "Tender notice released for Solapur division.",
      text_mr: "सोलापूर विभागात निविदा सूचना प्रसिद्ध झाली आहे.",
      link: "https://mahapolice.gov.in/tenders",
    },
    {
      text_en: "Cyber security training starts next week.",
      text_mr: "सायबर सुरक्षा प्रशिक्षण पुढील आठवड्यात सुरू होईल.",
      link: "https://mahapolice.gov.in/training",
    },
  ];

  return (
    <header
      className={cn(
        "w-full bg-background shadow-lg sticky top-0 z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-md bg-white/70 dark:bg-gray-900/40" : ""
      )}
    >
      {/* 🔹 Utility Bar */}
      <div className="bg-secondary/50 border-b border-border">
        <div className="px-10 py-1 flex align-middle justify-center flex-wrap items-center space-x-2">
          <Link to="/">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-brand-primary xl:hidden rounded-full flex items-center justify-center">
              <img src={PoliceLogo} alt="logo" className="rounded-full" />
            </div>
          </Link>

          <div className="flex flex-col sm:flex-row justify-end md:justify-between w-full items-center md:space-x-10 text-sm md:text-sm">
            {/* Government Links */}
            <div className="hidden md:flex space-x-4">
              <a
                href="https://eoffice.mahapolice.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-xs md:text-sm hover:text-primary transition-colors"
              >
                {t("e.office")}
              </a>
              <a
                href="https://accounts.mgovcloud.in/signin?servicename=VirtualOffice"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-xs hover:text-primary transition-colors"
              >
                {t("nic.email")}
              </a>
            </div>

            {/* Accessibility & Language Controls */}
            <div className="flex items-center justify-end md:justify-between space-x-2">
              {/* Font Size Controls */}
              <div className="hidden sm:flex items-center space-x-1">
                <span className="text-xs md:text-sm">{t("font.size")}:</span>
                {["small", "normal", "large"].map((size) => (
                  <button
                    key={size}
                    onClick={() => handleFontSize(size)}
                    className={cn(
                      "px-1 text-xs md:text-sm hover:text-primary",
                      fontSize === size && "text-primary font-bold"
                    )}
                  >
                    {size === "small" ? "A-" : size === "normal" ? "A" : "A+"}
                  </button>
                ))}
              </div>

              {/* Theme Toggle */}
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => toggleTheme("light")}
                  className={cn(
                    "p-1 rounded hover:bg-primary/10 transition-colors",
                    theme === "light" && "bg-primary/20"
                  )}
                  title={t("light.mode")}
                >
                  <Sun className="w-3 h-3" />
                </button>
                <button
                  onClick={() => toggleTheme("dark")}
                  className={cn(
                    "p-1 rounded hover:bg-primary/10 transition-colors",
                    theme === "dark" && "bg-primary/20"
                  )}
                  title={t("dark.mode")}
                >
                  <Moon className="w-3 h-3" />
                </button>
              </div>

              {/* 🌐 Language Toggle */}
              <div className="flex items-center space-x-2">
                <Globe className="w-3 h-3 text-blue-700 dark:text-blue-300" />
                <button
                  onClick={() => setLanguage(language === "en" ? "mr" : "en")}
                  className="text-xs md:text-sm hover:text-primary transition-colors text-primary font-bold"
                >
                  {language === "en" ? "मराठी" : "English"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 📰 Clickable Latest News Bar */}
      <div
        className={cn(
          "relative overflow-hidden bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 transition-all duration-500 ease-in-out",
          showNewsBar ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        {/* Glowing Bar & Background */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>

        <div className="relative py-3 px-4">
          {/* Label */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-yellow-400 text-blue-900 px-6 py-2 rounded-r-2xl font-bold uppercase shadow-lg flex items-center gap-2">
            📰 {language === "mr" ? "ताज्या बातम्या" : "Latest News"}
          </div>

          {/* Scrolling News */}
          <div className="overflow-hidden">
            <marquee direction="left" scrollAmount="5" className="pl-52 text-white font-medium text-sm">
              {latestNews.map((item, index) => (
                <span key={index} className="inline-flex items-center mx-8">
                  {/* Clickable link */}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white hover:text-yellow-300 transition-colors underline-offset-4 hover:underline"
                  >
                    {language === "mr" ? item.text_mr : item.text_en}
                  </a>

                  {/* Separator */}
                  {index < latestNews.length - 1 && (
                    <span className="mx-6 text-yellow-400 opacity-50">|</span>
                  )}
                </span>
              ))}
            </marquee>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
