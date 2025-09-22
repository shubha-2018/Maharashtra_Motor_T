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
import { useThemeStore } from "@/store/themeStore";
import { Link } from "react-router-dom";
import PoliceLogo from "@/assets/police-logo.png";


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
        <div className="px-10 py-1 flex align-middle justify-center flex-wrap items-center space-x-2">
           <Link to="/">
                            <div className="w-10 h-10 md:w-14 md:h-14 bg-brand-primary  xl:hidden rounded-full flex items-center justify-center">
                              <img
                                src={PoliceLogo}
                                className="rounded-full"
                                alt="logo"
                              />
                            </div>
                              </Link>
          <div className="flex flex-col sm:flex-row justify-end md:justify-between w-full items-center md:space-x-10 text-sm md:text-sm">
            {/* Left - Government Links (hidden on mobile) */}
            <div className="hidden md:flex space-x-4">
              <a
                href="tel:112"
                className="nav-link text-xs hover:text-primary md:text-sm"
              >
                <Phone className="w-3 h-3 inline mr-1" />
                {t("dial.112")}
              </a>
              <a href="/accessibility" className="nav-link text-xs md:text-sm">
                {t("footer.accessibility")}
              </a>
              <a
                href="https://eoffice.mahapolice.gov.in/"
                className="nav-link text-xs md:text-sm"
              >
                {t("e.office")}
              </a>
              <a
                href="https://accounts.mgovcloud.in/signin?servicename=VirtualOffice&serviceurl=https%3A%2F%2Fmail.mgovcloud.in%2F"
                className="nav-link text-xs"
              >
                {t("nic.email")}
              </a>
            </div>
             
            <h1
              dangerouslySetInnerHTML={{ __html: t("header.title") }}
              className={`text-center dark:text-white sm:hidden text font-sans xl:text-2xl py-2 xl:block md-xl:hidden  2xl:text-2xl  figtree-heading  font-[1000] text-brand-primary capitalize`}
            >
              {/* title */}
            </h1>
            {/* Center - Accessibility (always visible) */}
            <div className="flex items-center justify-end md:justify-between space-x-2">
              {/* Font Size Controls */}
              <div className="hidden sm:flex items-center space-x-1">
                <span className="text-xs md:text-sm">{t("font.size")}:</span>
                <button
                  onClick={() => handleFontSize("small")}
                  className={cn(
                    "px-1 text-xs md:text-sm hover:text-primary",
                    fontSize === "small" && "text-primary font-bold"
                  )}
                >
                  A-
                </button>
                <button
                  onClick={() => handleFontSize("normal")}
                  className={cn(
                    "px-1 text-xs md:text-sm hover:text-primary",
                    fontSize === "normal" && "text-primary font-bold"
                  )}
                >
                  A
                </button>
                <button
                  onClick={() => handleFontSize("large")}
                  className={cn(
                    "px-1 text-xs md:text-sm hover:text-primary",
                    fontSize === "large" && "text-primary font-bold"
                  )}
                >
                  A+
                </button>
              </div>

              {/* Theme Controls - Always visible on mobile */}
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

              {/* Language Switcher - Always visible on mobile */}
              <div className="flex items-center space-x-2">
                <Globe className="w-3 h-3" />
                <button
                  onClick={() => setLanguage("mr")}
                  className={cn(
                    "text-xs md:text-sm hover:text-primary transition-colors",
                    language === "mr" && "text-primary font-bold"
                  )}
                >
                  {t("marathi")}
                </button>
                <span className="text-xs md:text-sm">|</span>
                <button
                  onClick={() => setLanguage("en")}
                  className={cn(
                    "text-xs md:text-sm hover:text-primary transition-colors",
                    language === "en" && "text-primary font-bold"
                  )}
                >
                  {t("english")}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
          </div>

          {/* Mobile Menu Dropdown - Only shows government links now */}
        </div>
      </div>
    </header>
  );
};

export default Header;
