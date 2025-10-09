import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  FileText,
  FileCheck,
  Bell,
  BookOpen,
  Clipboard,
} from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "@/contexts/LanguageContext"; // Import the language hook

export default function GovernmentPublications() {
  const navigate = useNavigate();
  const { t } = useLanguage(); // Use the language hook
  const goBack = () => navigate("/");

  const publications = [
    {
      icon: <FileText className="w-6 h-6 text-blue-600 dark:text-blue-500" />,
      titleKey: "pubs.gazette.title",
      descriptionKey: "pubs.gazette.description",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/04/February-2021.pdf",
    },
    {
      icon: <FileCheck className="w-6 h-6 text-blue-600 dark:text-blue-500" />,
      titleKey: "pubs.orders.title",
      descriptionKey: "pubs.orders.description",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/04/March-2021.pdf",
    },
    {
      icon: <Bell className="w-6 h-6 text-blue-600 dark:text-blue-500" />,
      titleKey: "pubs.circulars.title",
      descriptionKey: "pubs.circulars.description",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/04/April-2021.pdf",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-500" />,
      titleKey: "pubs.notifications.title",
      descriptionKey: "pubs.notifications.description",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/04/February-2021.pdf",
    },
    {
      icon: <Clipboard className="w-6 h-6 text-blue-600 dark:text-blue-500" />,
      titleKey: "pubs.tenders.title",
      descriptionKey: "pubs.tenders.description",
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/04/August-2021.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-40 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full animate-pulse-slow dark:bg-blue-700/20"></div>
        <div className="absolute bottom-32 right-40 w-[32rem] h-[32rem] bg-blue-800/20 blur-3xl rounded-full animate-pulse-slow dark:bg-blue-900/20"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Back to Home Button */}
        <Button
          variant="ghost"
          onClick={goBack}
          className="flex items-center text-gray-900 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-blue-200 mb-6 dark:text-gray-100 dark:hover:bg-blue-950/30 dark:hover:text-blue-300 dark:hover:shadow-blue-900/30"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> {t("back.home")}
        </Button>

        {/* Heading */}
        <h1 className="text-5xl p-3 md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent drop-shadow-lg dark:from-blue-500 dark:via-blue-600 dark:to-blue-700">
          {t("pubs.title")}
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-gray-600 text-center mb-12 dark:text-gray-300">
          {t("pubs.subtitle")}
        </h2>

        {/* Publication Cards */}
        <div className="space-y-8">
          {publications.map((item, idx) => (
            <Card
              key={idx}
              onClick={() => {
                window.open(item.link, "_blank");
              }}
              className="bg-white/30 cursor-pointer border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-blue-400/20 transition-all duration-500 dark:bg-gray-800/30 dark:border-gray-700 dark:hover:shadow-blue-600/20"
            >
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  {item.icon}
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-700 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700">
                    {t(item.titleKey)}
                  </h3>
                </div>
                <p className="text-gray-800 text-lg leading-relaxed text-justify dark:text-gray-200">
                  {t(item.descriptionKey)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}