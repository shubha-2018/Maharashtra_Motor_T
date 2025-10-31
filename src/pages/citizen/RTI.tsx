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

  // 🌐 Labels
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
      documentsTitle: "माहिती अधिकार संबंधित ",
      back: "मुख्यपृष्ठावर जा",
      srno: "अ. क्र.",
      details: " शीर्षक",
      view: "पहा",
      download: "डाउनलोड",
      fileSize: "फाईल आकार",
    },
  };

  const L = language === "mr" ? labels.mr : labels.en;

  // 📂 RTI Documents Data
  const rtiDocuments = [
    {
      srno: 1,
      title_en: "RTI Application Form",
      title_mr: "माहिती अधिकार अर्ज फॉर्म",
      link: "https://example.com/rti-application-form.pdf",
      fileSize: "250 KB",
    },
    {
      srno: 2,
      title_en: "RTI Appeal Form",
      title_mr: "माहिती अधिकार अपील फॉर्म",
      link: "https://example.com/rti-appeal-form.pdf",
      fileSize: "200 KB",
    },
    {
      srno: 3,
      title_en: "RTI Guidelines Document",
      title_mr: "माहिती अधिकार मार्गदर्शक सूचना",
      link: "https://example.com/rti-guidelines.pdf",
      fileSize: "300 KB",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24">
      
      {/* 🔙 Back Button */}
      <Button
        variant="ghost"
        onClick={goBack}
        className="flex items-center text-gray-900 hover:bg-blue-50 hover:text-blue-700 rounded-xl px-4 py-2 shadow-md hover:shadow-blue-200 transition-all duration-300 dark:text-gray-100 dark:hover:bg-blue-950/30 dark:hover:text-blue-300 dark:hover:shadow-blue-900/30"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> {L.back}
      </Button>

      {/* 📂 RTI Documents Table */}
      <div className="max-w-5xl mx-auto mt-12">
        <Card className="bg-white/40 border border-gray-300 backdrop-blur-md rounded-2xl shadow-xl dark:bg-gray-800/30 dark:border-gray-700">
          <CardContent className="p-6 overflow-x-auto">
            <h3 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400 flex items-center gap-2">
              <FileText className="w-6 h-6 text-blue-600 dark:text-blue-500" />
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
                    <td className="border border-gray-300 px-3 py-2">{index + 1}</td>
                    <td className="border border-gray-300 px-3 py-2 text-left">
                      {language === "mr" ? doc.title_mr : doc.title_en}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      <a
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                      >
                        <Eye className="w-4 h-4" /> {L.view}
                      </a>
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      <a
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                      >
                        <Download className="w-4 h-4" /> {L.download} ({doc.fileSize})
                      </a>
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
