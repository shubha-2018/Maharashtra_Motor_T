import { useLanguage } from "@/contexts/LanguageContext";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import IMG1 from "@/assets/footer/1.webp";
import IMG2 from "@/assets/footer/2.webp";
import IMG3 from  "@/assets/footer/3.webp";
import IMG4 from  "@/assets/footer/4.webp";
import IMG5 from "@/assets/footer/4.webp";
import IMG6 from  "@/assets/footer/5.webp";


const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
];

function GovermentLinks() {
  const { t } = useLanguage();
  const carouselRef = useRef(null);
  const governmentLinks = [
    {
      href: "https://acbmaharashtra.gov.in/",
      src: IMG1,
      alt: t("acb_maharashtra"),
      title: t("acb_full_name"),
    },
    {
      href: "https://mpanashik.gov.in/",
      src: IMG2,
      alt: t("mpa_nashik"),
      title: t("mpa_full_name"),
    },
    {
      href: "https://aaplesarkar.mahaonline.gov.in/",
      src: IMG3,
      alt: t("aaple_sarkar"),
      title: t("aaple_sarkar_desc"),
    },
    {
      href: "https://www.mahapolice.gov.in/",
      src: IMG4,
      alt: t("maharashtra_police"),
      title: t("maharashtra_police_desc"),
    },
    {
      href: "https://www.startupindia.gov.in/",
      src: IMG5,
      alt: t("startup_india"),
      title: t("startup_india_desc"),
    },
    {
      href: "https://digitalindia.gov.in/",
      src: IMG6,
      alt: t("digital_india"),
      title: t("digital_india_desc"),
    },
  ];
  return (
    <div>
      {" "}
      <section
        className="py-5 max-w-6xl mx-auto"
        aria-labelledby="partners-heading"
      >
        <h2 id="partners-heading" className="sr-only">
          {t("government_partners")}
        </h2>

        <div
          ref={carouselRef}
          role="region"
          aria-describedby="carousel-instructions"
        >
          <div id="carousel-instructions" className="sr-only">
            {t(
              "carousel_instructions"
            )}
          </div>

          <Slide
            slidesToScroll={1}
            slidesToShow={2}
            indicators={false}
            autoplay={true}
            responsive={responsiveSettings}
            duration={1000}
          >
            {governmentLinks.map((link, index) => (
              <div
                key={index}
                className="flex items-center px-10"
                role="listitem"
              >
                <Link
                  to={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-visible link-accessible"
                  aria-label={link.title}
                  title={link.title}
                >
                  <img
                    src={link.src}
                    alt={link.alt}
                    className="w-16 h-auto hover:scale-105 transition-transform"
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                </Link>
              </div>
            ))}
          </Slide>
        </div>
      </section>
    </div>
  );
}

export default GovermentLinks;
