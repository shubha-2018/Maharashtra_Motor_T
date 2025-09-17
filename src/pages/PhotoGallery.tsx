import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";
import { useState } from "react";

// Import 4 images
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/1.jpg";
import img3 from "@/assets/1.jpg";
import img4 from "@/assets/1.jpg";

export default function PhotoGallery() {
  const galleryItems = [
    { src: img1, caption: "Dr. APJ Abdul Kalam Innovation Center Inauguration" },
    { src: img2, caption: "Independence Day Celebrations" },
    { src: img3, caption: "Union Home Minister’s Trophy Award Ceremony" },
    { src: img4, caption: "Dnyaneshwari – Senior Officer Mess (SOM)" },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState({ src: "", caption: "" });

  const openModal = (item) => {
    setActiveImage(item);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 text-gray-900 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Back to Home Button */}
      <Button
        variant="ghost"
        onClick={() => window.history.back()}
        className="flex items-center text-gray-900 hover:bg-gray-200 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-gray-300 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
      </Button>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg mb-10">
        Photo Gallery
      </h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {galleryItems.map((item, idx) => (
          <Card
            key={idx}
            className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-blue-400/20 transition-all duration-500 cursor-pointer"
            onClick={() => openModal(item)}
          >
            <img
              src={item.src}
              alt={item.caption}
              className="w-full h-64 object-cover rounded-t-3xl"
            />
            <CardContent className="p-6 text-center">
              <p className="text-lg font-semibold text-gray-800">{item.caption}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl">
            <button
              className="absolute top-4 right-4 text-gray-800 hover:text-gray-600"
              onClick={closeModal}
            >
              <X className="w-6 h-6" />
            </button>
            <img src={activeImage.src} alt={activeImage.caption} className="w-full h-auto object-cover" />
            <div className="p-6 text-center">
              <p className="text-xl font-semibold text-gray-900">{activeImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
