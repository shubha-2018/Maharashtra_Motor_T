import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useLanguage } from "@/contexts/LanguageContext"; // Import the language hook

// Import 4 images
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/1.jpg";
import img3 from "@/assets/1.jpg";
import img4 from "@/assets/1.jpg";

export default function PhotoGallery() {
  const navigate = useNavigate();
  const { t } = useLanguage(); // Use the language hook
  const goBack = () => navigate(-1);

  const galleryItems = [
    {
      src: img1,
      captionKey: "gallery.image1.caption",
    },
    {
      src: img2,
      captionKey: "gallery.image2.caption",
    },
    {
      src: img3,
      captionKey: "gallery.image3.caption",
    },
    {
      src: img4,
      captionKey: "gallery.image4.caption",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState({ src: "", captionKey: "" });

  const openModal = (item) => {
    setActiveImage(item);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Back to Home Button */}
      <Button
        variant="ghost"
        onClick={goBack}
        className="flex items-center text-gray-900 hover:bg-gray-200 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-gray-300 mb-8 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:shadow-gray-800"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> {t("back.home")}
      </Button>

      {/* Heading */}
      <h1 className="text-5xl p-3 md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg mb-10 dark:from-violet-500 dark:via-blue-500 dark:to-teal-500">
        {t("gallery.title")}
      </h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {galleryItems.map((item, idx) => (
          <Card
            key={idx}
            className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-blue-400/20 transition-all duration-500 cursor-pointer dark:bg-gray-800/30 dark:border-gray-700 dark:hover:shadow-blue-600/20"
            onClick={() => openModal(item)}
          >
            <img
              src={item.src}
              alt={t(item.captionKey)}
              className="w-full h-44 sm:h-96 object-cover rounded-t-3xl"
            />
            <CardContent className="p-6 text-center">
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {t(item.captionKey)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl dark:bg-gray-800">
            <button
              className="absolute top-4 right-4 text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400"
              onClick={closeModal}
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeImage.src}
              alt={t(activeImage.captionKey)}
              className="w-full h-auto object-cover"
            />
            <div className="p-6 text-center">
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {t(activeImage.captionKey)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
