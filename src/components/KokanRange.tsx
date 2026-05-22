


import React from "react";
// import { useLanguageContext } from "@/context/LanguageContext";
import { useLanguageContext } from "../contexts/LanguageContext";

const KokanRangeTable: React.FC = () => {
  const { language } = useLanguageContext();

  const data = [
    { sr: 1, commissionerate: { marathi: "ठाणे शहर", english: " M.T. Thane City" }, designation: { marathi: "सहा. पोलीस आयुक्त", english: "Police Inspector" }, officerName: { marathi: "नासिर पठाण", english: "Nasir Pathan" }, contact: "9664857867" },
    { sr: 2, commissionerate: { marathi: "पोलीस नौका कर्मशाळा, ठाणे", english: " M.T. Police Boat Workshop, Thane" }, designation: { marathi: "पोलीस उप-अधीक्षक", english: "Deputy Superintendent of Police" }, officerName: { marathi: "-", english: "-" }, contact: "-" },
    { sr: 3, commissionerate: { marathi: "नवी मुंबई शहर", english: " M.T. Navi Mumbai City" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, officerName: { marathi: "सचिन दंताल", english: "Sachin Dantal" }, contact: "8108383006" },
    // { sr: 4, commissionerate: { marathi: "-", english: "-" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, officerName: { marathi: "प्रभाकर झेंडे", english: "Prabhakar Zende" }, contact: "9823112469" },
    { sr: 4, commissionerate: { marathi: "नाशिक शहर", english: "M.T. Nashik City" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, officerName: { marathi: "पंकज पवार", english: "Pankaj Pawar" }, contact: "9923430414" },
    { sr: 5, commissionerate: { marathi: "ठाणे ग्रामीण", english: "M.T. Thane Rural" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, officerName: { marathi: "बाळासाहेब दत्तात्रय झेंडे", english: "Balasaheb Dattatray Zende" }, contact: "9823112469" },
    { sr: 6, commissionerate: { marathi: "पालघर", english: "M.T. Palghar" }, designation: { marathi: "-", english: "-" }, officerName: { marathi: "-", english: "-" }, contact: "-" },
    { sr: 7, commissionerate: { marathi: "नाशिक ग्रामीण", english: "M.T. Nashik Rural" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, officerName: { marathi: "अनिल घाडगे", english: "Anil Ghadage" }, contact: "9823168900" },
    { sr: 8, commissionerate: { marathi: "रायगड", english: "M.T. Raigad" }, designation: { marathi: "पोलीस उपनिरीक्षक", english: "Police Sub Inspector" }, officerName: { marathi: "मुत्सुफा शेख", english: "Mustufa Shaikh" }, contact: "9881359199" },
    { sr: 9, commissionerate: { marathi: "रत्नागिरी", english: "M.T.Ratnagiri" }, designation: { marathi: "-", english: "-" }, officerName: { marathi: "-", english: "-" }, contact: "-" },
    { sr: 10, commissionerate: { marathi: "सिंधुदुर्ग", english: "M.T.Sindhudurg" }, designation: { marathi: "पोलीस उपनिरीक्षक", english: "Police Sub Inspector" }, officerName: { marathi: "प्रदीप चव्हाण", english: "Pradip Chavan" }, contact: "8108343636" },
    { sr: 11, commissionerate: { marathi: "एसआरपीएफ ग्रुप 8, मुंबई", english: "M.T. SRPF Group 8, Mumbai" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, officerName: { marathi: "अशोक निमबाळकर", english: "Ashok Nimbalkar" }, contact: "9372928211" },
    { sr: 12, commissionerate: { marathi: "एसआरपीएफ ग्रुप 11, नवी मुंबई", english: "M.T. SRPF Group 11, Navi Mumbai" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, officerName: { marathi: "विठ्ठल बडे", english: "Vitthal Badhe" }, contact: "9773071673" },
  ];

  return (
    <div className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          {language === "marathi"
            ? "घटक"
            : "Units"}
        </h1>

        {/* TABLE WRAPPER */}
        <div className="overflow-x-auto rounded-lg shadow border border-gray-300 dark:border-gray-700">

          <table className="w-full min-w-[900px] border-collapse text-sm">

            {/* HEADER (ONLY FORMAT CHANGED) */}
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-3 border">Sr. No.</th>
                <th className="px-4 py-3 border">Commissionerate</th>
                <th className="px-4 py-3 border">Designation</th>
                <th className="px-4 py-3 border">Officer Name</th>
                <th className="px-4 py-3 border">Contact Number</th>
              </tr>
            </thead>

            {/* BODY (DATA SAME AS YOUR ORIGINAL) */}
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={row.sr}
                  className={`${
                    index % 2 === 0
                      ? "bg-blue-50 dark:bg-gray-800"
                      : "bg-white dark:bg-gray-900"
                  } border`}
                >
                  <td className="px-4 py-3 border">{row.sr}</td>

                  <td className="px-4 py-3 border">
                    {language === "marathi"
                      ? row.commissionerate.marathi
                      : row.commissionerate.english}
                  </td>

                  <td className="px-4 py-3 border">
                    {language === "marathi"
                      ? row.designation.marathi
                      : row.designation.english}
                  </td>

                  <td className="px-4 py-3 border">
                    {language === "marathi"
                      ? row.officerName.marathi
                      : row.officerName.english}
                  </td>

                  <td className="px-4 py-3 border">
                    {row.contact && row.contact !== "-" ? (
                      <a
                        href={`tel:${row.contact}`}
                        className="text-blue-600 hover:underline"
                      >
                        {row.contact}
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
};

export default KokanRangeTable;