import React from "react";
import { useLanguageContext } from "../../contexts/LanguageContext";

import officer1 from "../../assets/SeniorOfficersMT/senioroff1.jpg";
import officer2 from "../../assets/SeniorOfficersMT/senioroff2.jpg";
import officer3 from "../../assets/SeniorOfficersMT/senioroff3.jpg";

const SeniorOfficers = () => {
  const { language } = useLanguageContext();
  const lang = language === "mr" || language === "marathi" ? "marathi" : "english";

  const text = {
    title: {
      marathi: "विभागाचे तत्कालीन अधिकारी",
      english: "Former Officers of the Department",
    },
    tenure: {
      marathi: "कार्यकाळ",
      english: "Tenure",
    },
  };

  const designationColor: Record<string, string> = {
    "S.P.":        "bg-amber-100 text-amber-800 border border-amber-300",
    "D.I.G.P.":    "bg-indigo-100 text-indigo-800 border border-indigo-300",
    "Spl. I.G.P.": "bg-blue-100 text-blue-800 border border-blue-300",
  };

  const officers = [
    {
      image: officer3,
      name:        { marathi: "श्री. डी. पी. राव",                english: "Shri. D. P. Rao"                },
      designation: { marathi: "पोलीस अधीक्षक",                    english: "S.P."                           },
      from: "21/10/1948", to: "31/03/1967",
    },
    {
      image: officer2,
      name:        { marathi: "श्री. एम. के. फडके",               english: "Shri. M. K. Phadke"             },
      designation: { marathi: "पोलीस अधीक्षक",                    english: "S.P."                           },
      from: "01/04/1967", to: "22/07/1981",
    },
    {
      image: officer1,
      name:        { marathi: "श्री. व्ही. पी. जगताप",            english: "Shri. V. P. Jagtap"             },
      designation: { marathi: "विशेष पोलीस महानिरीक्षक",           english: "Spl. I.G.P."                    },
      from: "14/11/2000", to: "30/11/2001",
    },
    {
      image: null,
      name:        { marathi: "श्री. एम. के. राठोड, भापोसे",      english: "Shri. M. K. Rathod, IPS"        },
      designation: { marathi: "उप महानिरीक्षक",                    english: "D.I.G.P."                       },
      from: "11/06/2002", to: "07/10/2003",
    },
    {
      image: null,
      name:        { marathi: "श्री. जी. डी. पोळ, भापोसे",        english: "Shri. G. D. Pol, IPS"           },
      designation: { marathi: "उप महानिरीक्षक",                    english: "D.I.G.P."                       },
      from: "24/11/2003", to: "21/07/2004",
    },
    {
      image: null,
      name:        { marathi: "श्री. एस. पी. गुप्ता, भापोसे",     english: "Shri. S. P. Gupta, IPS"         },
      designation: { marathi: "उप महानिरीक्षक",                    english: "D.I.G.P."                       },
      from: "12/08/2004", to: "27/09/2005",
    },
    {
      image: null,
      name:        { marathi: "श्री. आर. के. सहाय, भापोसे",       english: "Shri. R. K. Sahay, IPS"         },
      designation: { marathi: "उप महानिरीक्षक",                    english: "D.I.G.P."                       },
      from: "23/01/2006", to: "21/02/2007",
    },
    {
      image: null,
      name:        { marathi: "श्री. आर. आर. मांगावणकर, भापोसे",  english: "Shri. R. R. Mangaonkar, IPS"    },
      designation: { marathi: "विशेष पोलीस महानिरीक्षक",           english: "Spl. I.G.P."                    },
      from: "22/06/2007", to: "02/07/2010",
    },
    {
      image: null,
      name:        { marathi: "श्री. पी. डी. पवार, भापोसे",       english: "Shri. P. D. Pawar, IPS"         },
      designation: { marathi: "विशेष पोलीस महानिरीक्षक",           english: "Spl. I.G.P."                    },
      from: "07/08/2010", to: "31/05/2011",
    },
    {
      image: null,
      name:        { marathi: "श्री. सी. एस. उघडे, भापोसे",       english: "Shri. C. S. Ughade, IPS"        },
      designation: { marathi: "विशेष पोलीस महानिरीक्षक",           english: "Spl. I.G.P."                    },
      from: "16/07/2012", to: "31/07/2015",
    },
    {
      image: null,
      name:        { marathi: "श्री. फत्तेसिंह के. पाटील, भापोसे",english: "Shri. Fattehsingh K. Patil, IPS"},
      designation: { marathi: "विशेष पोलीस महानिरीक्षक",           english: "Spl. I.G.P."                    },
      from: "08/02/2016", to: "31/07/2018",
    },
    {
      image: null,
      name:        { marathi: "श्री. शरद आर. शेलार, भापोसे",      english: "Shri. Sharad R. Shelar, IPS"    },
      designation: { marathi: "विशेष पोलीस महानिरीक्षक",           english: "Spl. I.G.P."                    },
      from: "27/06/2019", to: "31/10/2019",
    },
    {
      image: null,
      name:        { marathi: "श्री. सुनील फुलारी, भापोसे",        english: "Shri. Sunil Phulari, IPS"       },
      designation: { marathi: "विशेष पोलीस महानिरीक्षक",           english: "Spl. I.G.P."                    },
      from: "28/04/2022", to: "16/12/2022",
    },
    {
      image: null,
      name:        { marathi: "श्री. क्वेझर खालिद, भापोसे",        english: "Shri. Quaiser Khalid, IPS"      },
      designation: { marathi: "विशेष पोलीस महानिरीक्षक",           english: "Spl. I.G.P."                    },
      from: "21/04/2023", to: "03/10/2023",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 min-h-screen">

      {/* ── Page Title ── */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl font-bold text-blue-900">
          {text.title[lang]}
        </h2>
        <div className="mt-3 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-blue-300" />
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <div className="h-px w-16 bg-blue-300" />
        </div>
      </div>

      {/* ── Cards Grid ── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
        {officers.map((officer, i) => {
          const desigKey = officer.designation.english;
          const pillClass = designationColor[desigKey] ?? "bg-gray-100 text-gray-700 border border-gray-200";

          return (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Top blue bar */}
              <div className="h-1.5 bg-blue-900 w-full" />

              {/* Sr. No. badge */}
              <div className="absolute">
                <span className="ml-3 mt-3 inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-900 text-white text-[10px] font-bold">
                  {i + 1}
                </span>
              </div>

              {/* Photo or Placeholder */}
              <div className="flex justify-center pt-8 px-6">
                <div className="w-28 h-36 rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100 flex items-center justify-center">
                  {officer.image ? (
                    <img
                      src={officer.image}
                      alt={officer.name[lang]}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-gray-300">
                      {/* Silhouette */}
                      <svg
                        viewBox="0 0 64 80"
                        className="w-14 h-14 fill-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <ellipse cx="32" cy="22" rx="14" ry="16" />
                        <path d="M4 72c0-16 12-26 28-26s28 10 28 26H4z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col items-center text-center px-4 pt-4 pb-5 flex-1">
                {/* Name */}
                <h3 className="text-sm font-bold text-gray-900 leading-snug min-h-[40px] flex items-center justify-center">
                  {officer.name[lang]}
                </h3>

                {/* Designation pill */}
                <span className={`mt-2 text-xs font-semibold px-3 py-1 rounded-full ${pillClass}`}>
                  {officer.designation[lang]}
                </span>

                {/* Tenure box */}
                <div className="mt-4 w-full bg-gray-50 rounded-xl px-3 py-3 border border-gray-100">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium mb-1">
                    {text.tenure[lang]}
                  </p>
                  <p className="text-sm font-semibold text-blue-900">
                    {officer.from}
                    <span className="mx-2 text-gray-300 font-normal">→</span>
                    {officer.to}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SeniorOfficers;