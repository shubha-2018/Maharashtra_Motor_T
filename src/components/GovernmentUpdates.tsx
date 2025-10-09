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

  const policeBlue = "#0A1E4A"; // Dark Police Blue
  const accent = "#1D4ED8"; // Medium blue accent

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
    <section className="py-16 transition-colors duration-500 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            {t("govt.updates")}
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{
              background: `linear-gradient(to right, ${policeBlue}, ${accent})`,
            }}
          ></div>
        </div>

        {/* Two-Column Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Bulletins */}
          <Card className="bg-white dark:bg-black shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-[rgb(0,51,102)] rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white">
                <Megaphone className="w-6 h-6" color={policeBlue} />
                {t("bulletins")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {bulletins.map((item) => (
                <div
                  key={item.id}
                  className="p-4 border-l-4 rounded-lg bg-gray-50 dark:bg-black dark:border-[rgb(0,51,102)] border-[rgb(0,51,102)] hover:bg-gray-100 dark:hover:bg-[#111111] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <item.icon className="w-4 h-4" color={policeBlue} />
                      <Badge
                        variant={getBadgeVariant(item.badge)}
                        className="text-xs bg-[rgb(0,51,102)] text-white"
                      >
                        {item.badge}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-white">
                      <Calendar className="w-3 h-3" />
                      {formatDate(item.date)}
                    </div>
                  </div>

                  <h3 className="font-semibold mb-2 leading-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-3">
                    <Link to={item.link} target="_blank">
                      <Button
                        size="sm"
                        className="bg-[rgb(0,51,102)] hover:bg-[rgb(0,61,122)] text-white dark:text-white transition-colors"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {t("read.more")}
                      </Button>
                    </Link>
                    <Link to={item.link} target="_blank">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[rgb(0,51,102)] text-[rgb(0,51,102)] dark:text-white hover:bg-[rgb(0,51,102)] hover:text-white transition-colors"
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

          {/* Tenders */}
          <Card className="bg-white dark:bg-black shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-[rgb(0,51,102)] rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white">
                <FileText className="w-6 h-6" color={policeBlue} />
                {t("tenders.section")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {tenders.map((tender) => (
                <div
                  key={tender.id}
                  className="p-4 border border-gray-200 dark:border-[rgb(0,51,102)] rounded-lg bg-gray-50 dark:bg-black hover:bg-gray-100 dark:hover:bg-[#111111] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold mb-1 leading-tight text-gray-900 dark:text-white">
                        {tender.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-white/70">
                        Tender No: {tender.tender_no}
                      </p>
                    </div>
                    <Badge className="text-xs bg-[rgb(0,51,102)]/10 text-[rgb(0,51,102)] border border-[rgb(0,51,102)]/30">
                      {tender.status}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between mt-3 text-white">
                    <div className="flex items-center gap-1 text-sm">
                      <Calendar className="w-3 h-3" />
                      Last Date: {formatDate(tender.lastDate)}
                    </div>
                    <Link to={tender.link} target="_blank">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[rgb(0,51,102)] text-[rgb(0,51,102)] dark:text-white hover:bg-[rgb(0,51,102)] hover:text-white transition-colors"
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
                  <Button className="bg-[rgb(0,51,102)] hover:bg-[rgb(0,61,122)] text-white dark:text-white">
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
