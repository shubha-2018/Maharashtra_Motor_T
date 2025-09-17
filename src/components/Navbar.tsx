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
import { Link, useNavigate } from "react-router-dom"; // Import Link component
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

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
        // { name: t("nav.citizenCorner"), url: "/citizen-corner" },
        // { name: t("nav.policeCorner"), url: "/police-corner" },
        { name: t("nav.pressRelease"), url: "/citizen/press-release" },
        { name: t("nav.rti"), url: "/citizen/rti" },
        { name: t("nav.tenders"), url: "/citizen/tender" },
        { name: t("nav.recruitments"), url: "/citizen/recruitments" },
        // { name: t("nav.officersList"), url: "/officers-list" },
        // { name: t("nav.promotionOrders"), url: "/promotion-orders" },
        // { name: t("nav.transfers"), url: "/transfers" },
        // { name: t("nav.gradationList"), url: "/gradation-list" },
        // { name: t("nav.strategySupport"), url: "/strategy-support" },
        // { name: t("nav.positiveStories"), url: "/positive-stories" },
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
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full border-b border-navbar-border rounded-b-lg sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "navbarbg" : "bg-navbar"
      }`}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Link to="/">
                <div className="w-14 h-14 bg-brand-primary rounded-lg flex items-center justify-center">
                  <img src={AshokStambhLogo} alt="logo" />
                </div>
              </Link>
              <Link to="/">
                <div className="w-24 h-14 bg-brand-primary rounded-lg flex items-center justify-center">
                  <img src={WirelessLogo} alt="logo" />
                </div>
              </Link>
              <Link to="/">
                <span
                  dangerouslySetInnerHTML={{ __html: t("title") }}
                  className="hidden dark:text-white sm:block text-xl font-bold text-brand-primary capitalize"
                >
                  {/* title */}
                </span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-navbar-foreground font-bold hover:text-navbar-foreground hover:bg-navbar-foreground/5"
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
                    className="text-navbar-foreground  hover:text-navbar-foreground hover:bg-navbar-foreground/5 font-bold "
                  >
                    <Link to={item.url}>{item.name}</Link>
                  </Button>
                )}
              </div>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden md:flex">
            <div className="w-20 h-20 bg-brand-primary rounded-lg flex items-center justify-center">
              <img src={PoliceLogo} alt="logo" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-navbar-foreground"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-navbar-border">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name} className="py-2">
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.url}
                      className="text-navbar-foreground font-bold "
                      onClick={() =>
                        !item.hasDropdown && setIsMobileMenuOpen(false)
                      }
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
              <div className="w-14 h-14 bg-brand-primary rounded-lg flex items-center justify-center">
                <img src={PoliceLogo} alt="logo" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
