import React from "react";
import { FileText, Eye, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Faculty() {
  const { language } = useLanguage(); // get selected language from header

  // Translation object inside code (no JSON file needed)
  const t = {
    en: {
      title: "Faculty",
      srNo: "Sr. No.",
      docTitle: "Title",
      date: "Date",
      view: "View",
      download: "Download",
      noRecords: "No records available",
    },
    mr: {
      title: "शिक्षकवर्ग",
      srNo: "अनुक्रमांक",
      docTitle: "शीर्षक",
      date: "तारीख",
      view: "पहा",
      download: "डाउनलोड",
      noRecords: "नोंदी उपलब्ध नाहीत",
    },
  };

  // Language switch text selector
  const tr = (key: keyof typeof t.en) => t[language][key];

  const documents: any[] = []; // future API data

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
          <div className="flex items-center gap-3 text-white">
            <FileText className="w-8 h-8" />
            <h1 className="text-3xl font-bold">
              {tr("title")}
            </h1>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-100 border-b-2 border-blue-200">
                <th className="px-6 py-4 text-left text-blue-900 font-semibold">{tr("srNo")}</th>
                <th className="px-6 py-4 text-left text-blue-900 font-semibold">{tr("docTitle")}</th>
                <th className="px-6 py-4 text-left text-blue-900 font-semibold">{tr("date")}</th>
                <th className="px-6 py-4 text-left text-blue-900 font-semibold">{tr("view")}</th>
                <th className="px-6 py-4 text-left text-blue-900 font-semibold">{tr("download")}</th>
              </tr>
            </thead>

            <tbody>
              {documents.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center text-gray-500 py-6 italic">
                    {tr("noRecords")}
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
