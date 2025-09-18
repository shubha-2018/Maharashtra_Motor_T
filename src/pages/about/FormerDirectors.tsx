// Imports
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { useLanguage } from "@/contexts/LanguageContext";

// Import images
import imgRamanand from "@/assets/a.png";
import imgRetesh from "@/assets/b.png";
import imgJagannath from "@/assets/c.png";
import imgKakkar from "@/assets/d.png";
import imgSharma from "@/assets/e.png";
import imgNghinglova from "@/assets/f.png";
import imgLohar from "@/assets/g.png";
import imgJoshi from "@/assets/h.png";
import imgJog from "@/assets/i.png";
import imgNabar from "@/assets/j.png";
import imgPaddon from "@/assets/k.png";
import imgDodwell from "@/assets/l.png";

export default function FormerDirectors() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const directors = [
    { name: t("fd.d1.name"), designation: t("fd.d1.designation"), tenure: t("fd.d1.tenure"), img: imgRamanand },
    { name: t("fd.d2.name"), designation: t("fd.d2.designation"), tenure: t("fd.d2.tenure"), img: imgRetesh },
    { name: t("fd.d3.name"), designation: t("fd.d3.designation"), tenure: t("fd.d3.tenure"), img: imgJagannath },
    { name: t("fd.d4.name"), designation: t("fd.d4.designation"), tenure: t("fd.d4.tenure"), img: imgKakkar },
    { name: t("fd.d5.name"), designation: t("fd.d5.designation"), tenure: t("fd.d5.tenure"), img: imgSharma },
    { name: t("fd.d6.name"), designation: t("fd.d6.designation"), tenure: t("fd.d6.tenure"), img: imgNghinglova },
    { name: t("fd.d7.name"), designation: t("fd.d7.designation"), tenure: t("fd.d7.tenure"), img: imgLohar },
    { name: t("fd.d8.name"), designation: t("fd.d8.designation"), tenure: t("fd.d8.tenure"), img: imgJoshi },
    { name: t("fd.d9.name"), designation: t("fd.d9.designation"), tenure: t("fd.d9.tenure"), img: imgJog },
    { name: t("fd.d10.name"), designation: t("fd.d10.designation"), tenure: t("fd.d10.tenure"), img: imgNabar },
    { name: t("fd.d11.name"), designation: t("fd.d11.designation"), tenure: t("fd.d11.tenure"), img: imgPaddon },
    { name: t("fd.d12.name"), designation: t("fd.d12.designation"), tenure: t("fd.d12.tenure"), img: imgDodwell },
  ];

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
      {/* Back Button */}
      <Button
        variant="ghost"
        className="mb-6 flex items-center gap-2 text-gray-700 dark:text-gray-200"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="w-5 h-5" />
        {t("fd.back")}
      </Button>

      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-900 dark:text-blue-400">
        {t("fd.title")}
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {directors.map((director, index) => (
          <Card
            key={index}
            className="shadow-lg hover:shadow-2xl transition duration-300 rounded-2xl bg-white dark:bg-gray-800 flex flex-col items-center p-6"
          >
            {/* Director Image */}
            <img
              src={director.img}
              alt={director.name}
              className="w-40 h-40 object-cover rounded-full border-4 border-gray-200 dark:border-gray-700"
            />

            {/* Director Info */}
            <CardContent className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {director.name}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {director.designation}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {director.tenure}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
