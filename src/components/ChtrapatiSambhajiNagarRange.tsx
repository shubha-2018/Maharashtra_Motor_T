import React from "react";
// import { useLanguageContext } from "@/context/LanguageContext";
import { useLanguageContext } from "../contexts/LanguageContext";

const ChtrapatiSambhajiNagarRange: React.FC = () => {
  const { language } = useLanguageContext();

  const data = [
    { sr: 22, commissionerate: { marathi: "पोलीस मध्यवर्ती मोटर परिवहन कर्मशाळा, छत्रपती संभाजीनगर", english: "Police Central Motor Transport Workshop, Chhatrapati Sambhajinagar" }, officerName: { marathi: "", english: "" }, designation: { marathi: "पोलीस उप-अधीक्षक", english: "Deputy Superintendent of Police" }, contact: "" },
    { sr: 1, commissionerate: { marathi: "मोटार परिवहन विभाग, छत्रपती संभाजीनगर", english: "Chhatrapati Sambhajinagar" }, officerName: { marathi: "भाऊसाहेब पाटील", english: "Bhausaheb Patil" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "9823431551" },
    { sr: 2, commissionerate: { marathi: "मोटार परिवहन विभाग, छत्रपती संभाजीनगर ग्रामीण", english: "Chhatrapati Sambhajinagar Rural" }, officerName: { marathi: "संतोष वयचाळ", english: "Santosh Waychal" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "8888287111" },
    { sr: 3, commissionerate: { marathi: "मोटार परिवहन विभाग, जालना", english: "Jalna" }, officerName: { marathi: "महेंद्र मोहळ", english: "Mahendra Mohol" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "8830901611" },
    { sr: 4, commissionerate: { marathi: "मोटार परिवहन विभाग, बीड", english: "Beed" }, officerName: { marathi: "सादिक पठाण", english: "Sadik Pathan" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "8082467867" },
    { sr: 5, commissionerate: { marathi: "मोटार परिवहन विभाग, धाराशिव", english: "Osmanabad" }, officerName: { marathi: "-", english: "-" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 6, commissionerate: { marathi: "मोटार परिवहन विभाग, बुलढाणा", english: "Buldhana" }, officerName: { marathi: "गजानन वानखेडे", english: "Gajanan Wankhede" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "8380093712" },
    { sr: 7, commissionerate: { marathi: "मोटार परिवहन विभाग, जळगाव", english: "Jalgaon" }, officerName: { marathi: "तायडे", english: "Tayde" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "9664919990" },
    { sr: 8, commissionerate: { marathi: "मोटार परिवहन विभाग, हिंगोली", english: "Hingoli" }, officerName: { marathi: "-", english: "-" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 9, commissionerate: { marathi: "मोटार परिवहन विभाग, लातूर", english: "Latur" }, officerName: { marathi: "रामकांत बनसोडे", english: "Ramakant Bansode" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "9823089144" },
    { sr: 10, commissionerate: { marathi: "मोटार परिवहन विभाग, नांदेड", english: "Nanded" }, officerName: { marathi: "दिलीप चोपडे", english: "Dilip Chopade" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "9158061990" },
    { sr: 11, commissionerate: { marathi: "मोटार परिवहन विभाग, परभणी", english: "Parbhani" }, officerName: { marathi: "-", english: "-" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 12, commissionerate: { marathi: "मोटार परिवहन विभाग, धुळे", english: "Dhule" }, officerName: { marathi: "-", english: "-" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 13, commissionerate: { marathi: "मोटार परिवहन विभाग, नंदुरबार", english: "Nandurbar" }, officerName: { marathi: "-", english: "-" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 14, commissionerate: { marathi: "एसआरपीएफ ग्रुप 3, जालना", english: "SRPF Group 3, Jalna" }, officerName: { marathi: "-", english: "-" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 15, commissionerate: { marathi: "एसआरपीएफ ग्रुप 6, धुळे", english: "SRPF Group 6, Dhule" }, officerName: { marathi: "-", english: "-" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 16, commissionerate: { marathi: "एसआरपीएफ ग्रुप 12, हिंगोली", english: "SRPF Group 12, Hingoli" }, officerName: { marathi: "-", english: "-" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 17, commissionerate: { marathi: "एसआरपीएफ ग्रुप 14, छत्रपती संभाजीनगर", english: "SRPF Group 14, Chhatrapati Sambhajinagar" }, officerName: { marathi: "", english: "" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 18, commissionerate: { marathi: "SDRF महाराष्ट्र कॅम्प ऑफिस, धुळे", english: "SDRF Maharashtra Camp Office, Dhule" }, officerName: { marathi: "-", english: "-" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 19, commissionerate: { marathi: "पोलीस प्रशिक्षण केंद्र, जालना", english: "Police Training Centre, Jalna" }, officerName: { marathi: "-", english: "-" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 20, commissionerate: { marathi: "पोलीस प्रशिक्षण केंद्र, लातूर", english: "Police Training Centre, Latur" }, officerName: { marathi: "-", english: "-" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
    { sr: 21, commissionerate: { marathi: "पोलीस प्रशिक्षण केंद्र, धुळे", english: "Police Training Centre, Dhule" }, officerName: { marathi: "-", english: "-" }, designation: { marathi: "पोलीस निरीक्षक", english: "Police Inspector" }, contact: "" },
  ];

  return (
    <div className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">
          {language === "marathi"
            ? "घटक"
            : "Units"}
        </h1>

        <div className="overflow-x-auto shadow-md rounded-lg border border-gray-300">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-3 border-r border-blue-500 text-left">
                  {language === "marathi" ? "अ.क्र" : "Sr. No."}
                </th>
                <th className="px-4 py-3 border-r border-blue-500 text-left">
                  {language === "marathi" ? "मोटार परिवहन विभागाचे नाव" : "Unit / Department"}
                </th>
                <th className="px-4 py-3 border-r border-blue-500 text-left">
                  {language === "marathi" ? "प्रभारी अधिकारी पदनाम" : "Designation"}
                </th>
                <th className="px-4 py-3 border-r border-blue-500 text-left">
                  {language === "marathi" ? "प्रभारी अधिकाऱ्याचे नाव" : "Officer Name"}
                </th>
                <th className="px-4 py-3 text-left">
                  {language === "marathi" ? "संपर्क क्रमांक" : "Contact Number"}
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((row, index) => (
                <tr
                  key={row.sr}
                  className={`${index % 2 === 0 ? "bg-blue-100" : "bg-white"} border-b border-gray-300`}
                >
                  <td className="px-4 py-3 border-r border-gray-300 font-medium text-gray-900">
                    {row.sr}
                  </td>
                  <td className="px-4 py-3 border-r border-gray-300 text-gray-900">
                    {language === "marathi"
                      ? row.commissionerate.marathi
                      : row.commissionerate.english}
                  </td>
                  <td className="px-4 py-3 border-r border-gray-300 text-gray-900">
                    {language === "marathi"
                      ? row.designation.marathi
                      : row.designation.english}
                  </td>
                  <td className="px-4 py-3 border-r border-gray-300 text-gray-900">
                    {row.officerName.marathi || row.officerName.english ? (
                      language === "marathi"
                        ? row.officerName.marathi
                        : row.officerName.english
                    ) : (
                      <span className="text-red-600 font-medium bg-red-100 px-2 py-1 rounded">
                        {language === "marathi" ? "-" : "Vacant"}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-900">
                    {row.contact || "-"}
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

export default ChtrapatiSambhajiNagarRange;
