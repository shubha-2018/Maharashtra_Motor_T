import React from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GovernmentUpdates from "@/components/GovernmentUpdates";
import EventsGallery from "@/components/EventsGallery";
import HelplineSection from "@/components/HelplineSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <main>
          <HeroSection />
          <GovernmentUpdates />
          <EventsGallery />
          <HelplineSection />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default Index;
