"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Link, MapPin, Phone, Mail, Users } from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "@/contexts/LanguageContext";

export default function RTIPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const onBack = () => navigate("/");

  const rtiSections = [
    { icon: <FileText className="w-6 h-6 text-teal-400" />, titleKey: "rti.overview.title", descriptionKey: "rti.overview.description" },
    { icon: <Link className="w-6 h-6 text-teal-400" />, titleKey: "rti.online.title", descriptionKey: "rti.online.description" },
    { icon: <MapPin className="w-6 h-6 text-teal-400" />, titleKey: "rti.contact.location.title", descriptionKey: "rti.contact.location.description" },
    { icon: <Phone className="w-6 h-6 text-teal-400" />, titleKey: "rti.contact.phone.title", descriptionKey: "rti.contact.phone.description" },
    { icon: <Mail className="w-6 h-6 text-teal-400" />, titleKey: "rti.contact.email.title", descriptionKey: "rti.contact.email.description" },
  ];

  const officers = [
    { roleKey: "rti.officer.appellate.title", nameKey: "rti.officer.appellate.name" },
    { roleKey: "rti.officer.info.title", nameKey: "rti.officer.info.name" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24">
      
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={onBack}
        className="flex items-center text-gray-900 hover:bg-gradient-to-r hover:from-teal-400 hover:via-blue-400 hover:to-violet-400 hover:text-white rounded-xl px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300 dark:text-gray-100 dark:hover:text-gray-100"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> {t("back.home")}
      </Button>

      <div className="max-w-5xl mx-auto space-y-12">
        {/* Page Header */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-teal-400 via-blue-400 to-violet-400 bg-clip-text text-transparent drop-shadow-lg dark:from-teal-500 dark:via-blue-500 dark:to-violet-500">
          {t("rti.title")}
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-gray-600 text-center mb-12 dark:text-gray-300">
          {t("rti.subtitle")}
        </h2>

        {/* RTI Sections */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {rtiSections.map((item, idx) => (
            <Card
              key={idx}
              className="bg-white/20 border border-gray-200 backdrop-blur-xl shadow-lg rounded-3xl hover:shadow-teal-400/30 transition-all duration-500 dark:bg-gray-800/30 dark:border-gray-700 dark:hover:shadow-teal-600/30"
            >
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  {item.icon}
                  <h3 className="text-xl md:text-2xl font-bold text-teal-500 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-400 to-violet-400 dark:from-teal-500 dark:via-blue-500 dark:to-violet-500">
                    {t(item.titleKey)}
                  </h3>
                </div>
                <p className="text-gray-800 text-md leading-relaxed text-justify dark:text-gray-200">
                  {t(item.descriptionKey)}
                </p>
              </CardContent>
            </Card>
          ))}

          {/* Officer Section */}
          <Card className="bg-white/20 border border-gray-200 backdrop-blur-xl shadow-lg rounded-3xl dark:bg-gray-800/30 dark:border-gray-700">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-teal-400" />
                <h3 className="text-xl md:text-2xl font-bold text-teal-500">
                  {t("rti.officer.section")}
                </h3>
              </div>
              {officers.map((off, i) => (
                <div key={i} className="border-t pt-3">
                  <p className="font-semibold">{t(off.roleKey)}</p>
                  <p className="text-gray-700 dark:text-gray-300">{t(off.nameKey)}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
