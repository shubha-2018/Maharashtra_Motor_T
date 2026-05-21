import {
  ExternalLink,
  Download,
} from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";

const GovernmentUpdates: React.FC = () => {
  const { language } = useLanguage();

  // ================= STATIC DATA =================
  const bulletins = [
    {
      id: 1,
      title_en:
        "Recruitment Notice for Contract Base Appointment",
      title_mr:
        "पोलीस निरीक्षक यांचे सेवा करार पद्धतीने नियुक्ती आदेश",

      pdf: "PI contract base appointment.pdf",

      pdfLink:
        "/pdfs/PI-contract-base-appointment.pdf",

      createdAt: "2026-05-15",
    },

    {
      id: 2,
      title_en:
        "Government Resolution Regarding Fuel Conservation",

      title_mr:
        "इंधन बचतीबाबत शासन निर्णय",

      pdf:
        "Government Resolution.pdf",

      pdfLink:
        "/pdfs/Government-Resolution.pdf",

      createdAt: "2026-05-10",
    },
  ];

  const tenders = [
    {
      id: 1,
      title_en:
        "Tender Notice for Office Work",

      title_mr:
        "कार्यालयीन कामासाठी निविदा सूचना",

      pdf:
        "Office Tender Notice.pdf",

      pdfLink:
        "/pdfs/Office-Tender-Notice.pdf",

      createdAt: "2026-05-12",
    },

    {
      id: 2,
      title_en:
        "Tyre/ Battery Tender",

      title_mr:
        "टायर / बॅटरी/ निविदा",

      pdf:
        "Tyre / battery tender.pdf",

      pdfLink:
        "/pdfs/Road-Construction.pdf",

      createdAt: "2026-05-08",
    },

    {
      id: 3,
      title_en:
        "Regarding submission of condemnation proposal for the year 2025-26",

      title_mr:
        "सन २०२५-२६ चा निकामीकरण प्रस्ताव सादर करण्याबाबत…",

      pdf:
        "2025/26 Condemnation Orders",

      pdfLink:
        "/pdfs/.pdf",

      createdAt: "2026-05-10",
    },
  ];

  // ================= TITLE =================
  const getTitle = (item: any) => {
    return language === "en"
      ? item.title_en
      : item.title_mr;
  };

  // ================= DATE =================
  const formatDate = (
    dateString: string
  ) => {
    return new Date(
      dateString
    ).toLocaleDateString(
      language === "en"
        ? "en-IN"
        : "mr-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  // ================= CARD =================
  const renderCard = (
    item: any
  ) => {
    return (
      <div className="border-b border-gray-200 p-5 hover:bg-gray-50 transition min-h-[250px] flex flex-col justify-between">

        {/* TOP CONTENT */}
        <div>
          {/* PDF FILE NAME */}
          <h3 className="text-lg font-bold text-blue-900 break-words">
            {item.pdf}
          </h3>

          {/* NOTICE TITLE */}
          <p className="text-gray-800 mt-3 text-base leading-7">
            {getTitle(item)}
          </p>

          {/* DATE */}
          <p className="text-sm text-gray-500 mt-2">
            {formatDate(item.createdAt)}
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 mt-5 flex-wrap">

          {/* VIEW PDF */}
          <a
            href={item.pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-800 transition"
          >
            <ExternalLink size={16} />

            {language === "en"
              ? "View PDF"
              : "PDF पहा"}
          </a>

          {/* DOWNLOAD PDF */}
          <a
            href={item.pdfLink}
            download
            className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-300 transition"
          >
            <Download size={16} />

            {language === "en"
              ? "Download"
              : "डाउनलोड"}
          </a>

        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8">

        {/* ================= BULLETINS ================= */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* HEADER */}
          <div className="bg-blue-900 py-4 text-center sticky top-0 z-10">
            <h2 className="text-white text-2xl font-bold">
              {language === "en"
                ? "Latest Bulletins / Orders / Notices"
                : "नवीन बुलेटिन / आदेश / सूचना"}
            </h2>
          </div>

          {/* AUTO SCROLL LIST */}
          <div className="h-[520px] overflow-hidden relative">
            <div className="animate-scroll-up">

              {[...bulletins, ...bulletins].map((item, index) => (
                <div key={index}>
                  {renderCard(item)}
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* ================= TENDERS ================= */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* HEADER */}
          <div className="bg-blue-900 py-4 text-center sticky top-0 z-10">
            <h2 className="text-white text-2xl font-bold">
              {language === "en"
                ? "Latest Tenders"
                : "नवीन निविदा"}
            </h2>
          </div>

          {/* AUTO SCROLL LIST */}
          <div className="h-[520px] overflow-hidden relative">
            <div className="animate-scroll-up">

              {[...tenders, ...tenders].map((item, index) => (
                <div key={index}>
                  {renderCard(item)}
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>

      {/* ================= CUSTOM CSS ================= */}
      <style>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-scroll-up {
          animation: scrollUp 25s linear infinite;
        }

        .animate-scroll-up:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default GovernmentUpdates;