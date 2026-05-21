import React from "react";
import { Users, Building2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

// Import your flow chart image
import flowChart from "../assets/mt_photos/flowchart/flowchart.png";

const OrganizationalChart: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const organizationData = {
    headquarters: {
      id: "hq",
      title: {
        marathi: "पोलीस अधीक्षक, मुख्यालय",
        english: "Superintendent of Police, HQ",
      },
      fullName: {
        marathi:
          "पोलीस अधीक्षक (मुख्यालय), मोटार परिवहन, महाराष्ट्र राज्य, पुणे",
        english:
          "Superintendent of Police (Headquarters), Motor Transport, Maharashtra State, Pune",
      },
      route: "/unit-dysp",
      color: "from-yellow-400 to-yellow-600",
    },

    ranges: [
      {
        id: "pune",
        title: {
          marathi: "पोलीस अधीक्षक, पुणे परिक्षेत्र",
          english: "Superintendent of Police, Motor Transport, Pune",
        },
        description: {
          marathi:
            "पोलीस अधीक्षक, मोटार परिवहन, पुणे परिक्षेत्र",
          english:
            "Superintendent of Police, Motor Transport, Pune Range",
        },
        route: "/range/pune",
        color: "from-indigo-500 to-indigo-700",
      },

      {
        id: "nagpur",
        title: {
          marathi: "पोलीस अधीक्षक, नागपूर परिक्षेत्र",
          english: "Superintendent of Police, Motor Transport, Nagpur",
        },
        description: {
          marathi:
            "पोलीस अधीक्षक, मोटार परिवहन, नागपूर परिक्षेत्र",
          english:
            "Superintendent of Police, Motor Transport, Nagpur Range",
        },
        route: "/range/nagpur",
        color: "from-teal-500 to-teal-700",
      },

      {
        id: "cs_nagar",
        title: {
          marathi: "पोलीस अधीक्षक, छत्रपती संभाजीनगर परिक्षेत्र",
          english: "Superintendent of Police, Motor Transport, C.S. Nagar",
        },
        description: {
          marathi:
            "पोलीस अधीक्षक, मोटार परिवहन, छत्रपती संभाजीनगर परिक्षेत्र",
          english:
            "Superintendent of Police, Motor Transport, C.S. Nagar Range",
        },
        route: "/range/cs_nagar",
        color: "from-orange-500 to-orange-700",
      },

      {
        id: "konkan",
        title: {
          marathi: "पोलीस अधीक्षक, कोकण परिक्षेत्र",
          english: "Superintendent of Police, Motor Transport, Konkan",
        },
        description: {
          marathi:
            "पोलीस अधीक्षक, मोटार परिवहन, कोकण परिक्षेत्र",
          english:
            "Superintendent of Police, Motor Transport, Konkan Range",
        },
        route: "/range/konkan",
        color: "from-purple-500 to-purple-700",
      },
    ],
  };

  const hq = organizationData.headquarters;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 transition-colors duration-500">

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 py-14 text-center relative">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow transition"
        >
          <ArrowLeft className="w-4 h-4" />
          {language === "marathi" ? "मागे" : "Back"}
        </button>

        <p className="text-3xl sm:text-4xl md:text-5xl text-blue-200 dark:text-blue-300 font-semibold px-4 leading-snug">
          {language === "marathi"
            ? "पोलीस मोटार परिवहन विभागाची रचना"
            : "Organizational Structure of Police Motor Transport Department Maharashtra State"}
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">

        {/* ================= FLOW CHART SECTION ================= */}
        <div className="mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-4 sm:p-8 border border-gray-200 dark:border-gray-700">
            <img
              src={flowChart}
              alt="Organizational Flow Chart"
              className="w-full h-auto rounded-xl object-contain"
            />
          </div>
        </div>

        {/* ================= HQ CARD ================= */}
        <div className="flex justify-center mb-12 sm:mb-20">
          <div
            onClick={() => navigate(hq.route)}
            className="w-full sm:w-72 cursor-pointer"
          >
            <div
              className={`bg-gradient-to-r ${hq.color} text-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 hover:shadow-2xl transition-all duration-300`}
            >
              <Users className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3" />

              <h3 className="font-bold text-base sm:text-lg leading-snug">
                {hq.title[language === "marathi" ? "marathi" : "english"]}
              </h3>

              <p className="text-sm mt-2 text-yellow-100">
                {hq.fullName[
                  language === "marathi" ? "marathi" : "english"
                ]}
              </p>
            </div>
          </div>
        </div>

        {/* ================= REGIONAL OFFICES ================= */}
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          {language === "marathi"
            ? "परिक्षेत्रीय कार्यालये"
            : "Regional Offices"}
        </h3>

        {/* Range Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 place-items-center">
          {organizationData.ranges.map((range) => (
            <div
              key={range.id}
              onClick={() => navigate(range.route)}
              className="cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-700 w-full sm:w-72 flex flex-col overflow-hidden"
            >
              {/* Colored Header */}
              <div
                className={`bg-gradient-to-r ${range.color} p-5 text-white`}
              >
                <Building2 className="w-7 h-7 sm:w-9 sm:h-9 mb-3" />

                <h4 className="font-bold text-sm sm:text-base leading-snug">
                  {range.title[language === "marathi" ? "marathi" : "english"]}
                </h4>
              </div>

              {/* Description */}
              <div className="p-5 flex-1">
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {
                    range.description[
                      language === "marathi" ? "marathi" : "english"
                    ]
                  }
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OrganizationalChart;