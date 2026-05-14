import React from "react";
import { Shield, MapPin, Award, Star, BadgeCheck } from "lucide-react";
import { useLanguageContext } from "../../contexts/LanguageContext";
import FlowChart from "../../components/FlowChart";

import id1 from "../../assets/MT-Officer/deshmukh123.jpg";
import id3 from "../../assets/MT-Officer/sandip_shinde.jpg";
import id0 from "../../assets/MT-Officer/Deepak_IPS.jpeg";
import id7 from "../../assets/MT-Officer/morale_sir12.jpg";
import id8 from "../../assets/MT-Officer/gayatri_sp-removebg-preview.png";
import id2 from "../../assets/MT-Officer/atul_patilsir.jpg";

const officers = [
  {
    id: 0, type: "adgp",
    name: { marathi: "श्री. दीपक शिवानंद पाण्डेय्", english: "Shri. Deepak Shivanand Pandey" },
    position: {
      marathi: "अपर पोलीस महासंचालक व संचालक, पोलीस दळणवळण, माहिती तंत्रज्ञान व परिवहन, महाराष्ट्र राज्य, पुणे",
      english: "Additional Director General of Police And Director, IT and Logistics, Maharashtra State, Pune",
    },
    badge: { marathi: "भा पो से", english: "IPS" },
    rank: { marathi: "अपर महासंचालक", english: "Addl. Director General" },
    image: id0,
  },
  {
    id: 1, type: "igp",
    name: { marathi: "श्री अशोक मोराळे", english: "Shri. Ashok Morale" },
    position: {
      marathi: "विशेष पोलीस महानिरीक्षक, मोटार परिवहन, महाराष्ट्र राज्य, पुणे",
      english: "Special Inspector General of Police, Motor Transport, Maharashtra State, Pune",
    },
    badge: { marathi: "भा पो से", english: "IPS" },
    rank: { marathi: "विशेष महानिरीक्षक", english: "Spl. Inspector General" },
    image: id7,
  },
  {
    id: 2, type: "dig",
    name: { marathi: "श्री. अतुल पाटील", english: "Shri. Atul Patil" },
    position: {
      marathi: "पोलीस उप-महानिरीक्षक, मोटार परिवहन, महाराष्ट्र राज्य, पुणे",
      english: "Deputy Inspector General of Police, Motor Transport, Maharashtra State, Pune",
    },
    rank: { marathi: "उप महानिरीक्षक", english: "Dy. Inspector General" },
    image: id2,
  },
  {
    id: 3, type: "sp",
    name: { marathi: "श्रीमती गायत्री पवार", english: "Smt. Gayatri Pawar" },
    position: { marathi: "पोलीस अधीक्षक मुख्यालय पुणे", english: "Superintendent of Police, Headquarters, Pune" },
    location: { marathi: "मुख्यालय, पुणे", english: "Pune HQ" },
    rank: { marathi: "पोलीस अधीक्षक", english: "Superintendent of Police" },
    image: id8,
  },
  {
    id: 4, type: "sp",
    name: { marathi: "श्री तुषार देशमुख", english: "Shri Tushar Deshmukh" },
    position: { marathi: "पोलीस अधीक्षक पुणे परिक्षेत्र", english: "Addl. Superintendent of Police, Pune Range" },
    location: { marathi: "पुणे परिक्षेत्र", english: "Pune Range" },
    rank: { marathi: "पोलीस अधीक्षक", english: "Addl. SP" },
    image: id1,
  },
  {
    id: 5, type: "sp",
    name: { marathi: "रिक्त", english: "Vacant" },
    position: { marathi: "पोलीस अधीक्षक संभाजीनगर परिक्षेत्र", english: "Addl. SP, Ch. Sambhaji Nagar Range" },
    location: { marathi: "संभाजी नगर", english: "Sambhaji Nagar" },
    rank: { marathi: "पोलीस अधीक्षक", english: "Addl. SP" },
    image: null,
  },
  {
    id: 6, type: "sp",
    name: { marathi: "श्री संदीप शिंदे", english: "Shri Sandip Shinde" },
    position: { marathi: "पोलीस अधीक्षक नागपूर परिक्षेत्र", english: "Addl. SP, Nagpur Range" },
    location: { marathi: "नागपूर", english: "Nagpur" },
    rank: { marathi: "पोलीस अधीक्षक", english: "Addl. SP" },
    image: id3,
  },
  {
    id: 7, type: "sp",
    name: { marathi: "रिक्त", english: "Vacant" },
    position: { marathi: "पोलीस अधीक्षक कोकण परिक्षेत्र", english: "Addl. SP, Konkan Range" },
    location: { marathi: "कोकण", english: "Konkan" },
    rank: { marathi: "पोलीस अधीक्षक", english: "Addl. SP" },
    image: null,
  },
];

// ── Tier configs ───────────────────────────────────────────────
const tierConfig: Record<string, {
  accentBar: string;
  rankBg: string;
  rankText: string;
  divider: string;
  photoHeight: string;
}> = {
  adgp: {
    accentBar:   "bg-amber-500",
    rankBg:      "bg-amber-50 dark:bg-amber-900/30",
    rankText:    "text-amber-900 dark:text-amber-300",
    divider:     "bg-amber-500",
    photoHeight: "w-[120px] h-[160px]",
  },
  igp: {
    accentBar:   "bg-blue-500",
    rankBg:      "bg-blue-50 dark:bg-blue-900/30",
    rankText:    "text-blue-900 dark:text-blue-300",
    divider:     "bg-blue-500",
    photoHeight: "w-[120px] h-[148px]",
  },
  dig: {
    accentBar:   "bg-indigo-400",
    rankBg:      "bg-indigo-50 dark:bg-indigo-900/30",
    rankText:    "text-indigo-900 dark:text-indigo-300",
    divider:     "bg-indigo-400",
    photoHeight: "w-[120px] h-[136px]",
  },
  sp: {
    accentBar:   "bg-slate-400",
    rankBg:      "bg-gray-100 dark:bg-gray-800",
    rankText:    "text-gray-600 dark:text-gray-300",
    divider:     "bg-slate-400",
    photoHeight: "w-full",
  },
};

// ── Connector ─────────────────────────────────────────────────
const Connector = () => (
  <div className="flex flex-col items-center py-1">
    <div className="w-px h-6 bg-gray-200 dark:bg-gray-700" />
    <div className="w-2 h-2 rounded-full border-[1.5px] border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900" />
    <div className="w-px h-6 bg-gray-200 dark:bg-gray-700" />
  </div>
);

// ── Senior Officer Card (horizontal layout) ───────────────────
const SeniorCard = ({ officer }: { officer: any }) => {
  const { language } = useLanguageContext();
  const t = (obj: any) => (language === "mr" ? obj.marathi : obj.english);
  const cfg = tierConfig[officer.type];
  const isVacant = officer.name.english === "Vacant";

  return (
    <div className="w-full flex rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-200">
      
      {/* Left accent bar */}
      <div className={`w-1 flex-shrink-0 ${cfg.accentBar}`} />

      {/* Photo */}
      <div className={`relative flex-shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-800 ${cfg.photoHeight}`}>
        {officer.image && !isVacant ? (
          <img
            src={officer.image}
            alt={t(officer.name)}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 20%" }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Shield className="w-10 h-10 text-gray-300 dark:text-gray-600" />
          </div>
        )}

        {/* IPS badge */}
        {officer.badge && (
          <div className="absolute top-2 right-2 flex items-center gap-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-2 py-0.5 rounded-full">
            <BadgeCheck className="w-3 h-3 text-blue-600" />
            <span className="text-[10px] font-medium text-blue-700 dark:text-blue-400">
              {t(officer.badge)}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 px-5 py-4 flex flex-col justify-center gap-1.5">
        <span className={`self-start text-[10px] font-medium px-3 py-0.5 rounded-full ${cfg.rankBg} ${cfg.rankText}`}>
          {t(officer.rank)}
        </span>
        <h3 className="text-[15px] font-medium text-gray-900 dark:text-white leading-snug">
          {t(officer.name)}
        </h3>
        <div className={`w-7 h-[2px] rounded-full ${cfg.divider}`} />
        <p className="text-[11.5px] text-gray-500 dark:text-gray-400 leading-relaxed">
          {t(officer.position)}
        </p>
      </div>
    </div>
  );
};

// ── SP Card ───────────────────────────────────────────────────
const SpCard = ({ officer }: { officer: any }) => {
  const { language } = useLanguageContext();
  const t = (obj: any) => (language === "mr" ? obj.marathi : obj.english);
  const isVacant = officer.name.english === "Vacant";

  return (
    <div
      className={`rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 border-l-[3px] border-l-slate-400 flex flex-col hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-200 ${isVacant ? "opacity-45" : ""}`}
    >
      {/* Photo */}
      <div className="relative w-full aspect-[3/4] max-h-[160px] overflow-hidden bg-gray-100 dark:bg-gray-800">
        {officer.image && !isVacant ? (
          <img
            src={officer.image}
            alt={t(officer.name)}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 20%" }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-gray-300 dark:text-gray-600" />
          </div>
        )}

        {officer.location && (
          <div className="absolute bottom-1.5 left-1.5 flex items-center gap-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-2 py-0.5 rounded-full">
            <MapPin className="w-2.5 h-2.5 text-blue-600 flex-shrink-0" />
            <span className="text-[9px] font-medium text-blue-700 dark:text-blue-300">
              {t(officer.location)}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="px-3 py-3 flex flex-col gap-1.5 flex-1">
        <span className="self-start text-[9px] font-medium px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
          {t(officer.rank)}
        </span>
        <h3 className="text-[12px] font-medium text-gray-900 dark:text-white leading-tight">
          {t(officer.name)}
        </h3>
        <div className="w-4 h-[2px] rounded-full bg-slate-400" />
        <p className="text-[10px] text-gray-400 dark:text-gray-500 leading-snug flex-1">
          {t(officer.position)}
        </p>
      </div>
    </div>
  );
};

// ── Main Page ─────────────────────────────────────────────────
const OrganisationStructure = () => {
  const { language } = useLanguageContext();

  const adgp = officers.find((o) => o.type === "adgp")!;
  const igp  = officers.find((o) => o.type === "igp")!;
  const dig  = officers.find((o) => o.type === "dig")!;
  const sps  = officers.filter((o) => o.type === "sp");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-24">

      {/* ── Hero Header ── */}
      <div className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 py-14 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-600 via-amber-300 to-amber-600" />

        <div className="relative z-10 flex flex-col items-center gap-2.5">
          <div className="flex items-center gap-3 mb-0.5">
            <div className="w-10 h-px bg-amber-400" />
            <Award className="w-5 h-5 text-amber-400" />
            <div className="w-10 h-px bg-amber-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {language === "mr" ? "संघटनात्मक रचना" : "Organisational Structure"}
          </h1>
          <p className="text-blue-200/80 text-sm max-w-md mx-auto px-4">
            {language === "mr"
              ? "महाराष्ट्र राज्य पोलीस मोटार परिवहन विभाग"
              : "Maharashtra State Police Motor Transport Department"}
          </p>
          <div className="flex items-center gap-3 mt-0.5">
            <div className="w-10 h-px bg-amber-400" />
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <div className="w-10 h-px bg-amber-400" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-600 via-amber-300 to-amber-600" />
      </div>

      {/* ── Flow Chart ── */}
      <div className="flex justify-center my-10 px-4">
        <FlowChart />
      </div>

      {/* ── Hierarchy ── */}
      <div className="flex flex-col items-center px-4">

        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-14 bg-gray-200 dark:bg-gray-800" />
          <span className="text-[10px] font-medium tracking-widest uppercase text-gray-400 dark:text-gray-500">
            {language === "mr" ? "अधिकारी पदानुक्रम" : "Officer Hierarchy"}
          </span>
          <div className="h-px w-14 bg-gray-200 dark:bg-gray-800" />
        </div>

        {/* ADGP */}
        <div className="w-full max-w-[460px]">
          <SeniorCard officer={adgp} />
        </div>

        <Connector />

        {/* IGP */}
        <div className="w-full max-w-[460px]">
          <SeniorCard officer={igp} />
        </div>

        <Connector />

        {/* DIG */}
        <div className="w-full max-w-[460px]">
          <SeniorCard officer={dig} />
        </div>

        {/* Branch down */}
        <div className="flex flex-col items-center">
          <div className="w-px h-6 bg-gray-200 dark:bg-gray-700" />
          <div className="w-2 h-2 rounded-full border-[1.5px] border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900" />
          <div className="w-px h-4 bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Horizontal branch */}
        <div className="w-full max-w-[680px] relative">
          <div className="absolute top-0 left-[12.5%] right-[12.5%] h-px bg-gray-200 dark:bg-gray-700" />
          <div className="grid grid-cols-4 gap-3">
            {sps.map((_, i) => (
              <div key={i} className="flex justify-center">
                <div className="w-px h-5 bg-gray-200 dark:bg-gray-700" />
              </div>
            ))}
          </div>
        </div>

        {/* Range Officers label */}
        <div className="flex items-center gap-3 mb-5 mt-1.5">
          <div className="h-px w-10 bg-gray-200 dark:bg-gray-700" />
          <span className="text-[10px] font-medium tracking-widest uppercase text-gray-400 dark:text-gray-500">
            {language === "mr" ? "परिक्षेत्र अधिकारी" : "Range Officers"}
          </span>
          <div className="h-px w-10 bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* SP Cards */}
        <div className="w-full max-w-[680px] grid grid-cols-2 md:grid-cols-4 gap-3">
          {sps.map((officer) => (
            <SpCard key={officer.id} officer={officer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganisationStructure;