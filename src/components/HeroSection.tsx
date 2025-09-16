import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Heart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
// Replace with your actual image URLs
const heroImage = "https://via.placeholder.com/1920x1080?text=Police+HQ";
const directorPhoto = "https://via.placeholder.com/320x400?text=Director+Photo";
const maharashtraEmblem = "https://via.placeholder.com/128x128?text=MH+Emblem";

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slider images (using same image for demo, in real app would be different)
  const heroSlides = [
    {
      image: heroImage,
      title: 'Modern Police Technology',
      subtitle: 'Enhancing Public Safety Through Innovation'
    },
    {
      image: heroImage,
      title: 'Digital Governance',
      subtitle: 'Transparent and Efficient Police Services'
    },
    {
      image: heroImage,
      title: 'Community Policing',
      subtitle: 'Building Trust Through Technology'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  // Latest Events Data
  const latestEvents = [
    {
      title: "Cyber Security Workshop",
      date: "Dec 15, 2024",
      type: "Training",
      icon: Shield
    },
    {
      title: "New IT Infrastructure Launch",
      date: "Dec 12, 2024", 
      type: "Launch",
      icon: Phone
    },
    {
      title: "Digital Policing Summit",
      date: "Dec 10, 2024",
      type: "Event", 
      icon: Heart
    }
  ];

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-background to-secondary/30">
      {/* Hero Slider */}
      <div className="relative h-[60vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000',
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            )}
          >
            <div 
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-saffron/40" />
              
              {/* Watermark Text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <h1 className="text-6xl md:text-8xl font-bold text-white transform rotate-12">
                  MAHARASHTRA POLICE
                </h1>
              </div>
              
              {/* Slide Content */}
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div className="container mx-auto px-4">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 fade-in">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-white/90 slide-up">
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
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slider Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                'w-3 h-3 rounded-full transition-all',
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              )}
            />
          ))}
        </div>
      </div>

      {/* Latest Events - Left Side */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden xl:block space-y-3">
        {latestEvents.map((event, index) => (
          <Card key={index} className="glass-card w-64 hover:scale-105 transition-transform cursor-pointer">
            <CardContent className="p-3">
              <div className="flex items-center space-x-3">
                <event.icon className="w-6 h-6 text-saffron flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold text-sm truncate">{event.title}</h4>
                  <p className="text-white/80 text-xs">{event.date}</p>
                  <span className="inline-block bg-saffron/20 text-saffron text-xs px-2 py-1 rounded-full mt-1">
                    {event.type}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Latest Events - Right Side */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden xl:block space-y-3">
        {latestEvents.slice().reverse().map((event, index) => (
          <Card key={`right-${index}`} className="glass-card w-64 hover:scale-105 transition-transform cursor-pointer">
            <CardContent className="p-3">
              <div className="flex items-center space-x-3">
                <event.icon className="w-6 h-6 text-saffron flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold text-sm truncate">{event.title}</h4>
                  <p className="text-white/80 text-xs">{event.date}</p>
                  <span className="inline-block bg-saffron/20 text-saffron text-xs px-2 py-1 rounded-full mt-1">
                    {event.type}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Director Card */}
          <Card className="glass-card overflow-hidden fade-in">
            <div className="relative">
              {/* Background Emblem Watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <img src={maharashtraEmblem} alt="" className="w-32 h-32" />
              </div>
              
              <CardContent className="p-8 text-center relative z-10">
                <div className="relative inline-block mb-6">
                  <img 
                    src={directorPhoto} 
                    alt="Director"
                    className="w-32 h-40 object-cover rounded-lg shadow-xl mx-auto"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-saffron rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {t('director.name')}
                </h3>
                <p className="text-primary font-semibold mb-1">
                  {t('director.rank')}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {t('director.designation')}
                </p>
                
                <Button className="btn-police">
                  {t('director.desk')}
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Welcome Message */}
          <div className="space-y-6 slide-up">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                {t('welcome.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t('welcome.message')}
              </p>
            </div>

            <Card className="glass-card border-l-4 border-l-saffron">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t('director.desk')}
                </h3>
                <p className="text-muted-foreground mb-4">
                  "Our commitment to modernizing police infrastructure through cutting-edge communication and information technology continues to strengthen Maharashtra's security framework..."
                </p>
                <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                  {t('read.more')}
                </Button>
              </CardContent>
            </Card>

            {/* Mobile Latest Events */}
            <div className="xl:hidden mt-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Latest Events</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {latestEvents.map((event, index) => (
                  <Card key={index} className="glass-card hover:scale-105 transition-transform cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <event.icon className="w-6 h-6 text-primary flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm text-foreground truncate">{event.title}</h4>
                          <p className="text-muted-foreground text-xs">{event.date}</p>
                          <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mt-1">
                            {event.type}
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