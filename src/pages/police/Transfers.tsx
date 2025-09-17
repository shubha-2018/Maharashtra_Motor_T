import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, FileText, Download } from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TransfersOrders() {
  const navigate = useNavigate();
  const goBack = () => navigate("/");
  const { t } = useLanguage();

  const transferOrders = [
    { title: t("x9r7"), size: "426.73 KB", link: "https://mahpolwireless.stagingdsi.co.in/UploadedFiles/TransferOrders/457.pdf"  },
    { title: t("q3m2"), size: "1.26 MB", link: "https://mahpolwireless.stagingdsi.co.in/UploadedFiles/TransferOrders/459.pdf"  },
    { title: t("z5f8"), size: "1.52 MB", link: "https://mahpolwireless.stagingdsi.co.in/UploadedFiles/TransferOrders/460.pdf"  },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10;

  const filteredOrders = transferOrders.filter((order) =>
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
        <div className="absolute top-32 left-40 w-96 h-96 bg-green-400/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-32 right-40 w-[32rem] h-[32rem] bg-yellow-400/20 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-10">
        <Button
          variant="ghost"
          onClick={goBack}
          className="flex items-center text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-gray-300 dark:hover:shadow-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> {t("u7n4")}
        </Button>

        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
            {t("j2y6")}
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300">
            {t("p8a1")}
          </h2>
        </div>

        <Card className="p-6 rounded-3xl shadow-lg bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border border-gray-200 dark:border-gray-800">
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {t("r6w5", { count: entriesPerPage })}
            </span>
            <input
              type="text"
              placeholder={t("m1s9")}
              className="px-4 py-2 border rounded-lg w-60 shadow-sm focus:ring focus:ring-green-300 bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
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
                <tr className="bg-gradient-to-r from-green-200 via-yellow-200 to-red-200 dark:from-green-900 dark:via-yellow-900 dark:to-red-900 text-gray-900 dark:text-gray-100">
                  <th className="py-3 px-4 font-semibold">{t("y4g2")}</th>
                  <th className="py-3 px-4 font-semibold">{t("k9v3")}</th>
                  <th className="py-3 px-4 font-semibold">{t("h2d7")}</th>
                </tr>
              </thead>
              <tbody>
                {paginatedOrders.map((order, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <td className="py-3 px-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-green-500" />
                      {order.title}
                    </td>
                    <td className="py-3 px-4 text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">
                      ({order.size})
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
              {t("b3p8")} {currentPage} {t("f5z1")} {totalPages}
            </span>
            <div className="space-x-2">
              <Button
                size="sm"
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="dark:border-gray-700 dark:hover:bg-gray-700"
              >
                {t("n6x4")}
              </Button>
              <Button
                size="sm"
                variant="outline"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="dark:border-gray-700 dark:hover:bg-gray-700"
              >
                {t("c7r2")}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
