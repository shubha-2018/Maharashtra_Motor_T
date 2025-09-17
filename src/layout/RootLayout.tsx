import Footer from "@/components/Footer";
import GovermentLinks from "@/components/GovermentLinks";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import React, { ReactNode } from "react";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Navbar />
      <Outlet />
      <GovermentLinks />
      <Footer />
    </div>
  );
}

export default RootLayout;
