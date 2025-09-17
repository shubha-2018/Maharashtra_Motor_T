import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";
import { Outlet } from "react-router";


function RootLayout() {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
