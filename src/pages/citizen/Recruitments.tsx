import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, UserCheck } from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "@/contexts/LanguageContext"; // Import the language hook

export default function Recruitments() {
  const navigate = useNavigate();
  const { t } = useLanguage(); // Use the language hook
  const goBack = () => navigate(-1);
  
  const recruitmentItems = [
    {
      titleKey: "recruit.notifications.title",
      descriptionKey: "recruit.notifications.description"
    },
    {
      titleKey: "recruit.forms.title",
      descriptionKey: "recruit.forms.description"
    },
    {
      titleKey: "recruit.exams.title",
      descriptionKey: "recruit.exams.description"
    },
    {
      titleKey: "recruit.results.title",
      descriptionKey: "recruit.results.description"
    },
    {
      titleKey: "recruit.training.title",
      descriptionKey: "recruit.training.description"
    },
    {
      titleKey: "recruit.eligibility.title",
      descriptionKey: "recruit.eligibility.description"
    },
    {
      titleKey: "recruit.proficiency.title",
      descriptionKey: "recruit.proficiency.description"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Back to Home Button */}
      <Button
        variant="ghost"
        onClick={goBack}
        className="flex items-center text-gray-900 hover:bg-gray-200 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-gray-300 mb-8 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:shadow-gray-800"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> {t("back.home")}
      </Button>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg mb-10 dark:from-violet-500 dark:via-blue-500 dark:to-teal-500">
        {t("recruit.title")}
      </h1>
      <h2 className="text-lg md:text-xl font-medium text-gray-600 text-center mb-12 dark:text-gray-300">
        {t("recruit.subtitle")}
      </h2>

      {/* Recruitment Cards */}
      <div className="space-y-8">
        {recruitmentItems.map((item, idx) => (
          <Card
            key={idx}
            className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-blue-400/20 transition-all duration-500 dark:bg-gray-800/30 dark:border-gray-700 dark:hover:shadow-blue-600/20"
          >
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-blue-400 flex-shrink-0 dark:text-blue-500" />
                <h3 className="text-2xl font-bold text-blue-500 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent dark:from-blue-500 dark:to-teal-500">
                  {t(item.titleKey)}
                </h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed dark:text-gray-200">
                {t(item.descriptionKey)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
