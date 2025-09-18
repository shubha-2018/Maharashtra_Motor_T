import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Info, FileText, Link, Book, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "@/contexts/LanguageContext"; // Import the language hook

export default function RTIPage() {
    const navigate = useNavigate();
    const { t } = useLanguage(); // Use the language hook
    const onBack = () => navigate("/");
    
    const rtiSections = [
        {
            icon: <Info className="w-6 h-6 text-teal-400" />,
            titleKey: "rti.pio.title",
            descriptionKey: "rti.pio.description",
        },
        {
            icon: <FileText className="w-6 h-6 text-teal-400" />,
            titleKey: "rti.procedure.title",
            descriptionKey: "rti.procedure.description",
        },
        {
            icon: <Link className="w-6 h-6 text-teal-400" />,
            titleKey: "rti.portal.title",
            descriptionKey: "rti.portal.description",
        },
        {
            icon: <Book className="w-6 h-6 text-teal-400" />,
            titleKey: "rti.frequent.title",
            descriptionKey: "rti.frequent.description",
        },
        {
            icon: <Book className="w-6 h-6 text-teal-400" />,
            titleKey: "rti.manual.title",
            descriptionKey: "rti.manual.description",
        },
        {
            icon: <AlertCircle className="w-6 h-6 text-teal-400" />,
            titleKey: "rti.appeal.title",
            descriptionKey: "rti.appeal.description",
        },
    ];

    return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-32 left-40 w-96 h-96 bg-teal-400/20 blur-3xl rounded-full animate-pulse-slow dark:bg-teal-600/20"></div>
                <div className="absolute bottom-32 right-40 w-[32rem] h-[32rem] bg-blue-400/20 blur-3xl rounded-full animate-pulse-slow dark:bg-blue-600/20"></div>
            </div>

            <div className="max-w-6xl mx-auto space-y-12">
                {/* Back to Home Button */}
                <Button
                    variant="ghost"
                    onClick={onBack}
                    className="flex items-center text-gray-900 hover:bg-gray-200 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-gray-300 mb-6 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:shadow-gray-800"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> {t("back.home")}
                </Button>

                {/* Heading */}
                <h1 className="text-5xl p-3 md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-teal-400 via-blue-400 to-violet-400 bg-clip-text text-transparent drop-shadow-lg dark:from-teal-500 dark:via-blue-500 dark:to-violet-500">
                    {t("rti.title")}
                </h1>
                <h2 className="text-lg md:text-xl font-medium text-gray-600 text-center mb-12 dark:text-gray-300">
                    {t("rti.subtitle")}
                </h2>

                {/* RTI Sections */}
                <div className="space-y-8">
                    {rtiSections.map((item, idx) => (
                        <Card
                            key={idx}
                            className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-teal-400/20 transition-all duration-500 dark:bg-gray-800/30 dark:border-gray-700 dark:hover:shadow-teal-600/20"
                        >
                            <CardContent className="p-8 space-y-4">
                                <div className="flex items-center gap-3">
                                    {item.icon}
                                    <h3 className="text-2xl md:text-3xl font-bold text-teal-500 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-400 to-violet-400 dark:from-teal-500 dark:via-blue-500 dark:to-violet-500">
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
