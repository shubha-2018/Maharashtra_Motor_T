import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star } from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "@/contexts/LanguageContext"; // Assuming you have this hook

export default function Ranks() {

  const openPDF = () => {
    // Assuming your PDF is located in the public/assets folder
    const pdfUrl = '/pdfs/Ranks-in-PCIT.pdf';
    
    // Open the PDF in a new tab
    window.open(pdfUrl, '_blank');
  };


  const navigate = useNavigate();
  const { t } = useLanguage();
  const goBack = () => navigate("/");

  const ranksData = [
    {
      rank: t("ranks.rank1.title"),
      description: t("ranks.rank1.description")
    },
    {
      rank: t("ranks.rank2.title"),
      description: t("ranks.rank2.description")
    },
    {
      rank: t("ranks.rank3.title"),
      description: t("ranks.rank3.description")
    },
    {
      rank: t("ranks.rank4.title"),
      description: t("ranks.rank4.description")
    },
    {
      rank: t("ranks.rank5.title"),
      description: t("ranks.rank5.description")
    },
    {
      rank: t("ranks.rank6.title"),
      description: t("ranks.rank6.description")
    },
    {
      rank: t("ranks.rank7.title"),
      description: t("ranks.rank7.description")
    },
    {
      rank: t("ranks.rank8.title"),
      description: t("ranks.rank8.description")
    },
    {
      rank: t("ranks.rank9.title"),
      description: t("ranks.rank9.description")
    },
    {
      rank: t("ranks.rank10.title"),
      description: t("ranks.rank10.description")
    },
    {
      rank: t("ranks.rank11.title"),
      description: t("ranks.rank11.description")
    },
    {
      rank: t("ranks.rank12.title"),
      description: t("ranks.rank12.description")
    },
    {
      rank: t("ranks.rank13.title"),
      description: t("ranks.rank13.description")
    },
    {
      rank: t("ranks.rank14.title"),
      description: t("ranks.rank14.description")
    },
    {
      rank: t("ranks.rank15.title"),
      description: t("ranks.rank15.description")
    },
    {
      rank: t("ranks.rank16.title"),
      description: t("ranks.rank16.description")
    },
    {
      rank: t("ranks.rank17.title"),
      description: t("ranks.rank17.description")
    },
    {
      rank: t("ranks.rank18.title"),
      description: t("ranks.rank18.description")
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-40 w-96 h-96 bg-violet-400/20 dark:bg-violet-600/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-32 right-40 w-[32rem] h-[32rem] bg-blue-400/20 dark:bg-blue-600/20 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Back to Home Button */}
        <Button
          variant="ghost"
          onClick={goBack}
          className="flex items-center text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-gray-300 dark:hover:shadow-gray-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> {t("backToHome")}
        </Button>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl p-3 font-extrabold tracking-tight text-center bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400 dark:from-violet-500 dark:via-blue-500 dark:to-teal-500 bg-clip-text text-transparent drop-shadow-lg">
          {t("ranks.title")}
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400 text-center mb-10">
          {t("ranks.subtitle")}
        </h2>

        {/* Glassmorphic Cards for each rank */}
        <div className="space-y-6">
          {ranksData.map((item, idx) => (
            <Card
              key={idx}
              className="bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-violet-400/20 dark:hover:shadow-violet-600/20 transition-all duration-500"
            >
              <CardContent className="p-8 space-y-3">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-violet-400 dark:text-violet-500 flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-violet-500 dark:text-violet-400">{item.rank}</h3>
                </div>
                <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* See the Whole PDF Button */}
        <div className="text-center mt-10">
          <Button
            onClick={openPDF}
            className="bg-violet-500 dark:bg-violet-600 text-white hover:bg-violet-600 dark:hover:bg-violet-700 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
          >
            {t("ranks.seePDF")}
          </Button>
        </div>
      </div>
    </div>
  );
}