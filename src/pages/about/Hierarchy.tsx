import React, { useEffect, useState } from "react";
import { Shield, ArrowLeft, MapPin, BadgeCheck, Star, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguageContext } from "../../contexts/LanguageContext";

import id1 from "../../assets/MT-Officer/deshmukh123.jpg";
import id3 from "../../assets/MT-Officer/sandip_shinde.jpg";
import id0 from "../../assets/MT-Officer/Deepak_IPS.jpeg";
import id7 from "../../assets/MT-Officer/morale_sir12.jpg";
import id8 from "../../assets/MT-Officer/gayatri_sp-removebg-preview.png";
import id2 from "../../assets/MT-Officer/atul_patilsir.jpg";

/* ─────────────── DATA ─────────────── */

const officers = [
  {
    id: 0, type: "adgp",
    name: { marathi: "श्री. दीपक शिवानंद पाण्डेय्", english: "Shri. Deepak Shivanand Pandey" },
    position: { marathi: "अपर पोलीस महासंचालक व संचालक, पोलीस दळणवळण, माहिती तंत्रज्ञान व परिवहन, महाराष्ट्र राज्य, पुणे", english: "Additional Director General of Police & Director, IT and Logistics, Maharashtra State, Pune" },
    badge: { marathi: "भा पो से", english: "IPS" },
    rank: { marathi: "अपर महासंचालक", english: "Addl. Director General" },
    image: id0,
  },
  {
    id: 1, type: "igp",
    name: { marathi: "श्री अशोक मोराळे", english: "Shri. Ashok Morale" },
    position: { marathi: "विशेष पोलीस महानिरीक्षक, मोटार परिवहन, महाराष्ट्र राज्य, पुणे", english: "Special Inspector General of Police, Motor Transport, Maharashtra State, Pune" },
    badge: { marathi: "भा पो से", english: "IPS" },
    rank: { marathi: "विशेष महानिरीक्षक", english: "Spl. Inspector General" },
    image: id7,
  },
  {
    id: 2, type: "dig",
    name: { marathi: "श्री. अतुल पाटील", english: "Shri. Atul Patil" },
    position: { marathi: "पोलीस उप-महानिरीक्षक, मोटार परिवहन, महाराष्ट्र राज्य, पुणे", english: "Deputy Inspector General of Police, Motor Transport, Maharashtra State, Pune" },
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

/* ─────────────── STYLES ─────────────── */

const injectStyles = () => {
  if (document.getElementById("hierarchy-styles")) return;
  const style = document.createElement("style");
  style.id = "hierarchy-styles";
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Nunito:wght@300;400;500;600&display=swap');

    /* ── Page ── */
    .hier-page {
      font-family: 'Nunito', sans-serif;
      min-height: 100vh;
      background: #060d1f;
      background-image:
        radial-gradient(ellipse 90% 55% at 50% -5%, rgba(201,168,76,0.18) 0%, transparent 65%),
        radial-gradient(ellipse 50% 60% at 90% 100%, rgba(20,50,110,0.5) 0%, transparent 55%),
        radial-gradient(ellipse 50% 60% at 10% 100%, rgba(20,50,110,0.4) 0%, transparent 55%);
      position: relative;
      overflow-x: hidden;
    }

    /* subtle grid texture */
    .hier-page::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image:
        repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(201,168,76,0.025) 59px, rgba(201,168,76,0.025) 60px),
        repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(201,168,76,0.025) 59px, rgba(201,168,76,0.025) 60px);
      pointer-events: none;
      z-index: 0;
    }

    .hier-content { position: relative; z-index: 1; }

    /* ── Back button ── */
    .hier-back {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 20px;
      background: rgba(201,168,76,0.1);
      border: 1px solid rgba(201,168,76,0.35);
      color: #c9a84c;
      font-size: 12px;
      font-family: 'Nunito', sans-serif;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.25s;
      position: fixed;
      top: 22px;
      left: 22px;
      z-index: 50;
      backdrop-filter: blur(10px);
    }
    .hier-back:hover {
      background: rgba(201,168,76,0.22);
      border-color: rgba(201,168,76,0.65);
      transform: translateX(-2px);
    }

    /* ── Header ── */
    .hier-header {
      text-align: center;
      padding: 72px 20px 48px;
    }
    .hier-emblem {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: linear-gradient(145deg, #a07830 0%, #e8c97a 45%, #b09040 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 24px;
      box-shadow:
        0 0 0 1px rgba(201,168,76,0.4),
        0 0 0 8px rgba(201,168,76,0.07),
        0 0 50px rgba(201,168,76,0.25);
    }
    .hier-title {
      font-family: 'Playfair Display', serif;
      font-size: 40px;
      font-weight: 700;
      color: #f0e0b0;
      letter-spacing: 0.01em;
      margin: 0 0 10px;
      text-shadow: 0 2px 20px rgba(201,168,76,0.3);
    }
    .hier-subtitle {
      font-size: 13px;
      font-weight: 500;
      color: rgba(201,168,76,0.7);
      letter-spacing: 0.16em;
      text-transform: uppercase;
      margin: 0;
    }
    .hier-divider {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
      margin-top: 24px;
    }
    .hier-divider-line {
      width: 100px;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(201,168,76,0.6));
    }
    .hier-divider-line.rev { background: linear-gradient(90deg, rgba(201,168,76,0.6), transparent); }
    .hier-divider-diamond {
      width: 8px; height: 8px;
      background: #c9a84c;
      transform: rotate(45deg);
      box-shadow: 0 0 8px rgba(201,168,76,0.5);
    }

    /* ── Senior officer cards ── */
    .hier-senior-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 20px;
    }

    .hier-senior-card {
      width: 100%;
      max-width: 560px;
      background: linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.025) 100%);
      border: 1px solid rgba(201,168,76,0.25);
      border-radius: 16px;
      overflow: hidden;
      position: relative;
      transition: transform 0.3s, box-shadow 0.3s;
      animation: fadeSlideIn 0.55s cubic-bezier(0.22,1,0.36,1) both;
      backdrop-filter: blur(6px);
    }
    .hier-senior-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 28px 70px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.4), 0 0 40px rgba(201,168,76,0.08);
    }
    .hier-senior-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 3px;
      background: linear-gradient(90deg, transparent, #c9a84c 30%, #f0d878 50%, #c9a84c 70%, transparent);
    }

    /* ADGP gets special glow */
    .hier-senior-card.adgp-card {
      border-color: rgba(201,168,76,0.4);
      background: linear-gradient(145deg, rgba(201,168,76,0.1) 0%, rgba(255,255,255,0.03) 100%);
    }
    .hier-senior-card.adgp-card::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 16px;
      box-shadow: inset 0 0 60px rgba(201,168,76,0.05);
      pointer-events: none;
    }

    .hier-card-inner {
      display: flex;
      align-items: center;
      gap: 28px;
      padding: 28px 32px;
    }

    /* ── Photo rings ── */
    .hier-photo-ring {
      flex-shrink: 0;
      border-radius: 50%;
      padding: 3px;
      background: linear-gradient(145deg, #a07830, #f0d878, #a07830);
      box-shadow: 0 0 0 3px rgba(201,168,76,0.15), 0 8px 30px rgba(0,0,0,0.4);
    }
    .hier-photo-ring.size-adgp { width: 130px; height: 130px; }
    .hier-photo-ring.size-igp  { width: 116px; height: 116px; }
    .hier-photo-ring.size-dig  { width: 110px; height: 110px; }

    .hier-photo-ring img,
    .hier-photo-placeholder {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #111d35;
    }

    .hier-card-info { flex: 1; min-width: 0; }

    .hier-card-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 4px 12px;
      background: rgba(201,168,76,0.14);
      border: 1px solid rgba(201,168,76,0.35);
      border-radius: 4px;
      font-size: 10px;
      font-weight: 700;
      color: #c9a84c;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    .hier-card-name {
      font-family: 'Playfair Display', serif;
      font-size: 24px;
      font-weight: 700;
      color: #f0e0b0;
      margin: 0 0 10px;
      line-height: 1.2;
    }
    .hier-senior-card.adgp-card .hier-card-name {
      font-size: 26px;
    }

    .hier-card-pos {
      font-size: 13px;
      font-weight: 400;
      color: rgba(210,210,230,0.7);
      line-height: 1.65;
      margin: 0;
    }

    /* ── Rank strip ── */
    .hier-rank-strip {
      background: rgba(201,168,76,0.07);
      border-top: 1px solid rgba(201,168,76,0.15);
      padding: 10px 32px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .hier-rank-strip span {
      font-size: 10px;
      font-weight: 700;
      color: rgba(201,168,76,0.85);
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    /* ── Connector ── */
    .hier-connector {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2px 0;
    }
    .hier-connector-line {
      width: 2px;
      background: linear-gradient(to bottom, rgba(201,168,76,0.6), rgba(201,168,76,0.2));
    }
    .hier-connector-line.tall { height: 32px; }
    .hier-connector-line.short { height: 18px; }
    .hier-connector-dot {
      width: 10px; height: 10px;
      border-radius: 50%;
      border: 2px solid #c9a84c;
      background: rgba(201,168,76,0.25);
      box-shadow: 0 0 8px rgba(201,168,76,0.4);
    }

    /* ── Branch ── */
    .hier-branch {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 0 20px;
    }
    .hier-branch-line {
      position: relative;
      width: 92%;
      max-width: 1000px;
      height: 2px;
      background: linear-gradient(90deg, transparent 2%, rgba(201,168,76,0.35) 15%, rgba(201,168,76,0.35) 85%, transparent 98%);
    }
    .hier-branch-line::after {
      content: '';
      position: absolute;
      top: -4px; left: 50%;
      transform: translateX(-50%);
      width: 10px; height: 10px;
      border-radius: 50%;
      background: #c9a84c;
      box-shadow: 0 0 10px rgba(201,168,76,0.6);
    }
    .hier-tick {
      position: absolute;
      top: 0;
      width: 2px;
      height: 14px;
      background: rgba(201,168,76,0.4);
      transform: translateX(-50%);
    }

    .hier-branch-label {
      font-size: 11px;
      font-weight: 600;
      color: rgba(201,168,76,0.65);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin: 14px 0 6px;
      text-align: center;
    }

    /* ── SP grid ── */
    .hier-sp-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 20px;
      padding: 16px 28px 60px;
      max-width: 1100px;
      margin: 0 auto;
      width: 100%;
    }

    .hier-sp-card {
      background: linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%);
      border: 1px solid rgba(201,168,76,0.18);
      border-radius: 14px;
      overflow: hidden;
      position: relative;
      transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
      animation: fadeSlideIn 0.55s cubic-bezier(0.22,1,0.36,1) both;
      backdrop-filter: blur(6px);
    }
    .hier-sp-card:hover {
      transform: translateY(-6px);
      border-color: rgba(201,168,76,0.4);
      box-shadow: 0 20px 55px rgba(0,0,0,0.35), 0 0 30px rgba(201,168,76,0.07);
    }
    .hier-sp-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent);
    }
    .hier-sp-card.vacant {
      border-color: rgba(255,255,255,0.07);
      opacity: 0.55;
    }
    .hier-sp-card.vacant::before {
      background: rgba(255,255,255,0.05);
    }

    /* SP photo — bigger now */
    .hier-sp-photo {
      display: flex;
      justify-content: center;
      padding: 24px 0 14px;
    }
    .hier-sp-photo-ring {
      width: 100px; height: 100px;
      border-radius: 50%;
      padding: 3px;
      background: linear-gradient(145deg, #a07830, #f0d878, #a07830);
      box-shadow: 0 0 0 3px rgba(201,168,76,0.12), 0 6px 24px rgba(0,0,0,0.4);
    }
    .hier-sp-photo-ring.vacant-ring {
      background: rgba(255,255,255,0.08);
      box-shadow: none;
    }
    .hier-sp-photo-ring img {
      width: 100%; height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
    .hier-sp-photo-placeholder {
      width: 100%; height: 100%;
      border-radius: 50%;
      background: #0e1928;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hier-sp-info {
      padding: 4px 20px 18px;
      text-align: center;
    }
    .hier-sp-name {
      font-family: 'Playfair Display', serif;
      font-size: 18px;
      font-weight: 700;
      color: #e8d8b0;
      margin: 0 0 8px;
      line-height: 1.25;
    }
    .hier-sp-name.vacant-name {
      color: rgba(255,255,255,0.28);
      font-style: italic;
      font-weight: 400;
    }
    .hier-sp-pos {
      font-size: 12px;
      font-weight: 400;
      color: rgba(190,190,215,0.6);
      line-height: 1.55;
      margin: 0 0 14px;
    }

    .hier-sp-footer {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      flex-wrap: wrap;
      padding: 8px 14px;
      background: rgba(201,168,76,0.07);
      border-top: 1px solid rgba(201,168,76,0.12);
    }
    .hier-sp-footer span {
      font-size: 10px;
      font-weight: 700;
      color: rgba(201,168,76,0.85);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    /* ── Animations ── */
    @keyframes fadeSlideIn {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
};

/* ─────────────── CONNECTOR ─────────────── */
const Connector = () => (
  <div className="hier-connector">
    <div className="hier-connector-line tall" />
    <div className="hier-connector-dot" />
    <div className="hier-connector-line tall" />
  </div>
);

/* ─────────────── SENIOR CARD ─────────────── */
const SeniorCard = ({ officer, delay = 0 }) => {
  const { language } = useLanguageContext();
  const t = (obj) => (language === "mr" ? obj.marathi : obj.english);
  const isVacant = officer.name.english === "Vacant";
  const sizeClass = `size-${officer.type}`;

  return (
    <div
      className={`hier-senior-card ${officer.type === "adgp" ? "adgp-card" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="hier-card-inner">
        <div className={`hier-photo-ring ${sizeClass}`}>
          {officer.image && !isVacant ? (
            <img src={officer.image} alt={t(officer.name)} />
          ) : (
            <div className="hier-photo-placeholder">
              <Shield size={32} color="rgba(201,168,76,0.5)" />
            </div>
          )}
        </div>

        <div className="hier-card-info">
          {officer.badge && (
            <div className="hier-card-badge">
              <Award size={10} />
              {t(officer.badge)}
            </div>
          )}
          <p className="hier-card-name">{t(officer.name)}</p>
          <p className="hier-card-pos">{t(officer.position)}</p>
        </div>
      </div>

      <div className="hier-rank-strip">
        <BadgeCheck size={14} color="#c9a84c" />
        <span>{t(officer.rank)}</span>
      </div>
    </div>
  );
};

/* ─────────────── SP CARD ─────────────── */
const SPCard = ({ officer, delay = 0 }) => {
  const { language } = useLanguageContext();
  const t = (obj) => (language === "mr" ? obj.marathi : obj.english);
  const isVacant = officer.name.english === "Vacant";

  return (
    <div
      className={`hier-sp-card ${isVacant ? "vacant" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="hier-sp-photo">
        <div className={`hier-sp-photo-ring ${isVacant ? "vacant-ring" : ""}`}>
          {officer.image && !isVacant ? (
            <img src={officer.image} alt={t(officer.name)} />
          ) : (
            <div className="hier-sp-photo-placeholder">
              <Shield size={28} color="rgba(201,168,76,0.35)" />
            </div>
          )}
        </div>
      </div>

      <div className="hier-sp-info">
        <p className={`hier-sp-name ${isVacant ? "vacant-name" : ""}`}>
          {t(officer.name)}
        </p>
        <p className="hier-sp-pos">{t(officer.position)}</p>
      </div>

      <div className="hier-sp-footer">
        <BadgeCheck size={11} color="rgba(201,168,76,0.75)" />
        <span>{t(officer.rank)}</span>
        {officer.location && (
          <>
            <span style={{ opacity: 0.35 }}>·</span>
            <MapPin size={10} color="rgba(201,168,76,0.65)" />
            <span>{t(officer.location)}</span>
          </>
        )}
      </div>
    </div>
  );
};

/* ─────────────── MAIN ─────────────── */
const Hierarchy = () => {
  const navigate = useNavigate();
  const { language } = useLanguageContext();
  const isMarathi = language === "mr";

  useEffect(() => { injectStyles(); }, []);

  const adgp = officers.find((o) => o.type === "adgp");
  const igp  = officers.find((o) => o.type === "igp");
  const dig  = officers.find((o) => o.type === "dig");
  const sps  = officers.filter((o) => o.type === "sp");

  return (
    <div className="hier-page">
      <div className="hier-content">

        {/* Back */}
        <button className="hier-back" onClick={() => navigate(-1)}>
          <ArrowLeft size={13} />
          {isMarathi ? "मागे" : "Back"}
        </button>

        {/* Header */}
        <div className="hier-header">
          <div className="hier-emblem">
            <Shield size={34} color="#060d1f" />
          </div>
          <h1 className="hier-title">
            {isMarathi ? "संघटनात्मक रचना" : "Organizational Structure"}
          </h1>
          <p className="hier-subtitle">
            {isMarathi
              ? "महाराष्ट्र राज्य पोलीस मोटार परिवहन विभाग"
              : "Maharashtra State Police · Motor Transport Department"}
          </p>
          <div className="hier-divider">
            <div className="hier-divider-line" />
            <div className="hier-divider-diamond" />
            <div className="hier-divider-line rev" />
          </div>
        </div>

        {/* Senior chain */}
        <div className="hier-senior-wrap">
          <SeniorCard officer={adgp} delay={0} />
          <Connector />
          <SeniorCard officer={igp} delay={120} />
          <Connector />
          <SeniorCard officer={dig} delay={240} />
        </div>

        {/* Branch lines to SP row */}
        <div className="hier-branch" style={{ marginTop: 8 }}>
          <div
            className="hier-connector-line tall"
            style={{ marginBottom: 0 }}
          />
          <div className="hier-branch-line">
            {sps.map((_, i) => (
              <div
                key={i}
                className="hier-tick"
                style={{ left: `${(i * 100) / (sps.length - 1)}%` }}
              />
            ))}
          </div>
        </div>

        {/* SP section label */}
        <p className="hier-branch-label">
          {isMarathi
            ? "पोलीस अधीक्षक · परिक्षेत्र"
            : "Addl. Superintendents of Police · Regional Offices"}
        </p>

        {/* SP cards */}
        <div className="hier-sp-grid">
          {sps.map((officer, i) => (
            <SPCard
              key={officer.id}
              officer={officer}
              delay={360 + i * 70}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Hierarchy;