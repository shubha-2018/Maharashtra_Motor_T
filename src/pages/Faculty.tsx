// src/components/PlanningDepartment.tsx

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PlanningDepartment() {
  const { t } = useLanguage();

  const cardClass =
    "flex flex-col md:flex-row bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 gap-6 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700";
  const imgClass = "w-40 h-40 object-cover rounded-xl border-4 border-gray-200 dark:border-gray-600";
  const nameClass = "text-2xl font-bold text-blue-900 dark:text-blue-200";
  const titleClass = "text-lg text-gray-700 dark:text-gray-300 mt-1 font-medium";
  const textClass = "text-gray-600 dark:text-gray-400 mt-2 text-sm";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 dark:text-blue-300 mb-16 leading-tight">
          {t("planning.faculties.title")}
        </h1>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Faculty 1 */}
          <div className={cardClass}>
            <img src="/images/person1.png" alt={t("planning.faculty.sanjay.name")} className={imgClass} />
            <div className="flex flex-col justify-center">
              <h2 className={nameClass}>{t("planning.faculty.sanjay.name")}</h2>
              <p className={titleClass}>{t("planning.faculty.sanjay.designation")}</p>
              <p className={textClass}>sgs.civil@coeptech.ac.in</p>
              <p className={textClass}>{t("common.phone")}: 020-2550-7223</p>
            </div>
          </div>

          {/* Faculty 2 */}
          <div className={cardClass}>
            <img src="/images/person2.png" alt={t("planning.faculty.arati.name")} className={imgClass} />
            <div className="flex flex-col justify-center">
              <h2 className={nameClass}>{t("planning.faculty.arati.name")}</h2>
              <p className={titleClass}>{t("planning.faculty.arati.designation")}</p>
              <p className={textClass}>asp.civil@coeptech.ac.in</p>
              <p className={textClass}>{t("common.phone")}: 02025507219</p>
            </div>
          </div>

          {/* Placeholder Faculty 3 to 6 */}
          {[
            { key: "example1", img: "person3.png", designation: "planning.designation.assistant" },
            { key: "example2", img: "person4.png", designation: "planning.designation.associate" },
            { key: "example3", img: "person5.png", designation: "planning.designation.assistant" },
            { key: "example4", img: "person6.png", designation: "planning.designation.professor" }
          ].map((faculty, index) => (
            <div key={index} className={cardClass}>
              <img src={`/images/${faculty.img}`} alt={t("planning.faculty.example")} className={imgClass} />
              <div className="flex flex-col justify-center">
                <h2 className={nameClass}>{t("planning.faculty.example")}</h2>
                <p className={titleClass}>{t(faculty.designation)}</p>
                <p className={textClass}>example{index + 3}@coeptech.ac.in</p>
                <p className={textClass}>{t("common.phone")}: 0202550000{index}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}