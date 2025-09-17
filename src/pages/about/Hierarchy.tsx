import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "@/contexts/LanguageContext";

// Replace this with your actual image path
import hierarchyImage from "@/assets/hierarchy.jpg";

export default function Hierarchy() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const onBack = () => navigate("/");

  return (
    <div className="min-h-screen 
                    bg-gradient-to-b from-gray-50 via-white to-gray-100 
                    dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 
                    text-gray-900 dark:text-gray-100 
                    px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-40 w-96 h-96 bg-violet-400/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-32 right-40 w-[32rem] h-[32rem] bg-blue-400/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="flex items-center text-gray-700 dark:text-gray-200 
                     hover:text-violet-600 dark:hover:text-violet-400 
                     transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> {t("h1.back")}
        </Button>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center 
                       bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600 
                       bg-clip-text text-transparent drop-shadow-md p-3">
          {t("h1.title")}
        </h1>

        {/* Big Hierarchy Image */}
        <div className="flex justify-center">
          <img
            src={hierarchyImage}
            alt={t("h1.alt")}
            className="rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
