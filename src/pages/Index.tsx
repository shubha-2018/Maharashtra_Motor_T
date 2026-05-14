import HeroSection from "@/components/HeroSection";
import GovernmentUpdates from "@/components/GovernmentUpdates";
import EventsGallery from "@/components/EventsGallery";
import HelplineSection from "@/components/HelplineSection";
import OurImpact from "@/components/OurImpact";
import OurLeadership from "@/components/OurLeadership"


const Index = () => {
  return (
      <div className="min-h-screen bg-background font-sans">
        <main>

          <HeroSection />
          <GovernmentUpdates />
           <OurImpact />
            <OurLeadership/>
          <EventsGallery />
          {/* <HelplineSection /> */}

        </main>
      </div>
  );
};

export default Index;
