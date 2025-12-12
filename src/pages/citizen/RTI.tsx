// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft, FileText, Eye, Download } from "lucide-react";
// import { useNavigate } from "react-router";
// import { useLanguage } from "@/contexts/LanguageContext";

// export default function RTIDocumentsTable() {
//   const navigate = useNavigate();
//   const { language } = useLanguage();
//   const goBack = () => navigate("/");

//   const labels = {
//     en: {
//       documentsTitle: "RTI Related Documents",
//       back: "Back to Home",
//       srno: "Sr. No.",
//       details: "Document Title",
//       view: "View",
//       download: "Download",
//       fileSize: "File Size",
//     },
//     mr: {
//       documentsTitle: "माहिती अधिकार संबंधित",
//       back: "मुख्यपृष्ठावर जा",
//       srno: "अ. क्र.",
//       details: "शीर्षक",
//       view: "पाहा",
//       download: "डाउनलोड",
//       fileSize: "फाईल आकार",
//     },
//   };

//   const L = language === "mr" ? labels.mr : labels.en;

//   // 👉 Updated with your uploaded PDF
//   const rtiDocuments = [
//     {
//       srno: 1,
//       title_en: "RTI First Appeal Form",
//       title_mr: "माहिती अधिकार प्रथम अपील अर्ज नमुना",
//       link: "/pdfs/rti_first_apeal_arj_namuna_-2.pdf", // <-- Correct local path
//       fileSize: "200 KB",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24">

//       <Button
//         variant="ghost"
//         onClick={goBack}
//         className="flex items-center text-gray-900 hover:bg-blue-50 hover:text-blue-700 rounded-xl px-4 py-2 shadow-md transition-all dark:text-gray-100 dark:hover:bg-blue-950/30 dark:hover:text-blue-300"
//       >
//         <ArrowLeft className="w-4 h-4 mr-2" /> {L.back}
//       </Button>

//       <div className="max-w-5xl mx-auto mt-12">
//         <Card className="bg-white/40 border border-gray-300 backdrop-blur-md rounded-2xl shadow-xl dark:bg-gray-800/30 dark:border-gray-700">
//           <CardContent className="p-6 overflow-x-auto">
//             <h3 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400 flex items-center gap-2">
//               <FileText className="w-6 h-6 text-blue-600 dark:text-blue-500" />
//               {L.documentsTitle}
//             </h3>

//             <table className="w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
//               <thead>
//                 <tr className="bg-blue-100 dark:bg-blue-950/40 text-blue-900 dark:text-blue-300 text-center">
//                   <th className="border border-gray-300 px-3 py-2">{L.srno}</th>
//                   <th className="border border-gray-300 px-3 py-2">{L.details}</th>
//                   <th className="border border-gray-300 px-3 py-2">{L.view}</th>
//                   <th className="border border-gray-300 px-3 py-2">{L.download}</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {rtiDocuments.map((doc, index) => (
//                   <tr
//                     key={doc.srno}
//                     className="hover:bg-blue-50 dark:hover:bg-blue-900/20 text-center transition-all"
//                   >
//                     <td className="border border-gray-300 px-3 py-2">{index + 1}</td>

//                     <td className="border border-gray-300 px-3 py-2 text-left">
//                       {language === "mr" ? doc.title_mr : doc.title_en}
//                     </td>

//                     <td className="border border-gray-300 px-3 py-2">
//                       <a
//                         href={doc.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
//                       >
//                         <Eye className="w-4 h-4" /> {L.view}
//                       </a>
//                     </td>

//                     <td className="border border-gray-300 px-3 py-2">
//                       <a
//                         href={doc.link}
//                         download
//                         className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
//                       >
//                         <Download className="w-4 h-4" /> {L.download} ({doc.fileSize})
//                       </a>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }


"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Eye, Download } from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "@/contexts/LanguageContext";

export default function RTIDocumentsTable() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const goBack = () => navigate("/");

  const labels = {
    en: {
      documentsTitle: "RTI Related Documents",
      back: "Back to Home",
      srno: "Sr. No.",
      details: "Document Title",
      view: "View",
      download: "Download",
      fileSize: "File Size",
    },
    mr: {
      documentsTitle: "माहिती अधिकार संबंधित",
      back: "मुख्यपृष्ठावर जा",
      srno: "अ. क्र.",
      details: "शीर्षक",
      view: "पाहा",
      download: "डाउनलोड",
      fileSize: "फाईल आकार",
    },
  };

  const L = language === "mr" ? labels.mr : labels.en;

  // ⭐ Your Actual Uploaded PDF (LOCAL)
  const rtiDocuments = [
    {
      srno: 1,
      title_en: "RTI First Appeal Form",
      title_mr: "माहिती अधिकार प्रथम अपील अर्ज नमुना",
      link: "/pdfs/rti_first_apeal_arj_namuna_-2.pdf",
      fileSize: "200 KB",
    },
  ];

  // ⭐ FIXED View Function (Solves “Failed to load PDF”)
  const handleView = (pdfUrl: string) => {
    fetch(pdfUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const fileURL = URL.createObjectURL(blob);
        window.open(fileURL, "_blank");
      })
      .catch(() =>
        alert("PDF failed to open. Please check /public/pdfs/ folder.")
      );
  };

  // ⭐ FIXED Download Function
  const handleDownload = (pdfUrl: string, fileName: string) => {
    fetch(pdfUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = fileName;
        a.click();
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24">

      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={goBack}
        className="flex items-center gap-2 text-gray-900 hover:bg-blue-50 hover:text-blue-700 dark:text-gray-100 dark:hover:bg-blue-950/30 dark:hover:text-blue-300 px-4 py-2 rounded-xl shadow-md"
      >
        <ArrowLeft className="w-4 h-4" /> {L.back}
      </Button>

      {/* RTI Table */}
      <div className="max-w-5xl mx-auto mt-12">
        <Card className="bg-white/40 border border-gray-300 backdrop-blur-md rounded-2xl shadow-xl dark:bg-gray-800/30 dark:border-gray-700">
          <CardContent className="p-6 overflow-x-auto">
            <h3 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              {L.documentsTitle}
            </h3>

            <table className="w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-blue-100 dark:bg-blue-950/40 text-blue-900 dark:text-blue-300 text-center">
                  <th className="border border-gray-300 px-3 py-2">{L.srno}</th>
                  <th className="border border-gray-300 px-3 py-2">{L.details}</th>
                  <th className="border border-gray-300 px-3 py-2">{L.view}</th>
                  <th className="border border-gray-300 px-3 py-2">{L.download}</th>
                </tr>
              </thead>

              <tbody>
                {rtiDocuments.map((doc, index) => (
                  <tr
                    key={doc.srno}
                    className="hover:bg-blue-50 dark:hover:bg-blue-900/20 text-center transition-all"
                  >
                    <td className="border px-3 py-2">{index + 1}</td>

                    <td className="border px-3 py-2 text-left">
                      {language === "mr" ? doc.title_mr : doc.title_en}
                    </td>

                    {/* View Button */}
                    <td className="border px-3 py-2">
                      <button
                        onClick={() => handleView(doc.link)}
                        className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <Eye className="w-4 h-4" /> {L.view}
                      </button>
                    </td>

                    {/* Download Button */}
                    <td className="border px-3 py-2">
                      <button
                        onClick={() =>
                          handleDownload(
                            doc.link,
                            `${language === "mr" ? doc.title_mr : doc.title_en}.pdf`
                          )
                        }
                        className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <Download className="w-4 h-4" /> {L.download} ({doc.fileSize})
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
