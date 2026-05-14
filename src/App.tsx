// import React from "react";
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import {
//   QueryClient,
//   QueryClientProvider,
// } from "@tanstack/react-query";

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

// import { LanguageProvider } from "@/contexts/LanguageContext";

// import "./i18n";

// // 🧭 Layout
// import RootLayout from "./layout/RootLayout";

// // 🏠 Main Pages
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";

// // 🧩 About Pages
// import DirectorsDesk from "./pages/about/DirectorsDesk";
// import FormerDirectors from "./pages/about/FormerDirectors";
// import Hierarchy from "./pages/about/Hierarchy";
// import AboutDepartment from "./pages/about/AboutDepartment";
// import OfficesHeadquarters from "./pages/about/OfficesHeadquarters";
// import Ranks from "./pages/about/Ranks";
// // import WelfareActivities from "./pages/about/WelfareActivities";

// // 👮 Police Pages
// import Gazette from "./pages/police/Gazette";
// import ListOfOfficers from "./pages/police/ListOfOfficers";
// import PromotionOrders from "./pages/police/PromotionOrders";
// import Transfers from "./pages/police/Transfers";
// import GradationList from "./pages/police/GradationList";
// import PositiveStories from "./pages/police/PositiveStories";

// // 👥 Citizen Pages
// import PressRelease from "./pages/citizen/PressRelease";
// import RTI from "./pages/citizen/RTI";
// import Tender from "./pages/citizen/Tender";
// import Recruitments from "./pages/citizen/Recruitments";

// // 📞 General Pages
// import Contact from "./pages/Contact";
// import PhotoGallery from "./pages/PhotoGallery";
// import PrivacyPolicy from "./pages/general/PrivacyPolicy";
// // import TermsOfUse from "./pages/general/TermsOfUse";
// import AccessibilityPage from "./pages/general/AccessibilityPage";

// // ⚡ Flash Pages
// import OtherFlash from "./pages/OtherFlash";
// import OrganizationalChart from "./components/FlowChart";
// import PuneRangeTable  from "./components/PuneRange";
// import NagpurRange from "./components/NagpurRange";
// import KokanRangeTable from "./components/KokanRange";
// import ChtrapatiSambhajiNagarRange from "./components/ChtrapatiSambhajiNagarRange";
// // import FlashSection from "./components/FlashSection";

// // 🎓 Training Pages
// // import Introduction from "./pages/Training/Introduction";
// import TrainingCalender from "./pages/TrainingCalender";

// // 👨‍🏫 Faculty Page
// import Faculty from "./pages/Faculty";

// const queryClient = new QueryClient();

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<RootLayout />}>
        
//         {/* 🏠 Home */}
//         <Route index element={<Index />} />

//         {/* 🧩 About Section */}
//         <Route
//           path="about/directors-desk"
//           element={<DirectorsDesk />}
//         />
//         <Route
//           path="about/former-directors"
//           element={<FormerDirectors />}
//         />
//         <Route
//           path="about/hierarchy"
//           element={<Hierarchy />}
//         />
//          <Route
//           path="about/hierarchy"
//           element={<Hierarchy />}
//         />

//         <Route
//           path="about/department"
//           element={<AboutDepartment />}
//         />
//         <Route
//           path="about/offices"
//           element={<OfficesHeadquarters />}
//         />
//         <Route
//           path="about/ranks"
//           element={<Ranks />}
//         />
//         {/* <Route
//           path="about/welfare"
//           element={<WelfareActivities />}
//         /> */}

//         {/* 👥 Citizen Section */}
//         <Route
//           path="citizen/press-release"
//           element={<PressRelease />}
//         />
//         <Route
//           path="citizen/rti"
//           element={<RTI />}
//         />
//         <Route
//           path="tender"
//           element={<Tender />}
//         />
//         <Route
//           path="recruitments"
//           element={<Recruitments />}
//         />

//         {/* 👮 Police Section */}
//         <Route
//           path="police/gazette"
//           element={<Gazette />}
//         />
//         <Route
//           path="police/officers"
//           element={<ListOfOfficers />}
//         />
//         <Route
//           path="police/promotions"
//           element={<PromotionOrders />}
//         />
//         <Route
//           path="police/transfers"
//           element={<Transfers />}
//         />
//         <Route
//           path="police/gradation"
//           element={<GradationList />}
//         />
//         <Route
//           path="police/stories"
//           element={<PositiveStories />}
//         />

//         {/* 🎓 Training Section */}
//         {/* <Route
//           path="training/introduction"
//           element={<Introduction />}
//         /> */}

//         <Route
//           path="training-calendar"
//           element={<TrainingCalender />}
//         />

//         {/* ⚡ Flash Section */}
//         {/* <Route
//           path="flashsection"
//           element={<FlashSection />}
//         /> */}

//         <Route
//           path="gradation-list"
//           element={<GradationList />}
//         />

//         <Route
//           path="transfer-orders"
//           element={<Transfers />}
//         />

//         <Route
//           path="promotion-orders"
//           element={<PromotionOrders />}
//         />

//         <Route
//           path="press-release"
//           element={<PressRelease />}
//         />

//         <Route
//           path="other-flash"
//           element={<OtherFlash />}
//         />

//         {/* 📞 General Pages */}
//         <Route
//           path="contact"
//           element={<Contact />}
//         />

//         <Route
//           path="gallery"
//           element={<PhotoGallery />}
//         />

//         <Route
//           path="privacy-policy"
//           element={<PrivacyPolicy />}
//         />
// {/* 
//         <Route
//           path="terms-of-use"
//           element={<TermsOfUse />}
//         /> */}

//         <Route
//           path="accessibility"
//           element={<AccessibilityPage />}
//         />

//         {/* 👨‍🏫 Faculty */}
//         <Route
//           path="faculty"
//           element={<Faculty />}
//         />

//         {/* 🚫 404 */}
//         <Route
//           path="*"
//           element={<NotFound />}
//         />
//               <Route path="/organizational-chart" element={<OrganizationalChart />} />

//       </Route>
//     </Routes>
//   );
// };

// const App = () => {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <LanguageProvider>
//         <TooltipProvider>
//           <BrowserRouter>
//             <Toaster />
//             <Sonner />
//             <AppRoutes />
//           </BrowserRouter>
//         </TooltipProvider>
//       </LanguageProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;


import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { LanguageProvider } from "@/contexts/LanguageContext";

import "./i18n";

// 🧭 Layout
import RootLayout from "./layout/RootLayout";

// 🏠 Main Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// 🧩 About Pages
import DirectorsDesk from "./pages/about/DirectorsDesk";
import FormerDirectors from "./pages/about/FormerDirectors";
import Hierarchy from "./pages/about/Hierarchy";
import AboutDepartment from "./pages/about/AboutDepartment";
import OfficesHeadquarters from "./pages/about/OfficesHeadquarters";
// import Ranks from "./pages/about/Ranks";

// 👮 Police Pages
import Gazette from "./pages/police/Gazette";
import ListOfOfficers from "./pages/police/ListOfOfficers";
import PromotionOrders from "./pages/police/PromotionOrders";
import Transfers from "./pages/police/Transfers";
import GradationList from "./pages/police/GradationList";
import PositiveStories from "./pages/police/PositiveStories";

// 👥 Citizen Pages
import PressRelease from "./pages/citizen/PressRelease";
import RTI from "./pages/citizen/RTI";
import Tender from "./pages/citizen/Tender";
import Recruitments from "./pages/citizen/Recruitments";

// 📞 General Pages
import Contact from "./pages/Contact";
import PhotoGallery from "./pages/PhotoGallery";
import PrivacyPolicy from "./pages/general/PrivacyPolicy";
import AccessibilityPage from "./pages/general/AccessibilityPage";

// ⚡ Flash Pages
import OtherFlash from "./pages/OtherFlash";

// 🗺️ Organizational Chart & Range Pages
import OrganizationalChart         from "./components/FlowChart";
import PuneRangeTable              from "./components/PuneRange";
import NagpurRange                 from "./components/NagpurRange";
import KokanRangeTable             from "./components/KokanRange";
import ChtrapatiSambhajiNagarRange from "./components/ChtrapatiSambhajiNagarRange";
import UnitDyspSp                  from "./components/UnitDyspSp";

// 🎓 Training Pages
import TrainingCalender from "./pages/TrainingCalender";

// 👨‍🏫 Faculty Page
import Faculty from "./pages/Faculty";

const queryClient = new QueryClient();

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>

        {/* 🏠 Home */}
        <Route index element={<Index />} />

        {/* 🧩 About Section */}
        <Route path="about/directors-desk"  element={<DirectorsDesk />} />
        <Route path="about/former-directors" element={<FormerDirectors />} />
        <Route path="about/hierarchy"        element={<Hierarchy />} />
        <Route path="about/department"       element={<AboutDepartment />} />
        <Route path="about/offices"          element={<OfficesHeadquarters />} />
        {/* <Route path="about/ranks"            element={<Ranks />} /> */}

        {/* 👥 Citizen Section */}
        <Route path="citizen/press-release"  element={<PressRelease />} />
        <Route path="citizen/rti"            element={<RTI />} />
        <Route path="tender"                 element={<Tender />} />
        <Route path="recruitments"           element={<Recruitments />} />

        {/* 👮 Police Section */}
        <Route path="police/gazette"         element={<Gazette />} />
        <Route path="police/officers"        element={<ListOfOfficers />} />
        <Route path="police/promotions"      element={<PromotionOrders />} />
        <Route path="police/transfers"       element={<Transfers />} />
        <Route path="police/gradation"       element={<GradationList />} />
        <Route path="police/stories"         element={<PositiveStories />} />

        {/* ⚡ Flash Section */}
        <Route path="gradation-list"         element={<GradationList />} />
        <Route path="transfer-orders"        element={<Transfers />} />
        <Route path="promotion-orders"       element={<PromotionOrders />} />
        <Route path="press-release"          element={<PressRelease />} />
        <Route path="other-flash"            element={<OtherFlash />} />

        {/* 🎓 Training Section */}
        <Route path="training-calendar"      element={<TrainingCalender />} />

        {/* 📞 General Pages */}
        <Route path="contact"                element={<Contact />} />
        <Route path="gallery"                element={<PhotoGallery />} />
        <Route path="privacy-policy"         element={<PrivacyPolicy />} />
        <Route path="accessibility"          element={<AccessibilityPage />} />

        {/* 👨‍🏫 Faculty */}
        <Route path="faculty"                element={<Faculty />} />

        {/* 🗺️ Organizational Chart */}
        <Route path="organizational-chart"   element={<OrganizationalChart />} />

        {/* 🏢 HQ Page */}
        <Route path="unit-dysp"              element={<UnitDyspSp />} />

        {/* 📍 Range Pages */}
        <Route path="range/pune"             element={<PuneRangeTable />} />
        <Route path="range/nagpur"           element={<NagpurRange />} />
        <Route path="range/cs_nagar"         element={<ChtrapatiSambhajiNagarRange />} />
        <Route path="range/konkan"           element={<KokanRangeTable />} />

        {/* 🚫 404 */}
        <Route path="*"                      element={<NotFound />} />

      </Route>
    </Routes>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <BrowserRouter>
            <Toaster />
            <Sonner />
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;