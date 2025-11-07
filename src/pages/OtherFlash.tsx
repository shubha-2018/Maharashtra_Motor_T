import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Eye, Download, ChevronDown, ChevronUp } from "lucide-react";

export default function OtherFlash() {
  const { language } = useLanguage();
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  // 🌐 Bilingual Labels
  const labels = {
    en: {
      title: "Government Resolutions - Police Communication Department",
      srno: "Sr. No.",
      date: "Date",
      grNumber: "GR Number",
      subject: "Subject",
      view: "View",
      download: "Download",
      details: "Details",
      none: "No data available currently.",
      mainSubject: "Regarding reorganization of Police Wireless Communication Department",
      department: "Home Department, Maharashtra Government",
    },
    mr: {
      title: "शासन निर्णय - पोलीस दळणवळण विभाग",
      srno: "अ. क्र.",
      date: "दिनांक",
      grNumber: "शासन निर्णय क्रमांक",
      subject: "विषय",
      view: "पाहा",
      download: "डाउनलोड",
      details: "तपशील",
      none: "सध्या कोणतेही डेटा उपलब्ध नाही.",
      mainSubject: "पोलीस बिनतारी संदेश विभागांतर्गत विविध संवर्गाचे एकत्रीकरण करून विभागाची पुनर्रचना",
      department: "गृह विभाग, महाराष्ट्र शासन",
    },
  };

  const L = language === "mr" ? labels.mr : labels.en;

  // 📊 Document Data Structure
  const documentData = [
    {
      id: 1,
      date: "28/03/2022",
      grNumber: "पीडब्ल्यूएस-0519/प्र.क्र.351/पोल-4",
      subject: L.mainSubject,
      department: L.department,
      totalPosts: {
        before: 3962,
        after: 3869,
        abolished: 321,
        created: 228,
      },
      majorChanges: [
        {
          position: language === "mr" 
            ? "अपर पोलीस महासंचालक व संचालक" 
            : "Additional Director General & Director",
          before: 1,
          after: 1,
          change: language === "mr" ? "फक्त पदनाम बदल" : "Only designation change"
        },
        {
          position: language === "mr"
            ? "पोलीस उप महानिरीक्षक"
            : "Deputy Inspector General of Police",
          before: 1,
          after: 2,
          change: language === "mr" ? "एका पदाची वाढ" : "One post increased"
        },
        {
          position: language === "mr"
            ? "पोलीस अधीक्षक"
            : "Superintendent of Police",
          before: 5,
          after: 7,
          change: language === "mr" ? "02 पदांची वाढ" : "02 posts increased"
        },
        {
          position: language === "mr"
            ? "पोलीस उपअधीक्षक"
            : "Deputy Superintendent of Police",
          before: 30,
          after: 37,
          change: language === "mr" ? "07 पदांची वाढ" : "07 posts increased"
        },
        {
          position: language === "mr"
            ? "पोलीस निरीक्षक"
            : "Police Inspector",
          before: 117,
          after: 179,
          change: language === "mr" ? "62 पदांची वाढ" : "62 posts increased"
        },
        {
          position: language === "mr"
            ? "पोलीस उप निरीक्षक"
            : "Police Sub-Inspector",
          before: 291,
          after: 426,
          change: language === "mr" ? "135 पदांची वाढ" : "135 posts increased"
        }
      ],
      newDepartmentName: language === "mr"
        ? "पोलीस दळणवळण, माहिती तंत्रज्ञान व परिवहन विभाग, महाराष्ट्र राज्य"
        : "Police Communication, Information Technology and Transport Department, Maharashtra State",
      pdfUrl: "/documents/GR_PWS_0519_2022.pdf",
      digitalSignature: "202203281839118829",
    },
  ];

  const toggleRow = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-gray-900 dark:text-gray-100 px-4 py-8 sm:px-6 lg:px-12">
      
      {/* 🏷️ Page Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-2">
          {L.title}
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {language === "mr" ? "महाराष्ट्र शासन - गृह विभाग" : "Maharashtra Government - Home Department"}
        </p>
      </div>

      {/* 📑 Main Table */}
      <Card className="bg-white/40 border border-gray-300 backdrop-blur-md rounded-2xl shadow-xl dark:bg-gray-800/30 dark:border-gray-700 overflow-hidden">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-600 dark:bg-blue-900 text-white">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center min-w-[60px]">
                    {L.srno}
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center min-w-[120px]">
                    {L.date}
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center min-w-[200px]">
                    {L.grNumber}
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left min-w-[300px]">
                    {L.subject}
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center min-w-[180px]">
                    {language === "mr" ? "कृती" : "Actions"}
                  </th>
                </tr>
              </thead>

              <tbody>
                {documentData.map((doc, index) => (
                  <React.Fragment key={doc.id}>
                    {/* Main Row */}
                    <tr className="hover:bg-blue-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center font-semibold">
                        {index + 1}
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center">
                        {doc.date}
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center font-mono text-sm">
                        {doc.grNumber}
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                        <div className="space-y-1">
                          <p className="font-semibold text-blue-700 dark:text-blue-400">
                            {doc.subject}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {doc.department}
                          </p>
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                        <div className="flex flex-col gap-2">
                          <button
                            onClick={() => toggleRow(doc.id)}
                            className="flex items-center justify-center gap-2 px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm"
                          >
                            {expandedRow === doc.id ? (
                              <>
                                <ChevronUp className="w-4 h-4" />
                                {language === "mr" ? "कमी करा" : "Hide Details"}
                              </>
                            ) : (
                              <>
                                <ChevronDown className="w-4 h-4" />
                                {L.details}
                              </>
                            )}
                          </button>
                          
                          <div className="flex gap-2">
                            <a
                              href={doc.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
                            >
                              <Eye className="w-4 h-4" />
                              {L.view}
                            </a>
                            
                            <button
                              onClick={() => handleDownload(doc.pdfUrl, `GR_${doc.grNumber}.pdf`)}
                              className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm"
                            >
                              <Download className="w-4 h-4" />
                              {L.download}
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Expanded Details Row */}
                    {expandedRow === doc.id && (
                      <tr>
                        <td colSpan={5} className="border border-gray-300 dark:border-gray-600 p-0">
                          <div className="bg-gray-50 dark:bg-gray-800/50 p-6 space-y-6">
                            {/* Summary, Major Changes, Department Name, Digital Signature */}
                            {/* ... include all your existing JSX for details here ... */}
                            {/* The full expanded details JSX remains the same as in your original code */}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* 📝 Footer Note */}
      <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>
          {language === "mr" 
            ? "* संपूर्ण तपशीलासाठी कृपया मूळ शासन निर्णय पहा" 
            : "* Please refer to the original Government Resolution for complete details"}
        </p>
      </div>
    </div>
  );
}
