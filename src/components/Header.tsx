import React, { useEffect, useState } from "react";
import {
  Search,
  Menu,
  X,
  Phone,
  Globe,
  Sun,
  Moon,
  Contrast,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store/themeStore"; // Import the store

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState("normal");
  const [scrolled, setScrolled] = useState(false);
  
  // Use the theme store
  const { theme, setTheme } = useThemeStore();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleFontSize = (size: string) => {
    setFontSize(size);
    const root = document.documentElement;
    switch (size) {
      case "small":
        root.style.fontSize = "14px";
        break;
      case "large":
        root.style.fontSize = "18px";
        break;
      default:
        root.style.fontSize = "16px";
    }
  };

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  // Apply theme class to document when theme changes
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark", "high-contrast");
    document.documentElement.classList.add(theme);
  }, [theme]);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full bg-background shadow-lg sticky top-0 z-50 ${
        scrolled ? "hidden" : ""
      }`}
    >
      {/* Utility Bar */}
      <div className="bg-secondary/50 border-b border-border">
        <div className="container mx-auto px-4 py-1">
          <div className="flex justify-between items-center text-sm">
            {/* Left - Government Links (hidden on mobile) */}
            <div className="hidden md:flex space-x-4">
              <a href="#" className="nav-link text-xs hover:text-primary">
                <Phone className="w-3 h-3 inline mr-1" />
                {t("dial.112")}
              </a>
              <a href="#" className="nav-link text-xs">
                {t("citizen.portal")}
              </a>
              <a href="#" className="nav-link text-xs">
                {t("e.office")}
              </a>
              <a href="#" className="nav-link text-xs">
                {t("nic.email")}
              </a>
              <a href="#" className="nav-link text-xs">
                {t("sss")}
              </a>
            </div>

            {/* Center - Accessibility (always visible) */}
            <div className="flex items-center space-x-2">
              {/* Font Size Controls */}
              <div className="hidden sm:flex items-center space-x-1">
                <span className="text-xs">{t("font.size")}:</span>
                <button
                  onClick={() => handleFontSize("small")}
                  className={cn(
                    "px-1 text-xs hover:text-primary",
                    fontSize === "small" && "text-primary font-bold"
                  )}
                >
                  A-
                </button>
                <button
                  onClick={() => handleFontSize("normal")}
                  className={cn(
                    "px-1 text-xs hover:text-primary",
                    fontSize === "normal" && "text-primary font-bold"
                  )}
                >
                  A
                </button>
                <button
                  onClick={() => handleFontSize("large")}
                  className={cn(
                    "px-1 text-xs hover:text-primary",
                    fontSize === "large" && "text-primary font-bold"
                  )}
                >
                  A+
                </button>
              </div>

              {/* Theme Controls */}
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

              {/* Language Switcher */}
              <div className="hidden sm:flex items-center space-x-2">
                <Globe className="w-3 h-3" />
                <button
                  onClick={() => setLanguage("mr")}
                  className={cn(
                    "text-xs hover:text-primary transition-colors",
                    language === "mr" && "text-primary font-bold"
                  )}
                >
                  {t("marathi")}
                </button>
                <span className="text-xs">|</span>
                <button
                  onClick={() => setLanguage("en")}
                  className={cn(
                    "text-xs hover:text-primary transition-colors",
                    language === "en" && "text-primary font-bold"
                  )}
                >
                  {t("english")}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <button onClick={toggleMobileMenu} className="p-2">
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;