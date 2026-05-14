// import React from "react";
// import {
//   Award,
//   Users,
//   BookOpen,
//   Trophy,
//   Building2,
//   Calendar,
//   Target,
//   Zap,
// } from "lucide-react";
// import { useLanguage } from "@/contexts/LanguageContext";

// const Introduction: React.FC = () => {
//   const { t } = useLanguage();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">

//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
//         <div className="max-w-7xl mx-auto px-6 py-16">
//           <div className="flex items-center gap-3 mb-4">
//             <Building2 className="w-12 h-12" />
//             <div className="h-12 w-1 bg-blue-400" />
//             <div>
//               <p className="text-blue-200 text-sm font-medium">
//                 {t("intro.est")}
//               </p>
//               <p className="text-blue-200 text-sm">
//                 {t("intro.apex")}
//               </p>
//             </div>
//           </div>

//           <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
//             {t("intro.title")}
//           </h1>

//           <p className="text-xl text-blue-100 mb-6">
//             {t("intro.location")}
//           </p>

//           <p className="text-lg text-blue-50 max-w-3xl leading-relaxed">
//             {t("intro.description")}
//           </p>
//         </div>
//       </div>

//       {/* Stats */}
//       <div className="max-w-7xl mx-auto px-6 -mt-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-600">
//             <Users className="w-8 h-8 text-blue-600 mb-2" />
//             <p className="text-3xl font-bold">14,372</p>
//             <p className="text-gray-600">{t("stats.trained")}</p>
//           </div>

//           <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-600">
//             <Target className="w-8 h-8 text-green-600 mb-2" />
//             <p className="text-3xl font-bold">225</p>
//             <p className="text-gray-600">{t("stats.capacity")}</p>
//           </div>

//           <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-600">
//             <Calendar className="w-8 h-8 text-purple-600 mb-2" />
//             <p className="text-3xl font-bold">57+</p>
//             <p className="text-gray-600">{t("stats.years")}</p>
//           </div>
//         </div>
//       </div>

//       {/* About Section */}
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
//           <div className="flex items-center gap-3 mb-6">
//             <BookOpen className="w-8 h-8 text-blue-600" />
//             <h2 className="text-3xl font-bold text-gray-900">
//               {t("sections.about")}
//             </h2>
//           </div>

//           <p className="text-gray-700 leading-relaxed">
//             {t("about.description")}
//           </p>
//         </div>

//         {/* Training Programs */}
//         <div className="bg-indigo-50 rounded-2xl shadow-lg p-8 mb-8">
//           <div className="flex items-center gap-3 mb-6">
//             <Zap className="w-8 h-8 text-indigo-600" />
//             <h2 className="text-3xl font-bold text-gray-900">
//               {t("sections.training")}
//             </h2>
//           </div>
//         </div>

//         {/* Awards */}
//         <div className="bg-amber-50 rounded-2xl shadow-lg p-8 mb-8">
//           <div className="flex items-center gap-3 mb-6">
//             <Trophy className="w-8 h-8 text-amber-600" />
//             <h2 className="text-3xl font-bold text-gray-900">
//               {t("sections.awards")}
//             </h2>
//           </div>

//           <div className="bg-white rounded-xl p-6 shadow flex gap-4">
//             <Award className="w-12 h-12 text-amber-600" />
//             <div>
//               <h3 className="text-xl font-bold">
//                 {t("awards.national.title")}
//               </h3>
//               <p className="text-gray-700">
//                 {t("awards.national.description")}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-8 text-center">
//           <p className="text-blue-100 text-lg">
//             {t("footer.line1")}
//           </p>
//           <p className="text-blue-200 mt-2">
//             {t("footer.line2")}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Introduction;
