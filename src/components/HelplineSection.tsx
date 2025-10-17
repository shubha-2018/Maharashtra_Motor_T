// import React from "react";
// import { Phone, Ambulance, Shield, AlertCircle } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import { useLanguage } from "@/contexts/LanguageContext";
// import { cn } from "@/lib/utils";

// const HelplineSection: React.FC = () => {
//   const { t } = useLanguage();

//   const additionalHelplines = [
//     { title: t("helpline.child"), number: "1098", color: "bg-blue-700" },
//     { title: t("helpline.senior"), number: "14567", color: "bg-blue-600" },
//     { title: t("helpline.roadAccident"), number: "1073", color: "bg-yellow-600" },
//     { title: t("helpline.fire"), number: "101", color: "bg-red-600" },
//     { title: t("helpline.disaster"), number: "1077", color: "bg-purple-600" },
//     { title: t("helpline.antiCorruption"), number: "1031", color: "bg-gray-700" },
//   ];

//   const handleCall = (number: string) => {
//     window.location.href = `tel:${number}`;
//   };

//   return (
//     <section className="py-12 bg-white dark:bg-[#0A1E4A] text-black dark:text-white transition-colors">
//       <div className="container mx-auto px-4">
//         {/* Emergency Helplines Header */}
//         <div className="text-center mb-10">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <AlertCircle className="w-8 h-8 text-[#FBBF24] animate-pulse" />
//             <h2 className="text-2xl md:text-3xl font-bold">
//               {t("emergency.helpline")}
//             </h2>
//             <AlertCircle className="w-8 h-8 text-[#FBBF24] animate-pulse" />
//           </div>
//           <p className="text-gray-600 dark:text-gray-300">{t("emergency.message")}</p>
//         </div>

//         {/* Additional Helpline Numbers */}
//         <div className="bg-gray-100 dark:bg-[#13294B] rounded-xl border border-gray-300 dark:border-[#1D4ED8] p-6 mb-10 transition-colors">
//           <h3 className="text-xl font-bold mb-6 text-center text-black dark:text-white">
//             {t("additionalHelplines.header")}
//           </h3>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//             {additionalHelplines.map((helpline, index) => (
//               <div
//                 key={index}
//                 className="text-center p-4 rounded-lg cursor-pointer hover:bg-[#1D4ED8]/20 dark:hover:bg-[#1D4ED8]/30 transition-colors"
//                 onClick={() => handleCall(helpline.number)}
//               >
//                 <div
//                   className={cn(
//                     "w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center",
//                     helpline.color
//                   )}
//                 >
//                   <Phone className="w-6 h-6 text-white" />
//                 </div>
//                 <h4 className="font-semibold text-sm text-black dark:text-white mb-1 leading-tight">
//                   {helpline.title}
//                 </h4>
//                 <p className="text-lg font-bold text-[#1D4ED8]">
//                   {helpline.number}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-6 p-4 bg-gray-200 dark:bg-[#0A1E4A]/60 border border-gray-300 dark:border-[#1D4ED8] rounded-lg transition-colors">
//             <div className="flex items-center gap-2 mb-2">
//               <AlertCircle className="w-5 h-5 text-[#FBBF24]" />
//               <p className="font-semibold">{t("emergency.tips.title")}</p>
//             </div>
//             <p className="text-gray-700 dark:text-gray-300 text-sm">
//               {t("important.note.message")}
//             </p>
//           </div>
//         </div>

//         {/* Emergency Tips Section */}
//         {/* <div className="mt-8 grid md:grid-cols-2 gap-6">
//           <Card className="bg-gray-100 dark:bg-[#13294B] border border-gray-300 dark:border-[#1D4ED8] rounded-lg transition-colors">
//             <CardContent className="p-6">
//               <h4 className="font-bold mb-3 flex items-center gap-2 text-black dark:text-white">
//                 <Shield className="w-5 h-5 text-[#1D4ED8]" />
//                 {t("emergency.tips.item1")}
//               </h4>
//               <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
//                 <li className="flex items-center gap-2">
//                   <span className="w-2 h-2 bg-[#1D4ED8] rounded-full"></span>
//                   {t("emergency.tips.item2")}
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span className="w-2 h-2 bg-[#1D4ED8] rounded-full"></span>
//                   {t("emergency.tips.item3")}
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span className="w-2 h-2 bg-[#1D4ED8] rounded-full"></span>
//                   {t("emergency.tips.item4")}
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span className="w-2 h-2 bg-[#1D4ED8] rounded-full"></span>
//                   {t("emergency.tips.item5")}
//                 </li>
//               </ul>
//             </CardContent>
//           </Card>

//           <Card className="bg-gray-100 dark:bg-[#13294B] border border-gray-300 dark:border-[#1D4ED8] rounded-lg transition-colors">
//             <CardContent className="p-6">
//               <h4 className="font-bold mb-3 flex items-center gap-2 text-black dark:text-white">
//                 <Phone className="w-5 h-5 text-[#1D4ED8]" />
//                 {t("smart.features.item1")}
//               </h4>
//               <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
//                 <li className="flex items-center gap-2">
//                   <span className="w-2 h-2 bg-[#1D4ED8] rounded-full"></span>
//                   {t("smart.features.item2")}
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span className="w-2 h-2 bg-[#1D4ED8] rounded-full"></span>
//                   {t("smart.features.item1")}
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span className="w-2 h-2 bg-[#1D4ED8] rounded-full"></span>
//                   {t("smart.features.item3")}
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span className="w-2 h-2 bg-[#1D4ED8] rounded-full"></span>
//                   {t("smart.features.item4")}
//                 </li>
//               </ul>
//             </CardContent>
//           </Card>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default HelplineSection;


import { Phone } from "lucide-react";

const HelplineTicker = () => {
  const helplineNumbers = [
    { label: "Emergency", number: "100" },
    { label: "Women Helpline", number: "1091" },
    { label: "Child Helpline", number: "1098" },
    { label: "Cyber Crime", number: "1930" },
    { label: "Senior Citizens", number: "1091" },
    { label: "Traffic Police", number: "103" },
    { label: "Ambulance", number: "108" },
    { label: "Fire Brigade", number: "101" },
  ];

  return (
    <>
      {/* Helpline Numbers Ticker */}
      <div className="w-full bg-gradient-to-r from-red-600 to-red-700 dark:from-red-800 dark:to-red-900 py-2 overflow-hidden">
        <div className="flex items-center">
          <div className="flex items-center px-4 bg-red-800 dark:bg-red-950 py-1 rounded-r-lg">
            <Phone className="w-4 h-4 text-white mr-2 animate-pulse" />
            <span className="text-white font-bold text-sm whitespace-nowrap">Emergency Helplines:</span>
          </div>
          <div className="flex-1 overflow-hidden ml-4">
            <div className="flex animate-scroll">
              {[...helplineNumbers, ...helplineNumbers].map((helpline, index) => (
                <div
                  key={index}
                  className="flex items-center mx-6 text-white whitespace-nowrap"
                >
                  <span className="font-semibold text-sm">{helpline.label}:</span>
                  <span className="ml-2 px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-bold">
                    {helpline.number}
                  </span>
                  <span className="mx-4 text-yellow-300">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default HelplineTicker;