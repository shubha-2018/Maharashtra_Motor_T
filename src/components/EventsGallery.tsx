import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  Award,
  Camera,
  Video,
  Eye,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import GIMG_1 from "@/assets/gallery/img1.jpeg";
import GIMG_2 from "@/assets/gallery/img2.jpeg";
import GIMG_3 from "@/assets/gallery/img3.jpeg";
import GIMG_4 from "@/assets/hero/4.jpeg";
import GIMG_5 from "@/assets/hero/2.jpg";
import GIMG_6 from "@/assets/hero/5.jpg";
import { Link } from "react-router-dom";

const EventsGallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const events = [
    {
      id: 1,
      title: t("event.pcit.upgrades"),
      date: "2025-08-15",
      location: t("event.location.headquarters"),
      type: "modernization",
      icon: "⚡",
      link: "/citizen/press-release",
    },
    {
      id: 2,
      title: t("event.marvel.aiProject"),
      date: "2025-01-26",
      location: t("event.location.headquarters"),
      type: "project",
      icon: "🤖",
            link: "/citizen/press-release",
    },
    // {
    //   id: 3,
    //   title: t("event.dial112"),
    //   date: "2024-05-01",
    //   location: t("event.location.maharashtra"),
    //   type: "system",
    //   icon: "🚨",
    //   participants: 0,
    //   status: "operational",
    // },
    // {
    //   id: 4,
    //   title: t("event.cyber.centerLaunch"),
    //   date: "2024-10-15",
    //   location: t("event.location.mumbai"),
    //   type: "center",
    //   icon: "💻",
    //   participants: 0,
    //   status: "launched",
    // },
  ];

  // Placeholder gallery images - in real app, these would come from a backend
  const galleryImages = [
    {
      id: 1,
      src: GIMG_1,
      title: "Police Technology Summit 2024",
      titleMr: "पोलीस तंत्रज्ञान शिखर परिषद २०२४",
      category: "event",
      date: "2024-01-15",
    },
    {
      id: 2,
      src: GIMG_2,
      title: "Cybersecurity Training Session",
      titleMr: "सायबर सुरक्षा प्रशिक्षण सत्र",
      category: "training",
      date: "2024-01-12",
    },
    {
      id: 3,
      src: GIMG_3,
      title: "New Equipment Inauguration",
      titleMr: "नवीन उपकरण उद्घाटन",
      category: "inauguration",
      date: "2024-01-10",
    },
    {
      id: 4,
      src: GIMG_4,
      title: "Awards Ceremony",
      titleMr: "पुरस्कार सोहळा",
      category: "ceremony",
      date: "2024-01-08",
    },
    {
      id: 5,
      src: GIMG_5,
      title: "Community Outreach Program",
      titleMr: "समुदाय पोहोच कार्यक्रम",
      category: "outreach",
      date: "2024-01-05",
    },
    {
      id: 6,
      src: GIMG_6,
      title: "Digital Innovation Workshop",
      titleMr: "डिजिटल नाविन्य कार्यशाळा",
      category: "workshop",
      date: "2024-01-03",
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "ongoing":
        return "bg-green-100 text-green-800 border-green-200";
      case "completed":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case "workshop":
        return "🛠️";
      case "summit":
        return "🏆";
      case "training":
        return "📚";
      case "initiative":
        return "🚀";
      case "ceremony":
        return "🎉";
      default:
        return "📅";
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            {t("latest.events")} & {t("photo.gallery")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-saffron mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Latest Events Timeline */}
          <div className="lg:col-span-1">
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">
                    {t("latest.events")}
                  </h3>
                </div>

                <div className="space-y-4">
                  {events.map((event, index) => (
                            <Link to={event.link} >
                    <div
                      key={event.id}
                      className="relative pl-8 pb-6 border-l-2 border-border last:border-l-0 last:pb-0 fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Timeline dot */}
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full border-2 border-background"></div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">
                            {getEventIcon(event.type)}
                          </span>
                          
                        </div>

                        <h4 className="font-semibold text-foreground leading-tight">
                          {event.title}
                        </h4>
                        {/* <p className="text-sm text-muted-foreground">
                          {event.titleMr}
                        </p> */}

                        <div className="space-y-1 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(event.date)}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    </Link>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-border">
                  <Link to={"/citizen/press-release"} >
                  <Button className="btn-police w-full">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {t("view.all.events")}
                  </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Photo Gallery Grid */}
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Camera className="w-6 h-6 text-saffron" />
                    <h3 className="text-xl font-bold text-foreground">
                      {t("photo.gallery")}
                    </h3>
                  </div>
                  <Link to={"/gallery"} >
                  <Button
                    variant="outline"
                    className="hover:bg-saffron hover:text-white hover:border-saffron"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    {t("view.gallery")}
                  </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryImages.map((image, index) => (
                    <div
                      key={image.id}
                      className="relative group cursor-pointer overflow-hidden rounded-lg slide-up"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        background: `url('${image.src}')`,
                        backgroundSize: "cover",
                      }}
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <div className="aspect-square bg-gradient-to-br from-primary/20 to-saffron/20 flex items-center justify-center">
                        <Camera className="w-12 h-12 text-primary/50" />
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="font-semibold text-white text-sm leading-tight">
                            {image.title}
                          </h4>
                          <p className="text-white/80 text-xs mt-1">
                            {formatDate(image.date)}
                          </p>
                        </div>

                        <div className="absolute top-2 right-2">
                          <Badge variant="secondary" className="text-xs">
                            {image.category}
                          </Badge>
                        </div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <Eye className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Gallery Navigation */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Video className="w-4 h-4" />
                    <span>{t("gallery.videoAvailable")}</span>
                  </div>
                     <Link to={"/gallery"} >
                  <Button className="btn-saffron">
                    <Camera className="w-4 h-4 mr-2" />
                     {t("gallery.viewAllPhotos")}
                  </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Lightbox Modal (simplified) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain"
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventsGallery;
