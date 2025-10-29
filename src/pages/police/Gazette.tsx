// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   ArrowLeft,
//   FileText,
//   FileCheck,
//   Bell,
//   BookOpen,
//   Clipboard,
// } from "lucide-react";
// import { useNavigate } from "react-router";
// import { useLanguage } from "@/contexts/LanguageContext"; // Import the language hook

// export default function GovernmentPublications() {
//   const navigate = useNavigate();
//   const { t } = useLanguage(); // Use the language hook
//   const goBack = () => navigate("/");

//   const publications = [
//     {
//       icon: <FileText className="w-6 h-6 text-blue-600 dark:text-blue-500" />,
//       titleKey: "pubs.gazette.title",
//       descriptionKey: "pubs.gazette.description",
//       link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/04/February-2021.pdf",
//     },
//     {
//       icon: <FileCheck className="w-6 h-6 text-blue-600 dark:text-blue-500" />,
//       titleKey: "pubs.orders.title",
//       descriptionKey: "pubs.orders.description",
//       link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/04/March-2021.pdf",
//     },
//     {
//       icon: <Bell className="w-6 h-6 text-blue-600 dark:text-blue-500" />,
//       titleKey: "pubs.circulars.title",
//       descriptionKey: "pubs.circulars.description",
//       link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/04/April-2021.pdf",
//     },
//     {
//       icon: <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-500" />,
//       titleKey: "pubs.notifications.title",
//       descriptionKey: "pubs.notifications.description",
//       link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/04/February-2021.pdf",
//     },
//     {
//       icon: <Clipboard className="w-6 h-6 text-blue-600 dark:text-blue-500" />,
//       titleKey: "pubs.tenders.title",
//       descriptionKey: "pubs.tenders.description",
//       link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/04/August-2021.pdf",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-32 left-40 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full animate-pulse-slow dark:bg-blue-700/20"></div>
//         <div className="absolute bottom-32 right-40 w-[32rem] h-[32rem] bg-blue-800/20 blur-3xl rounded-full animate-pulse-slow dark:bg-blue-900/20"></div>
//       </div>

//       <div className="max-w-6xl mx-auto space-y-12">
//         {/* Back to Home Button */}
//         <Button
//           variant="ghost"
//           onClick={goBack}
//           className="flex items-center text-gray-900 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-blue-200 mb-6 dark:text-gray-100 dark:hover:bg-blue-950/30 dark:hover:text-blue-300 dark:hover:shadow-blue-900/30"
//         >
//           <ArrowLeft className="w-4 h-4 mr-2" /> {t("back.home")}
//         </Button>

//         {/* Heading */}
//         <h1 className="text-5xl p-3 md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent drop-shadow-lg dark:from-blue-500 dark:via-blue-600 dark:to-blue-700">
//           {t("pubs.title")}
//         </h1>
//         <h2 className="text-lg md:text-xl font-medium text-gray-600 text-center mb-12 dark:text-gray-300">
//           {t("pubs.subtitle")}
//         </h2>

//         {/* Publication Cards */}
//         <div className="space-y-8">
//           {publications.map((item, idx) => (
//             <Card
//               key={idx}
//               onClick={() => {
//                 window.open(item.link, "_blank");
//               }}
//               className="bg-white/30 cursor-pointer border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-blue-400/20 transition-all duration-500 dark:bg-gray-800/30 dark:border-gray-700 dark:hover:shadow-blue-600/20"
//             >
//               <CardContent className="p-8 space-y-4">
//                 <div className="flex items-center gap-3">
//                   {item.icon}
//                   <h3 className="text-2xl md:text-3xl font-bold text-blue-700 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700">
//                     {t(item.titleKey)}
//                   </h3>
//                 </div>
//                 <p className="text-gray-800 text-lg leading-relaxed text-justify dark:text-gray-200">
//                   {t(item.descriptionKey)}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, Download } from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GovernmentPublications() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const goBack = () => navigate("/");

  // 📘 Gazette Publications
  const gazettes = [
    {
      srno: 1,
      date_en: "10 January 2025",
      date_mr: "१० जानेवारी २०२५",
      title_en: "Government Gazette – January 2025",
      title_mr: "राजपत्र – जानेवारी २०२५",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/04/February-2021.pdf",
      fileSize: "1.2 MB",
      uploadedAt: "2025-01-10",
    },
    {
      srno: 2,
      date_en: "25 February 2025",
      date_mr: "२५ फेब्रुवारी २०२५",
      title_en: "Government Gazette – February 2025",
      title_mr: "राजपत्र – फेब्रुवारी २०२५",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/04/March-2021.pdf",
      fileSize: "1.5 MB",
      uploadedAt: "2025-02-25",
    },
    {
      srno: 3,
      date_en: "30 March 2025",
      date_mr: "३० मार्च २०२५",
      title_en: "Government Gazette – March 2025",
      title_mr: "राजपत्र – मार्च २०२५",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/04/April-2021.pdf",
      fileSize: "1.3 MB",
      uploadedAt: "2025-03-30",
    },
  ];

  // 🔹 Sort latest → oldest (based on uploadedAt)
  const sortedGazettes = [...gazettes].sort(
    (a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt)
  );

  // 🌐 Bilingual Labels
  const labels = {
    en: {
      title: "Government Gazette",
      back: "Back to Home",
      srno: "Sr. No.",
      date: "Date",
      gazetteTitle: "Title",
      view: "View",
      download: "Download",
      none: "No gazettes available currently.",
    },
    mr: {
      title: "राजपत्र",
      back: "मुख्यपृष्ठावर जा",
      srno: "अ. क्र.",
      date: "दिनांक",
      gazetteTitle: "राजपत्राचे शीर्षक",
      view: "पहा",
      download: "डाउनलोड",
      none: "सध्या कोणतेही राजपत्र उपलब्ध नाही.",
    },
  };

  const L = language === "mr" ? labels.mr : labels.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      
      {/* 🔙 Back Button */}
      <div className="flex justify-between items-center mb-8">
        <Button
          variant="ghost"
          onClick={goBack}
          className="flex items-center text-gray-900 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-blue-200 dark:text-gray-100 dark:hover:bg-blue-950/30 dark:hover:text-blue-300 dark:hover:shadow-blue-900/30"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> {L.back}
        </Button>
      </div>

      {/* 🏷️ Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center text-blue-700 dark:text-blue-400 mb-10">
        {L.title}
      </h1>

      {/* 📑 Gazette Table */}
      <Card className="bg-white/40 border border-gray-300 backdrop-blur-md rounded-2xl shadow-xl dark:bg-gray-800/30 dark:border-gray-700">
        <CardContent className="p-6 overflow-x-auto">
          {sortedGazettes.length === 0 ? (
            <p className="text-center py-6 text-gray-600 dark:text-gray-300">
              {L.none}
            </p>
          ) : (
            <table className="w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-blue-100 dark:bg-blue-950/40 text-blue-900 dark:text-blue-300 font-semibold text-center">
                  <th className="border border-gray-300 px-3 py-2">{L.srno}</th>
                  <th className="border border-gray-300 px-3 py-2">{L.date}</th>
                  <th className="border border-gray-300 px-3 py-2">{L.gazetteTitle}</th>
                  <th className="border border-gray-300 px-3 py-2">{L.view}</th>
                  <th className="border border-gray-300 px-3 py-2">{L.download}</th>
                </tr>
              </thead>
              <tbody>
                {sortedGazettes.map((gazette, index) => (
                  <tr
                    key={gazette.srno}
                    className="hover:bg-blue-50 dark:hover:bg-blue-900/20 text-center transition-all"
                  >
                    <td className="border border-gray-300 px-3 py-2">{index + 1}</td>
                    <td className="border border-gray-300 px-3 py-2">
                      {language === "mr" ? gazette.date_mr : gazette.date_en}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-left">
                      {language === "mr" ? gazette.title_mr : gazette.title_en}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      <a
                        href={gazette.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                      >
                        <Eye className="w-4 h-4" /> {L.view}
                      </a>
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      <a
                        href={gazette.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                      >
                        <Download className="w-4 h-4" /> {L.download} ({gazette.fileSize})
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
