import React, { useState } from "react";
import { ArrowLeft, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GradationList() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const goBack = () => navigate("/");

  // 🧑‍💼 Officers Data
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
      designation: t("emp_24_designation"),
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
    // ... add more officers as needed
  ];

  // 📄 Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(employees.length / itemsPerPage);
  const currentItems = employees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // 📤 CSV Export
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
      
      {/* 🔙 Back & Export Buttons */}
      <div className="flex justify-between items-center mb-8">
        <Button
          variant="ghost"
          onClick={goBack}
          className="flex items-center text-gray-900 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-blue-200 dark:text-gray-100 dark:hover:bg-blue-950/30 dark:hover:text-blue-300 dark:hover:shadow-blue-900/30"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> {t("back_to_home")}
        </Button>

        <Button
          variant="ghost"
          onClick={exportToCSV}
          className="flex items-center text-gray-900 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-blue-200 dark:text-gray-100 dark:hover:bg-blue-950/30 dark:hover:text-blue-300 dark:hover:shadow-blue-900/30"
        >
          <Download className="w-4 h-4 mr-2" /> {t("export_csv")}
        </Button>
      </div>

      {/* 🏷️ Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center text-blue-700 dark:text-blue-400 mb-4">
        {t("list_of_officers")}
      </h1>
      <h2 className="text-lg md:text-xl font-medium text-gray-600 text-center mb-10 dark:text-gray-300">
        {t("seniority_ranking_description")}
      </h2>

      {/* 📋 Officers Table (same style as Gazette) */}
      <Card className="bg-white/40 border border-gray-300 backdrop-blur-md rounded-2xl shadow-xl dark:bg-gray-800/30 dark:border-gray-700">
        <CardContent className="p-6 overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-blue-100 dark:bg-blue-950/40 text-blue-900 dark:text-blue-300 font-semibold text-center">
                <th className="border border-gray-300 px-3 py-2">{t("sr_no")}</th>
                <th className="border border-gray-300 px-3 py-2">{t("full_name")}</th>
                <th className="border border-gray-300 px-3 py-2">{t("designation")}</th>
                <th className="border border-gray-300 px-3 py-2">{t("email1")}</th>
                <th className="border border-gray-300 px-3 py-2">{t("contact")}</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((emp, index) => (
                <tr
                  key={emp.sr}
                  className="hover:bg-blue-50 dark:hover:bg-blue-900/20 text-center transition-all"
                >
                  <td className="border border-gray-300 px-3 py-2">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-left font-medium">
                    {emp.name}
                  </td>
                  <td className="border border-gray-300 px-3 py-2">{emp.designation}</td>
                  <td className="border border-gray-300 px-3 py-2">{emp.email || "-"}</td>
                  <td className="border border-gray-300 px-3 py-2">{emp.contact || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* 📄 Pagination Controls */}
          <div className="flex justify-center items-center gap-3 mt-8">
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white disabled:opacity-50 transition-colors duration-300 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
            >
              {t("previous")}
            </Button>

            <span className="px-4 font-medium text-blue-700 dark:text-blue-300">
              {t("page")} {currentPage} {t("of")} {totalPages}
            </span>

            <Button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white disabled:opacity-50 transition-colors duration-300 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
            >
              {t("next")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
