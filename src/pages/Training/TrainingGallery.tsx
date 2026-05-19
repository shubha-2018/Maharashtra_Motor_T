import React, { useState } from "react";

export default function TrainingGallery() {
  const [lang, setLang] = useState("en");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "mr" : "en"));
  };

  const data = [
    {
      id: 71,
      enTitle: "Training Batch 71",
      mrTitle: "प्रशिक्षण बॅच ७१",
      images: [
        "/batch71/img1.JPG",
        "/batch71/img2.JPG",
        "/batch71/img3.JPG",
        "/batch71/img4.JPG",
      ],
    },
     {
      id: 72,
      enTitle: "Training Batch 72",
      mrTitle: "प्रशिक्षण बॅच ७2",
      images: [
        "/batch71/img5.JPG",
        "/batch71/img6.JPG",
        "/batch71/img7.JPG",
        "/batch71/img8.JPG",
      ],
    },
     {
      id: 73,
      enTitle: "Training Batch 73",
      mrTitle: "प्रशिक्षण बॅच ७3",
      images: [
        "/batch71/img9.jpeg",
        "/batch71/img10.jpeg",
        "/batch71/img11.jpeg",
        "/batch71/img12.jpeg",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          {lang === "en" ? "Training Gallery" : "प्रशिक्षण गॅलरी"}
        </h1>

        <button
          onClick={toggleLanguage}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          {lang === "en" ? "ENG / MR" : "MR / ENG"}
        </button>
      </div>

      {/* GALLERY */}
      <div className="space-y-12">
        {data.map((batch) => (
          <div key={batch.id} className="bg-white p-6 rounded-2xl shadow">

            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {lang === "en" ? batch.enTitle : batch.mrTitle}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {batch.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Batch ${batch.id} photo ${index + 1}`}
                  className="w-full h-48 object-cover rounded-xl shadow hover:scale-105 transition"
                />
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}