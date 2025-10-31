// GradationList.jsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Eye, Download } from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GradationList() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const goBack = () => navigate("/");

  // 📋 Gradation List Data (with uploadDate)
  const gradationOrders = [
    {
      id: 1,
      title_en: "Gradation List – January 2025",
      title_mr: "सेवाज्येष्ठता यादी– जानेवारी २०२५",
      size: "1.52 MB",
      link: "https://mahpolwireless.stagingdsi.co.in/UploadedFiles/GradationLists/156.pdf",
      uploadDate: "2025-01-10",
    },
    {
      id: 2,
      title_en: "Gradation List – February 2025",
      title_mr: "सेवाज्येष्ठता यादी – फेब्रुवारी २०२५",
      size: "1.12 MB",
      link: "https://mahpolwireless.stagingdsi.co.in/UploadedFiles/GradationLists/159.pdf",
      uploadDate: "2025-02-15",
    },
    {
      id: 3,
      title_en: "Gradation List – March 2025",
      title_mr: "सेवाज्येष्ठता यादी – मार्च २०२५",
      size: "930.17 KB",
      link: "https://mahpolwireless.stagingdsi.co.in/UploadedFiles/GradationLists/163.pdf",
      uploadDate: "2025-03-25",
    },
  ];

  // 🔹 Sort by latest upload date
  const sortedOrders = [...gradationOrders].sort(
    (a, b) => new Date(b.uploadDate) - new Date(a.uploadDate)
  );

  // 🔹 Labels (English + Marathi)
  const labels = {
    en: {
      title: "Gradation Lists",
      back: "Back to Home",
      srno: "Sr. No.",
      date: "Date",
      orderTitle: "Title",
      view: "View",
      download: "Download",
      none: "No gradation lists available currently.",
    },
    mr: {
      title: "सेवाज्येष्ठता यादी",
      back: "मुख्यपृष्ठावर जा",
      srno: "अ. क्र.",
      date: "दिनांक",
      orderTitle: "शीर्षक",
      view: "पहा",
      download: "डाउनलोड",
      none: "सध्या कोणतीही सेवाज्येष्ठता यादी उपलब्ध नाही.",
    },
  };

  const L = language === "mr" ? labels.mr : labels.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      
      {/* 🔙 Back Button */}
      <div className="flex justify-between items-center mb-8">
        <Button
          variant="ghost"
          onClick={goBack}
          className="flex items-center text-gray-900 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-blue-200 dark:text-gray-100 dark:hover:bg-blue-950/30 dark:hover:text-blue-300 dark:hover:shadow-blue-900/30"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> {L.back}
        </Button>
      </div>

      {/* 🏷️ Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center text-blue-700 dark:text-blue-400 mb-10">
        {L.title}
      </h1>

      {/* 📑 Gradation List Table */}
      <Card className="bg-white/40 border border-gray-300 backdrop-blur-md rounded-2xl shadow-xl dark:bg-gray-800/30 dark:border-gray-700">
        <CardContent className="p-6 overflow-x-auto">
          {sortedOrders.length === 0 ? (
            <p className="text-center py-6 text-gray-600 dark:text-gray-300">
              {L.none}
            </p>
          ) : (
            <table className="w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-blue-100 dark:bg-blue-950/40 text-blue-900 dark:text-blue-300 font-semibold text-center">
                  <th className="border border-gray-300 px-3 py-2">{L.srno}</th>
                  <th className="border border-gray-300 px-3 py-2">{L.date}</th>
                  <th className="border border-gray-300 px-3 py-2">{L.orderTitle}</th>
                  <th className="border border-gray-300 px-3 py-2">{L.view}</th>
                  <th className="border border-gray-300 px-3 py-2">{L.download}</th>
                </tr>
              </thead>
              <tbody>
                {sortedOrders.map((order, index) => (
                  <tr
                    key={order.id}
                    className="hover:bg-blue-50 dark:hover:bg-blue-900/20 text-center transition-all"
                  >
                    <td className="border border-gray-300 px-3 py-2">{index + 1}</td>
                    <td className="border border-gray-300 px-3 py-2">
                      {new Date(order.uploadDate).toLocaleDateString(
                        language === "mr" ? "mr-IN" : "en-IN",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-left">
                      {language === "mr" ? order.title_mr : order.title_en}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      <a
                        href={order.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                      >
                        <Eye className="w-4 h-4" /> {L.view}
                      </a>
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      <a
                        href={order.link}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                      >
                        <Download className="w-4 h-4" /> {L.download} ({order.size})
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
