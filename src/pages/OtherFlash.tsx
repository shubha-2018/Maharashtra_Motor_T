import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext"; // to detect language (en/mr)

export default function OtherFlash() {
  const { language } = useLanguage(); // current language (English or Marathi)

  // 🌐 Bilingual Labels
  const labels = {
    en: {
      title: "Other Flash",
      srno: "Sr. No.",
      date: "Date",
      flashTitle: "Title",
      view: "View",
      download: "Download",
      none: "No data available currently.",
    },
    mr: {
      title: "इतर फ्लॅश",
      srno: "अ. क्र.",
      date: "दिनांक",
      flashTitle: "शीर्षक",
      view: "पहा",
      download: "डाउनलोड",
      none: "सध्या कोणतेही डेटा उपलब्ध नाही.",
    },
  };

  const L = language === "mr" ? labels.mr : labels.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24">
      
      {/* 🏷️ Page Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center text-blue-700 dark:text-blue-400 mb-10">
        {L.title}
      </h1>

      {/* 📑 Other Flash Table (Empty Structure) */}
      <Card className="bg-white/40 border border-gray-300 backdrop-blur-md rounded-2xl shadow-xl dark:bg-gray-800/30 dark:border-gray-700">
        <CardContent className="p-6 overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-blue-100 dark:bg-blue-950/40 text-blue-900 dark:text-blue-300 font-semibold text-center">
                <th className="border border-gray-300 px-3 py-2">{L.srno}</th>
                <th className="border border-gray-300 px-3 py-2">{L.date}</th>
                <th className="border border-gray-300 px-3 py-2">{L.flashTitle}</th>
                <th className="border border-gray-300 px-3 py-2">{L.view}</th>
                <th className="border border-gray-300 px-3 py-2">{L.download}</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-6 text-gray-600 dark:text-gray-300"
                >
                  {L.none}
                </td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
