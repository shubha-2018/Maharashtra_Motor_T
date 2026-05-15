import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  Navigation,
} from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactUs() {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const goBack = () => navigate(-1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.02] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-4 lg:px-0 py-4 md:py-4">
        {/* Back Navigation */}
        <div>
          <Button
            variant="ghost"
            onClick={goBack}
            className="group flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-all duration-300 rounded-xl px-4 py-2"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />

            <span className="font-medium">
              {language === "mr"
                ? "मुख्यपृष्ठावर परत जा"
                : "Back to Home"}
            </span>
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-slate-100 dark:via-blue-400 dark:to-slate-100 bg-clip-text text-transparent">
              {language === "mr" ? "संपर्क करा" : "Contact Us"}
            </span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 mx-auto rounded-full mb-4" />

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light">
            {language === "mr"
              ? "महाराष्ट्र पोलीस मोटार परिवहन विभागाशी संपर्क साधा"
              : "Get in touch with the Maharashtra Police Motor Transport Department"}
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Address Card */}
          <Card className="group bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 dark:bg-slate-900/80 dark:border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-blue-100 dark:bg-blue-950/70 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-blue-700 dark:text-blue-400" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-blue-600" />

                    {language === "mr" ? "पत्ता" : "Office Address"}
                  </h3>

                  <div className="space-y-1 text-slate-600 dark:text-slate-400 leading-relaxed">
                    {language === "mr" ? (
                      <>
                        <p>मोटार परिवहन विभाग, महाराष्ट्र राज्य, पुणे</p>

                        <p>
                          विशेष पोलीस महानिरीक्षक, मोटार परिवहन विभाग
                        </p>

                        <p>
                          धनकुडे वस्ती, पॅन कार्ड क्लब रोड,
                          बाणेर, पुणे – ४११०४५,
                          महाराष्ट्र, भारत
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          Motor Transport Department,
                          Maharashtra State, Pune
                        </p>

                        <p>
                          Office of the Special Inspector General of Police,
                          Motor Transport Department
                        </p>

                        <p>
                          Dhanukude Wasti, Pancard Club Road,
                          Baner, Pune – 411045,
                          Maharashtra, India
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Details */}
          <Card className="bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 dark:bg-slate-900/80 dark:border-slate-800">
            <CardContent className="p-6 space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="p-3 bg-blue-100 dark:bg-blue-950/70 rounded-xl">
                  <Phone className="w-6 h-6 text-blue-700 dark:text-blue-400" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    {language === "mr"
                      ? "दूरध्वनी क्रमांक"
                      : "Phone Number"}
                  </h3>

                  <p className="text-2xl font-bold text-blue-700 dark:text-blue-400 font-mono">
                    +91 02025883841
                  </p>

                  <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                    {language === "mr"
                      ? "२४x७ आपत्कालीन सेवा"
                      : "24/7 Emergency Support"}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="p-3 bg-blue-100 dark:bg-blue-950/70 rounded-xl">
                  <Mail className="w-6 h-6 text-blue-700 dark:text-blue-400" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    {language === "mr" ? "ई-मेल" : "Email Address"}
                  </h3>

                  <p className="text-slate-700 dark:text-slate-300">
                    motortransport@mahapolice.gov.in
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-3">
              {language === "mr"
                ? "आमचे स्थान"
                : "Our Location"}
            </h2>

            <div className="w-20 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full" />

            <p className="mt-4 text-slate-600 dark:text-slate-400">
              {language === "mr"
                ? "आमच्या मुख्य कार्यालयाला भेट द्या"
                : "Visit us at our headquarters"}
            </p>
          </div>

          <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <div className="relative">
              {/* Map */}
              <div className="relative aspect-[16/5] w-full">
                <iframe
                  title="Motor Transport Department Pune"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.373203119329!2d73.80165277496513!3d18.557706082539557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf4de51dc0d5%3A0xc32f75e34a56d03!2sPolice%20Wireless%20%26%20Spl%2C%20Chavan%20Nagar%2C%20Pashan%2C%20Pune%2C%20Maharashtra%20411008!5e0!3m2!1sen!2sin!4v1730265600000!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Map Button */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                <a
                  href="https://maps.app.goo.gl/vNryNvcBfcrV28dA7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-5 py-2.5 rounded-full shadow-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <Navigation className="w-4 h-4" />

                  {language === "mr"
                    ? "गुगल मॅपवर दिशा पहा"
                    : "Get Directions on Google Maps"}
                </a>
              </div>

              {/* Location Badge */}
              <div className="absolute top-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" />

                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {language === "mr"
                      ? "मुख्य कार्यालय"
                      : "Police Headquarters"}
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Bottom Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50/50 dark:bg-blue-950/30 rounded-lg p-4 text-center backdrop-blur-sm">
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                {language === "mr"
                  ? "जवळचे ठिकाण"
                  : "Nearest Landmark"}
              </p>

              <p className="text-slate-800 dark:text-slate-200">
                {language === "mr"
                  ? "चव्हाण नगर, पाषाण"
                  : "Chavan Nagar, Pashan"}
              </p>
            </div>

            <div className="bg-blue-50/50 dark:bg-blue-950/30 rounded-lg p-4 text-center backdrop-blur-sm">
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                {language === "mr"
                  ? "पोलीस विभाग कोड"
                  : "Police Department Code"}
              </p>

              <p className="text-slate-800 dark:text-slate-200 font-mono">
                PUNE-MT-001
              </p>
            </div>

            <div className="bg-blue-50/50 dark:bg-blue-950/30 rounded-lg p-4 text-center backdrop-blur-sm">
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                {language === "mr"
                  ? "कार्यक्षेत्र"
                  : "Jurisdiction"}
              </p>

              <p className="text-slate-800 dark:text-slate-200">
                {language === "mr"
                  ? "पुणे महानगर क्षेत्र"
                  : "Pune Metropolitan Region"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}