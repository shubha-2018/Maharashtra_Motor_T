import React from "react";
// import { useLanguageContext } from "@/context/LanguageContext";
import { useLanguageContext } from "../contexts/LanguageContext";

const PuneRangeTable: React.FC = () => {
  const { language } = useLanguageContext();

  // Helper to easily switch between Marathi and English
  const t = (textObj: { marathi: string; english: string }) =>
    language === "marathi" ? textObj.marathi : textObj.english;

  const data = [
    {
      sr: 1,
      commissionerate: { marathi: "पोलीस मध्यवर्ती मोटार परिवहन कर्मशाळा, पुणे", english: "Police Central Motor Transport Workshop, Pune" },
      officerName: { marathi: "", english: "" },
      designation: { marathi: "पोलीस उप-अधीक्षक", english: "Deputy Superintendent of Police" },
      contact: "",
    },
    {
      sr: 2,
      commissionerate: { marathi: "मोटार परिवहन विभाग, पुणे शहर", english: "M.T.  Pune City" },
      officerName: { marathi: "सुनील कदम", english: "Sunil Kadam" },
      designation: { marathi: "सहाय्यक पोलीस आयुक्त", english: "Assistant Commissioner of Police" },
      contact: "8275304090",
    },
    {
      sr: 3,
      commissionerate: { marathi: "दक्षिण परिमंडळ, पुणे", english: "M.T.South Division, Pune" },
      officerName: { marathi: "", english: "" },
      designation: { marathi: "पोलीस उप-अधीक्षक", english: "Deputy Superintendent of Police" },
      contact: "",
    },
    {
      sr: 4,
      commissionerate: { marathi: "बॉडी बिल्डिंग सेक्शन, पुणे", english: "Body Building Section, Pune" },
      officerName: { marathi: "अबरार सय्यद", english: "Abrar Sayyed" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "9823186786",
    },
    {
      sr: 5,
      commissionerate: { marathi: "मोटार परिवहन विभाग, पिंपरी चिंचवड", english: "M.T. Pimpri Chinchwad" },
      officerName: { marathi: "पी.एस. बावसकर (अतिरिक्त चार्ज)", english: "P.S. Bawaskar (Addl. Charge)" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "9552352323",
    },
    {
      sr: 6,
      commissionerate: { marathi: "मोटार परिवहन विभाग, सोलापूर शहर", english: "M.T. Solapur City" },
      officerName: { marathi: "महेश काळे", english: "Mahesh Kale" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "9823036560",
    },
    {
      sr: 7,
      commissionerate: { marathi: "मोटार परिवहन विभाग, पुणे ग्रामीण", english: "M.T. Pune Rural" },
      officerName: { marathi: "मंगेश पाटील", english: "Mangesh Patil" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "8108970707",
    },
    {
      sr: 8,
      commissionerate: { marathi: "मोटार परिवहन विभाग, सातारा", english: "M.T. Satara" },
      officerName: { marathi: "राजेंद्र शिंदे", english: "Rajendra Shinde" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "9823017588",
    },
    {
      sr: 9,
      commissionerate: { marathi: "मोटार परिवहन विभाग, सांगली", english: "M.T. Sangli" },
      officerName: { marathi: "प्रशांत मारुळकर", english: "Prashant Marulkar" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "9552560091",
    },
    {
      sr: 10,
      commissionerate: { marathi: "मोटार परिवहन विभाग, कोल्हापूर", english: "M.T. Kolhapur" },
      officerName: { marathi: "सुरजीतसिंग राजपूत", english: "Surjit Singh Rajput" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "9923450059",
    },
    {
      sr: 11,
      commissionerate: { marathi: "मोटार परिवहन विभाग, सोलापूर ग्रामीण", english: "M.T. Solapur Rural" },
      officerName: { marathi: "सागर खरे", english: "Sagar Khare" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "7350619991",
    },
    {
      sr: 12,
      commissionerate: { marathi: "एसआरपीएफ ग्रुप 1, पुणे", english: "M.T.SRPF Group 1, Pune" },
      officerName: { marathi: "", english: "" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "",
    },
    {
      sr: 13,
      commissionerate: { marathi: "एसआरपीएफ ग्रुप 2, पुणे", english: "M.T.SRPF Group 2, Pune" },
      officerName: { marathi: "दत्तात्रय भोंगले", english: "Dattatraya Bhongale" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "9960840223",
    },
    {
      sr: 14,
      commissionerate: { marathi: "एसआरपीएफ ग्रुप 5, दौंड", english: "M.T. SRPF Group 5, Daund" },
      officerName: { marathi: "अविनाश हराळ", english: "Avinash Haral" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "8308041041",
    },
    {
      sr: 15,
      commissionerate: { marathi: "एसआरपीएफ ग्रुप 7, दौंड", english: "M.T. SRPF Group 7, Daund" },
      officerName: { marathi: "मोहम्मद वारुणकर", english: "Mohammad Warumkar" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "9823778630",
    },
    {
      sr: 16,
      commissionerate: { marathi: "एसआरपीएफ ग्रुप 10, सोलापूर", english: "M.T.SRPF Group 10, Solapur" },
      officerName: { marathi: "अंबर निंबाळकर", english: "Ambar Nimbalkar" },
      designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" },
      contact: "9870015252",
    },
    {
      sr: 17,
      commissionerate: { marathi: "आय.आर.बी. ग्रुप 16, कोल्हापूर", english: "M.T.IRB Group 16, Kolhapur" },
      officerName: { marathi: "-", english: "-" },
      designation: { marathi: "-", english: "-" },
      contact: "-",
    },
    {
      sr: 18,
      commissionerate: { marathi: "एसआरपीएफ ग्रुप 19, कुसडगाव", english: "M.T.SRPF Group 19, Kusadgaon" },
      officerName: { marathi: "-", english: "-" },
      designation: { marathi: "-", english: "-" },
      contact: "-",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
          {t({ marathi: "घटक", english: "Units" })}
        </h2>

        {/* Table */}
        <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 dark:bg-blue-700 text-white">
                <th className="px-4 py-3 text-center font-semibold border border-blue-500 dark:border-blue-600">{t({ marathi: "अ.क्र.", english: "Sr. No." })}</th>
                <th className="px-4 py-3 text-center font-semibold border border-blue-500 dark:border-blue-600">{t({ marathi: "मोटार परिवहन विभागाचे नाव", english: "Commissionerate" })}</th>
                <th className="px-4 py-3 text-center font-semibold border border-blue-500 dark:border-blue-600">{t({ marathi: "पदनाम", english: "Designation" })}</th>
                <th className="px-4 py-3 text-center font-semibold border border-blue-500 dark:border-blue-600">{t({ marathi: "प्रभारी अधिकाऱ्याचे नाव", english: "Officer Name" })}</th>
                <th className="px-4 py-3 text-center font-semibold border border-blue-500 dark:border-blue-600">{t({ marathi: "संपर्क क्रमांक", english: "Contact Number" })}</th>
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
                  <td className="px-4 py-3 text-center text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600">{row.sr}</td>
                  <td className="px-4 py-3 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600">{t(row.commissionerate)}</td>
                  <td className="px-4 py-3 text-center text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600">{t(row.designation)}</td>
                  <td className="px-4 py-3 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600">{t(row.officerName)}</td>
                  <td className="px-4 py-3 text-center text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600">
                    {row.contact !== "-" ? (
                      <a href={`tel:${row.contact}`} className="text-blue-600 dark:text-blue-400 hover:underline">{row.contact}</a>
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
    </section>
  );
};

export default PuneRangeTable;
