import React, { useState } from "react";
import { ArrowLeft, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router";

export default function GradationList({ goBack }) {
  const { t } = useLanguage(); // get translation function

  const employees = [
    {
      sr: 1,
      name: t("emp_1_name"),
      designation: t("emp_1_designation"),
      email: "adg.pcitmt@mahapolice.gov.in",
      contact: "020-25656908",
    },
    {
      sr: 2,
      name: t("emp_2_name"),
      designation: t("emp_2_designation"),
      email: "igpcit.pna@mahapolice.gov.in",
      contact: "020-25658422",
    },
     {
      sr: 3,
      name: t("emp_21_name"),
      designation: t("emp_22_designation"),
      email: "spcit.pna@mahapolice.gov.in",
      contact: "020-25652623",
    },
    // ... continue for all employees
  ];

    const navigate = useNavigate();
    const onBack = () => navigate("/");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(employees.length / itemsPerPage);
  const currentItems = employees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const exportToCSV = () => {
    const header = [
      t("sr_no"),
      t("full_name"),
      t("designation"),
      t("email"),
      t("contact"),
    ];
    const rows = employees.map((emp) => [
      emp.sr,
      emp.name,
      emp.designation,
      emp.email || "-",
      emp.contact || "-",
    ]);
    const csvContent =
      "data:text/csv;charset=utf-8," +
      [header, ...rows].map((e) => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", t("csv_file_name"));
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-40 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full animate-pulse-slow dark:bg-blue-700/20"></div>
        <div className="absolute bottom-32 right-40 w-[32rem] h-[32rem] bg-blue-800/20 blur-3xl rounded-full animate-pulse-slow dark:bg-blue-900/20"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={onBack}
            className="flex items-center text-gray-900 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-blue-200 dark:text-gray-100 dark:hover:bg-blue-950/30 dark:hover:text-blue-300 dark:hover:shadow-blue-900/30"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> {t("back_to_home")}
          </button>

          <button
            onClick={exportToCSV}
            className="flex items-center text-gray-900 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-blue-200 dark:text-gray-100 dark:hover:bg-blue-950/30 dark:hover:text-blue-300 dark:hover:shadow-blue-900/30"
          >
            <Download className="w-4 h-4 mr-2" /> {t("export_csv")}
          </button>
        </div>

        <h1 className="text-5xl p-3 md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent drop-shadow-lg dark:from-blue-500 dark:via-blue-600 dark:to-blue-700">
          {t("list_of_officers")}
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-gray-600 text-center mb-12 dark:text-gray-300">
          {t("seniority_ranking_description")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((emp) => (
            <div
              key={emp.sr}
              className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-blue-400/20 transition-all duration-500 p-6 space-y-2 dark:bg-gray-800/30 dark:border-gray-700 dark:hover:shadow-blue-600/20"
            >
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300">
                {emp.sr}. {emp.name}
              </h3>
              <p className="text-blue-700 font-semibold dark:text-blue-400">
                {emp.designation}
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                {t("email1")}: {emp.email || "-"}
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                {t("contact")}: {emp.contact || "-"}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-3 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white disabled:opacity-50 transition-colors duration-300 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
          >
            {t("previous")}
          </button>
          <span className="px-4 font-medium text-blue-700 dark:text-blue-300">
            {t("page")} {currentPage} {t("of")} {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white disabled:opacity-50 transition-colors duration-300 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
          >
            {t("next")}
          </button>
        </div>
      </div>
    </div>
  );
}