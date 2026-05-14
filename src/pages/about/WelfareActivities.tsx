// import { useState } from "react";
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// import { Card, CardContent } from "@/components/ui/card";
// import { useLanguage } from "@/contexts/LanguageContext";

// // ✅ Import images (renamed sequentially)
// import img11 from "@/assets/11.jpg";
// import img12 from "@/assets/12.jpg";
// import img13 from "@/assets/13.jpg";
// import img14 from "@/assets/14.jpg";
// import img15 from "@/assets/15.jpg";
// import img16 from "@/assets/16.jpg";
// import img17 from "@/assets/17.jpg";
// import img18 from "@/assets/18.jpg";
// import img19 from "@/assets/19.jpg";
// import img20 from "@/assets/20.jpg";
// import placeholder from "@/assets/21.png";

// export default function WelfareActivities() {
//   const { t } = useLanguage();
//   const [selectedItem, setSelectedItem] = useState<{ title: string; img: string } | null>(null);

//   // ✅ Use new image variables
//   const welfareItems = [
//     { title: t("welfare.item1.title"), img: img11 },
//     { title: t("welfare.item2.title"), img: img12 },
//     { title: t("welfare.item3.title"), img: img13 },
//     { title: t("welfare.item4.title"), img: img14 },
//     { title: t("welfare.item5.title"), img: img15 },
//     { title: t("welfare.item6.title"), img: img16 },
//     { title: t("welfare.item7.title"), img: img17 },
//     // { title: t("welfare.item8.title"), img: img18 },
//     // { title: t("welfare.item9.title"), img: img19 },
//     { title: t("welfare.item10.title"), img: img20 },
//   ];

//   return (
//     <section className="max-w-6xl mx-auto p-6">
//       <h2 className="text-3xl font-bold mb-4 dark:text-white">{t("welfare.title")}</h2>

//       <Accordion type="single" collapsible className="space-y-3">
//         <AccordionItem value="welfare" className="border rounded-lg dark:border-gray-700">
//           <AccordionTrigger className="text-xl font-semibold px-4 dark:text-white hover:dark:bg-gray-800">
//             {t("welfare.accordionTitle")}
//           </AccordionTrigger>

//           <AccordionContent className="px-4 pb-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
//               {welfareItems.map((item) => (
//                 <Card
//                   key={item.title}
//                   className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow dark:bg-gray-800 dark:border-gray-700"
//                 >
//                   <div className="h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
//                     <img
//                       src={item.img}
//                       alt={item.title}
//                       className="w-full h-full object-cover"
//                       onError={(e) => {
//                         (e.currentTarget as HTMLImageElement).src = placeholder;
//                       }}
//                       loading="lazy"
//                     />
//                   </div>

//                   <CardContent className="pt-4">
//                     <h3 className="text-lg font-medium dark:text-white">{item.title}</h3>
//                     <div className="mt-3">
//                       <button
//                         onClick={() => setSelectedItem(item)}
//                         className="px-3 py-1 rounded-md border transition hover:bg-black hover:text-white dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
//                       >
//                         {t("welfare.viewButton")}
//                       </button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>

//       {/* ✅ Full-View Modal */}
//       {selectedItem && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
//           onClick={() => setSelectedItem(null)} // close when clicking outside
//         >
//           <div
//             className="relative max-w-4xl w-full p-4"
//             onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
//           >
//             <button
//               onClick={() => setSelectedItem(null)}
//               className="absolute top-3 right-3 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-1 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-700"
//             >
//               ✕
//             </button>
//             <img
//               src={selectedItem.img}
//               alt={selectedItem.title}
//               className="w-full h-auto rounded-lg shadow-lg object-contain"
//             />
//             <h3 className="text-xl font-semibold text-center mt-4 dark:text-white">
//               {selectedItem.title}
//             </h3>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
