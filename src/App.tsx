import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext"; // Make sure this exists

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DirectorsDesk from "./pages/about/DirectorsDesk";
import FormerDirectors from "./pages/about/FormerDirectors";


import Hierarchy from "./pages/about/Hierarchy";
import AboutDepartment from "./pages/about/AboutDepartment";
import OfficesHeadquarters from "./pages/about/OfficesHeadquarters";
import Ranks from "./pages/about/Ranks";
import WelfareActivities from "./pages/about/WelfareActivities";
import RootLayout from "./layout/RootLayout";
import PressRelease from "./pages/citizen/PressRelease";
import RTI from "./pages/citizen/RTI";
import Gazette from "./pages/police/Gazette";
import ListOfOfficers from "./pages/police/ListOfOfficers";
import PromotionOrders from "./pages/police/PromotionOrders";
import Transfers from "./pages/police/Transfers";
import GradationList from "./pages/police/GradationList";
import StrategySupportSystem from "./pages/police/StrategySupportSystem";
import PositiveStories from "./pages/police/PositiveStories";
import Tender from "./pages/citizen/Tender";

import Contact from "./pages/Contact";
import Recruitments from "./pages/citizen/Recruitments";
import PhotoGallery from "./pages/PhotoGallery";

const queryClient = new QueryClient();

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Index />} />
      <Route path="about/directors-desk" element={<DirectorsDesk />} />
      <Route path="about/former-directors" element={<FormerDirectors />} />
      <Route path="about/hierarchy" element={<Hierarchy />} />
      <Route path="about/department" element={<AboutDepartment />} />
      <Route path="about/offices" element={<OfficesHeadquarters />} />
      <Route path="about/ranks" element={<Ranks />} />
      <Route path="about/welfare" element={<WelfareActivities />} />
      <Route path="/citizen/press-release" element={<PressRelease />} />
      <Route path="/citizen/rti" element={<RTI />} />
      <Route path="/citizen/tender" element={<Tender />} />
      <Route path="/citizen/recruitments" element={<Recruitments />} />
      <Route path="/police/gazette" element={<Gazette />} />

      <Route path="/police/gazette" element={<Gazette />} />
      <Route path="/police/officers" element={<ListOfOfficers />} />
      <Route path="/police/promotions" element={<PromotionOrders />} />
      <Route path="/police/transfers" element={<Transfers />} />
      <Route path="/police/gradation" element={<GradationList />} />
      <Route path="/police/strategy" element={<StrategySupportSystem />} />
      <Route path="/police/stories" element={<PositiveStories />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<PhotoGallery />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
