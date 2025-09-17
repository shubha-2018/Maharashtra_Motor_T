// StrategySupportSystem.jsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Cpu, Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

export default function StrategySupportSystem() {
  const navigate = useNavigate();
  const goBack = () => navigate("/");
  const { t } = useLanguage();

  // 🌗 Dark mode toggle
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const sssItems = [
    {
      title: t("k2d9"),
      description: [t("z7a1"), t("m4f2"), t("q9e3")],
    },
    {
      title: t("x6r4"),
      description: [t("u2n5"), t("h7b8"), t("w3t6")],
    },
    {
      title: t("c5p7"),
      description: [t("a1l9"), t("o8v2")],
    },
    {
      title: t("d3m8"),
      description: [t("n5j4"), t("r2k6")],
    },
    {
      title: t("f4q1"),
      description: [t("s8y2"), t("e7h5"), t("g6c3")],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden transition-colors duration-500">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-40 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-32 right-40 w-[32rem] h-[32rem] bg-blue-400/20 dark:bg-blue-600/20 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Back to Home + Dark Mode Toggle */}
        <div className="flex justify-between items-center mb-6">
          <Button
            variant="ghost"
            onClick={goBack}
            className="flex items-center text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-gray-300 dark:hover:shadow-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> {t("p1o2")}
          </Button>

          {/* Toggle */}
          <Button
            variant="outline"
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border dark:border-gray-700 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            {darkMode ? t("l3s7") : t("v8n9")}
          </Button>
        </div>

        {/* Heading */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
            {t("b7z4")}
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300">
            {t("y5h8")}
          </h2>
        </div>

        {/* SSS Cards */}
        <div className="space-y-8">
          {sssItems.map((item, idx) => (
            <Card
              key={idx}
              className="bg-white/30 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-purple-400/20 transition-all duration-500"
            >
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Cpu className="w-6 h-6 text-purple-400 flex-shrink-0" />
                  <h3 className="text-2xl md:text-3xl font-bold text-purple-500 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                </div>
                <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-lg leading-relaxed space-y-2">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlight / Summary */}
        <Card className="bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-teal-400/20 p-6 rounded-3xl border border-white/20 dark:border-gray-700 shadow-inner text-center">
          <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
            {t("t6m3")}
          </p>
        </Card>
      </div>
    </div>
  );
}
