import HeroSection from "@/components/HeroSection";
import GovernmentUpdates from "@/components/GovernmentUpdates";
import EventsGallery from "@/components/EventsGallery";
import HelplineSection from "@/components/HelplineSection";


const Index = () => {
  return (
      <div className="min-h-screen bg-background font-sans">
        <main>

          <HeroSection />
          <GovernmentUpdates />
          <EventsGallery />
          {/* <HelplineSection /> */}

        </main>
      </div>
  );
};

export default Index;
