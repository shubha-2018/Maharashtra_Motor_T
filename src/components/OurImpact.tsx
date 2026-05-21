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
  gradient: string;
  accentColor: string;
  glowColor: string;
}

const impactStats: ImpactStat[] = [
  {
    id: 3,
    icon: <Clock className="w-8 h-8" />,
    value: 1948,
    suffix: "",
    bgImage: "/images/impact/1948.jpg",
    label: { mr: "पासून सेवेत कार्यरत", en: "In Service Since" },
    gradient: "from-amber-600 via-orange-600 to-red-600",
    accentColor: "from-amber-300 via-orange-400 to-red-500",
    glowColor: "bg-orange-300/20",
  },
  {
    id: 4,
    icon: <MapPin className="w-8 h-8" />,
    value: 4,
    suffix: "",
    bgImage: "/images/impact/offices.jpg",
    label: { mr: "प्रादेशिक कार्यालये", en: "Regional Offices" },
    gradient: "from-blue-900 via-blue-700 to-cyan-600",
    accentColor: "from-blue-300 via-cyan-400 to-blue-500",
    glowColor: "bg-cyan-300/20",
  },
  {
    id: 5,
    icon: <Building className="w-8 h-8" />,
    value: 89,
    suffix: "",
    bgImage: "/images/impact/department.jpg",
    label: { mr: "मोटार परिवहन विभाग", en: "Motor Transport Dept" },
    gradient: "from-purple-900 via-purple-700 to-indigo-600",
    accentColor: "from-purple-300 via-indigo-400 to-purple-500",
    glowColor: "bg-purple-300/20",
  },
  {
    id: 6,
    icon: <Users className="w-8 h-8" />,
    value: 2650,
    suffix: "+",
    bgImage: "/images/impact/staff.jpg",
    label: { mr: "कर्मचारी", en: "Employees" },
    gradient: "from-emerald-900 via-green-700 to-teal-600",
    accentColor: "from-emerald-300 via-green-400 to-teal-500",
    glowColor: "bg-emerald-300/20",
  },
  {
    id: 1,
    icon: <Car className="w-8 h-8" />,
    value: 19159,
    suffix: "+",
    bgImage: "/images/impact/vehicles.jpg",
    label: { mr: "वाहने", en: "Vehicles" },
    gradient: "from-rose-900 via-pink-700 to-red-600",
    accentColor: "from-rose-300 via-pink-400 to-red-500",
    glowColor: "bg-rose-300/20",
  },
  {
    id: 2,
    icon: <Ship className="w-8 h-8" />,
    value: 55,
    suffix: "+",
    bgImage: "/images/impact/boats.jpg",
    label: { mr: "नौका", en: "Boats" },
    gradient: "from-slate-900 via-slate-700 to-gray-600",
    accentColor: "from-slate-300 via-gray-400 to-slate-500",
    glowColor: "bg-slate-300/20",
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />

      {/* Heading */}
      <div className="text-center mb-16 px-4 relative z-10">
        <div className="inline-block relative">
          <h2 className="text-2xl md:text-2xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-purple-600 to-blue-700 bg-clip-text text-transparent mb-4 leading-tight">
            {lang === "mr" ? "आमचा प्रभाव" : "Our Impact"}
          </h2>
          {/* Decorative Underline */}
          <div className="h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full shadow-lg" />
        </div>
        <p className="text-gray-700 mt-6 text-xl md:text-2xl lg:text-3xl tracking-wide font-bold">
          {lang === "mr"
            ? "पोलीस मोटार परिवहन विभाग महाराष्ट्र राज्य  "
            : " Police Motor Transport Department Maharashtra State"}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-6 max-w-7xl mx-auto relative z-10">
        {impactStats.map((stat, index) => (
          <div
            key={stat.id}
            className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group"
            style={{ 
              height: "280px",
              animationDelay: `${index * 100}ms`
            }}
          >
            {/* Dynamic gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} transition-all duration-500 group-hover:scale-110`} />

            {/* Animated gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-tr ${stat.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

            {/* Geometric pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1.5px, transparent 1.5px)",
                backgroundSize: "20px 20px",
              }}
            />

            {/* Animated diagonal lines */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
            </div>

            {/* Glow orb - animated */}
            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${stat.glowColor} blur-2xl group-hover:w-40 group-hover:h-40 transition-all duration-500`} />
            <div className={`absolute -bottom-10 -left-10 w-32 h-32 rounded-full ${stat.glowColor} blur-2xl opacity-50 group-hover:opacity-70 transition-all duration-500`} />

            {/* Top accent bar with gradient */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.accentColor}`} />

            {/* Side accent glow */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${stat.accentColor} opacity-70`} />

            {/* Card Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 gap-4">

              {/* Enhanced icon badge with ring animation */}
              <div className="relative">
                {/* Outer pulsing ring */}
                <div className="absolute inset-0 w-20 h-20 rounded-2xl bg-white/20 animate-ping" />
                
                {/* Icon container */}
                <div className="relative w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {stat.icon}
                </div>
              </div>

              {/* Animated Number with shadow */}
              <div className="text-5xl md:text-6xl font-extrabold text-white leading-none tracking-tight drop-shadow-2xl group-hover:scale-110 transition-transform duration-300">
                {(animatedValues[stat.id] || 0).toLocaleString()}
                <span className="text-4xl md:text-5xl">{stat.suffix}</span>
              </div>

              {/* Label with better spacing */}
              <div
                className="text-sm md:text-base lg:text-lg font-bold text-white leading-snug flex items-center justify-center tracking-wide px-2"
                style={{ minHeight: "44px" }}
              >
                {stat.label[lang]}
              </div>

              {/* Decorative bottom element */}
              <div className="flex gap-1.5 items-center">
                <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${stat.accentColor} animate-pulse`} />
                <div className={`w-14 h-0.5 bg-gradient-to-r ${stat.accentColor} rounded-full`} />
                <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${stat.accentColor} animate-pulse`} style={{ animationDelay: '0.5s' }} />
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-tr-full" />

            {/* Shine effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom decorative line */}
      <div className="mt-16 flex justify-center">
        <div className="w-64 h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full shadow-lg" />
      </div>
    </section>
  );
};

export default OurImpact;