import { useEffect, useRef, useState } from "react";
import { Clock, MapPin, Users, Ship, Building, Car } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ImpactStat {
  id: number;
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: {
    mr: string;
    en: string;
  };
  bgImage?: string;
}

const impactStats: ImpactStat[] = [
  {
    id: 3,
    icon: <Clock className="w-6 h-6" />,
    value: 1948,
    suffix: "",
    bgImage: "/images/impact/1948.jpg",
    label: { mr: "पासून सेवेत कार्यरत", en: "In Service Since" },
  },
  {
    id: 4,
    icon: <MapPin className="w-6 h-6" />,
    value: 4,
    suffix: "",
    bgImage: "/images/impact/offices.jpg",
    label: { mr: "प्रादेशिक कार्यालये", en: "Regional Offices" },
  },
  {
    id: 5,
    icon: <Building className="w-6 h-6" />,
    value: 89,
    suffix: "",
    bgImage: "/images/impact/department.jpg",
    label: { mr: "मोटार परिवहन विभाग", en: "Motor Transport Dept" },
  },
  {
    id: 6,
    icon: <Users className="w-6 h-6" />,
    value: 2650,
    suffix: "+",
    bgImage: "/images/impact/staff.jpg",
    label: { mr: "कर्मचारी", en: "Employees" },
  },
  {
    id: 1,
    icon: <Car className="w-6 h-6" />,
    value: 19159,
    suffix: "+",
    bgImage: "/images/impact/vehicles.jpg",
    label: { mr: "वाहने", en: "Vehicles" },
  },
  {
    id: 2,
    icon: <Ship className="w-6 h-6" />,
    value: 55,
    suffix: "+",
    bgImage: "/images/impact/boats.jpg",
    label: { mr: "नौका", en: "Boats" },
  },
];

const OurImpact = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<{ [key: number]: number }>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          impactStats.forEach((stat) => {
            let current = 0;
            const increment = stat.value / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              setAnimatedValues((prev) => ({
                ...prev,
                [stat.id]: Math.floor(current),
              }));
            }, 25);
          });
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  const lang = language === "mr" ? "mr" : "en";

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">

      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          {lang === "mr" ? "आमचा प्रभाव" : "Our Impact"}
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base tracking-wide">
          {lang === "mr"
            ? "महाराष्ट्र पोलीस मोटार परिवहन विभाग"
            : "Maharashtra Police Motor Transport Department"}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 px-6">
        {impactStats.map((stat) => (
          <div
            key={stat.id}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300 group"
            style={{ height: "240px" }}
          >
            {/* Deep blue gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500" />

            {/* Subtle dot pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Glow orb top-right */}
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-blue-300/20" />

            {/* Top gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600" />

            {/* Card Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 gap-3">

              {/* Frosted icon badge */}
              <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-blue-200">
                {stat.icon}
              </div>

              {/* Animated Number */}
              <div className="text-3xl font-bold text-white leading-none tracking-tight">
                {(animatedValues[stat.id] || 0).toLocaleString()}
                {stat.suffix}
              </div>

              {/* Label */}
              <div
                className="text-xs font-medium text-blue-200 leading-snug flex items-center justify-center tracking-wide"
                style={{ minHeight: "36px" }}
              >
                {stat.label[lang]}
              </div>

              {/* Bottom accent line */}
              <div className="w-8 h-[2px] bg-blue-300/60 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurImpact;