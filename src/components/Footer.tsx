import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Eye,
  Users,
  Calendar,
  ExternalLink,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { key: "nav.home", href: "/" },
    { key: "nav.about", href: "/about/directors-desk" },
    { key: "nav.citizens", href: "/citizen/press-release" },
    { key: "nav.tenders", href: "/citizen/recruitments" },
    { key: "nav.contact", href: "/contact" },
    { key: "nav.gallery", href: "/gallery" },
  ];

  const importantLinks = [
    { key: "dial.112", href: "tel:112", external: true },
    {
      key: "e.office",
      href: "https://eoffice.mahapolice.gov.in/",
      external: true,
    },
    {
      key: "nic.email",
      href: "https://accounts.mgovcloud.in/signin?servicename=VirtualOffice&serviceurl=https%3A%2F%2Fmail.mgovcloud.in%2F",
      external: true,
    },
    {
      key: "maha.police",
      href: "https://mahapolice.gov.in",
      external: true,
    },
    { key: "rti", href: "/citizen/rti", external: true },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61577135066429",
      color: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      href: "https://x.com/MH_POLICE_PCIT",
      color: "hover:text-blue-400",
    },
    {
      icon: Linkedin,
      href: "https://www.instagram.com/mh_police_pcit/",
      color: "hover:text-blue-700",
    },
  ];

  const visitorStats = {
    totalVisitors: "2,45,678",
    todayVisitors: "1,234",
  };

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-saffron dark:text-yellow-400 mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              {t("quick.links")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-saffron dark:hover:text-yellow-400 transition-colors duration-300 text-sm flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 bg-saffron dark:bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-saffron dark:text-yellow-400 mb-4 flex items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              {t("important.links")}
            </h3>
            <ul className="space-y-2">
              {importantLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-saffron dark:hover:text-yellow-400 transition-colors duration-300 text-sm flex items-center gap-1 group"
                    {...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    <span className="w-1 h-1 bg-saffron dark:bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {t(link.key)}
                    {link.external && (
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-saffron dark:text-yellow-400 mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              {t("contact.info")}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-saffron dark:text-yellow-400 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-800 dark:text-gray-200 font-medium mb-1">
                    {t("address")}:
                  </p>
                  <p
                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: t("dept.address") }}
                  >
                    {/* address */}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-saffron dark:text-yellow-400" />
                <div className="text-sm">
                  <span className="text-gray-800 dark:text-gray-200 font-medium">
                    {t("phone")}:{" "}
                  </span>
                  <a
                    href="tel:+912222621234"
                    className="text-gray-700 dark:text-gray-300 hover:text-saffron dark:hover:text-yellow-400 transition-colors"
                  >
                    +91-22-2262-1234
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-saffron dark:text-yellow-400" />
                <div className="text-sm">
                  <span className="text-gray-800 dark:text-gray-200 font-medium">
                    {t("email")}:{" "}
                  </span>
                  <a
                    href="mailto:pcit@mahapolice.gov.in"
                    className="text-gray-700 dark:text-gray-300 hover:text-saffron dark:hover:text-yellow-400 transition-colors"
                  >
                    pcit@mahapolice.gov.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Visitor Statistics & Social */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-saffron dark:text-yellow-400 mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                {t("visitor.stats")}
              </h3>
              <div className="glass bg-white/10 dark:bg-gray-800/30 rounded-lg p-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700 dark:text-gray-300">
                    Total Visitors:
                  </span>
                  <span className="font-bold text-saffron dark:text-yellow-400">
                    {visitorStats.totalVisitors}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700 dark:text-gray-300">
                    Last Uploaded:
                  </span>
                  <span className="font-bold text-saffron dark:text-yellow-400">
                {new Date().toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-sm font-semibold text-saffron dark:text-yellow-400 mb-3">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-2 bg-white/10 dark:bg-gray-800/30 rounded-lg hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-300 ${social.color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
              {t("copyright")}
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>|</span>
              <Link
                to="/privacy-policy"
                className="hover:text-saffron dark:hover:text-yellow-400 transition-colors"
              >
                {t("footer.privacyPolicy")}
              </Link>
              <span>|</span>
              <Link
                to="/terms-of-use"
                className="hover:text-saffron dark:hover:text-yellow-400 transition-colors"
              >
                {t("footer.termsOfUse")}
              </Link>
              <span>|</span>
              <Link
                to="/accessibility"
                className="hover:text-saffron dark:hover:text-yellow-400 transition-colors"
              >
                {t("footer.accessibility")}
              </Link>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-500 text-center md:text-right">
              {t("developed.by")}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
