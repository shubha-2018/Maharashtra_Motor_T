// import React, { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { useLanguage } from "@/contexts/LanguageContext";
// import { Eye, Download } from "lucide-react";

// export default function OtherFlash() {
//   const { language } = useLanguage();
//   const [expandedRow, setExpandedRow] = useState<number | null>(null);

//   const labels = {
//     en: {
//       title: "Government Resolutions - Police Communication Department",
//       srno: "Sr. No.",
//       date: "Date",
//       grNumber: "GR Number",
//       subject: "Subject",
//       view: "View",
//       download: "Download",
//     },
//     mr: {
//       title: "शासन निर्णय - पोलीस दळणवळण विभाग",
//       srno: "अ. क्र.",
//       date: "दिनांक",
//       grNumber: "शासन निर्णय क्रमांक",
//       subject: "विषय",
//       view: "पाहा",
//       download: "डाउनलोड",
//     },
//   };

//   const L = language === "mr" ? labels.mr : labels.en;

//   // PDF inside public/pdfs folder
//   const documentData = [
//     {
//       id: 1,
//       date: "28/03/2022",
//       grNumber: "PWS-0519-2022",
//       subject:
//         language === "mr"
//           ? "पोलीस बिनतारी संदेश विभागाची पुनर्रचना"
//           : "Reorganization of Police Wireless Communication Department",
//       department: language === "mr" ? "गृह विभाग" : "Home Department",

//       // FINAL UPDATED FILE NAME
//       pdfUrl: "/pdfs/Akruti 202203281839118829 (1).pdf",
//     },
//   ];

//   const handleDownload = (url: string, filename: string) => {
//     fetch(url)
//       .then((response) => response.blob())
//       .then((blob) => {
//         const blobUrl = window.URL.createObjectURL(blob);
//         const link = document.createElement("a");
//         link.href = blobUrl;
//         link.download = filename;
//         link.click();
//         URL.revokeObjectURL(blobUrl);
//       })
//       .catch(() => alert("PDF not found. Please check /public/pdfs/ folder"));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-8">
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-extrabold text-blue-700 dark:text-blue-400">
//           {L.title}
//         </h1>
//       </div>

//       <Card>
//         <CardContent className="p-0">
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-blue-600 text-white">
//                   <th className="px-4 py-3">{L.srno}</th>
//                   <th className="px-4 py-3">{L.date}</th>
//                   <th className="px-4 py-3">{L.grNumber}</th>
//                   <th className="px-4 py-3">{L.subject}</th>
//                   <th className="px-4 py-3">Actions</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {documentData.map((doc, index) => (
//                   <React.Fragment key={doc.id}>
//                     <tr className="hover:bg-gray-200 dark:hover:bg-gray-700">
//                       <td className="px-4 py-3 text-center">{index + 1}</td>
//                       <td className="px-4 py-3 text-center">{doc.date}</td>
//                       <td className="px-4 py-3 text-center">{doc.grNumber}</td>
//                       <td className="px-4 py-3">{doc.subject}</td>

//                       <td className="px-4 py-3">
//                         <div className="flex gap-2">

//                           {/* FIXED VIEW BUTTON */}
//                           <button
//                             onClick={() =>
//                               fetch(doc.pdfUrl)
//                                 .then((res) => res.blob())
//                                 .then((blob) => {
//                                   const blobUrl = URL.createObjectURL(blob);
//                                   window.open(blobUrl, "_blank");
//                                 })
//                                 .catch(() =>
//                                   alert(
//                                     "PDF failed to load. Check /public/pdfs/ folder"
//                                   )
//                                 )
//                             }
//                             className="px-3 py-1 bg-blue-600 text-white rounded-lg flex items-center gap-1"
//                           >
//                             <Eye className="w-4 h-4" /> {L.view}
//                           </button>

//                           {/* FIXED DOWNLOAD BUTTON */}
//                           <button
//                             onClick={() =>
//                               handleDownload(doc.pdfUrl, `${doc.grNumber}.pdf`)
//                             }
//                             className="px-3 py-1 bg-green-600 text-white rounded-lg flex items-center gap-1"
//                           >
//                             <Download className="w-4 h-4" /> {L.download}
//                           </button>

//                         </div>
//                       </td>
//                     </tr>
//                   </React.Fragment>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Eye, Download } from "lucide-react";

export default function OtherFlash() {
  const { language } = useLanguage();
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const labels = {
    en: {
      title: "Police Communication & Information Technology Department  ",
      
      srno: "Sr. No.",
      date: "Date",
      grNumber: "GR Number",
      subject: "Subject",
      view: "View",
      download: "Download",
      none: "No data available currently.",
      mainSubject:
        "Regarding reorganization of Police Wireless Communication Department",
      department: "Home Department, Maharashtra Government",
    },
    mr: {
      title: "पोलीस दळणवळण व माहिती तंत्रज्ञान विभाग",
      srno: "अ. क्र.",
      date: "दिनांक",
      grNumber: "शासन निर्णय क्रमांक",
      subject: "विषय",
      view: "पाहा",
      download: "डाउनलोड",
      none: "सध्या कोणतेही डेटा उपलब्ध नाही.",
      mainSubject:
        "पोलीस बिनतारी संदेश विभागांतर्गत विविध संवर्गाचे एकत्रीकरण करून विभागाची पुनर्रचना",
      department: "गृह विभाग, महाराष्ट्र शासन",
    },
  };

  const L = language === "mr" ? labels.mr : labels.en;

  // Correct PDF file name
  const documentData = [
    {
      id: 1,
      date: "28/03/2022",
      grNumber: "PWS-0519-2022",
      subject: L.mainSubject,
      department: L.department,
      pdfUrl: "/pdfs/Akruti 202203281839118829 (1).pdf", // UPDATED PATH
    },
  ];

  const toggleRow = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  // Download function
  const handleDownload = (url: string, filename: string) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = filename;
        link.click();
        window.URL.revokeObjectURL(blobUrl);
      })
      .catch(() => alert("PDF not found. Ensure file exists in /public/pdfs/"));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-700 dark:text-blue-400">{L.title}</h1>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-4 py-3">{L.srno}</th>
                  <th className="px-4 py-3">{L.date}</th>
                  <th className="px-4 py-3">{L.grNumber}</th>
                  <th className="px-4 py-3">{L.subject}</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {documentData.map((doc, index) => (
                  <React.Fragment key={doc.id}>
                    <tr className="hover:bg-gray-200 dark:hover:bg-gray-700">
                      <td className="px-4 py-3 text-center">{index + 1}</td>
                      <td className="px-4 py-3 text-center">{doc.date}</td>
                      <td className="px-4 py-3 text-center">{doc.grNumber}</td>
                      <td className="px-4 py-3">{doc.subject}</td>

                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          {/* View PDF */}
                          <button
                            onClick={() =>
                              fetch(doc.pdfUrl)
                                .then((res) => res.blob())
                                .then((blob) => {
                                  const blobUrl = URL.createObjectURL(blob);
                                  window.open(blobUrl, "_blank");
                                })
                                .catch(() =>
                                  alert(
                                    "PDF failed to load. Check file path in /public/pdfs/"
                                  )
                                )
                            }
                            className="px-3 py-1 bg-blue-600 text-white rounded-lg flex items-center gap-1"
                          >
                            <Eye className="w-4 h-4" /> {L.view}
                          </button>

                          {/* Download PDF */}
                          <button
                            onClick={() =>
                              handleDownload(doc.pdfUrl, `${doc.grNumber}.pdf`)
                            }
                            className="px-3 py-1 bg-green-600 text-white rounded-lg flex items-center gap-1"
                          >
                            <Download className="w-4 h-4" /> {L.download}
                          </button>
                        </div>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
