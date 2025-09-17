import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext"; // Import the language hook

export default function Tenders() {
  const { t } = useLanguage(); // Use the language hook

  const activeTenders = [
    {
      ref: "TDR-2025-001",
      titleKey: "tenders.active.radios.title",
      deadline: "30 September 2025",
      descriptionKey: "tenders.active.radios.description",
      documentLink:
        "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/01/TenderNoticeSolapur.pdf",
    },
  ];

  const archivedTenders = [
    {
      ref: "TDR-2024-045",
      titleKey: "tenders.archived.spares.title",
      closedOn: "10 August 2025",
      documentLink:
        "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/01/TenderNoticeSolapur.pdf",
    },
    {
      ref: "TDR-2024-046",
      titleKey: "tenders.archived.computers.title",
      closedOn: "25 July 2025",
      documentLink:
        "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/01/TenderNoticeSolapur.pdf",
    },
  ];

  const procurementInfo = [
    {
      titleKey: "tenders.procurement.general.title",
      descriptionKey: "tenders.procurement.general.description",
    },
    {
      titleKey: "tenders.procurement.technical.title",
      descriptionKey: "tenders.procurement.technical.description",
    },
    {
      titleKey: "tenders.procurement.auction.title",
      descriptionKey: "tenders.procurement.auction.description",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Back to Home Button */}
      <Button
        variant="ghost"
        onClick={() => window.history.back()}
        className="flex items-center text-gray-900 hover:bg-gray-200 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-gray-300 mb-8 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:shadow-gray-800"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> {t("back.home")}
      </Button>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl p-3 font-extrabold tracking-tight text-center bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg mb-6 dark:from-violet-500 dark:via-blue-500 dark:to-teal-500">
        {t("tenders.title")}
      </h1>
      <h2 className="text-lg md:text-xl font-medium text-gray-600 text-center mb-12 dark:text-gray-300">
        {t("tenders.subtitle")}
      </h2>

      {/* Active Tenders */}
      <h3 className="text-3xl font-bold text-blue-500 mb-6 dark:text-blue-400">
        {t("tenders.active.title")}
      </h3>
      <div className="space-y-6 mb-12">
        {activeTenders.map((tender, idx) => (
          <Card
            key={idx}
            className="bg-white/30 border  border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-blue-400/20 transition-all duration-500 dark:bg-gray-800/30 dark:border-gray-700 dark:hover:shadow-blue-600/20"
          >
            <CardContent className="p-8 space-y-3">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-blue-400 flex-shrink-0 dark:text-blue-500" />
                <h4 className="text-2xl font-bold text-blue-500 dark:text-blue-400">
                  {t(tender.titleKey)}
                </h4>
              </div>
              <p className="text-gray-800 dark:text-gray-200">
                <span className="font-semibold">{t("tenders.ref")}:</span>{" "}
                {tender.ref}
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                <span className="font-semibold">{t("tenders.deadline")}:</span>{" "}
                {tender.deadline}
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                {t(tender.descriptionKey)}
              </p>
              <a
                href={tender.documentLink}
                target="_blank"
                className="text-blue-600 font-semibold underline hover:text-blue-400 transition-colors duration-300 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {t("tenders.viewDocument")}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Archived Tenders */}
      <h3 className="text-3xl font-bold text-blue-500 mb-6 dark:text-blue-400">
        {t("tenders.archived.title")}
      </h3>
      <div className="space-y-6 mb-12">
        {archivedTenders.map((tender, idx) => (
          <Card
            key={idx}
            className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-gray-400/20 transition-all duration-500 dark:bg-gray-800/30 dark:border-gray-700 dark:hover:shadow-gray-600/20"
          >
            <CardContent className="p-6 space-y-2">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {t(tender.titleKey)}
              </h4>
              <p className="text-gray-800 dark:text-gray-200">
                <span className="font-semibold">{t("tenders.ref")}:</span>{" "}
                {tender.ref}
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                <span className="font-semibold">{t("tenders.closedOn")}:</span>{" "}
                {tender.closedOn}
              </p>
              <a
                href={tender.documentLink}
                target="_blank"
                className="text-blue-600 font-semibold underline hover:text-blue-400 transition-colors duration-300 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {t("tenders.viewDocument")}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Procurement Info */}
      <h3 className="text-3xl font-bold text-blue-500 mb-6 dark:text-blue-400">
        {t("tenders.procurement.title")}
      </h3>
      <div className="space-y-6">
        {procurementInfo.map((item, idx) => (
          <Card
            key={idx}
            className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-green-400/20 transition-all duration-500 dark:bg-gray-800/30 dark:border-gray-700 dark:hover:shadow-green-600/20"
          >
            <CardContent className="p-8 space-y-4">
              <h4 className="text-2xl font-bold text-green-500 dark:text-green-400">
                {t(item.titleKey)}
              </h4>
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
