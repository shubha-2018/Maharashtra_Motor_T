import React, { useState } from "react";
import { X, Heart, Maximize2 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

// ✅ Import Images
import photo1 from "../assets/images/t1.jpg";
import photo2 from "../assets/images/t2.jpg";
import photo3 from "../assets/images/t3.jpg";
import photo4 from "../assets/images/t4.jpg";
import photo5 from "../assets/images/t5.jpg";

import photo6 from "../assets/images/m11.jpg";
import photo7 from "../assets/images/m12.jpg";
import photo8 from "../assets/images/m13.jpg";
import photo9 from "../assets/images/m14.jpg";
import photo10 from "../assets/images/m15.jpg";

import photo11 from "../assets/images/a1.jpg";
import photo12 from "../assets/images/a2.jpg";
import photo13 from "../assets/images/a3.jpg";
import photo14 from "../assets/images/karmachari.jpg";
import photo15 from "../assets/images/a2.jpg";

import photo16 from "../assets/mt_photos/photo-gallery-mt/puneR1.jpeg";
import photo17 from "../assets/mt_photos/photo-gallery-mt/puneR5.jpeg";
import photo18 from "../assets/mt_photos/photo-gallery-mt/puneR2.jpeg";
import photo19 from "../assets/mt_photos/photo-gallery-mt/puneR3.jpeg";
import photo20 from "../assets/mt_photos/photo-gallery-mt/puneR4.jpeg";

import photo21 from "../assets/mt_photos/photo-gallery-mt/punecity1.jpeg";
import photo22 from "../assets/mt_photos/photo-gallery-mt/punecity2.jpeg";
import photo23 from "../assets/mt_photos/photo-gallery-mt/punecity3.jpeg";
import photo24 from "../assets/mt_photos/photo-gallery-mt/punecity4.jpeg";
import photo25 from "../assets/mt_photos/photo-gallery-mt/punecity5.jpeg";

import photo26 from "../assets/mt_photos/photo-gallery-mt/SRPF1.jpeg";
import photo27 from "../assets/mt_photos/photo-gallery-mt/SRPF2.jpeg";
import photo28 from "../assets/mt_photos/photo-gallery-mt/SRPF3.jpeg";
import photo29 from "../assets/mt_photos/photo-gallery-mt/SRPF4.jpeg";
import photo30 from "../assets/mt_photos/photo-gallery-mt/SRPF5.jpeg";

import photo31 from "../assets/mt_photos/photo-gallery-mt/dgp3.jpeg";
import photo32 from "../assets/mt_photos/photo-gallery-mt/dgp2.jpeg";
import photo33 from "../assets/mt_photos/photo-gallery-mt/dgp1.jpeg";
import photo34 from "../assets/mt_photos/photo-gallery-mt/d1.jpeg";
import photo35 from "../assets/mt_photos/photo-gallery-mt/d2.jpeg";

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [likedImages, setLikedImages] = useState(new Set());

  const { language } = useLanguage();

  // ✅ Translation Function
  const translations = {
    viewButton: {
      mr: "पहा",
      en: "VIEW",
    },

    closeText: {
      mr: "बाहेर क्लिक करा बंद करण्यासाठी",
      en: "Click outside to close",
    },
  };

  const t = (key) => translations[key]?.[language] || "";

  // ✅ Gallery Data
  const galleryData = {
    dgpVisit: [
      { id: 1, url: photo31 },
      { id: 2, url: photo32 },
      { id: 3, url: photo33 },
      { id: 4, url: photo34 },
      { id: 5, url: photo35 },
    ],

    igOffice: [
      { id: 6, url: photo6 },
      { id: 7, url: photo7 },
      { id: 8, url: photo8 },
      { id: 9, url: photo9 },
      { id: 10, url: photo10 },
    ],

    pimpriVisit: [
      { id: 11, url: photo11 },
      { id: 12, url: photo12 },
      { id: 13, url: photo13 },
      { id: 14, url: photo14 },
      { id: 15, url: photo15 },
    ],

    punecityvisit: [
      { id: 16, url: photo21 },
      { id: 17, url: photo22 },
      { id: 18, url: photo23 },
      { id: 19, url: photo24 },
      { id: 20, url: photo25 },
    ],

    puneruralvisit: [
      { id: 21, url: photo16 },
      { id: 22, url: photo17 },
      { id: 23, url: photo18 },
      { id: 24, url: photo19 },
      { id: 25, url: photo20 },
    ],

    SRPFVisit: [
      { id: 26, url: photo26 },
      { id: 27, url: photo27 },
      { id: 28, url: photo28 },
      { id: 29, url: photo29 },
      { id: 30, url: photo30 },
    ],

    AwardDistribution: [
      { id: 31, url: photo11 },
      { id: 32, url: photo12 },
      { id: 33, url: photo13 },
      { id: 34, url: photo14 },
      { id: 35, url: photo15 },
    ],

    mahindracompanyVisit: [
      { id: 36, url: photo6 },
      { id: 37, url: photo7 },
      { id: 38, url: photo8 },
      { id: 39, url: photo9 },
      { id: 40, url: photo10 },
    ],

    tatamotorVisit: [
      { id: 41, url: photo1 },
      { id: 42, url: photo2 },
      { id: 43, url: photo3 },
      { id: 44, url: photo4 },
      { id: 45, url: photo5 },
    ],
  };

  // ✅ Like Function
  const toggleLike = (id, e) => {
    e.stopPropagation();

    const newLiked = new Set(likedImages);

    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }

    setLikedImages(newLiked);
  };

  // ✅ Photo Card
  const PhotoCard = ({ photo }) => (
    <div
      className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:z-10"
      onClick={() => setSelectedImage(photo)}
    >
      <div className="aspect-[4/3] relative">
        <img
          src={photo.url}
          alt="gallery"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Hover Buttons */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center justify-between transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">

          {/* Like */}
          <button
            onClick={(e) => toggleLike(photo.id, e)}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
          >
            <Heart
              className={`w-5 h-5 transition-all ${
                likedImages.has(photo.id)
                  ? "fill-red-500 text-red-500 scale-110"
                  : "text-white"
              }`}
            />
          </button>

          {/* Zoom */}
          <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all">
            <Maximize2 className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* View Button */}
      <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {t("viewButton")}
      </div>
    </div>
  );

  // ✅ Section Component
  const GallerySection = ({ titleMr, titleEn, photos }) => (
    <div className="mb-16 text-center">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        {language === "mr" ? titleMr : titleEn}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 transition-colors duration-500 mt-28">

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* 1. DGP Visit */}
        <GallerySection
          titleMr="पोलीस महासंचालक भेट"
          titleEn="Hon.DGP Visit"
          photos={galleryData.dgpVisit}
        />

        {/* 2. IG Office Udghatan */}
        <GallerySection
          titleMr="पोलीस महानिरीक्षक कार्यालय उद्घाटन"
          titleEn="IG Office Inauguration"
          photos={galleryData.igOffice}
        />

        {/* 3. Pimpri Chinchwad MT Visit */}
        <GallerySection
          titleMr="पिंपरी चिंचवड मोटार परिवहन  भेट"
          titleEn="Pimpri Chinchwad MT Visit"
          photos={galleryData.pimpriVisit}
        />

        {/* 4. Pune City MT Visit */}
        <GallerySection
          titleMr="पुणे शहर मोटार परिवहन  भेट"
          titleEn="Pune City MT Visit"
          photos={galleryData.punecityvisit}
        />

        {/* 5. Pune Rural MT Visit */}
        <GallerySection
          titleMr="पुणे ग्रामीण मोटार परिवहन  भेट"
          titleEn="Pune Rural MT Visit"
          photos={galleryData.puneruralvisit}
        />

        {/* 6. SRPF Visit */}
        <GallerySection
          titleMr="राज्य राखीव पोलीस दल भेट"
          titleEn="SRPF Visit"
          photos={galleryData.SRPFVisit}
        />

        {/* 7. Tata Motors Visit */}
        <GallerySection
          titleMr="टाटा मोटर्स भेट"
          titleEn="Tata Motors Visit"
          photos={galleryData.tatamotorVisit}
        />

        {/* 8. Mahindra Company Visit */}
        <GallerySection
          titleMr="महिंद्रा कंपनी भेट"
          titleEn="Mahindra Company Visit"
          photos={galleryData.mahindracompanyVisit}
        />

        {/* 9. Award Distribution */}
        <GallerySection
          titleMr="आढावा बैठक / उत्कृष्ठ मोटार परिवहन विभाग पुरस्कार वितरण"
          titleEn="Review Meeting & Award Distribution"
          photos={galleryData.AwardDistribution}
        />
      </div>

      {/* ✅ Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all group"
          >
            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Image */}
          <div
            className="max-w-6xl w-full animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt="preview"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />

            <p className="text-center text-gray-300 mt-4 text-sm">
              {t("closeText")}
            </p>
          </div>
        </div>
      )}

      {/* ✅ Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}