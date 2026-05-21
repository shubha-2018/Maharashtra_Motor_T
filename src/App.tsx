import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LanguageProvider } from "@/contexts/LanguageContext";

import "./i18n";

/* ================= LAYOUT ================= */
import RootLayout from "./layout/RootLayout";

/* ================= MAIN PAGES ================= */
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

/* ================= ABOUT PAGES ================= */
import DirectorsDesk from "./pages/about/DirectorsDesk";
import FormerDirectors from "./pages/about/FormerDirectors";
import Hierarchy from "./pages/about/Hierarchy";
import AboutDepartment from "./pages/about/AboutDepartment";
// import OfficesHeadquarters from "./pages/about/OfficesHeadquarters";

/* ================= TRAINING ================= */
import TrainingGallery from "./pages/Training/TrainingGallery";

/* ================= NEW COMBINED PAGE ================= */
import CombinedHierarchy from "./pages/about/CombinedHierarchy";

/* ================= POLICE PAGES ================= */
import Gazette from "./pages/police/Gazette";
import ListOfOfficers from "./pages/police/ListOfOfficers";
import PromotionOrders from "./pages/police/PromotionOrders";
import Transfers from "./pages/police/Transfers";
import GradationList from "./pages/police/GradationList";
// import PositiveStories from "./pages/police/PositiveStories";

/* ================= CITIZEN PAGES ================= */
import PressRelease from "./pages/citizen/PressRelease";
import RTI from "./pages/citizen/RTI";
import Tender from "./pages/citizen/Tender";
import Recruitments from "./pages/citizen/Recruitments";

/* ================= GENERAL PAGES ================= */
import Contact from "./pages/Contact";
import PhotoGallery from "./pages/PhotoGallery";
import PrivacyPolicy from "./pages/general/PrivacyPolicy";
import AccessibilityPage from "./pages/general/AccessibilityPage";

/* ================= FLASH PAGES ================= */
import OtherFlash from "./pages/OtherFlash";

/* ================= ORGANIZATIONAL COMPONENTS ================= */
import OrganizationalChart from "./components/FlowChart";
import PuneRangeTable from "./components/PuneRange";
import NagpurRange from "./components/NagpurRange";
import KokanRangeTable from "./components/KokanRange";
import ChtrapatiSambhajiNagarRange from "./components/ChtrapatiSambhajiNagarRange";
import UnitDyspSp from "./components/UnitDyspSp";

/* ================= TRAINING CALENDAR ================= */
import TrainingCalender from "./pages/TrainingCalender";

/* ================= FACULTY ================= */
import Faculty from "./pages/Faculty";

/* ================= QUERY CLIENT ================= */
const queryClient = new QueryClient();

/* ================= ROUTES ================= */
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>

        {/* ================= HOME ================= */}
        <Route index element={<Index />} />

        {/* ================= ABOUT ================= */}
        <Route path="about/directors-desk" element={<DirectorsDesk />} />
        <Route path="about/former-directors" element={<FormerDirectors />} />
        <Route path="about/hierarchy" element={<CombinedHierarchy />} />
        <Route path="about/department" element={<AboutDepartment />} />
        {/* <Route path="about/offices" element={<OfficesHeadquarters />} /> */}

        {/* ================= TRAINING ================= */}

        {/* ✅ MAIN PAGE */}
        <Route path="training/batches" element={<TrainingGallery />} />

        {/* ✅ FIX FOR OLD/BROKEN URL (prevents 404 error) */}
        <Route
          path="training/traininggallery/photos"
          element={<TrainingGallery />}
        />

        {/* ================= TRAINING CALENDAR ================= */}
        <Route path="training-calendar" element={<TrainingCalender />} />

        {/* ================= CITIZEN ================= */}
        <Route path="citizen/press-release" element={<PressRelease />} />
        <Route path="citizen/rti" element={<RTI />} />
        <Route path="tender" element={<Tender />} />
        <Route path="recruitments" element={<Recruitments />} />

        {/* ================= POLICE ================= */}
        <Route path="police/gazette" element={<Gazette />} />
        <Route path="police/officers" element={<ListOfOfficers />} />
        <Route path="police/promotions" element={<PromotionOrders />} />
        <Route path="police/transfers" element={<Transfers />} />
        <Route path="police/gradation" element={<GradationList />} />
        {/* <Route path="police/stories" element={<PositiveStories />} /> */}

        {/* ================= FLASH ================= */}
        <Route path="gradation-list" element={<GradationList />} />
        <Route path="transfer-orders" element={<Transfers />} />
        <Route path="promotion-orders" element={<PromotionOrders />} />
        <Route path="press-release" element={<PressRelease />} />
        <Route path="other-flash" element={<OtherFlash />} />

        {/* ================= GENERAL ================= */}
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<PhotoGallery />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="accessibility" element={<AccessibilityPage />} />

        {/* ================= FACULTY ================= */}
        <Route path="faculty" element={<Faculty />} />

        {/* ================= FLOW CHART ================= */}
        <Route path="organizational-chart" element={<OrganizationalChart />} />

        {/* ================= HQ ================= */}
        <Route path="unit-dysp" element={<UnitDyspSp />} />

        {/* ================= RANGE PAGES ================= */}
        <Route path="range/pune" element={<PuneRangeTable />} />
        <Route path="range/nagpur" element={<NagpurRange />} />
        <Route path="range/cs_nagar" element={<ChtrapatiSambhajiNagarRange />} />
        <Route path="range/konkan" element={<KokanRangeTable />} />

        {/* ================= OLD HIERARCHY PAGE ================= */}
        <Route path="hierarchy-only" element={<Hierarchy />} />

        {/* ================= 404 ================= */}
        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  );
};

/* ================= APP ================= */
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