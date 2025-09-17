import Footer from "@/components/Footer";
import GovermentLinks from "@/components/GovermentLinks";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import SocialMediaFloatButton from "@/components/SocialMediaFloatButton";
import { Outlet } from "react-router";
import PageAccessibilityChanger from "@/components/PageAccessibilityChanger";

function RootLayout() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Navbar />
      <Outlet />
      <GovermentLinks />
      <Footer />
      <SocialMediaFloatButton />
      <PageAccessibilityChanger />
    </div>
  );
}

export default RootLayout;
