import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TrainingGallery() {

  // ✅ Get current language from navbar/global context
  const { language } = useLanguage();

  const data = [
 
    {
      id: 74,
      enTitle: "Police Driver Training Hall Inauguration",
      mrTitle: "पोलीस चालक प्रशिक्षण केंद्र येथील व्याख्यान कक्ष्याचे  उद्घाटन",
      images: [
        "/batch71/h1.jpeg",
        "/batch71/h2.jpeg",
        "/batch71/h3.jpeg",
        "/batch71/h4.jpeg",
      ],
    },
    {
      id: 73,
      enTitle: "Training Batch 73",
      mrTitle: "प्रशिक्षण बॅच ७३",
      images: [
        "/batch71/img9.jpeg",
        "/batch71/img10.jpeg",
        "/batch71/img11.jpeg",
        "/batch71/img12.jpeg",
      ],
    },
    {
      id: 72,
      enTitle: "Training Batch 72",
      mrTitle: "प्रशिक्षण बॅच ७२",
      images: [
        "/batch72/IMG_3095.JPG",
        "/batch72/IMG_3018.JPG",
        "/batch72/IMG_3206.JPG",
        "/batch72/IMG_3923.JPG",
      ],
    },
       {
      id: 71,
      enTitle: "Training Batch 71",
      mrTitle: "प्रशिक्षण बॅच ७१",
      images: [
        "/batch71/IMG_8364.JPG",
        "/batch71/DSCN0417.JPG",
        "/batch71/DSCN0331.JPG",
        "/batch71/DSCN0430.JPG",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          {language === "mr"
            ? "प्रशिक्षण गॅलरी"
            : "Training Gallery"}
        </h1>
      </div>

      {/* GALLERY */}
      <div className="space-y-12">
        {data.map((batch) => (
          <div
            key={batch.id}
            className="bg-white p-4 md:p-6 rounded-2xl shadow"
          >

            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
              {language === "mr"
                ? batch.mrTitle
                : batch.enTitle}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {batch.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Batch ${batch.id} photo ${index + 1}`}
                  className="w-full h-48 object-cover rounded-xl shadow hover:scale-105 transition duration-300"
                />
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}