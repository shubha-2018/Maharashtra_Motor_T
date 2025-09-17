import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Accessibility, Eye, Music, MousePointer, Keyboard, Globe } from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AccessibilityPage() {
    const navigate = useNavigate();
    const { t } = useLanguage();
    const onBack = () => navigate("/");
    
    const accessibilityFeatures = [
        {
            icon: <Eye className="w-6 h-6 text-blue-400" />,
            titleKey: "accessibility.visual.title",
            descriptionKey: "accessibility.visual.description",
        },
        {
            icon: <Music className="w-6 h-6 text-blue-400" />,
            titleKey: "accessibility.auditory.title",
            descriptionKey: "accessibility.auditory.description",
        },
        {
            icon: <MousePointer className="w-6 h-6 text-blue-400" />,
            titleKey: "accessibility.motor.title",
            descriptionKey: "accessibility.motor.description",
        },
        {
            icon: <Keyboard className="w-6 h-6 text-blue-400" />,
            titleKey: "accessibility.keyboard.title",
            descriptionKey: "accessibility.keyboard.description",
        },
        {
            icon: <Globe className="w-6 h-6 text-blue-400" />,
            titleKey: "accessibility.language.title",
            descriptionKey: "accessibility.language.description",
        },
        {
            icon: <Accessibility className="w-6 h-6 text-blue-400" />,
            titleKey: "accessibility.compliance.title",
            descriptionKey: "accessibility.compliance.description",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-32 left-40 w-96 h-96 bg-blue-400/20 blur-3xl rounded-full animate-pulse-slow dark:bg-blue-600/20"></div>
                <div className="absolute bottom-32 right-40 w-[32rem] h-[32rem] bg-teal-400/20 blur-3xl rounded-full animate-pulse-slow dark:bg-teal-600/20"></div>
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
                <h1 className="text-5xl md:text-6xl p-3 font-extrabold tracking-tight text-center bg-gradient-to-r from-blue-400 via-teal-400 to-violet-400 bg-clip-text text-transparent drop-shadow-lg dark:from-blue-500 dark:via-teal-500 dark:to-violet-500">
                    {t("accessibility.title")}
                </h1>
                <h2 className="text-lg md:text-xl font-medium text-gray-600 text-center mb-12 dark:text-gray-300">
                    {t("accessibility.subtitle")}
                </h2>

                {/* Department Info */}
                <Card className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl dark:bg-gray-800/30 dark:border-gray-700">
                    <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-blue-500 mb-4 dark:text-blue-400">
                            {t("accessibility.deptInfo.title")}
                        </h3>
                        <p className="text-gray-800 text-lg leading-relaxed dark:text-gray-200">
                            {t("accessibility.deptInfo.description")}
                        </p>
                    </CardContent>
                </Card>

                {/* Accessibility Features */}
                <div className="space-y-8">
                    {accessibilityFeatures.map((item, idx) => (
                        <Card
                            key={idx}
                            className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-blue-400/20 transition-all duration-500 dark:bg-gray-800/30 dark:border-gray-700 dark:hover:shadow-blue-600/20"
                        >
                            <CardContent className="p-8 space-y-4">
                                <div className="flex items-center gap-3">
                                    {item.icon}
                                    <h3 className="text-2xl md:text-3xl p-3 font-bold text-blue-500 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-violet-400 dark:from-blue-500 dark:via-teal-500 dark:to-violet-500">
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

                {/* Contact Information */}
                <Card className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl dark:bg-gray-800/30 dark:border-gray-700">
                    <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-blue-500 mb-4 dark:text-blue-400">
                            {t("accessibility.contact.title")}
                        </h3>
                        <p className="text-gray-800 text-lg leading-relaxed mb-4 dark:text-gray-200">
                            {t("accessibility.contact.description")}
                        </p>
                        <div className="space-y-2">
                            <p className="text-gray-800 dark:text-gray-200">
                                <strong>{t("accessibility.contact.email")}:</strong> pcit@mahapolice.gov.in
                            </p>
                            <p className="text-gray-800 dark:text-gray-200">
                                <strong>{t("accessibility.contact.phone")}:</strong> +91-20-2612-7300
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
