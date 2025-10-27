import React, { useState } from "react";
import {
  Calendar,
  MapPin,
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
import GIMG_4 from "@/assets/gallery/6.jpg";
import GIMG_5 from "@/assets/hero/2.jpg";
import GIMG_6 from "@/assets/gallery/7.jpg";
import { Link } from "react-router-dom";

const EventsGallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const policeBlue = "#0A1E4A"; // Police theme color

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
  ];

  const galleryImages = [
    { id: 1, src: GIMG_1, title: "Police Technology Summit 2024", category: "event", date: "2024-01-15" },
    { id: 2, src: GIMG_2, title: "Cybersecurity Training Session", category: "training", date: "2024-01-12" },
    { id: 3, src: GIMG_3, title: "New Equipment Inauguration", category: "inauguration", date: "2024-01-10" },
    { id: 4, src: GIMG_4, title: "Awards Ceremony", category: "ceremony", date: "2024-01-08" },
    { id: 5, src: GIMG_5, title: "Community Outreach Program", category: "outreach", date: "2024-01-05" },
    { id: 6, src: GIMG_6, title: "Digital Innovation Workshop", category: "workshop", date: "2024-01-03" },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case "workshop": return "🛠️";
      case "summit": return "🏆";
      case "training": return "📚";
      case "initiative": return "🚀";
      case "ceremony": return "🎉";
      default: return "📅";
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-black transition-colors duration-500">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {t("latest.events")} & {t("photo.gallery")}
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ background: policeBlue }}
          ></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Events Timeline */}
          <div className="lg:col-span-1">
            <Card className="bg-white dark:bg-[#101B33] shadow-md rounded-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="w-6 h-6 text-[rgb(0,51,102)]" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {t("latest.events")}
                  </h3>
                </div>

                <div className="space-y-4">
                  {events.map((event, index) => (
                    <Link key={event.id} to={event.link}>
                      <div
                        className="relative pl-8 pb-6 border-l-2 border-[rgb(0,51,102)] last:border-l-0 last:pb-0"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-[rgb(0,51,102)] rounded-full border-2 dark:border-black"></div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-lg">{getEventIcon(event.type)}</div>
                          <h4 className="font-semibold text-gray-900 dark:text-white leading-tight">{event.title}</h4>
                          <div className="space-y-1 text-xs text-gray-500 dark:text-white/70">
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

                <div className="text-center pt-4 border-t border-gray-300 dark:border-gray-700">
                  <Link to={"/citizen/press-release"}>
                    <Button className="w-full bg-[rgb(0,51,102)] hover:bg-[rgb(0,61,122)] text-white dark:text-white">
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
            <Card className="bg-white dark:bg-[#101B33] shadow-md rounded-xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Camera className="w-6 h-6 text-[rgb(0,51,102)]" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t("photo.gallery")}</h3>
                  </div>
                  {/* <Link to={"/gallery"}>
                    <Button
                      variant="outline"
                      className="hover:bg-[rgb(0,51,102)] hover:text-white hover:border-[rgb(0,51,102)] text-[rgb(0,51,102)] dark:text-white"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      {t("view.gallery")}
                    </Button>
                  </Link> */}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryImages.map((image, index) => (
                    <div
                      key={image.id}
                      className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h4 className="font-semibold text-white text-sm">{image.title}</h4>
                        <p className="text-white/80 text-xs">{formatDate(image.date)}</p>
                        <Badge variant="secondary" className="absolute top-2 right-2 text-xs">
                          {image.category}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-300 dark:border-gray-700">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-white/70">
                    {/* <Video className="w-4 h-4" /> */}
                    {/* <span>{t("gallery.videoAvailable")}</span> */}
                  </div>
                  {/* <Link to={"/gallery"}>
                    <Button className="bg-[rgb(0,51,102)] hover:bg-[rgb(0,61,122)] text-white dark:text-white">
                      <Camera className="w-4 h-4 mr-2" />
                      {t("gallery.viewAllPhotos")}
                    </Button>
                  </Link> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Lightbox Modal - Fixed Size with Border and Close Button */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[600px] h-[400px] flex items-center justify-center bg-black rounded-xl border-4 border-[rgb(0,51,102)] overflow-hidden shadow-lg">
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="w-full h-full object-cover"
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 text-white bg-black/40 hover:bg-[rgb(0,51,102)] rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold shadow-md"
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
