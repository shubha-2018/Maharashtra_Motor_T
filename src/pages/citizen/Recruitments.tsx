// // import { Card, CardContent } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { ArrowLeft, UserCheck } from "lucide-react";
// // import { useNavigate } from "react-router";
// // import { useLanguage } from "@/contexts/LanguageContext"; // Import the language hook

// // export default function Recruitments() {
// //   const navigate = useNavigate();
// //   const { t } = useLanguage(); // Use the language hook
// //   const goBack = () => navigate(-1);
  
// //   const recruitmentItems = [
// //     {
// //       titleKey: "recruit.notifications.title",
// //       descriptionKey: "recruit.notifications.description"
// //     },
// //     {
// //       titleKey: "recruit.forms.title",
// //       descriptionKey: "recruit.forms.description"
// //     },
// //     {
// //       titleKey: "recruit.exams.title",
// //       descriptionKey: "recruit.exams.description"
// //     },
// //     {
// //       titleKey: "recruit.results.title",
// //       descriptionKey: "recruit.results.description"
// //     },
// //     {
// //       titleKey: "recruit.training.title",
// //       descriptionKey: "recruit.training.description"
// //     },
// //     {
// //       titleKey: "recruit.eligibility.title",
// //       descriptionKey: "recruit.eligibility.description"
// //     },
// //     {
// //       titleKey: "recruit.proficiency.title",
// //       descriptionKey: "recruit.proficiency.description"
// //     },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
// //       {/* Back to Home Button */}
// //       <Button
// //         variant="ghost"
// //         onClick={goBack}
// //         className="flex items-center text-gray-900 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-blue-200 mb-8 dark:text-gray-100 dark:hover:bg-blue-950/30 dark:hover:text-blue-300 dark:hover:shadow-blue-900/30"
// //       >
// //         <ArrowLeft className="w-4 h-4 mr-2" /> {t("back.home")}
// //       </Button>

// //       {/* Heading */}
// //       <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent drop-shadow-lg mb-10 dark:from-blue-500 dark:via-blue-600 dark:to-blue-700">
// //         {t("recruit.title")}
// //       </h1>
// //       <h2 className="text-lg md:text-xl font-medium text-gray-600 text-center mb-12 dark:text-gray-300">
// //         {t("recruit.subtitle")}
// //       </h2>

// //       {/* Recruitment Cards */}
// //       <div className="space-y-8">
// //         {recruitmentItems.map((item, idx) => (
// //           <Card
// //             key={idx}
// //             className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-blue-400/20 transition-all duration-500 dark:bg-gray-800/30 dark:border-gray-700 dark:hover:shadow-blue-600/20"
// //           >
// //             <CardContent className="p-8 space-y-4">
// //               <div className="flex items-center gap-3">
// //                 <UserCheck className="w-6 h-6 text-blue-600 flex-shrink-0 dark:text-blue-500" />
// //                 <h3 className="text-2xl font-bold text-blue-700 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent dark:from-blue-500 dark:to-blue-700">
// //                   {t(item.titleKey)}
// //                 </h3>
// //               </div>
// //               <p className="text-gray-800 text-lg leading-relaxed dark:text-gray-200">
// //                 {t(item.descriptionKey)}
// //               </p>
// //             </CardContent>
// //           </Card>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }



// import { Card, CardContent } from "@/components/ui/card";
// import { Eye, Download } from "lucide-react";
// import { useLanguage } from "@/contexts/LanguageContext";

// export default function Recruitment() {
//   const { lang } = useLanguage();
//   const currentLang = lang || "mr"; // default Marathi

//   const recruitments = [
//     {
//       srno: 1,
//       date_en: "15 October 2025",
//       date_mr: "१५ ऑक्टोबर २०२५",
//       title_en: "Recruitment for Technical Assistant Post",
//       title_mr: "तांत्रिक सहाय्यक पदासाठी भरती जाहिरात",
//       link: "https://example.com/recruitment1.pdf",
//       fileSize: "512 KB",
//     },
//     {
//       srno: 2,
//       date_en: "05 September 2025",
//       date_mr: "०५ सप्टेंबर २०२५",
//       title_en: "Police Constable Recruitment 2025",
//       title_mr: "पोलीस कॉन्स्टेबल भरती २०२५",
//       link: "https://example.com/recruitment2.pdf",
//       fileSize: "689 KB",
//     },
//   ];

//   const labels = {
//     en: {
//       title: "Recruitment",
//       srno: "Sr. No.",
//       date: "Date",
//       tenderTitle: "Title",
//       view: "View",
//       download: "Download",
//     },
//     mr: {
//       title: "भरती",
//       srno: "क्र. क्र.",
//       date: "दिनांक",
//       tenderTitle: "शीर्षक",
//       view: "पाहा",
//       download: "डाउनलोड",
//     },
//   };

//   const L = labels[currentLang];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 
//                     dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 
//                     text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24">

//       {/* Title */}
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
//               {recruitments.map((item) => (
//                 <tr
//                   key={item.srno}
//                   className="hover:bg-blue-50 dark:hover:bg-blue-900/20 text-center transition-all"
//                 >
//                   <td className="border border-gray-300 px-3 py-2">{item.srno}</td>
//                   <td className="border border-gray-300 px-3 py-2">
//                     {currentLang === "mr" ? item.date_mr : item.date_en}
//                   </td>
//                   <td className="border border-gray-300 px-3 py-2 text-left">
//                     {currentLang === "mr" ? item.title_mr : item.title_en}
//                   </td>
//                   <td className="border border-gray-300 px-3 py-2">
//                     <a
//                       href={item.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
//                     >
//                       <Eye className="w-4 h-4" /> {L.view}
//                     </a>
//                   </td>
//                   <td className="border border-gray-300 px-3 py-2">
//                     <a
//                       href={item.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       download
//                       className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
//                     >
//                       <Download className="w-4 h-4" /> {L.download} ({item.fileSize})
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

export default function Recruitment() {
  const { t, language, setLanguage } = useLanguage();

  const recruitments = [
    {
      srno: 1,
      date_en: "15 October 2025",
      date_mr: "१५ ऑक्टोबर २०२५",
      title_en: "Recruitment for Technical Assistant Post",
      title_mr: "तांत्रिक सहाय्यक पदासाठी भरती जाहिरात",
      link: "https://example.com/recruitment1.pdf",
      fileSize: "512 KB",
    },
    {
      srno: 2,
      date_en: "05 September 2025",
      date_mr: "०५ सप्टेंबर २०२५",
      title_en: "Police Constable Recruitment 2025",
      title_mr: "पोलीस कॉन्स्टेबल भरती २०२५",
      link: "https://example.com/recruitment2.pdf",
      fileSize: "689 KB",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 
                    text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">

      {/* 🔙 Back + 🌐 Language Toggle */}
      <div className="flex justify-between items-center mb-8">
        <Button
          variant="ghost"
          onClick={() => window.history.back()}
          className="flex items-center text-gray-900 hover:bg-blue-50 hover:text-blue-700 
                     transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-blue-200 
                     dark:text-gray-100 dark:hover:bg-blue-950/30 dark:hover:text-blue-300 
                     dark:hover:shadow-blue-900/30"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> {t("recruit.back")}
        </Button>

        {/* 🌐 Language Toggle */}
        {/* <div className="flex items-center space-x-2">
          <Globe className="w-4 h-4 text-blue-700 dark:text-blue-300" />
          <button
            onClick={() => setLanguage(language === "en" ? "mr" : "en")}
            className="text-sm font-semibold text-blue-700 hover:text-blue-500 
                       dark:text-blue-400 dark:hover:text-blue-300 transition-all"
          >
            {language === "en" ? t("marathi") : t("english")}
          </button>
        </div> */}
      </div>

      {/* 🏷️ Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center text-blue-700 
                     dark:text-blue-400 mb-10">
        {t("recruit.title")}
      </h1>

      {/* 📑 Recruitment Table (same as Tenders table style) */}
      <Card className="bg-white/40 border border-gray-300 backdrop-blur-md rounded-2xl shadow-xl dark:bg-gray-800/30 dark:border-gray-700">
        <CardContent className="p-6 overflow-x-auto">
          {recruitments.length === 0 ? (
            <p className="text-center py-6 text-gray-600 dark:text-gray-300">
              {t("recruit.none")}
            </p>
          ) : (
            <table className="w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-blue-100 dark:bg-blue-950/40 text-blue-900 dark:text-blue-300 font-semibold text-center">
                  <th className="border border-gray-300 px-3 py-2">
                    {t("recruit.srno")}
                  </th>
                  <th className="border border-gray-300 px-3 py-2">
                    {t("recruit.date")}
                  </th>
                  <th className="border border-gray-300 px-3 py-2">
                    {t("recruit.titleCol")}
                  </th>
                  <th className="border border-gray-300 px-3 py-2">
                    {t("recruit.view")}
                  </th>
                  <th className="border border-gray-300 px-3 py-2">
                    {t("recruit.download")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {recruitments.map((item) => (
                  <tr
                    key={item.srno}
                    className="hover:bg-blue-50 dark:hover:bg-blue-900/20 text-center transition-all"
                  >
                    <td className="border border-gray-300 px-3 py-2">{item.srno}</td>
                    <td className="border border-gray-300 px-3 py-2">
                      {language === "mr" ? item.date_mr : item.date_en}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-left">
                      {language === "mr" ? item.title_mr : item.title_en}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                      >
                        <Eye className="w-4 h-4" /> {t("recruit.view")}
                      </a>
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                      >
                        <Download className="w-4 h-4" /> {t("recruit.download")} ({item.fileSize})
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
