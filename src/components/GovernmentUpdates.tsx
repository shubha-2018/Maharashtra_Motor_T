// import React from "react";
// import {
//   Calendar,
//   FileText,
//   Megaphone,
//   ExternalLink,
//   Download,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { useLanguage } from "@/contexts/LanguageContext";
// import { Link } from "react-router-dom";

// const GovernmentUpdates: React.FC = () => {
//   const { t } = useLanguage();

//   const policeBlue = "#0A1E4A";
//   const accent = "#1D4ED8";

//   const bulletins = [
//     {
//       id: 1,
//       type: "bulletin",
//       title: t("bulletin.cybercrimePortal"),
//       date: "2024-01-15",
//       icon: Megaphone,
//       badge: t("badge.new"),
//       link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2024/04/PP-RESULT-RM-ELE.-WO-2024.pdf",
//     },
//     {
//       id: 2,
//       type: "order",
//       title: t("bulletin.digitalEvidence"),
//       date: "2024-01-12",
//       icon: FileText,
//       badge: t("badge.important"),
//       link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2024/04/PP-RESULT-RM-ELE.-WO-2024.pdf",
//     },
//     {
//       id: 3,
//       type: "instruction",
//       title: t("bulletin.emergencyProtocol"),
//       date: "2024-01-10",
//       icon: FileText,
//       badge: t("badge.update"),
//       link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2024/04/PP-RESULT-RM-ELE.-WO-2024.pdf",
//     },
//     {
//       id: 4,
//       type: "bulletin",
//       title: t("bulletin.auditResults"),
//       date: "2024-01-08",
//       icon: Megaphone,
//       badge: t("badge.report"),
//       link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2024/04/PP-RESULT-RM-ELE.-WO-2024.pdf",
//     },
//   ];

//   const tenders = [
//     {
//       id: 1,
//       title: t("tender.communicationEquipment"),
//       lastDate: "2024-02-15",
//       tender_no: "PCIT/2024/001",
//       status: t("tender.status.open"),
//       link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/01/TenderNoticeSolapur.pdf",
//     },
//     {
//       id: 2,
//       title: t("tender.mobileApp"),
//       lastDate: "2024-02-20",
//       tender_no: "PCIT/2024/002",
//       status: t("tender.status.open"),
//       link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/01/TenderNoticeSolapur.pdf",
//     },
//     {
//       id: 3,
//       title: t("tender.serverMaintenance"),
//       lastDate: "2024-01-30",
//       tender_no: "PCIT/2024/003",
//       status: t("tender.status.closingSoon"),
//       link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/01/TenderNoticeSolapur.pdf",
//     },
//   ];

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-IN");
//   };

//   const getBadgeVariant = (badge: string) => {
//     switch (badge.toLowerCase()) {
//       case "new":
//         return "default";
//       case "important":
//         return "secondary";
//       case "update":
//         return "outline"; 
//       default:
//         return "outline";
//     }
//   };

//   return (
//     <section className="py-16 transition-colors duration-500 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#0A1E4A] via-[#1D4ED8] to-[#0A1E4A] bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-blue-400">
//             {t("govt.updates")}
//           </h2>
//           <div
//             className="w-24 h-1 mx-auto rounded-full shadow-lg"
//             style={{
//               background: `linear-gradient(to right, ${policeBlue}, ${accent}, ${policeBlue})`,
//             }}
//           ></div>
//         </div>

//         {/* Two-Column Grid */}
//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Bulletins Card */}
//           <Card className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-800 dark:via-blue-900 dark:to-indigo-900 shadow-xl hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl transform hover:-translate-y-1">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl -z-0"></div>
//             <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-400/20 to-blue-600/20 rounded-full blur-3xl -z-0"></div>
            
//             <CardHeader className="relative z-10">
//               <CardTitle className="flex items-center gap-3 text-xl font-bold">
//                 <div className="p-2 bg-gradient-to-br from-[#0A1E4A] to-[#1D4ED8] rounded-lg shadow-lg">
//                   <Megaphone className="w-6 h-6 text-white" />
//                 </div>
//                 <span className="bg-gradient-to-r from-[#0A1E4A] to-[#1D4ED8] bg-clip-text text-transparent dark:from-blue-300 dark:to-indigo-300">
//                   {t("bulletins")}
//                 </span>
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4 relative z-10">
//               {bulletins.map((item) => (
//                 <div
//                   key={item.id}
//                   className="group p-5 border-l-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gradient-to-b from-[#1D4ED8] to-[#0A1E4A] hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-[1.02]"
//                   style={{
//                     borderImage: "linear-gradient(to bottom, #1D4ED8, #0A1E4A) 1",
//                   }}
//                 >
//                   <div className="flex items-start justify-between mb-3">
//                     <div className="flex items-center gap-2">
//                       <div className="p-1.5 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-md group-hover:scale-110 transition-transform">
//                         <item.icon className="w-4 h-4 text-[#0A1E4A] dark:text-blue-300" />
//                       </div>
//                       <Badge
//                         variant={getBadgeVariant(item.badge)}
//                         className="text-xs bg-gradient-to-r from-[#0A1E4A] to-[#1D4ED8] text-white border-0 shadow-md"
//                       >
//                         {item.badge}
//                       </Badge>
//                     </div>
//                     <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-300 bg-gray-100/50 dark:bg-gray-700/50 px-2 py-1 rounded-md">
//                       <Calendar className="w-3 h-3" />
//                       {formatDate(item.date)}
//                     </div>
//                   </div>

//                   <h3 className="font-semibold mb-3 leading-tight text-gray-900 dark:text-white group-hover:text-[#1D4ED8] dark:group-hover:text-blue-400 transition-colors">
//                     {item.title}
//                   </h3>

//                   <div className="flex items-center gap-3">
//                     <Link to={item.link} target="_blank">
//                       <Button
//                         size="sm"
//                         className="bg-gradient-to-r from-[#0A1E4A] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#0A1E4A] text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
//                       >
//                         <ExternalLink className="w-3 h-3 mr-1" />
//                         {t("read.more")}
//                       </Button>
//                     </Link>
//                     <Link to={item.link} target="_blank">
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         className="border-2 border-[#1D4ED8] text-[#1D4ED8] dark:text-blue-300 hover:bg-gradient-to-r hover:from-[#0A1E4A] hover:to-[#1D4ED8] hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105"
//                       >
//                         <Download className="w-3 h-3 mr-1" />
//                         PDF
//                       </Button>
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </CardContent>
//           </Card>

//           {/* Tenders Card */}
//           <Card className="relative overflow-hidden bg-gradient-to-br from-white via-indigo-50 to-blue-50 dark:from-gray-800 dark:via-indigo-900 dark:to-blue-900 shadow-xl hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl transform hover:-translate-y-1">
//             <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-indigo-400/20 to-blue-600/20 rounded-full blur-3xl -z-0"></div>
//             <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tr from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl -z-0"></div>
            
//             <CardHeader className="relative z-10">
//               <CardTitle className="flex items-center gap-3 text-xl font-bold">
//                 <div className="p-2 bg-gradient-to-br from-[#0A1E4A] to-[#1D4ED8] rounded-lg shadow-lg">
//                   <FileText className="w-6 h-6 text-white" />
//                 </div>
//                 <span className="bg-gradient-to-r from-[#0A1E4A] to-[#1D4ED8] bg-clip-text text-transparent dark:from-blue-300 dark:to-indigo-300">
//                   {t("tenders.section")}
//                 </span>
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4 relative z-10">
//               {tenders.map((tender) => (
//                 <div
//                   key={tender.id}
//                   className="group p-5 border-2 border-transparent rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 hover:border-gradient-to-r hover:from-[#1D4ED8] hover:to-[#0A1E4A] transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-[1.02]"
//                   style={{
//                     background: "linear-gradient(white, white) padding-box, linear-gradient(to right, #1D4ED8, #0A1E4A) border-box",
//                   }}
//                 >
//                   <div className="flex items-start justify-between mb-3">
//                     <div>
//                       <h3 className="font-semibold mb-1 leading-tight text-gray-900 dark:text-white group-hover:text-[#1D4ED8] dark:group-hover:text-blue-400 transition-colors">
//                         {tender.title}
//                       </h3>
//                       <p className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100/50 dark:bg-gray-700/50 px-2 py-1 rounded inline-block">
//                         Tender No: {tender.tender_no}
//                       </p>
//                     </div>
//                     <Badge className="text-xs bg-gradient-to-r from-emerald-500 to-green-500 text-white border-0 shadow-md">
//                       {tender.status}
//                     </Badge>
//                   </div>

//                   <div className="flex items-center justify-between mt-3">
//                     <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 bg-gray-100/50 dark:bg-gray-700/50 px-3 py-1.5 rounded-md">
//                       <Calendar className="w-3 h-3" />
//                       Last Date: {formatDate(tender.lastDate)}
//                     </div>
//                     <Link to={tender.link} target="_blank">
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         className="border-2 border-[#1D4ED8] text-[#1D4ED8] dark:text-blue-300 hover:bg-gradient-to-r hover:from-[#0A1E4A] hover:to-[#1D4ED8] hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
//                       >
//                         <Download className="w-3 h-3 mr-1" />
//                         Download
//                       </Button>
//                     </Link>
//                   </div>
//                 </div>
//               ))}

//               <div className="text-center pt-4">
//                 <Link to={"/citizen/tender"}>
//                   <Button className="bg-gradient-to-r from-[#0A1E4A] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#0A1E4A] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-6 py-2">
//                     {t("view.all")} {t("tenders.section")}
//                   </Button>
//                 </Link>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GovernmentUpdates;



import React, { useEffect, useState } from "react";
import { ChevronUp, ExternalLink, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext"; // ✅ Import Language Context

const GovernmentUpdates = () => {
  const { language } = useLanguage(); // ✅ Get current language (mr/en)

  const [bulletinOffset, setBulletinOffset] = useState(0);
  const [tenderOffset, setTenderOffset] = useState(0);
  const [isPausedBulletins, setIsPausedBulletins] = useState(false);
  const [isPausedTenders, setIsPausedTenders] = useState(false);

  // 📰 English Bulletins with PDF links
  const bulletinsEn = [
    {
      id: 1,
      title: "Cybercrime Reporting Portal Launch",
      date: "April 15, 2024",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2024/04/PP-RESULT-RM-ELE.-WO-2024.pdf",
    },
    {
      id: 2,
      title: "Digital Evidence Guidelines Updated",
      date: "April 12, 2024",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2024/04/PP-RESULT-RM-ELE.-WO-2024.pdf",
    },
    {
      id: 3,
      title: "Emergency Response Protocol Revision",
      date: "April 10, 2024",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2024/04/PP-RESULT-RM-ELE.-WO-2024.pdf",
    },
    {
      id: 4,
      title: "Annual Performance Review Results Published",
      date: "April 8, 2024",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2024/04/PP-RESULT-RM-ELE.-WO-2024.pdf",
    },
  ];

  // 📰 Marathi Bulletins with same PDF links
  const bulletinsMr = [
    {
      id: 1,
      title: "सायबरक्राईम रिपोर्टिंग पोर्टल सुरु",
      date: "एप्रिल १५, २०२४",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2024/04/PP-RESULT-RM-ELE.-WO-2024.pdf",
    },
    {
      id: 2,
      title: "डिजिटल पुरावा मार्गदर्शक तत्त्वे अद्यतनित",
      date: "एप्रिल १२, २०२४",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2024/04/PP-RESULT-RM-ELE.-WO-2024.pdf",
    },
    {
      id: 3,
      title: "आपत्कालीन प्रतिसाद प्रोटोकॉल सुधारणा",
      date: "एप्रिल १०, २०२४",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2024/04/PP-RESULT-RM-ELE.-WO-2024.pdf",
    },
    {
      id: 4,
      title: "वार्षिक कामगिरी पुनरावलोकन निकाल प्रसिद्ध",
      date: "एप्रिल ८, २०२४",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2024/04/PP-RESULT-RM-ELE.-WO-2024.pdf",
    },
  ];

  // 💼 English Tenders with PDF links
  const tendersEn = [
    {
      id: 1,
      title: "Communication Equipment Procurement Tender",
      date: "October 22, 2024",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/01/TenderNoticeSolapur.pdf",
    },
    {
      id: 2,
      title: "Mobile Application Development Services",
      date: "October 20, 2024",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/01/TenderNoticeSolapur.pdf",
    },
    {
      id: 3,
      title: "Server Infrastructure Maintenance Contract",
      date: "October 15, 2024",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/01/TenderNoticeSolapur.pdf",
    },
  ];

  // 💼 Marathi Tenders
  const tendersMr = [
    {
      id: 1,
      title: "संचार उपकरण खरेदी निविदा",
      date: "ऑक्टोबर २२, २०२४",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/01/TenderNoticeSolapur.pdf",
    },
    {
      id: 2,
      title: "मोबाईल अॅप विकास सेवा",
      date: "ऑक्टोबर २०, २०२४",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/01/TenderNoticeSolapur.pdf",
    },
    {
      id: 3,
      title: "सर्व्हर देखभाल करार",
      date: "ऑक्टोबर १५, २०२४",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/01/TenderNoticeSolapur.pdf",
    },
  ];

  const bulletins = language === "en" ? bulletinsEn : bulletinsMr;
  const tenders = language === "en" ? tendersEn : tendersMr;

  // 🔁 Duplicate for infinite scroll
  const bulletinItems = [...bulletins, ...bulletins, ...bulletins];
  const tenderItems = [...tenders, ...tenders, ...tenders];

  // Auto-scrolling logic
  useEffect(() => {
    if (isPausedBulletins) return;
    const interval = setInterval(() => {
      setBulletinOffset((prev) => prev + 1);
    }, 50);
    return () => clearInterval(interval);
  }, [isPausedBulletins]);

  useEffect(() => {
    if (isPausedTenders) return;
    const interval = setInterval(() => {
      setTenderOffset((prev) => prev + 1);
    }, 50);
    return () => clearInterval(interval);
  }, [isPausedTenders]);

  useEffect(() => {
    if (bulletinOffset > bulletins.length * 80) setBulletinOffset(0);
  }, [bulletinOffset, bulletins.length]);

  useEffect(() => {
    if (tenderOffset > tenders.length * 80) setTenderOffset(0);
  }, [tenderOffset, tenders.length]);

  const headerTitleBulletin =
    language === "en"
      ? "Latest Bulletins / Orders / Notices"
      : "नवीन बुलेटिन / आदेश / सूचना";
  const headerTitleTender =
    language === "en" ? "Latest Tenders" : "नवीन निविदा";
  const readMoreText = language === "en" ? "Read More" : "पुढे वाचा";

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Bulletins */}
          <div
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            onMouseEnter={() => setIsPausedBulletins(true)}
            onMouseLeave={() => setIsPausedBulletins(false)}
          >
            <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 px-6 py-4">
              <h2 className="text-xl font-bold text-white text-center">
                {headerTitleBulletin}
              </h2>
            </div>

            <div className="relative h-80 overflow-hidden">
              <div
                className="absolute w-full transition-transform"
                style={{
                  transform: `translateY(-${bulletinOffset}px)`,
                  transition: isPausedBulletins
                    ? "none"
                    : "transform 0.05s linear",
                }}
              >
                {bulletinItems.map((b, idx) => (
                  <div
                    key={`${b.id}-${idx}`}
                    className="mx-6 my-3 bg-gray-50 rounded-lg p-4 border-l-4 border-blue-900 hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="font-medium text-gray-800 flex-1 text-sm">
                        {b.title}
                      </h3>
                      <span className="text-xs text-gray-600 whitespace-nowrap">
                        {b.date}
                      </span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <a
                        href={b.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-900 hover:underline text-xs flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {language === "en" ? "Open PDF" : "पीडीएफ पहा"}
                      </a>
                      <a
                        href={b.link}
                        download
                        className="text-gray-700 hover:text-blue-900 text-xs flex items-center gap-1"
                      >
                        <Download className="w-3 h-3" />
                        {language === "en" ? "Download" : "डाउनलोड"}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            </div>

            <div className="flex justify-end">
              <button className="bg-blue-900 hover:bg-blue-950 text-white font-bold px-6 py-2 rounded-tl-xl transition">
                {readMoreText}
              </button>
            </div>
          </div>

          {/* Tenders */}
          <div
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            onMouseEnter={() => setIsPausedTenders(true)}
            onMouseLeave={() => setIsPausedTenders(false)}
          >
            <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 px-6 py-4">
              <h2 className="text-xl font-bold text-white text-center">
                {headerTitleTender}
              </h2>
            </div>

            <div className="relative h-80 overflow-hidden">
              <div
                className="absolute w-full transition-transform"
                style={{
                  transform: `translateY(-${tenderOffset}px)`,
                  transition: isPausedTenders ? "none" : "transform 0.05s linear",
                }}
              >
                {tenderItems.map((t, idx) => (
                  <div
                    key={`${t.id}-${idx}`}
                    className="mx-6 my-3 bg-gray-50 rounded-lg p-4 border-l-4 border-blue-900 hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="font-medium text-gray-800 flex-1 text-sm">{t.title}</h3>
                      <span className="text-xs text-gray-600 whitespace-nowrap">{t.date}</span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <a
                        href={t.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-900 hover:underline text-xs flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {language === "en" ? "Open PDF" : "पीडीएफ पहा"}
                      </a>
                      <a
                        href={t.link}
                        download
                        className="text-gray-700 hover:text-blue-900 text-xs flex items-center gap-1"
                      >
                        <Download className="w-3 h-3" />
                        {language === "en" ? "Download" : "डाउनलोड"}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            </div>

            <div className="flex justify-end">
              <button className="bg-blue-900 hover:bg-blue-950 text-white font-bold px-6 py-2 rounded-tl-xl transition">
                {readMoreText}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
       
      </div>
    </section>
  );
};

export default GovernmentUpdates;
