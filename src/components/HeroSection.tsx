import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Heart,
  Shield,
  AlertTriangle,
  Flame,
  Baby,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import IMG1 from "@/assets/hero/4.jpg";
import IMG2 from "@/assets/hero/2.jpg";
import IMG3 from "@/assets/hero/5.jpg";
import IMG4 from "@/assets/hero/Aaryabhatt-Garden-4.jpg";
import IMG6 from "@/assets/hero/Slider.jpeg";
import DIRECTOR_PHOTO from "@/assets/director.jpg";
import { Link } from "react-router-dom";

const maharashtraEmblem = "https://via.placeholder.com/128x128?text=MH+Emblem";

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slider images
  const heroSlides = [
    {
      image: IMG6,
      title: t("title"),
      subtitle: t("hero.modernTech.subtitle"),
    },
    {
      image: IMG1,
      title: t("hero.digitalGovernance.title"),
      subtitle: t("hero.digitalGovernance.subtitle"),
    },
    {
      image: IMG3,
      title: t("hero.communityPolicing.title"),
      subtitle: t("hero.communityPolicing.subtitle"),
    },
    {
      image: IMG2,
      title: t("hero.modernTech.title"),
      subtitle: t("hero.modernTech.subtitle"),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );

  const emergencyContacts = [
    {
      title: t("dial"),
      number: "112",
      type: t("type.police"),
      icon: Shield,
    },
    {
      title: t("emergency.fire"),
      number: "101",
      type: t("type.fire"),
      icon: Flame,
    },
    {
      title: t("emergency.ambulance"),
      number: "102",
      type: t("type.medical"),
      icon: Heart,
    },
    {
      title: t("emergency.disaster"),
      number: "108",
      type: t("type.disaster"),
      icon: AlertTriangle,
    },
    {
      title: t("emergency.women"),
      number: "1091",
      type: t("type.women"),
      icon: Phone,
    },
    {
      title: t("emergency.single"),
      number: "112",
      type: t("type.allInOne"),
      icon: PhoneCall,
    },
  ];

  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-background to-secondary/30">
      {/* Hero Slider */}
      <div className="relative h-[30vh] md:h-[85vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-saffron/40" />

              {/* Slide Content */}
              <div className="absolute inset-0 flex items-end mb-[2rem] md:mb-28 justify-center text-center">
                <div className="container mx-auto px-4 flex-col gap-y-5 justify-center">
                  <h2
                    className="text-2xl md:text-5xl xl:text-5xl capitalize font-bold text-white mb-4 fade-in"
                    dangerouslySetInnerHTML={{ __html: t(slide.title) }}
                  />
                  <p className="hidden sm:block text-lg sm:text-xl md:text-2xl text-white/90 slide-up">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 
             bg-black/70 hover:bg-black/80 
             text-white p-3 rounded-full shadow-lg 
             backdrop-blur-sm transition-all z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 
             bg-black/70 hover:bg-black/80 
             text-white p-3 rounded-full shadow-lg 
             backdrop-blur-sm transition-all z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slider Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                index === currentSlide ? "bg-white" : "bg-white/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Director Card */}
          <Card className="glass-card overflow-hidden fade-in">
            <div className="relative">
              {/* Background Emblem Watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <img
                  src={maharashtraEmblem}
                  alt="Maharashtra Police Emblem"
                  className="w-32 h-32"
                />
              </div>

              <CardContent className="p-8 text-center relative z-10">
                <div className="relative inline-block mb-6">
                  <img
                    src={DIRECTOR_PHOTO}
                    alt="Director of Police"
                    className="w-52 h-52 object-cover rounded-lg shadow-xl mx-auto"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-saffron rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {t("director.name")}
                </h3>
                <p className="text-primary font-semibold mb-1">
                  {t("director.rank")}
                </p>
                <p
                  className="text-muted-foreground text-sm mb-4"
                  dangerouslySetInnerHTML={{ __html: t("director.designation") }}
                />
                <Link to={"/about/directors-desk"}>
                  <Button className="btn-police dark:text-white">
                    {t("director.desk")}
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>

          {/* Welcome Message */}
          <div className="space-y-6 slide-up">
            <div>
              <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-gradient mb-4 p-3">
                {t("welcome.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t("welcome.message")}
              </p>
            </div>

            <Card className="glass-card border-l-4 border-l-saffron">
              <CardContent className="p-6">
                <h3 className="text-muted-foreground mb-4 leading-relaxed text-justify">
                  {t("director.desk")}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t("director.caption")}
                </p>
                <Link to={"/about/directors-desk"}>
                  <Button
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground dark:text-white"
                  >
                    {t("read.more")}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Mobile Emergency Contacts */}
            <div className="xl:hidden mt-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {t("emergency_contacts")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {emergencyContacts.map((contact, index) => (
                  <Card
                    key={index}
                    className="glass-card hover:scale-105 transition-transform cursor-pointer"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <contact.icon className="w-6 h-6 text-primary flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm text-foreground truncate">
                            {contact.title}
                          </h4>
                          <p
                            className="text-muted-foreground text-xs cursor-pointer hover:text-primary transition-colors"
                            onClick={() =>
                              handleCall(contact.number.replace(/\D/g, ""))
                            }
                          >
                            {contact.number}
                          </p>
                          <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mt-1">
                            {contact.type}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
