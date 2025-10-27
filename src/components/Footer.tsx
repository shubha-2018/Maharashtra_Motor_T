import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Eye,
  ExternalLink,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { key: "nav.home", to: "/" },
    { key: "nav.about", to: "/about/directors-desk" },
    { key: "nav.citizens", to: "/citizen/press-release" },
    { key: "nav.tenders", to: "/citizen/recruitments" },
    { key: "nav.flash", to: "/flashsection" },
    { key: "nav.contact", to: "/contact" },
    { key: "nav.gallery", to: "/gallery" },
  ];

  const importantLinks = [
    { key: "dial.112", href: "tel:112", external: true },
    { key: "e.office", href: "https://eoffice.mahapolice.gov.in/", external: true },
    { key: "nic.email", href: "https://accounts.mgovcloud.in/signin?servicename=VirtualOffice&serviceurl=https%3A%2F%2Fmail.mgovcloud.in%2F", external: true },
    { key: "maha.police", href: "https://mahapolice.gov.in", external: true },
    { key: "rti", to: "/citizen/rti" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61577135066429" },
    { icon: Twitter, href: "https://x.com/MH_POLICE_PCIT" },
    { icon: Instagram, href: "https://www.instagram.com/mh_police_pcit/" },
  ];

  const visitorStats = { totalVisitors: "2,45,678", todayVisitors: "1,234" };

  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white transition-colors">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#1D4ED8] mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#1D4ED8]" />
              {t("quick.links")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.to}
                    className="text-black dark:text-white hover:text-[#1D4ED8] transition-colors duration-300 text-sm flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 bg-[#1D4ED8] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#1D4ED8] mb-4 flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-[#1D4ED8]" />
              {t("important.links")}
            </h3>
            <ul className="space-y-2">
              {importantLinks.map((link) => (
                <li key={link.key}>
                  {link.external ? (
                    <a
                      href={link.href}
                      className="text-black dark:text-white hover:text-[#1D4ED8] transition-colors duration-300 text-sm flex items-center gap-1 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="w-1 h-1 bg-[#1D4ED8] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {t(link.key)}
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  ) : (
                    <Link
                      to={link.to!}
                      className="text-black dark:text-white hover:text-[#1D4ED8] transition-colors duration-300 text-sm flex items-center gap-1 group"
                    >
                      <span className="w-1 h-1 bg-[#1D4ED8] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {t(link.key)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#1D4ED8] mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#1D4ED8]" />
              {t("contact.info")}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#1D4ED8] mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-black dark:text-white font-medium mb-1">{t("address")}:</p>
                  <p
                    className="text-gray-800 dark:text-gray-200 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: t("dept.address") }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#1D4ED8]" />
                <div className="text-sm">
                  <span className="text-black dark:text-white font-medium">{t("phone")}: </span>
                  <a
                    href="tel:+9120225652505"
                    className="text-gray-800 dark:text-white hover:text-[#1D4ED8] transition-colors"
                  >
                    020-25652505
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#1D4ED8]" />
                <div className="text-sm">
                  <span className="text-black dark:text-white font-medium">{t("email")}: </span>
                  <a
                    href="mailto:dir.polwireless.pune@mahapolice.gov.in"
                    className="text-gray-800 dark:text-white hover:text-[#1D4ED8] transition-colors"
                  >
                    dir.polwireless.pune@mahapolice.gov.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Visitor Statistics & Social */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#1D4ED8] mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#1D4ED8]" />
                {t("visitor.stats")}
              </h3>
              <div className="glass bg-white/10 dark:bg-[#1D1D1D] rounded-lg p-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-800 dark:text-white">Total Visitors:</span>
                  <span className="font-bold text-[#1D4ED8]">{visitorStats.totalVisitors}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-800 dark:text-white">Last Uploaded:</span>
                  <span className="font-bold text-[#1D4ED8]">{new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-[#1D4ED8] mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 bg-white/10 dark:bg-[#1D1D1D] rounded-lg hover:bg-white/20 dark:hover:bg-[#1D4ED8]/30 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-4 h-4 text-[#1D4ED8]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-white dark:bg-black border-t border-gray-300 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-black dark:text-white text-center md:text-left">{t("copyright")}</div>
          <div className="flex items-center gap-4 text-sm text-black dark:text-white">
            <Link to="/privacy-policy" className="hover:text-[#1D4ED8] transition-colors">{t("footer.privacyPolicy")}</Link>
            <span>|</span>
            <Link to="/accessibility" className="hover:text-[#1D4ED8] transition-colors">{t("footer.accessibility")}</Link>
            <span>|</span>
            <Link to="/terms-of-use" className="hover:text-[#1D4ED8] transition-colors">{t("footer.termsOfUse")}</Link>
          </div>
          <div className="text-sm text-black dark:text-white text-center md:text-right">{t("developed.by")}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
