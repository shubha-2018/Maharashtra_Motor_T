import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const TrainingCalender: React.FC = () => {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "Training Calendar",
      srNo: "Sr. No.",
      courseName: "Name of Course",
      duration: "Duration",
      dateFrom: "Date From",
      dateTo: "Date To",
      eligibility: "Eligibility Level",
      coordinator: "Course Coordinator",
    },
    mr: {
      title: "प्रशिक्षण दिनदर्शिका",
      srNo: "अनु. क्र.",
      courseName: "अभ्यासक्रमाचे नाव",
      duration: "कालावधी",
      dateFrom: "पासून तारीख",
      dateTo: "पर्यंत तारीख",
      eligibility: "पात्रता स्तर",
      coordinator: "अभ्यासक्रम समन्वयक",
    },
  };

  const t = text[language];

  return (
    <div className="p-4 md:p-8 dark:text-white">
      <h2 className="text-2xl font-bold text-center mb-6">{t.title}</h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-400 dark:border-gray-600">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="border p-2 text-center w-16">{t.srNo}</th>
              <th className="border p-2 text-center">{t.courseName}</th>
              <th className="border p-2 text-center">{t.duration}</th>
              <th className="border p-2 text-center">{t.dateFrom}</th>
              <th className="border p-2 text-center">{t.dateTo}</th>
              <th className="border p-2 text-center">{t.eligibility}</th>
              <th className="border p-2 text-center">{t.coordinator}</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-2 text-center">1</td>
              <td className="border p-2 text-center">Cyber Security Basics</td>
              <td className="border p-2 text-center">3 Weeks</td>
              <td className="border p-2 text-center">01-03-2025</td>
              <td className="border p-2 text-center">22-03-2025</td>
              <td className="border p-2 text-center">All Police Officers</td>
              <td className="border p-2 text-center">ABC Sir</td>
            </tr>
            <tr>
              <td className="border p-2 text-center">2</td>
              <td className="border p-2 text-center">Communication Training</td>
              <td className="border p-2 text-center">2 Weeks</td>
              <td className="border p-2 text-center">10-04-2025</td>
              <td className="border p-2 text-center">24-04-2025</td>
              <td className="border p-2 text-center">Technical Staff</td>
              <td className="border p-2 text-center">XYZ Madam</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrainingCalender;
