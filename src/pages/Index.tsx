import React from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GovernmentUpdates from "@/components/GovernmentUpdates";
import EventsGallery from "@/components/EventsGallery";
import HelplineSection from "@/components/HelplineSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SocialMediaFloatButton from "@/components/SocialMediaFloatButton";

const Index = () => {
  return (
      <div className="min-h-screen bg-background font-sans">
        {/* <Header />
        <Navbar/> */}
        <main>
          <HeroSection />
          <GovernmentUpdates />
          <EventsGallery />
          <HelplineSection />
          <SocialMediaFloatButton />
        </main>
      </div>
  );
};

export default Index;
