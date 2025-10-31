import React, { useEffect, useState } from "react";

const SocialMediaFloatButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // 👇 Detect scroll
  useEffect(() => {
    const handleColorChangeOnScroll = () => {
      if (window.scrollY > 50) {
        setTimeout(() => {
          setColorChange(true);
        }, 500);
      } else {
        setTimeout(() => {
          setColorChange(false);
        }, 500);
      }
    };

    window.addEventListener("scroll", handleColorChangeOnScroll);
    return () => {
      window.removeEventListener("scroll", handleColorChangeOnScroll);
    };
  }, []);

  const socialMediaIcons = [
    {
      name: "Facebook",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      url: "https://www.facebook.com/profile.php?id=61577227071617",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      url: "https://x.com/MH_POLICE_PCIT/status/1932359777243586983",
      color: "bg-blue-400 hover:bg-blue-500",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
      url: "http://instagram.com/mh_police_pcit/",
      color: "bg-pink-600 hover:bg-pink-700",
    },
    {
      name: "YouTube",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184A3.016 3.016 0 0 1 21.6 5.18c.97 1.687.97 5.203.97 5.203s0 3.517-.97 5.203a3.016 3.016 0 0 1-1.985 1.996c-1.75.473-8.615.473-8.615.473s-6.865 0-8.615-.473A3.016 3.016 0 0 1 .4 15.586C-.57 13.9-.57 10.383-.57 10.383s0-3.517.97-5.203A3.016 3.016 0 0 1 2.385 3.184C4.135 2.71 12 2.71 12 2.71s7.865 0 9.615.474ZM9.75 8.75v5.266l4.737-2.633L9.75 8.75Z" />
        </svg>
      ),
      url: "https://www.youtube.com/@pcit-mhpolice",
      color: "bg-red-600 hover:bg-red-700",
    },
  ];

  return (
    <div className="fixed right-2 sm:right-8 bottom-28 z-50 flex flex-col items-center space-y-3">
      {/* Social media icons */}
      {isExpanded &&
        socialMediaIcons.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.color} text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110`}
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}

      {/* Main button */}
      <button
        onClick={toggleExpand}
        className={`bg-primary text-white ease-in-out delay-150 rounded-full p-5 shadow-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 ${
          colorChange ? "hidden" : ""
        }`}
        aria-expanded={isExpanded}
        aria-label="Social media links"
      >
        {isExpanded ? (
          // Close icon
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Share icon
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default SocialMediaFloatButton;
