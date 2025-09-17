import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";
import { Outlet } from "react-router";

interface RootLayoutProps {
  children?: ReactNode;
}

function RootLayout() {
  return (
    <div>
      {/* Pass goBack to Navbar if needed */}
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
