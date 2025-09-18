// Imports
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import historyPhoto from "@/assets/1.jpg";
import { useNavigate } from "react-router";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ABOUT_IMG from "@/assets/about.jpg";

// Table data (designations stay static, but counts can be translated if needed)
const staffData = [
  {
    sr: 1,
    designation:
      "Addl. DGP & Director Police Communication, IT & Transport, M.S. Pune",
    posts: 1,
  },
  {
    sr: 2,
    designation:
      "Deputy Inspector General of Police Communication & IT, M.S. Pune",
    posts: 1,
  },
  {
    sr: 3,
    designation:
      "Additional Commissioner of Police Communication & IT, M.S. Mumbai",
    posts: 1,
  },
  { sr: 4, designation: "Supdt. Of Police Communication & IT", posts: 5 },
  {
    sr: 5,
    designation: "Deputy Commissioner of Police Communication & IT",
    posts: 2,
  },
  {
    sr: 6,
    designation: "Deputy Supdt. Of Police / Asst. Commissioner of Police",
    posts: 37,
  },
  { sr: 7, designation: "Police Inspector (PI)", posts: 179 },
  { sr: 8, designation: "Police Sub – Inspector (PSI)", posts: 426 },
  { sr: 9, designation: "ASI (Senior Technical Officer)", posts: 874 },
  { sr: 10, designation: "HC (Technical Officer)", posts: 1958 },
  { sr: 11, designation: "ASI (Senior Technical Assistant)", posts: 8 },
  { sr: 12, designation: "HC (Technical Assistant Grade II)", posts: 24 },
  { sr: 13, designation: "PN (Technical Assistant Grade I)", posts: 73 },
  { sr: 14, designation: "PC (Technical Assistant)", posts: 247 },
  { sr: 15, designation: "ASI (Driver)", posts: 1 },
  { sr: 16, designation: "HC (Driver)", posts: 4 },
  { sr: 17, designation: "PN (Driver)", posts: 10 },
  { sr: 18, designation: "PC (Driver)", posts: 18 },
];

// Timeline data
const timelineData = [
  { year: "1946", title: "hx_1946_title", description: "hx_1946_desc" },
  { year: "1947", title: "hx_1947_title", description: "hx_1947_desc" },
];

// Component
export default function History() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const onBack = () => navigate("/");

  // Pagination
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(staffData.length / rowsPerPage);
  const currentData = staffData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="flex items-center text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> {t("hx_back")}
        </Button>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/10 blur-lg opacity-75 group-hover:opacity-100 transition duration-700"></div>
              <img
                src={ABOUT_IMG}
                alt={t("hx_photoAlt")}
                className="relative w-64 h-40 md:w-80 md:h-52 rounded-2xl object-cover border-4 border-gray-200 dark:border-gray-700 shadow-xl transition-all duration-500 group-hover:border-gray-400 group-hover:shadow-2xl"
              />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              {t("hx_title")}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
              {t("hx_intro")}
            </p>
          </div>
        </div>

        {/* About Section */}
        <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md rounded-2xl">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {t("about.title")}
            </h2>
            <div
              className="text-gray-700 dark:text-gray-300 space-y-4"
              dangerouslySetInnerHTML={{ __html: t("about.description") }}
            ></div>
          </CardContent>
        </Card>

        {/* Timeline Section */}
        <div className="relative border-l-2 border-gray-300 dark:border-gray-700 pl-8 space-y-10">
          {timelineData.map((item, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md rounded-2xl"
            >
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {t(item.title)}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {t(item.description)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Table Section */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6 border border-gray-200 dark:border-gray-700 space-y-6">
          <h2 className="text-2xl font-bold">{t("hx_tableTitle")}</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t("hx_table_sr")}</TableHead>
                <TableHead>{t("hx_table_desig")}</TableHead>
                <TableHead>{t("hx_table_posts")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentData.map((row) => (
                <TableRow key={row.sr}>
                  <TableCell>{row.sr}</TableCell>
                  <TableCell>{row.designation}</TableCell>
                  <TableCell>{row.posts}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex justify-between items-center pt-4">
            <Button
              variant="outline"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              {t("hx_prev")}
            </Button>
            <span className="text-gray-600 dark:text-gray-400">
              {t("hx_page")} {page} {t("hx_of")} {totalPages}
            </span>
            <Button
              variant="outline"
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              {t("hx_next")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
