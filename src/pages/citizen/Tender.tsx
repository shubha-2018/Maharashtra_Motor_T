// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft, Eye, Download } from "lucide-react";
// import { useLanguage } from "@/contexts/LanguageContext";

// export default function Tenders() {
//   const { t, lang } = useLanguage(); // Use your global language context safely
//   const currentLang = lang || "mr"; // fallback if undefined

//   const tenders = [
//     {
//       srno: 1,
//       date_en: "30 September 2025",
//       date_mr: "३० सप्टेंबर २०२५",
//       title_en: "Tender Notice for Wireless Radio Purchase",
//       title_mr: "वायरलेस रेडिओ संच खरेदीबाबत निविदा सूचना",
//       link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/01/TenderNoticeSolapur.pdf",
//       fileSize: "415.64 KB",
//     },
//     {
//       srno: 2,
//       date_en: "10 August 2025",
//       date_mr: "१० ऑगस्ट २०२५",
//       title_en: "Tender for Supply of Spare Parts",
//       title_mr: "स्पेअर पार्टस पुरवठ्याबाबत निविदा",
//       link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/01/TenderNoticeSolapur.pdf",
//       fileSize: "415.64 KB",
//     },
//     {
//       srno: 3,
//       date_en: "25 July 2025",
//       date_mr: "२५ जुलै २०२५",
//       title_en: "Tender for Computer Equipment Purchase",
//       title_mr: "कंप्युटर साहित्य खरेदी निविदा",
//       link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/01/TenderNoticeSolapur.pdf",
//       fileSize: "415.64 KB",
//     },
//   ];

//   // Define local labels safely
//   const labels = {
//     en: {
//       title: "Tenders",
//       back: "Back to Home",
//       srno: "Sr. No.",
//       date: "Date",
//       tenderTitle: "Title",
//       view: "View",
//       download: "Download",
//     },
//     mr: {
//       title: "निविदा",
//       back: "मुख्यपृष्ठावर जा",
//       srno: "क्र. क्र.",
//       date: "दिनांक",
//       tenderTitle: "शीर्षक",
//       view: "पाहा",
//       download: "डाउनलोड",
//     },
//   };

//   const L = labels[currentLang]; // Always defined now ✅

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
//       {/* Back button */}
//       <Button
//         variant="ghost"
//         onClick={() => window.history.back()}
//         className="flex items-center text-gray-900 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-blue-200 mb-8 dark:text-gray-100 dark:hover:bg-blue-950/30 dark:hover:text-blue-300 dark:hover:shadow-blue-900/30"
//       >
//         <ArrowLeft className="w-4 h-4 mr-2" /> {L.back}
//       </Button>

//       {/* Heading */}
//       <h1 className="text-5xl md:text-6xl font-extrabold text-center text-blue-700 dark:text-blue-400 mb-10">
//         {L.title}
//       </h1>

//       {/* Table */}
//       <Card className="bg-white/40 border border-gray-300 backdrop-blur-md rounded-2xl shadow-xl dark:bg-gray-800/30 dark:border-gray-700">
//         <CardContent className="p-6 overflow-x-auto">
//           <table className="w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
//             <thead>
//               <tr className="bg-blue-100 dark:bg-blue-950/40 text-blue-900 dark:text-blue-300 font-semibold text-center">
//                 <th className="border border-gray-300 px-3 py-2">{L.srno}</th>
//                 <th className="border border-gray-300 px-3 py-2">{L.date}</th>
//                 <th className="border border-gray-300 px-3 py-2">{L.tenderTitle}</th>
//                 <th className="border border-gray-300 px-3 py-2">{L.view}</th>
//                 <th className="border border-gray-300 px-3 py-2">{L.download}</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tenders.map((tender) => (
//                 <tr
//                   key={tender.srno}
//                   className="hover:bg-blue-50 dark:hover:bg-blue-900/20 text-center transition-all"
//                 >
//                   <td className="border border-gray-300 px-3 py-2">{tender.srno}</td>
//                   <td className="border border-gray-300 px-3 py-2">
//                     {currentLang === "mr" ? tender.date_mr : tender.date_en}
//                   </td>
//                   <td className="border border-gray-300 px-3 py-2 text-left">
//                     {currentLang === "mr" ? tender.title_mr : tender.title_en}
//                   </td>
//                   <td className="border border-gray-300 px-3 py-2">
//                     <a
//                       href={tender.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
//                     >
//                       <Eye className="w-4 h-4" /> {L.view}
//                     </a>
//                   </td>
//                   <td className="border border-gray-300 px-3 py-2">
//                     <a
//                       href={tender.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       download
//                       className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
//                     >
//                       <Download className="w-4 h-4" /> {L.download} ({tender.fileSize})
//                     </a>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }





// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft, Eye, Download, Globe } from "lucide-react";
// import { useLanguage } from "@/contexts/LanguageContext";

// export default function Tenders() {
//   const { t, language, setLanguage } = useLanguage();
//   const currentLang = language || "mr";

//   const tenders = [
//     {
//       srno: 1,
//       date_en: "30 September 2025",
//       date_mr: "३० सप्टेंबर २०२५",
//       title_en: "Tender Notice for Wireless Radio Purchase",
//       title_mr: "वायरलेस रेडिओ संच खरेदीबाबत निविदा सूचना",
//       link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/01/TenderNoticeSolapur.pdf",
//       fileSize: "415.64 KB",
//     },
//     {
//       srno: 2,
//       date_en: "10 August 2025",
//       date_mr: "१० ऑगस्ट २०२५",
//       title_en: "Tender for Supply of Spare Parts",
//       title_mr: "स्पेअर पार्टस पुरवठ्याबाबत निविदा",
//       link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/01/TenderNoticeSolapur.pdf",
//       fileSize: "415.64 KB",
//     },
//     {
//       srno: 3,
//       date_en: "25 July 2025",
//       date_mr: "२५ जुलै २०२५",
//       title_en: "Tender for Computer Equipment Purchase",
//       title_mr: "कंप्युटर साहित्य खरेदी निविदा",
//       link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/01/TenderNoticeSolapur.pdf",
//       fileSize: "415.64 KB",
//     },
//   ];

//   const labels = {
//     en: {
//       title: "Tenders",
//       back: "Back to Home",
//       srno: "Sr. No.",
//       date: "Date",
//       tenderTitle: "Title",
//       view: "View",
//       download: "Download",
//     },
//     mr: {
//       title: "निविदा",
//       back: "मुख्यपृष्ठावर जा",
//       srno: "क्र. क्र.",
//       date: "दिनांक",
//       tenderTitle: "शीर्षक",
//       view: "पाहा",
//       download: "डाउनलोड",
//     },
//   };

//   const L = labels[currentLang];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
//       {/* 🔙 Back + 🌐 Language Toggle Row */}
//       <div className="flex justify-between items-center mb-8">
//         <Button
//           variant="ghost"
//           onClick={() => window.history.back()}
//           className="flex items-center text-gray-900 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-blue-200 dark:text-gray-100 dark:hover:bg-blue-950/30 dark:hover:text-blue-300 dark:hover:shadow-blue-900/30"
//         >
//           <ArrowLeft className="w-4 h-4 mr-2" /> {L.back}
//         </Button>

//         <div className="flex items-center space-x-2">
//           <Globe className="w-4 h-4 text-blue-700 dark:text-blue-300" />
//           <button
//             onClick={() => setLanguage(currentLang === "en" ? "mr" : "en")}
//             className="text-sm font-semibold text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-all"
//           >
//             {currentLang === "en" ? "मराठी" : "English"}
//           </button>
//         </div>
//       </div>

//       {/* Heading */}
//       <h1 className="text-5xl md:text-6xl font-extrabold text-center text-blue-700 dark:text-blue-400 mb-10">
//         {L.title}
//       </h1>

//       {/* Table */}
//       <Card className="bg-white/40 border border-gray-300 backdrop-blur-md rounded-2xl shadow-xl dark:bg-gray-800/30 dark:border-gray-700">
//         <CardContent className="p-6 overflow-x-auto">
//           <table className="w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
//             <thead>
//               <tr className="bg-blue-100 dark:bg-blue-950/40 text-blue-900 dark:text-blue-300 font-semibold text-center">
//                 <th className="border border-gray-300 px-3 py-2">{L.srno}</th>
//                 <th className="border border-gray-300 px-3 py-2">{L.date}</th>
//                 <th className="border border-gray-300 px-3 py-2">{L.tenderTitle}</th>
//                 <th className="border border-gray-300 px-3 py-2">{L.view}</th>
//                 <th className="border border-gray-300 px-3 py-2">{L.download}</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tenders.map((tender) => (
//                 <tr
//                   key={tender.srno}
//                   className="hover:bg-blue-50 dark:hover:bg-blue-900/20 text-center transition-all"
//                 >
//                   <td className="border border-gray-300 px-3 py-2">{tender.srno}</td>
//                   <td className="border border-gray-300 px-3 py-2">
//                     {currentLang === "mr" ? tender.date_mr : tender.date_en}
//                   </td>
//                   <td className="border border-gray-300 px-3 py-2 text-left">
//                     {currentLang === "mr" ? tender.title_mr : tender.title_en}
//                   </td>
//                   <td className="border border-gray-300 px-3 py-2">
//                     <a
//                       href={tender.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
//                     >
//                       <Eye className="w-4 h-4" /> {L.view}
//                     </a>
//                   </td>
//                   <td className="border border-gray-300 px-3 py-2">
//                     <a
//                       href={tender.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       download
//                       className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
//                     >
//                       <Download className="w-4 h-4" /> {L.download} ({tender.fileSize})
//                     </a>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }



import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, Download, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Tenders() {
  const { t, language, setLanguage } = useLanguage();

  const tenders = [
    {
      srno: 1,
      date_en: "30 September 2025",
      date_mr: "३० सप्टेंबर २०२५",
      title_en: "Tender Notice for Wireless Radio Purchase",
      title_mr: "वायरलेस रेडिओ संच खरेदीबाबत निविदा सूचना",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/01/TenderNoticeSolapur.pdf",
      fileSize: "415.64 KB",
    },
    {
      srno: 2,
      date_en: "10 August 2025",
      date_mr: "१० ऑगस्ट २०२५",
      title_en: "Tender for Supply of Spare Parts",
      title_mr: "स्पेअर पार्टस पुरवठ्याबाबत निविदा",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/01/TenderNoticeSolapur.pdf",
      fileSize: "415.64 KB",
    },
    {
      srno: 3,
      date_en: "25 July 2025",
      date_mr: "२५ जुलै २०२५",
      title_en: "Tender for Computer Equipment Purchase",
      title_mr: "कंप्युटर साहित्य खरेदी निविदा",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/01/TenderNoticeSolapur.pdf",
      fileSize: "415.64 KB",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">

      {/* 🔙 Back + 🌐 Language Toggle */}
      <div className="flex justify-between items-center mb-8">
        <Button
          variant="ghost"
          onClick={() => window.history.back()}
          className="flex items-center text-gray-900 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-blue-200 dark:text-gray-100 dark:hover:bg-blue-950/30 dark:hover:text-blue-300 dark:hover:shadow-blue-900/30"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> {t("tenders.back")}
        </Button>

        {/* 🌐 Language Toggle */}
        <div className="flex items-center space-x-2">
          <Globe className="w-4 h-4 text-blue-700 dark:text-blue-300" />
          <button
            onClick={() => setLanguage(language === "en" ? "mr" : "en")}
            className="text-sm font-semibold text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-all"
          >
            {language === "en" ? t("marathi") : t("english")}
          </button>
        </div>
      </div>

      {/* 🏷️ Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center text-blue-700 dark:text-blue-400 mb-10">
        {t("tenders.title")}
      </h1>

      {/* 📑 Tender Table */}
      <Card className="bg-white/40 border border-gray-300 backdrop-blur-md rounded-2xl shadow-xl dark:bg-gray-800/30 dark:border-gray-700">
        <CardContent className="p-6 overflow-x-auto">
          {tenders.length === 0 ? (
            <p className="text-center py-6 text-gray-600 dark:text-gray-300">
              {t("tenders.none")}
            </p>
          ) : (
            <table className="w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-blue-100 dark:bg-blue-950/40 text-blue-900 dark:text-blue-300 font-semibold text-center">
                  <th className="border border-gray-300 px-3 py-2">
                    {t("tenders.srno")}
                  </th>
                  <th className="border border-gray-300 px-3 py-2">
                    {t("tenders.date")}
                  </th>
                  <th className="border border-gray-300 px-3 py-2">
                    {t("tenders.tenderTitle")}
                  </th>
                  <th className="border border-gray-300 px-3 py-2">
                    {t("tenders.view")}
                  </th>
                  <th className="border border-gray-300 px-3 py-2">
                    {t("tenders.download")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {tenders.map((tender) => (
                  <tr
                    key={tender.srno}
                    className="hover:bg-blue-50 dark:hover:bg-blue-900/20 text-center transition-all"
                  >
                    <td className="border border-gray-300 px-3 py-2">{tender.srno}</td>
                    <td className="border border-gray-300 px-3 py-2">
                      {language === "mr" ? tender.date_mr : tender.date_en}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-left">
                      {language === "mr" ? tender.title_mr : tender.title_en}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      <a
                        href={tender.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                      >
                        <Eye className="w-4 h-4" /> {t("tenders.view")}
                      </a>
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      <a
                        href={tender.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                      >
                        <Download className="w-4 h-4" /> {t("tenders.download")} ({tender.fileSize})
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
