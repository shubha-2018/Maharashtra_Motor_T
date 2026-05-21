// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft, Star, Moon, Sun } from "lucide-react";
// import { useNavigate } from "react-router";
// import { useState, useEffect } from "react";
// import { useLanguage } from "@/contexts/LanguageContext"; // Import the language context

// export default function PositiveStories() {
//   const navigate = useNavigate();
//   const goBack = () => navigate("/");
//   const { t } = useLanguage(); // Get the translation function

//   // Check system preference on component mount

//   // Define stories with translation keys
//   const stories = [
//     {
//       titleKey: "stories.award.title",
//       descriptionKey: "stories.award.description",
//     },
//     {
//       titleKey: "stories.event.title",
//       descriptionKey: "stories.event.description",
//     },
//     {
//       titleKey: "stories.innovation.title",
//       descriptionKey: "stories.innovation.description",
//     },
//     {
//       titleKey: "stories.welfare.title",
//       descriptionKey: "stories.welfare.description",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden transition-colors duration-300">
//       {/* Background Glow */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-32 left-40 w-96 h-96 bg-blue-600/20 dark:bg-blue-700/20 blur-3xl rounded-full transition-colors duration-300"></div>
//         <div className="absolute bottom-32 right-40 w-[32rem] h-[32rem] bg-blue-800/20 dark:bg-blue-900/20 blur-3xl rounded-full transition-colors duration-300"></div>
//       </div>


//       <div className="max-w-6xl mx-auto space-y-12">
//         {/* Back to Home Button */}
//         <Button
//           variant="ghost"
//           onClick={goBack}
//           className="flex items-center text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-blue-200 dark:hover:shadow-blue-900/30 mb-6"
//         >
//           <ArrowLeft className="w-4 h-4 mr-2" /> {t("back")}
//         </Button>

//         {/* Heading */}
//         <div className="text-center space-y-4">
//           <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-500 dark:via-blue-600 dark:to-blue-700 bg-clip-text text-transparent drop-shadow-lg transition-colors duration-300">
//             {t("positive.stories.title")}
//           </h1>
//           <h2 className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300 transition-colors duration-300">
//             {t("positive.stories.subtitle")}
//           </h2>
//         </div>

//         {/* Stories Cards */}
//         <div className="space-y-8">
//           {stories.map((story, idx) => (
//             <Card
//               key={idx}
//               className="bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-blue-400/20 dark:hover:shadow-blue-600/20 transition-all duration-500"
//             >
//               <CardContent className="p-8 space-y-4">
//                 <div className="flex items-center gap-3">
//                   <Star className="w-6 h-6 text-blue-600 dark:text-blue-500 flex-shrink-0 transition-colors duration-300" />
//                   <h3 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-400 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 bg-clip-text text-transparent transition-colors duration-300">
//                     {t(story.titleKey)}
//                   </h3>
//                 </div>
//                 <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed whitespace-pre-line transition-colors duration-300">
//                   {t(story.descriptionKey)}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Highlight Card */}
//         <Card className="bg-gradient-to-r from-blue-600/20 via-blue-700/20 to-blue-800/20 dark:from-blue-700/20 dark:via-blue-800/20 dark:to-blue-900/20 p-6 rounded-3xl border border-blue-200/20 dark:border-blue-700/20 shadow-inner text-center transition-colors duration-300">
//           <p className="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-200 transition-colors duration-300">
//             {t("positive.stories.highlight")}
//           </p>
//         </Card>
//       </div>
//     </div>
//   );
// }