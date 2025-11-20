// src/components/OurImpact.tsx
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

// Images
import cardBg1 from "../assets/hero/2.jpg";
import cardBg2 from "../assets/hero/2.jpg";
import cardBg3 from "../assets/hero/2.jpg";
import cardBg4 from "../assets/hero/2.jpg";
import cardBg5 from "../assets/hero/2.jpg";
import cardBg6 from "../assets/hero/repters.jpeg";
import cardBg7 from "../assets/hero/mobileradio12.jpeg";
import cardBg8 from "../assets/hero/handle radio.jpeg";

interface ImpactStat {
  id: number;
  value: number | string;
  suffix: string;
  labelKey: string;
  bgImage: string;
  gradient: string;
}

const impactStats: ImpactStat[] = [
  { id: 1, value: 1946, suffix: "", labelKey: "impact.operating", bgImage: cardBg1, gradient: "from-blue-600/90 to-cyan-600/90" },
  { id: 2, value: 6, suffix: "", labelKey: "impact.zoneoffices", bgImage: cardBg2, gradient: "from-teal-600/90 to-emerald-600/90" },
  { id: 3, value: 8, suffix: "", labelKey: "impact.rangeoffices", bgImage: cardBg3, gradient: "from-amber-600/90 to-orange-600/90" },
  { id: 4, value: 573, suffix: "", labelKey: "impact.employees", bgImage: cardBg4, gradient: "from-rose-600/90 to-pink-600/90" },
  { id: 5, value: 73, suffix: "", labelKey: "impact.Units", bgImage: cardBg5, gradient: "from-purple-600/90 to-indigo-600/90" },
  { id: 6, value: 297, suffix: "", labelKey: "impact.repeters", bgImage: cardBg6, gradient: "from-green-600/90 to-teal-600/90" },
  { id: 7, value: 12353, suffix: "", labelKey: "impact.mobileradio", bgImage: cardBg7, gradient: "from-red-600/90 to-pink-600/90" },
  { id: 8, value: 16471, suffix: "", labelKey: "impact.handlesradio", bgImage: cardBg8, gradient: "from-yellow-500/90 to-orange-600/90" },
];

const OurImpact = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<{ [key: number]: string | number }>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          impactStats.forEach((stat) => {
            if (typeof stat.value === "string") {
              setAnimatedValues(prev => ({ ...prev, [stat.id]: stat.value }));
              return;
            }
            let current = 0;
            const target = stat.value as number;
            const increment = Math.max(1, Math.floor(target / 60));
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                clearInterval(timer);
                current = target;
              }
              setAnimatedValues(prev => ({ ...prev, [stat.id]: current }));
            }, 30);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative py-16 bg-gradient-to-b from-gray-50 via-blue-50 to-white dark:from-gray-900 dark:via-slate-900 dark:to-black">
      <div className="container mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-black dark:text-white text-3xl md:text-4xl font-extrabold tracking-wide">
            {t("impact.title")}
          </h2>
        </div>

        {/* 8 Cards – 2 Rows × 4 Cards – NO ICONS */}
        <div className="space-y-8">
          {/* Row 1 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {impactStats.slice(0, 4).map((stat, index) => (
              <ImpactCard key={stat.id} stat={stat} index={index} isVisible={isVisible} animatedValues={animatedValues} t={t} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {impactStats.slice(4, 8).map((stat, index) => (
              <ImpactCard key={stat.id} stat={stat} index={index + 4} isVisible={isVisible} animatedValues={animatedValues} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Card without any Icon – Super Clean!
const ImpactCard = ({ stat, index, isVisible, animatedValues, t }: any) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-400 h-full
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
        hover:scale-105`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" 
           style={{ backgroundImage: `url(${stat.bgImage})` }} />
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient}`} />

      <div className="relative z-10 p-6 md:p-8 text-center flex flex-col items-center justify-center h-48 md:h-56">
        {/* Number – Bigger & Bolder */}
        <div className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-2xl">
          {animatedValues[stat.id] ?? "0"}
          <span className="text-3xl md:text-4xl ml-1">{stat.suffix}</span>
        </div>

        {/* Label */}
        <p className="mt-4 text-sm md:text-base font-bold text-white/95 uppercase tracking-wider">
          {t(stat.labelKey)}
        </p>

        {/* Decorative Line */}
        <div className="mt-5 w-16 h-1 bg-white/60 group-hover:bg-white group-hover:w-24 mx-auto rounded-full transition-all duration-400" />
      </div>
    </div>
  );
};

export default OurImpact;