


// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronDown, Menu, X } from "lucide-react";
// import AshokStambhLogo from "@/assets/ashok-stambh.png";
// import WirelessLogo from "@/assets/mt_photos/mt-logo.png";
// import PoliceLogo from "@/assets/police-logo.png";
// import { Link, useNavigate } from "react-router-dom";
// import { useLanguage } from "@/contexts/LanguageContext";

// const Navbar: React.FC = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
//   const [hoveredSubmenu, setHoveredSubmenu] = useState<string | null>(null);
//   const navigate = useNavigate();
//   const { t } = useLanguage();

//   const navigationItems = [
//     { name: t("nav.home"), url: "/" },

//     {
//       name: t("nav.about"),
//       items: [
//         { name: t("nav.directorDesk"), url: "/about/directors-desk" },
//         { name: t("nav.formerDirectors"), url: "/about/former-directors" },
//         { name: t("nav.hierarchy"), url: "/about/hierarchy" },
//         { name: t("nav.aboutDepartment"), url: "/about/department" },
//         { name: t("nav.offices"), url: "/about" },
//         { name: t("nav.ranks"), url: "/about/ranks" },
//       ],
//     },

//     {
//       name: t("nav.citizens"),
//       items: [
//         { name: t("nav.pressRelease"), url: "/citizen/press-release" },
//         { name: t("nav.rti"), url: "/citizen/rti" },
//       ],
//     },

//     {
//       name: t("nav.police_corner"),
//       items: [
//         { name: t("nav.gazette"), url: "/police/gazette" },
//         { name: t("nav.flash"), url: "/flashsection" },
//         { name: t("nav.officersList"), url: "/police/officers" },
//         { name: t("nav.promotionOrders"), url: "/police/promotions" },
//         { name: t("nav.transfers"), url: "/police/transfers" },
//         { name: t("nav.gradationList"), url: "/police/gradation" },
//         { name: t("nav.strategySupport"), url: "https://117.222.38.165/SSS/" },
//         { name: t("nav.positiveStories"), url: "/police/stories" },
//         { name: t("nav.welfare"), url: "/about/welfare" },
//       ],
//     },

//     {
//       name: t("nav.training"),
//       items: [
//         { name: t("nav.introduction"), url: "/training/introduction" },
//         { name: t("nav.trainingCalendar"), url: "/training-calendar" },
//         { name: t("nav.library"), url: "/library" },
//         {
//           name: t("nav.traininggallery"),
//           items: [
//             { name: t("nav.videos"), url: "/training/traininggallery/videos" },
//             { name: t("nav.photos"), url: "/training/traininggallery/photos" },
//           ],
//         },
//         { name: t("nav.notificationCircular"), url: "/training/notification" },
//         {
//           name: t("nav.museum"),
//           items: [
//             { name: t("nav.videos"), url: "/training/museum/videos" },
//             { name: t("nav.photos"), url: "/training/museum/photos" },
//           ],
//         },
//         { name: t("nav.faculties"), url: "/faculty" },
//       ],
//     },

//     { name: t("nav.tenders"), url: "/tender" },
//     { name: t("nav.recruitments"), url: "/recruitments" },
//     { name: t("nav.gallery"), url: "/gallery" },
//     { name: t("nav.contact"), url: "/contact" },
//   ];

//   const handleNavigation = (url: string) => {
//     if (url.startsWith("http")) {
//       window.open(url, "_blank");
//     } else {
//       navigate(url);
//     }
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav className="w-full border-b border-blue-900 sticky top-0 z-50 bg-gradient-to-r from-blue-900 to-blue-950 shadow-lg">
//       <div className="mx-auto px-3 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16 md:h-20">

//           {/* Left Logos */}
//           <div className="flex items-center space-x-4">
//             <Link to="/">
//               <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
//                 <img src={AshokStambhLogo} className="w-10 h-10 object-contain" alt="Ashok Stambh" />
//               </div>
//             </Link>
//             <Link to="/">
//               <div className="w-20 h-16 flex items-center justify-center">
//                 <img src={PoliceLogo} className="max-h-full" alt="Police Logo" />
//               </div>
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden xl:flex flex-1 justify-center items-center space-x-1">
//             {navigationItems.map((item) => (
//               <div
//                 key={item.name}
//                 className="relative"
//                 onMouseEnter={() => setHoveredMenu(item.name)}
//                 onMouseLeave={() => {
//                   setHoveredMenu(null);
//                   setHoveredSubmenu(null);
//                 }}
//               >
//                 <Button
//                   variant="ghost"
//                   className="text-white text-[15px] hover:bg-white hover:text-blue-900 px-4 py-6 font-medium transition-all"
//                   onClick={() => !item.items && handleNavigation(item.url!)}
//                 >
//                   {item.name}
//                   {item.items && <ChevronDown className="w-4 h-4 ml-1" />}
//                 </Button>

//                 {hoveredMenu === item.name && item.items && (
//                   <div className="absolute left-0 top-full mt-[2px] w-64 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 shadow-2xl rounded-md">
//                     {item.items.map((sub) => (
//                       <div
//                         key={sub.name}
//                         className="relative"
//                         onMouseEnter={() => setHoveredSubmenu(sub.name)}
//                         onMouseLeave={() => setHoveredSubmenu(null)}
//                       >
//                         <div
//                           className="px-5 py-3 text-gray-800 hover:bg-white hover:text-blue-900 cursor-pointer flex justify-between items-center font-medium transition-all"
//                           onClick={() => !sub.items && handleNavigation(sub.url!)}
//                         >
//                           {sub.name}
//                           {sub.items && <ChevronDown className="w-4 h-4" />}
//                         </div>

//                         {hoveredSubmenu === sub.name && sub.items && (
//                           <div className="absolute left-full top-0 mt-[2px] ml-[-2px] w-56 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 shadow-2xl rounded-md">
//                             {sub.items.map((child) => (
//                               <div
//                                 key={child.name}
//                                 className="px-5 py-3 text-gray-800 hover:bg-white hover:text-blue-900 cursor-pointer font-medium transition-all"
//                                 onClick={() => handleNavigation(child.url)}
//                               >
//                                 {child.name}
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Right Logo */}
//           <div className="hidden xl:flex items-center">
//             <div className="w-14 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg mr-10">
//               <img src={WirelessLogo} className="max-h-full" alt="Wireless Logo" />
//             </div>
//           </div>

//           {/* Mobile Button */}
//           <div className="xl:hidden">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-white hover:bg-blue-800"
//             >
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </Button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




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
        // { name: t("nav.offices"), url: "/about" },
        // { name: t("nav.ranks"), url: "/about/ranks" },
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
        // { name: t("nav.flash"), url: "/flashsection" },
        // { name: t("nav.officersList"), url: "/police/officers" },
        { name: t("nav.promotionOrders"), url: "/police/promotions" },
        { name: t("nav.transfers"), url: "/police/transfers" },
        { name: t("nav.gradationList"), url: "/police/gradation" },
        { name: t("nav.strategySupport"), url: "https://117.222.38.165/SSS/" },
        { name: t("nav.positiveStories"), url: "/police/stories" },
        // { name: t("nav.welfare"), url: "/about/welfare" },
      ],
    },

    {
      name: t("nav.training"),
      items: [
        // { name: t("nav.introduction"), url: "/training/introduction" },
        { name: t("nav.trainingCalendar"), url: "/training-calendar" },
        // { name: t("nav.library"), url: "/library" },
        {
          name: t("nav.traininggallery"),
          items: [
            // { name: t("nav.videos"), url: "/training/traininggallery/videos" },
            { name: t("nav.photos"), url: "/training/traininggallery/photos" },
          ],
        },
        { name: t("nav.notificationCircular"), url: "/training/notification" },
        // {
        //   name: t("nav.museum"),
        //   items: [
        //     // { name: t("nav.videos"), url: "/training/museum/videos" },
        //     { name: t("nav.photos"), url: "/training/museum/photos" },
        //   ],
        // },
        // { name: t("nav.faculties"), url: "/faculty" },
      ],
    },

    { name: t("nav.tenders"), url: "/tender" },
    { name: t("nav.recruitments"), url: "/recruitments" },
    // { name: t("nav.gallery"), url: "/gallery" },
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

          {/* Left Logos — flex-shrink-0 keeps them from collapsing */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <Link to="/">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                <img src={AshokStambhLogo} className="w-14 h-14 object-contain" alt="Ashok Stambh" />
              </div>
            </Link>
            <Link to="/">
              <div className="w-28 h-20 flex items-center justify-center">
                <img src={PoliceLogo} className="max-h-full" alt="Police Logo" />
              </div>
            </Link>
          </div>

          {/* Desktop Menu — no flex-wrap, whitespace-nowrap on buttons prevents 2-line text */}
          <div className="hidden xl:flex flex-1 min-w-0 justify-center items-center">
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
                  className="text-white text-[15.5px] hover:bg-white hover:text-blue-900 px-3 py-6 font-bold whitespace-nowrap transition-all"
                  onClick={() => !item.items && handleNavigation(item.url!)}
                >
                  {item.name}
                  {item.items && <ChevronDown className="w-3 h-3 ml-1 flex-shrink-0" />}
                </Button>

                {hoveredMenu === item.name && item.items && (
                  <div className="absolute left-0 top-full mt-[2px] w-64 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 shadow-2xl rounded-md">
                    {item.items.map((sub) => (
                      <div
                        key={sub.name}
                        className="relative"
                        onMouseEnter={() => setHoveredSubmenu(sub.name)}
                        onMouseLeave={() => setHoveredSubmenu(null)}
                      >
                        <div
                          className="px-5 py-3 text-gray-800 hover:bg-white hover:text-blue-900 cursor-pointer flex justify-between items-center font-medium transition-all"
                          onClick={() => !sub.items && handleNavigation(sub.url!)}
                        >
                          {sub.name}
                          {sub.items && <ChevronDown className="w-4 h-4" />}
                        </div>

                        {hoveredSubmenu === sub.name && sub.items && (
                          <div className="absolute left-full top-0 mt-[2px] ml-[-2px] w-56 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 shadow-2xl rounded-md">
                            {sub.items.map((child) => (
                              <div
                                key={child.name}
                                className="px-5 py-3 text-gray-800 hover:bg-white hover:text-blue-900 cursor-pointer font-medium transition-all"
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

          {/* Right Logo — flex-shrink-0 ensures it is always visible, never overflows */}
          <div className="hidden xl:flex items-center flex-shrink-0 ml-2 mr-4">
            <div className="w-20 h-16 bg-white rounded-lg flex items-center justify-center shadow-lg">
              <img src={WirelessLogo} className="max-h-full" alt="Wireless Logo" />
            </div>
          </div>

          {/* Mobile Button */}
          <div className="xl:hidden ml-auto">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-blue-800"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;