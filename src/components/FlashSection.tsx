import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext"; // ✅ Make sure this exists

export default function FlashSection() {
  const navigate = useNavigate();
  const { language } = useLanguage(); // 🔹 Get selected language (e.g., "en" or "mr")

  // 🔹 Define labels for both languages
  const translations = {
    en: {
      title: "Flash",
      gradation: "Gradation List",
      transfer: "Transfer Orders",
      promotion: "Promotion Orders",
      press: "Press Release",
      other: "Other Flash",
    },
    mr: {
      title: "फ्लॅश",
      gradation: "सेवाज्येष्ठता सूची",
      transfer: "बदली आदेश",
      promotion: "पदोन्नती आदेश",
      press: "प्रेस प्रकाशन",
      other: "इतर फ्लॅश",
    },
  };

  const t = translations[language] || translations.en;

  const links = [
    { label: t.gradation, path: "/gradation-list" },
    { label: t.transfer, path: "/transfer-orders" },
    { label: t.promotion, path: "/promotion-orders" },
    { label: t.press, path: "/press-release" },
    { label: t.other, path: "/other-flash" },
  ];

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      {/* 🔹 Title */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-[#1A0066] relative inline-block">
          {t.title}
          <span className="block w-24 h-[2px] bg-yellow-400 mt-1"></span>
        </h1>
      </div>

      {/* 🔹 Flash Card Container */}
      <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden bg-white">
        {/* Header */}
        <div className="bg-[#1A0066] text-white px-6 py-4 flex items-center justify-between">
          <span className="font-semibold text-xl">{t.title}</span>
          <span className="text-2xl leading-none">−</span>
        </div>

        {/* Buttons Grid */}
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center bg-white">
          {links.map((item, i) => (
            <button
              key={i}
              onClick={() => navigate(item.path)}
              className="w-60 border border-gray-400 px-8 py-3 rounded-md 
                         text-gray-700 font-medium hover:bg-gray-100 
                         transition-all duration-200 text-center shadow-sm"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
