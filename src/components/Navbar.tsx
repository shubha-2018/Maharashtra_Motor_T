import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import AshokStambhLogo from "@/assets/ashok-stambh.png";
import WirelessLogo from "@/assets/mt_photos/mt-logo.png";
import PoliceLogo from "@/assets/police-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [hoveredSubmenu, setHoveredSubmenu] = useState<string | null>(null);

  const navigate = useNavigate();
  const { t } = useLanguage();

  const navigationItems = [
    { name: t("nav.home"), url: "/" },

    {
      name: t("nav.about"),
      items: [
        { name: t("nav.directorDesk"), url: "/about/directors-desk" },
        { name: t("nav.formerDirectors"), url: "/about/former-directors" },
        { name: t("nav.hierarchy"), url: "/about/hierarchy" },
        { name: t("nav.aboutDepartment"), url: "/about/department" },
      ],
    },

    {
      name: t("nav.citizens"),
      items: [
        { name: t("nav.pressRelease"), url: "/citizen/press-release" },
        { name: t("nav.rti"), url: "/citizen/rti" },
      ],
    },

    {
      name: t("nav.police_corner"),
      items: [
        { name: t("nav.gazette"), url: "/police/gazette" },
        { name: t("nav.promotionOrders"), url: "/police/promotions" },
        { name: t("nav.transfers"), url: "/police/transfers" },
        { name: t("nav.gradationList"), url: "/police/gradation" },
        { name: t("nav.strategySupport"), url: "https://117.222.38.165/SSS/" },
        { name: t("nav.positiveStories"), url: "/police/stories" },
      ],
    },

    {
      name: t("nav.training"),
      items: [
        { name: t("nav.trainingCalendar"), url: "/training-calendar" },
        {
          name: t("nav.traininggallery"),
          items: [
            { name: t("nav.photos"), url: "/training/traininggallery/photos" },
          ],
        },
        { name: t("nav.notificationCircular"), url: "/training/notification" },
      ],
    },

    { name: t("nav.tenders"), url: "/tender" },
    { name: t("nav.recruitments"), url: "/recruitments" },
    { name: t("nav.gallery"), url: "/gallery" },
    { name: t("nav.contact"), url: "/contact" },
  ];

  const handleNavigation = (url: string) => {
    if (url.startsWith("http")) {
      window.open(url, "_blank");
    } else {
      navigate(url);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full border-b border-blue-900 sticky top-0 z-50 bg-gradient-to-r from-blue-900 to-blue-950 shadow-lg">

      <div className="mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center h-20 md:h-28 gap-2">

          {/* LEFT LOGOS */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <Link to="/">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                <img src={AshokStambhLogo} className="w-14 h-14 object-contain" />
              </div>
            </Link>

            <Link to="/">
              <div className="w-28 h-20 flex items-center justify-center">
                <img src={PoliceLogo} className="max-h-full" />
              </div>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden xl:flex flex-1 justify-center items-center">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredMenu(item.name)}
                onMouseLeave={() => {
                  setHoveredMenu(null);
                  setHoveredSubmenu(null);
                }}
              >
                <Button
                  variant="ghost"
                  className="text-white px-3 py-6 font-bold whitespace-nowrap hover:bg-white hover:text-blue-900"
                  onClick={() => !item.items && handleNavigation(item.url!)}
                >
                  {item.name}
                  {item.items && <ChevronDown className="ml-1 w-4 h-4" />}
                </Button>

                {/* FIRST DROPDOWN */}
                {hoveredMenu === item.name && item.items && (
                  <div className="absolute left-0 top-full mt-1 w-64 bg-blue-50 border shadow-xl rounded-md">

                    {item.items.map((sub) => (
                      <div
                        key={sub.name}
                        className="relative"
                        onMouseEnter={() => setHoveredSubmenu(sub.name)}
                        onMouseLeave={() => setHoveredSubmenu(null)}
                      >
                        <div
                          className="px-4 py-2 hover:bg-white cursor-pointer flex justify-between"
                          onClick={() => !sub.items && handleNavigation(sub.url!)}
                        >
                          {sub.name}
                          {sub.items && <ChevronDown className="w-3 h-3" />}
                        </div>

                        {/* SECOND DROPDOWN */}
                        {hoveredSubmenu === sub.name && sub.items && (
                          <div className="absolute left-full top-0 w-56 bg-blue-50 border shadow-xl rounded-md">
                            {sub.items.map((child) => (
                              <div
                                key={child.name}
                                className="px-4 py-2 hover:bg-white cursor-pointer"
                                onClick={() => handleNavigation(child.url)}
                              >
                                {child.name}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT LOGO */}
          <div className="hidden xl:flex flex-shrink-0 ml-2">
            <div className="w-20 h-16 bg-white rounded-lg flex items-center justify-center">
              <img src={WirelessLogo} className="max-h-full" />
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <div className="xl:hidden ml-auto">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

        </div>
      </div>

      {/* ✅ MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-blue-950 text-white border-t border-blue-800 px-4 py-3">

          {navigationItems.map((item) => (
            <div key={item.name} className="border-b border-blue-800 py-2">

              <div
                className="flex justify-between font-semibold cursor-pointer"
                onClick={() => {
                  if (!item.items) handleNavigation(item.url!);
                }}
              >
                {item.name}
                {item.items && <ChevronDown size={16} />}
              </div>

              {item.items && (
                <div className="pl-4 mt-2 space-y-2">
                  {item.items.map((sub) => (
                    <div key={sub.name}>

                      <div
                        className="text-sm text-blue-200 flex justify-between cursor-pointer"
                        onClick={() => {
                          if (!sub.items) handleNavigation(sub.url!);
                        }}
                      >
                        {sub.name}
                        {sub.items && <ChevronDown size={14} />}
                      </div>

                      {sub.items && (
                        <div className="pl-4 mt-1 space-y-1">
                          {sub.items.map((child) => (
                            <div
                              key={child.name}
                              className="text-sm text-blue-300 cursor-pointer"
                              onClick={() => handleNavigation(child.url)}
                            >
                              {child.name}
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}

        </div>
      )}

    </nav>
  );
};

export default Navbar;