import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const TrainingCalender: React.FC = () => {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "Training Calendar - 2025",
      srNo: "Sr. No.",
      courseName: "Name of Course",
      duration: "Duration",
      dateFrom: "Date From",
      dateTo: "Date To",
      eligibility: "Eligibility Level",
      coordinator: "Course Coordinator",
      actions: "View / Download",          // ← यहीं पर साफ़-साफ़ लिखा है
      view: "View",
      download: "Download",
      noData: "No training scheduled yet.",
    },
    mr: {
      title: "प्रशिक्षण दिनदर्शिका - २०२५",
      srNo: "अ. क्र.",
      courseName: "अभ्यासक्रमाचे नाव",
      duration: "कालावधी",
      dateFrom: "प्रारंभ तारीख",
      dateTo: "समाप्ती तारीख",
      eligibility: "पात्रता स्तर",
      coordinator: "समन्वयक",
      actions: "पहा / डाउनलोड",            // ← मराठी में भी साफ़ लिखा है
      view: "पहा",
      download: "डाउनलोड",
      noData: "अद्याप कोणतेही प्रशिक्षण निश्चित नाही.",
    },
  };

  const t = text[language];

  const trainings = [
    {
      id: 1,
      name: "Cyber Security Basics",
      duration: "3 Weeks",
      from: "01-03-2025",
      to: "22-03-2025",
      eligibility: "All Police Officers",
      coordinator: "Shri. ABC",
      pdfUrl: "/pdfs/cyber-security-basics-2025.pdf",
      fileSize: "1.8 MB",
    },
    {
      id: 2,
      name: "Communication & Soft Skills Training",
      duration: "2 Weeks",
      from: "10-04-2025",
      to: "24-04-2025",
      eligibility: "Technical Staff",
      coordinator: "Smt. XYZ",
      pdfUrl: "/pdfs/communication-training-2025.pdf",
      fileSize: "2.1 MB",
    },
    {
      id: 3,
      name: "Advanced Forensics Workshop",
      duration: "1 Week",
      from: "05-06-2025",
      to: "11-06-2025",
      eligibility: "Investigating Officers",
      coordinator: "Shri. PQR",
      pdfUrl: "/pdfs/forensics-workshop-2025.pdf",
      fileSize: "3.4 MB",
    },
  ];

  const handleView = (url: string) => {
    window.open(url, "_blank");
  };

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-900 dark:text-blue-300">
        {t.title}
      </h2>

      <div className="overflow-x-auto shadow-2xl rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="w-full table-auto border-collapse bg-white dark:bg-gray-800">
          <thead className="bg-gradient-to-r from-blue-800 to-blue-950 text-white">
            <tr>
              <th className="px-4 py-4 text-center text-sm font-bold">{t.srNo}</th>
              <th className="px-4 py-4 text-left text-sm font-bold">{t.courseName}</th>
              <th className="px-4 py-4 text-center text-sm font-bold">{t.duration}</th>
              <th className="px-4 py-4 text-center text-sm font-bold">{t.dateFrom}</th>
              <th className="px-4 py-4 text-center text-sm font-bold">{t.dateTo}</th>
              <th className="px-4 py-4 text-center text-sm font-bold">{t.eligibility}</th>
              <th className="px-4 py-4 text-center text-sm font-bold">{t.coordinator}</th>
              <th className="px-4 py-4 text-center text-sm font-bold whitespace-nowrap">
                {t.actions}  {/* ← अब साफ़ दिख रहा है */}
              </th>
            </tr>
          </thead>

          <tbody>
            {trainings.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-12 text-gray-500">
                  {t.noData}
                </td>
              </tr>
            ) : (
              trainings.map((course) => (
                <tr
                  key={course.id}
                  className="border-b dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200"
                >
                  <td className="px-4 py-4 text-center font-medium">{course.id}</td>
                  <td className="px-4 py-4 font-medium">{course.name}</td>
                  <td className="px-4 py-4 text-center">{course.duration}</td>
                  <td className="px-4 py-4 text-center">{course.from}</td>
                  <td className="px-4 py-4 text-center">{course.to}</td>
                  <td className="px-4 py-4 text-center text-sm">{course.eligibility}</td>
                  <td className="px-4 py-4 text-center">{course.coordinator}</td>
                  <td className="px-4 py-4 text-center">
                    <div className="flex justify-center items-center gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center gap-1.5"
                        onClick={() => handleView(course.pdfUrl)}
                      >
                        <Eye className="w-4 h-4" />
                        <span className="hidden sm:inline">{t.view}</span>
                      </Button>

                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-1.5"
                        onClick={() =>
                          handleDownload(course.pdfUrl, `${course.name.replace(/ /g, "_")}_2025.pdf`)
                        }
                      >
                        <Download className="w-4 h-4" />
                        <span className="hidden sm:inline">{t.download}</span>
                      </Button>
                    </div>
                    <div className="text-xs text-gray-500 mt-2 sm:hidden">
                      {course.fileSize}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>
          {language === "en"
            ? "All training brochures are available in PDF format."
            : "सर्व प्रशिक्षण ब्रोशर PDF स्वरूपात उपलब्ध आहेत."}
        </p>
      </div>
    </div>
  );
};

export default TrainingCalender;