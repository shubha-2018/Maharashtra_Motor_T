import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "@/contexts/LanguageContext"; // Import the language hook

export default function ContactUs() {
  const navigate = useNavigate();
  const { t } = useLanguage(); // Use the language hook
  const goBack = () => navigate(-1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-40 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full dark:bg-blue-700/20"></div>
        <div className="absolute bottom-32 right-40 w-[32rem] h-[32rem] bg-blue-800/20 blur-3xl rounded-full dark:bg-blue-900/20"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Back to Home Button */}
        <Button
          variant="ghost"
          onClick={goBack}
          className="flex items-center text-gray-900 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-blue-200 mb-6 dark:text-gray-100 dark:hover:bg-blue-950/30 dark:hover:text-blue-300 dark:hover:shadow-blue-900/30"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> {t("back.home")}
        </Button>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl p-3 font-extrabold tracking-tight text-center bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent drop-shadow-lg dark:from-blue-500 dark:via-blue-600 dark:to-blue-700">
          {t("contact.title")}
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-gray-600 text-center mb-10 dark:text-gray-300">
          {t("contact.subtitle")}
        </h2>

        {/* Contact Details Card */}
        <Card className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-blue-400/20 transition-all duration-500 dark:bg-gray-800/30 dark:border-gray-700 dark:hover:shadow-blue-600/20">
          <CardContent className="p-10 space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0 dark:text-blue-500" />
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">{t("contact.address.title")}</h3>
                <p className="text-gray-800 text-lg leading-relaxed dark:text-gray-200">
                  {t("contact.address.line1")} <br />
                  {t("contact.address.line2")} <br />
                  {t("contact.address.line3")} <br />
                  {t("contact.address.line4")}
                </p>
              </div>
            </div>

            {/* Telephone */}
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0 dark:text-blue-500" />
              <div>
                <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">{t("contact.phone.title")}</h3>
                <p className="text-gray-800 text-lg leading-relaxed dark:text-gray-200">{t("contact.phone.number")}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0 dark:text-blue-500" />
              <div>
                <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">{t("contact.email.title")}</h3>
                <p className="text-gray-800 text-lg leading-relaxed dark:text-gray-200">
                  {t("contact.email.address")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Map Section Heading */}
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6 dark:text-blue-400">
          {t("contact.map.title")}
        </h2>

        {/* Embedded Google Map */}
        <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
          <iframe
            title={t("contact.map.title")}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.251042550248!2d73.84777751507805!3d18.520430683199236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0921aeb4c7f%3A0x6f203f27b4c8b5f!2sMaharashtra%20Police%20Headquarters%2C%20Pune!5e0!3m2!1sen!2sin!4v1694999999999!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}