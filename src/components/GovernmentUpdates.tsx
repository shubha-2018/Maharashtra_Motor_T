import React from "react";
import {
  Calendar,
  FileText,
  Megaphone,
  ExternalLink,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const GovernmentUpdates: React.FC = () => {
  const { t } = useLanguage();

  const policeBlue = "#0A1E4A";
  const accent = "#1D4ED8";

  const bulletins = [
    {
      id: 1,
      type: "bulletin",
      title: t("bulletin.cybercrimePortal"),
      date: "2024-01-15",
      icon: Megaphone,
      badge: t("badge.new"),
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2024/04/PP-RESULT-RM-ELE.-WO-2024.pdf",
    },
    {
      id: 2,
      type: "order",
      title: t("bulletin.digitalEvidence"),
      date: "2024-01-12",
      icon: FileText,
      badge: t("badge.important"),
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2024/04/PP-RESULT-RM-ELE.-WO-2024.pdf",
    },
    {
      id: 3,
      type: "instruction",
      title: t("bulletin.emergencyProtocol"),
      date: "2024-01-10",
      icon: FileText,
      badge: t("badge.update"),
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2024/04/PP-RESULT-RM-ELE.-WO-2024.pdf",
    },
    {
      id: 4,
      type: "bulletin",
      title: t("bulletin.auditResults"),
      date: "2024-01-08",
      icon: Megaphone,
      badge: t("badge.report"),
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2024/04/PP-RESULT-RM-ELE.-WO-2024.pdf",
    },
  ];

  const tenders = [
    {
      id: 1,
      title: t("tender.communicationEquipment"),
      lastDate: "2024-02-15",
      tender_no: "PCIT/2024/001",
      status: t("tender.status.open"),
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/01/TenderNoticeSolapur.pdf",
    },
    {
      id: 2,
      title: t("tender.mobileApp"),
      lastDate: "2024-02-20",
      tender_no: "PCIT/2024/002",
      status: t("tender.status.open"),
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/01/TenderNoticeSolapur.pdf",
    },
    {
      id: 3,
      title: t("tender.serverMaintenance"),
      lastDate: "2024-01-30",
      tender_no: "PCIT/2024/003",
      status: t("tender.status.closingSoon"),
      link: "https://mahpolwireless.stagingdsi.co.in/wp-content/uploads/2025/01/TenderNoticeSolapur.pdf",
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN");
  };

  const getBadgeVariant = (badge: string) => {
    switch (badge.toLowerCase()) {
      case "new":
        return "default";
      case "important":
        return "secondary";
      case "update":
        return "outline";
      default:
        return "outline";
    }
  };

  return (
    <section className="py-16 transition-colors duration-500 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#0A1E4A] via-[#1D4ED8] to-[#0A1E4A] bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-blue-400">
            {t("govt.updates")}
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full shadow-lg"
            style={{
              background: `linear-gradient(to right, ${policeBlue}, ${accent}, ${policeBlue})`,
            }}
          ></div>
        </div>

        {/* Two-Column Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Bulletins Card */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-800 dark:via-blue-900 dark:to-indigo-900 shadow-xl hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl transform hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl -z-0"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-400/20 to-blue-600/20 rounded-full blur-3xl -z-0"></div>
            
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-3 text-xl font-bold">
                <div className="p-2 bg-gradient-to-br from-[#0A1E4A] to-[#1D4ED8] rounded-lg shadow-lg">
                  <Megaphone className="w-6 h-6 text-white" />
                </div>
                <span className="bg-gradient-to-r from-[#0A1E4A] to-[#1D4ED8] bg-clip-text text-transparent dark:from-blue-300 dark:to-indigo-300">
                  {t("bulletins")}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              {bulletins.map((item) => (
                <div
                  key={item.id}
                  className="group p-5 border-l-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gradient-to-b from-[#1D4ED8] to-[#0A1E4A] hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-[1.02]"
                  style={{
                    borderImage: "linear-gradient(to bottom, #1D4ED8, #0A1E4A) 1",
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-md group-hover:scale-110 transition-transform">
                        <item.icon className="w-4 h-4 text-[#0A1E4A] dark:text-blue-300" />
                      </div>
                      <Badge
                        variant={getBadgeVariant(item.badge)}
                        className="text-xs bg-gradient-to-r from-[#0A1E4A] to-[#1D4ED8] text-white border-0 shadow-md"
                      >
                        {item.badge}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-300 bg-gray-100/50 dark:bg-gray-700/50 px-2 py-1 rounded-md">
                      <Calendar className="w-3 h-3" />
                      {formatDate(item.date)}
                    </div>
                  </div>

                  <h3 className="font-semibold mb-3 leading-tight text-gray-900 dark:text-white group-hover:text-[#1D4ED8] dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-3">
                    <Link to={item.link} target="_blank">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-[#0A1E4A] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#0A1E4A] text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {t("read.more")}
                      </Button>
                    </Link>
                    <Link to={item.link} target="_blank">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-2 border-[#1D4ED8] text-[#1D4ED8] dark:text-blue-300 hover:bg-gradient-to-r hover:from-[#0A1E4A] hover:to-[#1D4ED8] hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105"
                      >
                        <Download className="w-3 h-3 mr-1" />
                        PDF
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tenders Card */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-white via-indigo-50 to-blue-50 dark:from-gray-800 dark:via-indigo-900 dark:to-blue-900 shadow-xl hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl transform hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-indigo-400/20 to-blue-600/20 rounded-full blur-3xl -z-0"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tr from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl -z-0"></div>
            
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-3 text-xl font-bold">
                <div className="p-2 bg-gradient-to-br from-[#0A1E4A] to-[#1D4ED8] rounded-lg shadow-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <span className="bg-gradient-to-r from-[#0A1E4A] to-[#1D4ED8] bg-clip-text text-transparent dark:from-blue-300 dark:to-indigo-300">
                  {t("tenders.section")}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              {tenders.map((tender) => (
                <div
                  key={tender.id}
                  className="group p-5 border-2 border-transparent rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 hover:border-gradient-to-r hover:from-[#1D4ED8] hover:to-[#0A1E4A] transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(white, white) padding-box, linear-gradient(to right, #1D4ED8, #0A1E4A) border-box",
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold mb-1 leading-tight text-gray-900 dark:text-white group-hover:text-[#1D4ED8] dark:group-hover:text-blue-400 transition-colors">
                        {tender.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100/50 dark:bg-gray-700/50 px-2 py-1 rounded inline-block">
                        Tender No: {tender.tender_no}
                      </p>
                    </div>
                    <Badge className="text-xs bg-gradient-to-r from-emerald-500 to-green-500 text-white border-0 shadow-md">
                      {tender.status}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 bg-gray-100/50 dark:bg-gray-700/50 px-3 py-1.5 rounded-md">
                      <Calendar className="w-3 h-3" />
                      Last Date: {formatDate(tender.lastDate)}
                    </div>
                    <Link to={tender.link} target="_blank">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-2 border-[#1D4ED8] text-[#1D4ED8] dark:text-blue-300 hover:bg-gradient-to-r hover:from-[#0A1E4A] hover:to-[#1D4ED8] hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
                      >
                        <Download className="w-3 h-3 mr-1" />
                        Download
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}

              <div className="text-center pt-4">
                <Link to={"/citizen/tender"}>
                  <Button className="bg-gradient-to-r from-[#0A1E4A] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#0A1E4A] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-6 py-2">
                    {t("view.all")} {t("tenders.section")}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GovernmentUpdates;