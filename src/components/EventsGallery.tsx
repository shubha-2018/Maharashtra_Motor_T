// import React, { useState, useEffect, useRef } from "react";
// import { Calendar, MapPin, ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { useLanguage } from "@/contexts/LanguageContext";
// import GIMG_1 from "@/assets/gallery/img1.jpeg";
// import GIMG_2 from "@/assets/gallery/img2.jpeg";
// import GIMG_3 from "@/assets/gallery/img3.jpeg";
// import GIMG_4 from "@/assets/gallery/6.jpg";
// import GIMG_5 from "@/assets/hero/2.jpg";
// import GIMG_6 from "@/assets/gallery/7.jpg";
// import { Link } from "react-router-dom";

// const EventsGallery = () => {
//   const { t } = useLanguage();
//   const [selectedImage, setSelectedImage] = useState(null);

//   const eventsScrollRef = useRef(null);
//   const newsScrollRef = useRef(null);
//   const recruitmentScrollRef = useRef(null);

//   const policeBlue = "#0A1E4A";

//   const events = [
//     {
//       id: 1,
//       title: t("event.pcit.upgrades"),
//       date: "2025-08-15",
//       location: t("event.location.headquarters"),
//       link: "/citizen/press-release",
//     },
//     {
//       id: 2,
//       title: t("event.marvel.aiProject"),
//       date: "2025-01-26",
//       location: t("event.location.headquarters"),
//       link: "/citizen/press-release",
//     },
//   ];

//   const latestNews = [
//     { id: 1, title: t("news.yoga.training"), date: "2025-06-20", link: "/citizen/press-release" },
//     { id: 2, title: t("news.kolhapur.visit"), date: "2025-05-28", link: "/citizen/press-release" },
//     { id: 3, title: t("news.face.authentication"), date: "2025-05-26", link: "/citizen/press-release" },
//     { id: 4, title: t("news.director.correspondence"), date: "2025-05-08", link: "/citizen/press-release" },
//   ];

//   const recruitment = [
//     { id: 1, title: t("recruitment.retired.pi.dysp"), lastDate: "2025-12-31", link: "/citizen/recruitment" },
//     { id: 2, title: t("recruitment.sub.inspector"), lastDate: "2025-11-25", link: "/citizen/recruitment" },
//     { id: 3, title: t("recruitment.data.operator"), lastDate: "2025-12-10", link: "/citizen/recruitment" },
//   ];

//   const galleryImages = [
//     { id: 1, src: GIMG_1, title: "Police Technology Summit 2024", date: "2024-01-15" },
//     { id: 2, src: GIMG_2, title: "Cybersecurity Training Session", date: "2024-01-12" },
//     { id: 3, src: GIMG_3, title: "New Equipment Inauguration", date: "2024-01-10" },
//     { id: 4, src: GIMG_4, title: "Awards Ceremony", date: "2024-01-08" },
//     { id: 5, src: GIMG_5, title: "Community Outreach Program", date: "2024-01-05" },
//     { id: 6, src: GIMG_6, title: "Digital Innovation Workshop", date: "2024-01-03" },
//   ];

//   const formatDate = (date) =>
//     new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

//   // Auto-scroll bottom-to-top (Latest Events only)
//   const autoScrollUp = (ref) => {
//     const el = ref.current;
//     if (!el) return;

//     el.scrollTop = el.scrollHeight;
//     let pos = el.scrollTop;

//     const scroll = () => {
//       pos -= 0.4;
//       if (pos <= 0) pos = el.scrollHeight;
//       el.scrollTop = pos;
//       requestAnimationFrame(scroll);
//     };

//     requestAnimationFrame(scroll);
//   };

//   // Auto-scroll top-to-bottom (default for news & recruitment)
//   const autoScroll = (ref) => {
//     let pos = 0;
//     const el = ref.current;
//     if (!el) return;

//     const scroll = () => {
//       pos += 0.4;
//       if (pos >= el.scrollHeight - el.clientHeight) pos = 0;
//       el.scrollTop = pos;
//       requestAnimationFrame(scroll);
//     };

//     requestAnimationFrame(scroll);
//   };

//   useEffect(() => {
//     autoScrollUp(eventsScrollRef);  // bottom-to-top 
//     autoScroll(newsScrollRef);
//     autoScroll(recruitmentScrollRef);
//   }, []);

//   return (
//     <section className="py-16 bg-white dark:bg-black transition-colors duration-500">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
//             {t("latest.events")} & {t("photo.gallery")}
//           </h2>
//           <div className="w-24 h-1 mx-auto rounded-full" style={{ background: policeBlue }}></div>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           <Card className="bg-white dark:bg-[#101B33] shadow-md rounded-xl">
//             <CardContent className="p-6">
//               <h3 className="text-xl font-bold flex items-center gap-2 text-gray-900 dark:text-white">
//                 <Calendar /> {t("latest.events")}
//               </h3>

//               <div className="overflow-hidden max-h-80 mt-4 space-y-4" ref={eventsScrollRef}>
//                 {[...events, ...events].map((e, i) => (
//                   <Link key={`${e.id}-${i}`} to={e.link}>
//                     <div className="pl-6 border-l-2 border-[rgb(0,51,102)]">
//                       <h4 className="text-gray-900 dark:text-white font-semibold">{e.title}</h4>
//                       <p className="text-xs text-gray-500 dark:text-white/70 flex items-center gap-1">
//                         <Calendar className="w-3 h-3" /> {formatDate(e.date)}
//                       </p>
//                       <p className="text-xs text-gray-500 dark:text-white/70 flex items-center gap-1">
//                         <MapPin className="w-3 h-3" /> {e.location}
//                       </p>
//                     </div>
//                   </Link>
//                 ))}
//               </div>

//               <Link to="/citizen/press-release">
//                 <Button className="w-full mt-4 bg-[rgb(0,51,102)] text-white">
//                   <ArrowRight className="w-4 h-4 mr-1" /> {t("view.all.events")}
//                 </Button>
//               </Link>
//             </CardContent>
//           </Card>

//           <Card className="lg:col-span-2 bg-white dark:bg-[#101B33] shadow-md rounded-xl">
//             <CardContent className="p-6">
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                 {galleryImages.map((img) => (
//                   <div
//                     key={img.id}
//                     className="cursor-pointer h-40 md:h-48 overflow-hidden rounded-lg"
//                     onClick={() => setSelectedImage(img.src)}
//                   >
//                     <img src={img.src} className="w-full h-full object-cover rounded-lg" />
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         <div className="grid md:grid-cols-2 gap-6 mt-8">
//           <Card className="bg-white dark:bg-[#101B33] shadow-md rounded-xl">
//             <div className="bg-[rgb(0,51,102)] text-white py-3 text-center text-xl font-bold">
//               {t("latest.news")}
//             </div>
//             <CardContent ref={newsScrollRef} className="max-h-80 overflow-hidden">
//               {[...latestNews, ...latestNews].map((n, i) => (
//                 <Link key={`${n.id}-${i}`} to={n.link}>
//                   <div className="border-b py-3 dark:border-gray-700">
//                     <p className="text-gray-900 dark:text-white font-medium">{n.title}</p>
//                     <p className="text-xs text-gray-500 dark:text-white/70">{formatDate(n.date)}</p>
//                   </div>
//                 </Link>
//               ))}
//             </CardContent>
//           </Card>

//           <Card className="bg-white dark:bg-[#101B33] shadow-md rounded-xl">
//             <div className="bg-[rgb(0,51,102)] text-white py-3 text-center text-xl font-bold">
//               {t("recruitment")}
//             </div>
//             <CardContent ref={recruitmentScrollRef} className="max-h-80 overflow-hidden">
//               {[...recruitment, ...recruitment].map((r, i) => (
//                 <Link key={`${r.id}-${i}`} to={r.link}>
//                   <div className="border-b py-3 dark:border-gray-700">
//                     <p className="text-gray-900 dark:text-white font-medium">{r.title}</p>
//                     <p className="text-xs text-gray-500 dark:text-white/70">{formatDate(r.lastDate)}</p>
//                   </div>
//                 </Link>
//               ))}
//             </CardContent>
//           </Card>
//         </div>
//       </div>

//       {selectedImage && (
//         <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
//           <img src={selectedImage} className="max-w-[600px] rounded-lg shadow-lg" />
//         </div>
//       )}
//     </section>
//   );
// };

// export default EventsGallery;



// EventsGallery.jsx
import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import GIMG_1 from "@/assets/gallery/img1.jpeg";
import GIMG_2 from "@/assets/gallery/img2.jpeg";
import GIMG_3 from "@/assets/gallery/img3.jpeg";
import GIMG_4 from "@/assets/gallery/6.jpg";
import GIMG_5 from "@/assets/hero/2.jpg";
import GIMG_6 from "@/assets/gallery/7.jpg";

const EventsGallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const newsScrollRef = useRef(null);
  const recruitmentScrollRef = useRef(null);

  const policeBlue = "#0A1E4A";

  const latestNews = [
    { id: 1, title: t("news.yoga.training"), date: "2025-06-20", link: "/citizen/press-release" },
    { id: 2, title: t("news.kolhapur.visit"), date: "2025-05-28", link: "/citizen/press-release" },
    { id: 3, title: t("news.face.authentication"), date: "2025-05-26", link: "/citizen/press-release" },
    { id: 4, title: t("news.director.correspondence"), date: "2025-05-08", link: "/citizen/press-release" },
  ];

  const recruitment = [
    { id: 1, title: t("recruitment.retired.pi.dysp"), lastDate: "2025-12-31", link: "/citizen/recruitment" },
    { id: 2, title: t("recruitment.sub.inspector"), lastDate: "2025-11-25", link: "/citizen/recruitment" },
    { id: 3, title: t("recruitment.data.operator"), lastDate: "2025-12-10", link: "/citizen/recruitment" },
  ];

  const galleryImages = [
    { id: 1, src: GIMG_1 },
    { id: 2, src: GIMG_2 },
    { id: 3, src: GIMG_3 },
    { id: 4, src: GIMG_4 },
    { id: 5, src: GIMG_5 },
    { id: 6, src: GIMG_6 },
  ];

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

  const autoScroll = (ref) => {
    const el = ref.current;
    if (!el) return;
    let pos = 0;
    const scroll = () => {
      pos += 0.3;
      if (pos >= el.scrollHeight - el.clientHeight) pos = 0;
      el.scrollTop = pos;
      requestAnimationFrame(scroll);
    };
    requestAnimationFrame(scroll);
  };

  useEffect(() => {
    autoScroll(newsScrollRef);
    autoScroll(recruitmentScrollRef);
  }, []);

  return (
    <section className="py-16 bg-white dark:bg-black transition-colors duration-500">
      <div className="container mx-auto px-4">

        {/* Page Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t("photo.gallery") || "Photo Gallery"}
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: policeBlue }}></div>
        </div>

        {/* Gallery */}
        <Card className="bg-white dark:bg-[#101B33] shadow-md rounded-xl mb-10">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((img) => (
                <div
                  key={img.id}
                  className="cursor-pointer h-40 md:h-48 overflow-hidden rounded-lg"
                  onClick={() => setSelectedImage(img.src)}
                >
                  <img src={img.src} className="w-full h-full object-cover rounded-lg" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Latest News + Recruitment */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Latest News */}
          <Card className="bg-white dark:bg-[#101B33] shadow-md rounded-xl">
            <div className="bg-[rgb(0,51,102)] text-white py-3 text-center text-xl font-bold">
              {t("latest.news") || "Latest News"}
            </div>
            <CardContent ref={newsScrollRef} className="max-h-80 overflow-hidden">
              {[...latestNews, ...latestNews].map((n, i) => (
                <Link key={`${n.id}-${i}`} to={n.link}>
                  <div className="border-b py-3 dark:border-gray-700">
                    <p className="text-gray-900 dark:text-white font-medium">{n.title}</p>
                    <p className="text-xs text-gray-500 dark:text-white/70">{formatDate(n.date)}</p>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>

          {/* Recruitment */}
          <Card className="bg-white dark:bg-[#101B33] shadow-md rounded-xl">
            <div className="bg-[rgb(0,51,102)] text-white py-3 text-center text-xl font-bold">
              {t("recruitment") || "Recruitment"}
            </div>
            <CardContent ref={recruitmentScrollRef} className="max-h-80 overflow-hidden">
              {[...recruitment, ...recruitment].map((r, i) => (
                <Link key={`${r.id}-${i}`} to={r.link}>
                  <div className="border-b py-3 dark:border-gray-700">
                    <p className="text-gray-900 dark:text-white font-medium">{r.title}</p>
                    <p className="text-xs text-gray-500 dark:text-white/70">{formatDate(r.lastDate)}</p>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>

        </div>
      </div>

      {/* Image Zoom Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} className="max-w-[600px] rounded-lg shadow-lg" />
        </div>
      )}
    </section>
  );
};

export default EventsGallery;
