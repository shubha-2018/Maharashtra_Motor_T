import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import AshokStambhLogo from "@/assets/ashok-stambh.png";
import WirelessLogo from "@/assets/wireless.png";
import PoliceLogo from "@/assets/police-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const [colorChange, setColorChange] = useState(false);

  const { t } = useLanguage();

  const navigationItems = [
    {
      name: t("nav.home"),
      hasDropdown: false,
      url: "/",
      items: [{ name: t("nav.home"), url: "/" }],
    },
    {
      name: t("nav.about"),
      hasDropdown: true,
      url: "/about",
      items: [
        { name: t("nav.directorDesk"), url: "/about/directors-desk" },
        { name: t("nav.formerDirectors"), url: "/about/former-directors" },
        { name: t("nav.hierarchy"), url: "/about/hierarchy" },
        { name: t("nav.aboutDepartment"), url: "/about/department" },
        { name: t("nav.offices"), url: "/about/offices" },
        { name: t("nav.ranks"), url: "/about/ranks" },
        { name: t("nav.welfare"), url: "/about/welfare" },
      ],
    },
    {
      name: t("nav.citizens"),
      hasDropdown: true,
      url: "/resources",
      items: [
        { name: t("nav.pressRelease"), url: "/citizen/press-release" },
        { name: t("nav.rti"), url: "/citizen/rti" },
        { name: t("nav.tenders"), url: "/citizen/tender" },
        { name: t("nav.recruitments"), url: "/citizen/recruitments" },
      ],
    },
    {
      name: t("nav.police_corner"),
      hasDropdown: true,
      url: "/opportunities",
      items: [
        { name: t("nav.gazette"), url: "/police/gazette" },
        { name: t("nav.officersList"), url: "/police/officers" },
        { name: t("nav.promotionOrders"), url: "/police/promotions" },
        { name: t("nav.transfers"), url: "/police/transfers" },
        { name: t("nav.gradationList"), url: "/police/gradation" },
        { name: t("nav.positiveStories"), url: "/police/stories" },
      ],
    },
    {
      name: t("nav.gallery"),
      hasDropdown: false,
      url: "/gallery",
      items: [{ name: t("nav.gallery"), url: "/gallery" }],
    },
    {
      name: t("nav.contact"),
      hasDropdown: false,
      url: "/contact",
      items: [{ name: t("nav.contactUs"), url: "/contact" }],
    },
  ];

  // 👇 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleColorChangeOnScroll = () => {
      if (window.scrollY > 50 && window.scrollY < 900) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleColorChangeOnScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleColorChangeOnScroll);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`w-full border-b selection:file:items-center border-navbar-border rounded-b-lg sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "navbarbg" : "bg-navbar"
      } `}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Link to="/">
                <div className="w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center">
                  <img
                    src={AshokStambhLogo}
                    className="rounded-full"
                    alt="logo"
                  />
                </div>
              </Link>
              <Link to="/">
                <div className="w-24 h-14 bg-brand-primary rounded-lg flex items-center justify-center">
                  <img
                    src={WirelessLogo}
                    alt="logo"
                    className="rounded-full filter brightness-0  dark:filter dark:invert"
                  />
                </div>
              </Link>
              <Link to="/">
                <span
                  dangerouslySetInnerHTML={{ __html: t("title") }}
                  className={`hidden  dark:text-white sm:block xl:hidden 2xl:block xl:text-lg 2xl:text-lg font-extrabold text-brand-primary capitalize ${
                    colorChange ? "text-white" : "text-gray-800"
                  }`}
                >
                  {/* title */}
                </span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={`dark:text-white text-sm xl:text-lg font-bold hover:text-navbar-foreground hover:bg-navbar-foreground/5 ${
                          colorChange ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="bg-popover border border-border shadow-lg z-50 min-w-[180px]"
                    >
                      {item.items.map((subItem) => (
                        <DropdownMenuItem
                          key={subItem.name}
                          onClick={() => {
                            navigate(subItem.url);
                          }}
                          className="text-popover-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer"
                        >
                          <Link to={subItem.url} className="w-full">
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button
                    variant="ghost"
                    className={`text-navbar-foreground text-sm xl:text-lg dark:text-white hover:text-navbar-foreground hover:bg-navbar-foreground/5 font-bold ${
                      colorChange ? "text-white" : "text-gray-800"
                    }`}
                  >
                    <Link to={item.url}>{item.name}</Link>
                  </Button>
                )}
              </div>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden xl:flex">
            <div className="w-16 h-20 bg-brand-primary rounded-lg flex items-center justify-center">
              <img src={PoliceLogo} alt="logo" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-navbar-foreground"
            >
              {isMobileMenuOpen ? (
                <X className="w-20 h-20 text-5xl" />
              ) : (
                <Menu className="w-20 h-20  text-5xl" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="xl:hidden w-full fixed top-28 md:top-32  left-0 bg-background z-40 overflow-y-auto">
            <div className="py-4 px-4 border-t border-navbar-border h-[calc(100vh-6rem)]">
              <div className="flex flex-col space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name} className="py-2">
                    <div
                      className="flex items-center justify-between"
                      onClick={() =>
                        !item.hasDropdown && setIsMobileMenuOpen(false)
                      }
                    >
                      <Link
                        to={item.url}
                        className="text-navbar-foreground font-bold"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.hasDropdown && (
                        <ChevronDown className="w-4 h-4 text-navbar-muted" />
                      )}
                    </div>
                    {item.hasDropdown &&
                      item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.url}
                          className="pl-4 py-1 text-navbar-muted hover:text-navbar-foreground cursor-pointer block"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                  </div>
                ))}
                <div className="w-full bg-brand-primary rounded-lg flex items-center justify-center mt-4">
                  <img src={PoliceLogo} className="w-14 h-14" alt="logo" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
