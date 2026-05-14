import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

import AshokMoraleImg from "../assets/MT-Officer/morale_sir12.jpg";

interface Leader {
  id: number;
  name: {
    mr: string;
    en: string;
  };
  designation: {
    mr: React.ReactNode;
    en: React.ReactNode;
  };
  imageUrl: string;
  imagePlaceholder: string;
}

const leaders: Leader[] = [
  {
    id: 1,
    name: {
      mr: "श्री. देवेंद्र फडणवीस",
      en: "Shri. Devendra Fadnavis",
    },
    designation: {
      mr: (
        <>
          मा. मुख्यमंत्री
          <br />
          महाराष्ट्र राज्य
        </>
      ),
      en: (
        <>
          Hon&apos;ble Chief Minister
          <br />
          Maharashtra State
        </>
      ),
    },
    imageUrl:
      "https://i.cdn.newsbytesapp.com/images/l84920241204121312.jpeg",
    imagePlaceholder:
      "Official portrait of Shri. Devendra Fadnavis",
  },

  {
    id: 2,
    name: {
      mr: "श्री. सदानंद दाते",
      en: "Shri. Sadanand Date (IPS)",
    },
    designation: {
      mr: (
        <>
          भा पो से
          <br />
          मा. पोलीस महासंचालक
          <br />
          महाराष्ट्र राज्य
        </>
      ),
      en: (
        <>
          Director General of Police
          <br />
          Maharashtra State
        </>
      ),
    },
    imageUrl:
      "https://www.thanepolice.gov.in/_next/image?url=%2F8.jpeg&w=256&q=75",
    imagePlaceholder:
      "Official portrait of Shri. Sadanand Date",
  },

  {
    id: 3,
    name: {
      mr: "श्री. दीपक शिवानंद पाण्डेय",
      en: "Shri. Deepak Shivanand Pandey (IPS)",
    },
    designation: {
      mr: (
        <>
          भा पो से
          <br />
          अपर पोलीस महासंचालक व संचालक
          <br />
          पोलीस दळणवळण, माहिती तंत्रज्ञान व परिवहन
          <br />
          महाराष्ट्र राज्य, पुणे
        </>
      ),
      en: (
        <>
          Additional Director General of Police and Director
          <br />
          Police Communication, Information Technology and
          Transport
          <br />
          Maharashtra State, Pune
        </>
      ),
    },
    imageUrl:
      "https://www.witnessinthecorridors.com/ImgNewsPolitical/240708185120309.png",
    imagePlaceholder:
      "Official portrait of Shri. Deepak Shivanand Pandey",
  },

  {
    id: 4,
    name: {
      mr: "श्री. अशोक मोराळे",
      en: "Shri. Ashok Morale",
    },
    designation: {
      mr: (
        <>
          भा पो से
          <br />
          विशेष पोलीस महानिरीक्षक
          <br />
          मोटार परिवहन
          <br />
          महाराष्ट्र राज्य, पुणे
        </>
      ),
      en: (
        <>
          Special Inspector General of Police
          <br />
          Motor Transport
          <br />
          Maharashtra State, Pune
        </>
      ),
    },
    imageUrl: AshokMoraleImg,
    imagePlaceholder:
      "Official portrait of Shri. Ashok Morale",
  },
];

const Leadership = () => {
  const { language } = useLanguage();

  // EN / MR Toggle Support
  const currentLanguage = language === "mr" ? "mr" : "en";

  const languageClass =
    currentLanguage === "mr"
      ? "tracking-wide font-semibold"
      : "font-medium";

  const renderCard = (leader: Leader, index: number) => {
    return (
      <Card
        key={leader.id}
        className="
          group
          relative
          overflow-hidden
          w-72
          rounded-3xl
          border
          border-white/20
          bg-white/80
          dark:bg-slate-900/80
          backdrop-blur-xl
          shadow-xl
          hover:shadow-2xl
          hover:-translate-y-3
          transition-all
          duration-500
        "
        style={{
          animationDelay: `${index * 150}ms`,
        }}
      >
        <CardContent className="relative p-6 text-center">

          {/* Background Glow */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full blur-3xl" />

            <div className="absolute bottom-0 left-0 w-28 h-28 bg-purple-400 rounded-full blur-3xl" />
          </div>

          {/* Image */}
          <div className="relative z-10 mb-5 mx-auto">
            <div
              className="
                w-32 h-32
                mx-auto
                rounded-full
                p-[4px]
                bg-gradient-to-r
                from-blue-500
                via-indigo-500
                to-purple-500
                shadow-lg
                group-hover:scale-105
                transition-all
                duration-500
              "
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img
                  src={leader.imageUrl}
                  alt={leader.name[currentLanguage]}
                  className="
                    w-full
                    h-full
                    object-cover
                    rounded-full
                  "
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Name */}
          <h3
            className={`
              relative
              z-10
              text-xl
              font-bold
              leading-snug
              text-gray-900
              dark:text-white
              group-hover:text-blue-700
              dark:group-hover:text-blue-400
              transition-colors
              duration-300
              ${languageClass}
            `}
          >
            {leader.name[currentLanguage]}
          </h3>

          {/* Divider */}
          <div
            className="
              relative
              z-10
              w-16
              h-1
              mx-auto
              rounded-full
              mt-3
              mb-4
              bg-gradient-to-r
              from-blue-500
              to-purple-500
              group-hover:w-24
              transition-all
              duration-500
            "
          />

          {/* Designation */}
          <div
            className={`
              relative
              z-10
              text-sm
              md:text-[15px]
              leading-relaxed
              text-gray-700
              dark:text-gray-300
              ${languageClass}
            `}
          >
            {leader.designation[currentLanguage]}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section
      className="
        relative
        py-16
        overflow-hidden
        bg-gradient-to-b
        from-slate-50
        via-blue-50
        to-indigo-100
        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
      "
    >

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            top-0
            left-0
            w-96
            h-96
            bg-blue-400/20
            rounded-full
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            w-96
            h-96
            bg-purple-400/20
            rounded-full
            blur-3xl
          "
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">

          {/* Top Divider */}
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-blue-500" />

            <div className="w-3 h-3 rounded-full bg-blue-500" />

            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-blue-500" />
          </div>

          {/* Title */}
          <h2
            className={`
              text-4xl
              md:text-5xl
              font-black
              tracking-tight
              bg-gradient-to-r
              from-blue-700
              via-indigo-600
              to-purple-600
              bg-clip-text
              text-transparent
              ${languageClass}
            `}
          >
            {currentLanguage === "mr"
              ? "आमचे नेतृत्व"
              : "Our Leadership"}
          </h2>

          {/* Subtitle */}
          <p
            className={`
              mt-5
              text-lg
              max-w-3xl
              mx-auto
              leading-relaxed
              text-gray-700
              dark:text-gray-300
              ${languageClass}
            `}
          >
            {currentLanguage === "mr"
              ? "महाराष्ट्र पोलीस मोटार परिवहन विभागाचे नेतृत्व आणि मार्गदर्शक"
              : "Leadership and guidance of Maharashtra Police Motor Transport Department"}
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
            justify-items-center
          "
        >
          {leaders.map((leader, index) =>
            renderCard(leader, index)
          )}
        </div>
      </div>
    </section>
  );
};

export default Leadership;