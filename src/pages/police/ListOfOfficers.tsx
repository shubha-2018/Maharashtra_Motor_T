import React, { useState } from "react";
import { ArrowLeft, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GradationList({ goBack }) {
  const { t } = useLanguage(); // get translation function

  const employees = [
    { sr: 1, name: t("emp_1_name"), designation: t("emp_1_designation"), email: "adg.pcitmt@mahapolice.gov.in", contact: "020-25656908" },
    { sr: 2, name: t("emp_2_name"), designation: t("emp_2_designation"), email: "igpcit.pna@mahapolice.gov.in", contact: "020-25658422" },
    // ... continue for all employees
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(employees.length / itemsPerPage);
  const currentItems = employees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const exportToCSV = () => {
    const header = [t("sr_no"), t("full_name"), t("designation"), t("email"), t("contact")];
    const rows = employees.map(emp => [
      emp.sr,
      emp.name,
      emp.designation,
      emp.email || "-",
      emp.contact || "-"
    ]);
    const csvContent = "data:text/csv;charset=utf-8," 
      + [header, ...rows].map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", t("csv_file_name"));
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 text-gray-900 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-40 w-96 h-96 bg-teal-400/20 blur-3xl rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-40 w-[32rem] h-[32rem] bg-blue-400/20 blur-3xl rounded-full animate-pulse-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={goBack}
            className="flex items-center text-gray-900 hover:bg-gray-200 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-gray-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> {t("back_to_home")}
          </button>

          <button
            onClick={exportToCSV}
            className="flex items-center text-gray-900 hover:bg-gray-200 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-gray-300"
          >
            <Download className="w-4 h-4 mr-2" /> {t("export_csv")}
          </button>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-teal-400 via-blue-400 to-violet-400 bg-clip-text text-transparent drop-shadow-lg">
          {t("list_of_officers")}
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-gray-600 text-center mb-12">
          {t("seniority_ranking_description")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map(emp => (
            <div key={emp.sr} className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-teal-400/20 transition-all duration-500 p-6 space-y-2">
              <h3 className="text-xl font-bold">{emp.sr}. {emp.name}</h3>
              <p className="text-teal-600 font-semibold">{emp.designation}</p>
              <p className="text-gray-800">{t("email1")}: {emp.email || "-"}</p>
              <p className="text-gray-800">{t("contact")}: {emp.contact || "-"}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-3 mt-8">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded hover:bg-gray-200 disabled:opacity-50"
          >
            {t("previous")}
          </button>
          <span className="px-4 font-medium">
            {t("page")} {currentPage} {t("of")} {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded hover:bg-gray-200 disabled:opacity-50"
          >
            {t("next")}
          </button>
        </div>
      </div>
    </div>
  );
}
