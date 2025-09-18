import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, FileText, Download } from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PromotionOrders() {
  const navigate = useNavigate();
  const goBack = () => navigate("/");
  const { t } = useLanguage();

 const promotionOrders = [
  { title: t("f3k9"), size: "996.97 KB", link: "https://mahpolwireless.stagingdsi.co.in/UploadedFiles/PromotionOrders/145.pdf" },
  { title: t("p7q2"), size: "408.09 KB", link: "file:///C:/Users/saura/Downloads/139.pdf" },
  { title: t("l8z4"), size: "965.81 KB", link: "file:///C:/Users/saura/Downloads/136.pdf" },
];

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 20;

  const filteredOrders = promotionOrders.filter((order) =>
    order.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredOrders.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const paginatedOrders = filteredOrders.slice(
    startIndex,
    startIndex + entriesPerPage
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-gray-100 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-40 w-96 h-96 bg-purple-400/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-32 right-40 w-[32rem] h-[32rem] bg-blue-400/20 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-10">
        <Button
          variant="ghost"
          onClick={goBack}
          className="flex items-center text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-gray-300 dark:hover:shadow-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> {t("q1w2")}
        </Button>

        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl p-3 font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
            {t("m9z8")}
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300">
            {t("v4b7")}
          </h2>
        </div>

        <Card className="p-6 rounded-3xl shadow-lg bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border border-gray-200 dark:border-gray-800">
          <div className="flex justify-between items-center mb-4">

            <input
              type="text"
              placeholder={t("r2p6")}
              className="px-4 py-2 border rounded-lg w-60 shadow-sm focus:ring focus:ring-purple-300 bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-purple-200 via-blue-200 to-teal-200 dark:from-purple-900 dark:via-blue-900 dark:to-teal-900 text-gray-900 dark:text-gray-100">
                  <th className="py-3 px-4 font-semibold">{t("t8n1")}</th>
                  <th className="py-3 px-4 font-semibold">{t("k4f5")}</th>
                  <th className="py-3 px-4 font-semibold">{t("z3v9")}</th>
                </tr>
              </thead>
              <tbody>
                {paginatedOrders.map((order, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <td className="py-3 px-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-purple-500" />
                      {order.title}
                    </td>
                    <td className="py-3 px-4 text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">
                      ({order.size})
                    </td>
                    <td className="py-3 px-4">
  <a href={order.link} download>
    <Button
      size="sm"
      variant="outline"
      className="flex items-center gap-2 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <Download className="w-4 h-4" /> {t("download")}
    </Button>
  </a>
</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-6">
            <span className="text-gray-600 dark:text-gray-400">
              {t("d7x2")} {currentPage} {t("y8c3")} {totalPages}
            </span>
            <div className="space-x-2">
              <Button
                size="sm"
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="dark:border-gray-700 dark:hover:bg-gray-700"
              >
                {t("u5w1")}
              </Button>
             
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
