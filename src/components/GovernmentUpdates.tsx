import React, { useEffect, useState } from "react";
import { ExternalLink, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Notice {
  _id: string;
  title_en?: string;
  title_mr?: string;
  pdf: string;
  createdAt: string;
}

const GovernmentUpdates: React.FC = () => {
  const { language } = useLanguage();

  const [bulletins, setBulletins] = useState<Notice[]>([]);
  const [tenders, setTenders] = useState<Notice[]>([]);
  const [bulletinOffset, setBulletinOffset] = useState(0);
  const [tenderOffset, setTenderOffset] = useState(0);
  const [pauseBulletins, setPauseBulletins] = useState(false);
  const [pauseTenders, setPauseTenders] = useState(false);

  // ================= FETCH DATA =================
  useEffect(() => {
    // Bulletins
    fetch("http://localhost:5000/api/notices")
      .then((res) => res.json())
      .then((data) => {
        // Backend object देत असेल तरी safe
        setBulletins(Array.isArray(data) ? data : data.files || []);
      })
      .catch(() => console.error("Failed to load bulletins"));

    // Tenders
    fetch("http://localhost:5000/api/tenders")
      .then((res) => res.json())
      .then((data) => {
        setTenders(Array.isArray(data) ? data : data.data || []);
      })
      .catch(() => console.error("Failed to load tenders"));
  }, []);

  // ================= AUTO SCROLL =================
  useEffect(() => {
    if (pauseBulletins) return;
    const interval = setInterval(() => setBulletinOffset((o) => o + 1), 40);
    return () => clearInterval(interval);
  }, [pauseBulletins]);

  useEffect(() => {
    if (pauseTenders) return;
    const interval = setInterval(() => setTenderOffset((o) => o + 1), 40);
    return () => clearInterval(interval);
  }, [pauseTenders]);

  useEffect(() => {
    if (bulletinOffset > bulletins.length * 80) setBulletinOffset(0);
  }, [bulletinOffset, bulletins.length]);

  useEffect(() => {
    if (tenderOffset > tenders.length * 80) setTenderOffset(0);
  }, [tenderOffset, tenders.length]);

  const bulletinItems = [...bulletins, ...bulletins];
  const tenderItems = [...tenders, ...tenders];

  const getTitle = (item: Notice) =>
    language === "en" ? item.title_en : item.title_mr;

  const bulletinTitle =
    language === "en"
      ? "Latest Bulletins / Orders / Notices"
      : "नवीन बुलेटिन / आदेश / सूचना";

  const tenderTitle =
    language === "en" ? "Latest Tenders" : "नवीन निविदा";

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-6">

        {/* ================= BULLETINS ================= */}
        <div
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
          onMouseEnter={() => setPauseBulletins(true)}
          onMouseLeave={() => setPauseBulletins(false)}
        >
          <div className="bg-blue-900 text-white py-4 text-center font-bold">
            {bulletinTitle}
          </div>

          <div className="relative h-80 overflow-hidden">
            <div
              className="absolute w-full"
              style={{ transform: `translateY(-${bulletinOffset}px)` }}
            >
              {bulletinItems.map((b, i) => (
                <div
                  key={`${b._id || i}`}
                  className="mx-6 my-3 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-900"
                >
                  <div className="flex justify-between">
                    <h3 className="text-sm font-medium">
                      {getTitle(b) || "No Title"}
                    </h3>
                    <span className="text-xs text-gray-600">
                      {b.createdAt
                        ? new Date(b.createdAt).toLocaleDateString(
                            language === "en" ? "en-IN" : "mr-IN"
                          )
                        : ""}
                    </span>
                  </div>

                  <div className="flex gap-3 mt-2 text-xs">
                    <a
                      href={`http://localhost:5000/uploads/pdfs/${b.pdf}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-blue-900"
                    >
                      <ExternalLink size={14} />
                      {language === "en" ? "Open" : "पहा"}
                    </a>
                    <a
                      href={`http://localhost:5000/uploads/pdfs/${b.pdf}`}
                      download
                      className="flex items-center gap-1 text-gray-700"
                    >
                      <Download size={14} />
                      {language === "en" ? "Download" : "डाउनलोड"}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= TENDERS ================= */}
        <div
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
          onMouseEnter={() => setPauseTenders(true)}
          onMouseLeave={() => setPauseTenders(false)}
        >
          <div className="bg-blue-900 text-white py-4 text-center font-bold">
            {tenderTitle}
          </div>

          <div className="relative h-80 overflow-hidden">
            <div
              className="absolute w-full"
              style={{ transform: `translateY(-${tenderOffset}px)` }}
            >
              {tenderItems.map((t, i) => (
                <div
                  key={`${t._id || i}`}
                  className="mx-6 my-3 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-900"
                >
                  <div className="flex justify-between">
                    <h3 className="text-sm font-medium">
                      {getTitle(t) || "No Title"}
                    </h3>
                    <span className="text-xs text-gray-600">
                      {t.createdAt
                        ? new Date(t.createdAt).toLocaleDateString(
                            language === "en" ? "en-IN" : "mr-IN"
                          )
                        : ""}
                    </span>
                  </div>

                  <div className="flex gap-3 mt-2 text-xs">
                    <a
                      href={`http://localhost:5000/uploads/tenders/${t.pdf}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-blue-900"
                    >
                      <ExternalLink size={14} />
                      {language === "en" ? "Open" : "पहा"}
                    </a>
                    <a
                      href={`http://localhost:5000/uploads/tenders/${t.pdf}`}
                      download
                      className="flex items-center gap-1 text-gray-700"
                    >
                      <Download size={14} />
                      {language === "en" ? "Download" : "डाउनलोड"}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GovernmentUpdates;
