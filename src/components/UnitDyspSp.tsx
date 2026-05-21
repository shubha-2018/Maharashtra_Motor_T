import React from "react";
// import { useLanguage } from "@/hooks/useLanguage";

import { useLanguageContext } from "../contexts/LanguageContext";

const UnitDyspSp: React.FC = () => {
  const { language } = useLanguageContext();

  const t = (textObj: { marathi: string; english: string }) =>
    language === "marathi" ? textObj.marathi : textObj.english;

  const data = [
    {
      sr: 1,
      unit: { marathi: "प्रशासन", english: "Administration" },
      designation: {
        marathi: "पोलीस उप-अधीक्षक (प्रशासन)",
        english: "Deputy Superintendent of Police (Administration)",
      },
      name: { marathi: "श्री. उदयसिंह शिंगाडे", english: "Udaysing Shingade" },
      contact: "9552565063",
    },
    {
      sr: 2,
      unit: { marathi: "पोलीस चालक प्रशिक्षण केंद्र", english: "Police Driver Training School , Pune" },
      designation: {
        marathi: "पोलीस उप-अधीक्षक",
        english: "Deputy Superintendent of Police",
      },
      name: { marathi: "-", english: "-" },
      contact: "",
    },
    {
      sr: 3,
      unit: { marathi: "भांडार खरेदी शाखा", english: "Central Store Purches Branch" },
      designation: {
        marathi: "पोलीस उप-अधीक्षक",
        english: "Deputy Superintendent of Police",
      },
      name: {
        marathi: "-",
        english: "-",
      },
      contact: "",
    },
    {
      sr: 4,
      unit: { marathi: "साठा बांधणी विभाग", english: "Body Building Section " },
      designation: {
        marathi: "पोलीस निरीक्षक",
        english: "Police Inspector",
      },
      name: { marathi: "ये. यन. सय्यद", english: "A. N. Sayyed" },
      contact: "9823186786",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t({
              marathi: "सहाय्यक पोलीस आयुक्त व पोलीस उप-अधीक्षक",
              english: "UNIT'S ",
            })}
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-600 dark:bg-blue-700 text-white">
                  <th className="px-4 py-4 text-center font-semibold border border-blue-500 dark:border-blue-600">
                    {t({ marathi: "अ.क्र.", english: "Sr. No" })}
                  </th>
                  <th className="px-6 py-4 text-center font-semibold border border-blue-500 dark:border-blue-600">
                    {t({
                      marathi: "मोटार परिवहन विभागाचे नाव",
                      english: "Unit",
                    })}
                  </th>
                  <th className="px-6 py-4 text-center font-semibold border border-blue-500 dark:border-blue-600">
                    {t({
                      marathi: "प्रभारी अधिकारी पदनाम",
                      english: "Designation",
                    })}
                  </th>
                  <th className="px-6 py-4 text-center font-semibold border border-blue-500 dark:border-blue-600">
                    {t({
                      marathi: "प्रभारी अधिकाऱ्याचे नाव",
                      english: "Officer Name",
                    })}
                  </th>
                  <th className="px-4 py-4 text-center font-semibold border border-blue-500 dark:border-blue-600">
                    {t({
                      marathi: "संपर्क क्रमांक",
                      english: "Contact Number",
                    })}
                  </th>
                </tr>
              </thead>

              <tbody>
                {data.map((row, index) => (
                  <tr
                    key={row.sr}
                    className={`${
                      index % 2 === 0
                        ? "bg-blue-50 dark:bg-gray-700"
                        : "bg-white dark:bg-gray-800"
                    } hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors`}
                  >
                    <td className="px-4 py-4 text-center text-gray-800 dark:text-gray-200 font-medium border border-gray-300 dark:border-gray-600">
                      {row.sr}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600">
                      {t(row.unit)}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600">
                      {t(row.designation)}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600">
                      {row.name.marathi === "रिक्त" || row.name.english === "Vacant" ? (
                        <span className="text-red-600 dark:text-red-400 font-medium">
                          {t({ marathi: "रिक्त", english: "Vacant" })}
                        </span>
                      ) : (
                        t(row.name)
                      )}
                    </td>
                    <td className="px-4 py-4 text-center text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600">
                      {row.contact ? (
                        <a
                          href={`tel:${row.contact}`}
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {row.contact}
                        </a>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-500">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnitDyspSp;
