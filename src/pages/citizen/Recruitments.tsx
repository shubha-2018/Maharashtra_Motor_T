


// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft, Eye, Download, Globe } from "lucide-react";
// import { useLanguage } from "@/contexts/LanguageContext";

// export default function Recruitment() {
//   const { t, language, setLanguage } = useLanguage();

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

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 
//                     dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 
//                     text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">

//       {/* 🔙 Back + 🌐 Language Toggle */}
//       <div className="flex justify-between items-center mb-8">
//         <Button
//           variant="ghost"
//           onClick={() => window.history.back()}
//           className="flex items-center text-gray-900 hover:bg-blue-50 hover:text-blue-700 
//                      transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-blue-200 
//                      dark:text-gray-100 dark:hover:bg-blue-950/30 dark:hover:text-blue-300 
//                      dark:hover:shadow-blue-900/30"
//         >
//           <ArrowLeft className="w-4 h-4 mr-2" /> {t("recruit.back")}
//         </Button>

//         {/* 🌐 Language Toggle */}
//         {/* <div className="flex items-center space-x-2">
//           <Globe className="w-4 h-4 text-blue-700 dark:text-blue-300" />
//           <button
//             onClick={() => setLanguage(language === "en" ? "mr" : "en")}
//             className="text-sm font-semibold text-blue-700 hover:text-blue-500 
//                        dark:text-blue-400 dark:hover:text-blue-300 transition-all"
//           >
//             {language === "en" ? t("marathi") : t("english")}
//           </button>
//         </div> */}
//       </div>

//       {/* 🏷️ Heading */}
//       <h1 className="text-5xl md:text-6xl font-extrabold text-center text-blue-700 
//                      dark:text-blue-400 mb-10">
//         {t("recruit.title")}
//       </h1>

//       {/* 📑 Recruitment Table (same as Tenders table style) */}
//       <Card className="bg-white/40 border border-gray-300 backdrop-blur-md rounded-2xl shadow-xl dark:bg-gray-800/30 dark:border-gray-700">
//         <CardContent className="p-6 overflow-x-auto">
//           {recruitments.length === 0 ? (
//             <p className="text-center py-6 text-gray-600 dark:text-gray-300">
//               {t("recruit.none")}
//             </p>
//           ) : (
//             <table className="w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
//               <thead>
//                 <tr className="bg-blue-100 dark:bg-blue-950/40 text-blue-900 dark:text-blue-300 font-semibold text-center">
//                   <th className="border border-gray-300 px-3 py-2">
//                     {t("recruit.srno")}
//                   </th>
//                   <th className="border border-gray-300 px-3 py-2">
//                     {t("recruit.date")}
//                   </th>
//                   <th className="border border-gray-300 px-3 py-2">
//                     {t("recruit.titleCol")}
//                   </th>
//                   <th className="border border-gray-300 px-3 py-2">
//                     {t("recruit.view")}
//                   </th>
//                   <th className="border border-gray-300 px-3 py-2">
//                     {t("recruit.download")}
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {recruitments.map((item) => (
//                   <tr
//                     key={item.srno}
//                     className="hover:bg-blue-50 dark:hover:bg-blue-900/20 text-center transition-all"
//                   >
//                     <td className="border border-gray-300 px-3 py-2">{item.srno}</td>
//                     <td className="border border-gray-300 px-3 py-2">
//                       {language === "mr" ? item.date_mr : item.date_en}
//                     </td>
//                     <td className="border border-gray-300 px-3 py-2 text-left">
//                       {language === "mr" ? item.title_mr : item.title_en}
//                     </td>
//                     <td className="border border-gray-300 px-3 py-2">
//                       <a
//                         href={item.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
//                       >
//                         <Eye className="w-4 h-4" /> {t("recruit.view")}
//                       </a>
//                     </td>
//                     <td className="border border-gray-300 px-3 py-2">
//                       <a
//                         href={item.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         download
//                         className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
//                       >
//                         <Download className="w-4 h-4" /> {t("recruit.download")} ({item.fileSize})
//                       </a>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Eye,
  Download,
  FileText,
  Calendar,
  TrendingUp,
  Users,
  Briefcase,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Recruitment() {
  const { t, language } = useLanguage();

  const recruitments = [
    {
      srno: 1,
      date_en: "18 January 2026",
      date_mr: "१८ जानेवारी २०२६",
      title_en: "Recruitment for Police Motor Transport Supervisor",
      title_mr: "पोलीस मोटार परिवहन पर्यवेक्षक पदासाठी भरती",
      link: "https://mahapolice.gov.in",
      fileSize: "540 KB",
      category_en: "Motor Transport Division",
      category_mr: "मोटार परिवहन विभाग",
      vacancies: 12,
    },
    {
      srno: 2,
      date_en: "02 February 2026",
      date_mr: "०२ फेब्रुवारी २०२६",
      title_en: "Recruitment for Police Vehicle Maintenance Technician",
      title_mr: "पोलीस वाहन देखभाल तंत्रज्ञ पदासाठी भरती",
      link: "https://mahapolice.gov.in",
      fileSize: "620 KB",
      category_en: "Vehicle Maintenance Unit",
      category_mr: "वाहन देखभाल विभाग",
      vacancies: 25,
    },
    {
      srno: 3,
      date_en: "15 March 2026",
      date_mr: "१५ मार्च २०२६",
      title_en: "Driver Recruitment for Police Patrol Vehicles",
      title_mr: "पोलीस गस्ती वाहन चालक भरती",
      link: "https://mahapolice.gov.in",
      fileSize: "710 KB",
      category_en: "Police Transport Wing",
      category_mr: "पोलीस परिवहन शाखा",
      vacancies: 40,
    },
    {
      srno: 4,
      date_en: "28 April 2026",
      date_mr: "२८ एप्रिल २०२६",
      title_en: "Recruitment for Fuel Management Officer",
      title_mr: "इंधन व्यवस्थापन अधिकारी पदासाठी भरती",
      link: "https://mahapolice.gov.in",
      fileSize: "488 KB",
      category_en: "Motor Management Cell",
      category_mr: "मोटार व्यवस्थापन कक्ष",
      vacancies: 8,
    },
  ];

  const stats = [
    {
      icon: Users,
      label: language === "mr" ? "एकूण रिक्त पदे" : "Total Vacancies",
      value: "85+",
      color: "blue",
    },
    {
      icon: TrendingUp,
      label: language === "mr" ? "सक्रिय भरती" : "Active Recruitments",
      value: "4",
      color: "green",
    },
    {
      icon: Briefcase,
      label: language === "mr" ? "उपलब्ध पदे" : "Positions Available",
      value: "4",
      color: "purple",
    },
    {
      icon: FileText,
      label: language === "mr" ? "प्राप्त अर्ज" : "Applications Received",
      value: "3K+",
      color: "orange",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.02] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 pt-8 pb-0 md:pt-8 md:pb-0">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-all duration-300 rounded-xl px-4 py-2"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />

            <span className="font-medium">
              {language === "mr"
                ? "मुख्यपृष्ठावर परत जा"
                : "Back to Home"}
            </span>
          </Button>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 dark:from-slate-100 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              {language === "mr" ? "भरती" : "Recruitment"}
            </span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 mx-auto rounded-full mb-4" />
        </div>

        {/* Recruitment Table */}
        <Card className="bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 dark:bg-slate-900/80 dark:border-slate-800 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-white" />

              <h2 className="text-lg font-semibold text-white">
                {language === "mr"
                  ? "सध्याच्या भरतीच्या संधी"
                  : "Current Recruitment Opportunities"}
              </h2>
            </div>
          </div>

          <CardContent className="p-0 overflow-x-auto">
            {recruitments.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-slate-400 mx-auto mb-4" />

                <p className="text-slate-600 dark:text-slate-400">
                  {language === "mr"
                    ? "सध्या कोणतीही भरती उपलब्ध नाही."
                    : "No recruitment available currently."}
                </p>
              </div>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                    <th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {language === "mr" ? "अ. क्र." : "Sr. No."}
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {language === "mr" ? "दिनांक" : "Date"}
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {language === "mr"
                        ? "भरतीचे शीर्षक"
                        : "Recruitment Title"}
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {language === "mr" ? "विभाग" : "Category"}
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300 text-center">
                      {language === "mr" ? "पहा" : "View"}
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300 text-center">
                      {language === "mr" ? "डाउनलोड" : "Download"}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {recruitments.map((item) => (
                    <tr
                      key={item.srno}
                      className="border-b border-slate-100 dark:border-slate-800 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-all duration-300 group"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-100">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-bold">
                          {item.srno}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />

                          <span>
                            {language === "mr"
                              ? item.date_mr
                              : item.date_en}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {language === "mr"
                              ? item.title_mr
                              : item.title_en}
                          </p> 
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                          {language === "mr"
                            ? item.category_mr
                            : item.category_en}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-center">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-all duration-300 hover:scale-105"
                        >
                          <Eye className="w-4 h-4" />

                          <span className="text-sm">
                            {language === "mr" ? "पहा" : "View"}
                          </span>
                        </a>
                      </td>

                      <td className="px-6 py-4 text-center">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                          className="inline-flex items-center gap-2 text-green-700 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300 font-medium transition-all duration-300 hover:scale-105"
                        >
                          <Download className="w-4 h-4" />

                          <span className="text-sm">
                            {language === "mr"
                              ? "डाउनलोड"
                              : "Download"}
                          </span>

                         
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
    </div>
  );
}