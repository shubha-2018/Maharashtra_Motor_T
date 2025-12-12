import * as React from "react";
import {
  Moon,
  Type,
  RotateCcw,
  Plus,
  Minus,
  AlignJustify,
  Volume2,
  MousePointer,
  Pause,
  ImageOff,
  Link,
  Waves,
  Palette,
  FlipHorizontal,
  VolumeX,
  PersonStanding,
  Sun,
  Languages,
} from "lucide-react";
import { motion } from "framer-motion";
import { useScreenReader } from "../hooks/useScreenReader";
import { useLanguage } from "@/contexts/LanguageContext";

// Language context and hook
// Translation dictionary
const translations = {
  en: {
    accessibilityOptions: "Accessibility options",
    biggerText: "Bigger Text",
    smallerText: "Smaller Text",
    textSpacing: "Text Spacing",
    lineHeight: "Line Height",
    dyslexiaFriendly: "Dyslexia Friendly",
    adhdMode: "ADHD Mode",
    saturation: "Saturation",
    lightDark: "Light/Dark",
    invertColors: "Invert Colors",
    highlightLinks: "Highlight Links",
    textToSpeech: "Text To Speech",
    screenReader: "Screen Reader",
    cursor: "Large Cursor",
    pauseAnimation: "Pause Animation",
    hideImages: "Hide Images",
    resetAll: "Reset All Settings",
    createdBy: "Created by Wireless",
    language: "Language",
    marathi: "Marathi",
    english: "English",
    close: "Close",
    keyboardShortcut: "Ctrl+F2",
    textToSpeechNotSupported: "Text-to-speech is not supported in your browser",
    noContentFound: "No readable content found",
    speaking: "Speaking...",
    stopSpeech: "Stop Speech",
  },
  mr: {
    accessibilityOptions: "प्रवेशयोग्यता पर्याय",
    biggerText: "मोठा मजकूर",
    smallerText: "लहान मजकूर",
    textSpacing: "मजकूर अंतर",
    lineHeight: "ओळ उंची",
    dyslexiaFriendly: "डिस्लेक्सिया अनुकूल",
    adhdMode: "ADHD मोड",
    saturation: "संपृक्तता",
    lightDark: "प्रकाश/अंधार",
    invertColors: "रंग उलटा करा",
    highlightLinks: "लिंक हायलाइट करा",
    textToSpeech: "मजकूर ते भाषण",
    screenReader: "स्क्रीन वाचक",
    cursor: "मोठा कर्सर",
    pauseAnimation: "अ‍ॅनिमेशन थांबवा",
    hideImages: "चित्रे लपवा",
    resetAll: "सर्व सेटिंग्ज रीसेट करा",
    createdBy: "",
    language: "भाषा",
    marathi: "मराठी",
    english: "English",
    close: "बंद करा",
    keyboardShortcut: "Ctrl+F2",
    textToSpeechNotSupported: "तुमच्या ब्राउझरमध्ये मजकूर-ते-भाषण समर्थित नाही",
    noContentFound: "वाचण्यायोग्य सामग्री आढळली नाही",
    speaking: "बोलत आहे...",
    stopSpeech: "भाषण थांबवा",
  },
};

const drawerVariants = {
  hidden: {
    x: "100%",
    opacity: 0,
    rotateY: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    x: 20,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8,
    },
  },
};

const PageAccessibilityChanger = () => {
  const { language, setLanguage } = useLanguage();
  const [darkMode, setDarkMode] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const { isEnabled: screenReaderEnabled, toggleScreenReader } =
    useScreenReader();

  // Language state
  const t = (key) =>
    translations[language]?.[key] || translations.en[key] || key;

  // Text-to-speech state
  const [isSpeaking, setIsSpeaking] = React.useState(false);
  const [availableVoices, setAvailableVoices] = React.useState([]);

  // Accessibility state management
  const [textSpacing, setTextSpacing] = React.useState(false);
  const [lineHeight, setLineHeight] = React.useState(false);
  const [dyslexiaFont, setDyslexiaFont] = React.useState(false);
  const [adhdMode, setAdhdMode] = React.useState(false);
  const [saturation, setSaturation] = React.useState(false);
  const [invertColors, setInvertColors] = React.useState(false);
  const [highlightLinks, setHighlightLinks] = React.useState(false);
  const [largeCursor, setLargeCursor] = React.useState(false);
  const [pauseAnimations, setPauseAnimations] = React.useState(false);
  const [hideImages, setHideImages] = React.useState(false);

  // Load available voices
  React.useEffect(() => {
    const loadVoices = () => {
      const voices = speechSynthesis.getVoices();
      setAvailableVoices(voices);
      console.log("Available voices:", voices);
    };

    if ("speechSynthesis" in window) {
      // Load voices when they become available
      speechSynthesis.onvoiceschanged = loadVoices;
      loadVoices(); // Initial load
    }

    return () => {
      if ("speechSynthesis" in window) {
        speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  // Auto-stop speech when component unmounts or language changes
  React.useEffect(() => {
    return () => {
      if ("speechSynthesis" in window) {
        speechSynthesis.cancel();
      }
    };
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const ensureGlobalFilterStyle = () => {
    let style = document.getElementById("global-filters");
    if (!style) {
      style = document.createElement("style");
      style.id = "global-filters";
      style.textContent = `
        /* Apply filters to html element to avoid layout shifts */
        html { 
          filter: saturate(var(--saturation, 1)) invert(var(--invert, 0)) !important; 
        }
        [data-accessibility-panel], [data-accessibility-panel] * { 
          filter: none !important; 
        }
      `;
      document.head.appendChild(style);
    }
    return style;
  };

  const handleFontSizeChange = (size) => {
    let style = document.getElementById("global-font-size");
    if (!style) {
      style = document.createElement("style");
      style.id = "global-font-size";
      document.head.appendChild(style);
    }
    style.textContent = `
      :where(p, span, li, a, button, input, textarea, label, h1, h2, h3, h4, h5, h6):not([data-accessibility-panel]):not([data-accessibility-panel] *) { 
        font-size: ${size} !important; 
      }
    `;
  };

  const applyGlobalCSS = (property, value) => {
    const root = document.documentElement;
    root.style.setProperty(property, value);
  };

  const removeGlobalCSS = (property) => {
    const root = document.documentElement;
    root.style.removeProperty(property);
  };

  const handleTextSpacing = () => {
    setTextSpacing(!textSpacing);
    let style = document.getElementById("text-spacing-style");
    if (!textSpacing) {
      applyGlobalCSS("--text-spacing", "0.16em");
      if (!style) {
        style = document.createElement("style");
        style.id = "text-spacing-style";
        document.head.appendChild(style);
      }
      style.textContent = `
        :where(p, span, li, a, button, input, textarea, label, h1, h2, h3, h4, h5, h6):not([data-accessibility-panel]):not([data-accessibility-panel] *) { 
          letter-spacing: var(--text-spacing) !important; 
        }
      `;
    } else {
      removeGlobalCSS("--text-spacing");
      if (style) style.remove();
    }
  };

  const handleLineHeight = () => {
    setLineHeight(!lineHeight);
    let style = document.getElementById("line-height-style");
    if (!lineHeight) {
      applyGlobalCSS("--line-height", "1.6");
      if (!style) {
        style = document.createElement("style");
        style.id = "line-height-style";
        document.head.appendChild(style);
      }
      style.textContent = `
        :where(p, span, li, a, button, input, textarea, label, h1, h2, h3, h4, h5, h6):not([data-accessibility-panel]):not([data-accessibility-panel] *) { 
          line-height: var(--line-height) !important; 
        }
      `;
    } else {
      removeGlobalCSS("--line-height");
      if (style) style.remove();
    }
  };

  const handleDyslexiaFont = () => {
    setDyslexiaFont(!dyslexiaFont);
    if (!dyslexiaFont) {
      applyGlobalCSS(
        "--dyslexia-font",
        "OpenDyslexic, Comic Sans MS, sans-serif"
      );
      const style = document.createElement("style");
      style.id = "dyslexia-font";
      style.textContent = `
        body, body *:not([data-accessibility-panel]):not([data-accessibility-panel] *) { 
          font-family: var(--dyslexia-font) !important; 
        }
      `;
      document.head.appendChild(style);
    } else {
      removeGlobalCSS("--dyslexia-font");
      const existingStyle = document.getElementById("dyslexia-font");
      if (existingStyle) existingStyle.remove();
    }
  };

  const handleAdhdMode = () => {
    setAdhdMode(!adhdMode);
    if (!adhdMode) {
      applyGlobalCSS("--reduced-motion", "reduce");
      document.body.style.setProperty("animation-duration", "0.01ms");
      document.body.style.setProperty("animation-iteration-count", "1");
      document.body.style.setProperty("transition-duration", "0.01ms");
    } else {
      removeGlobalCSS("--reduced-motion");
      document.body.style.removeProperty("animation-duration");
      document.body.style.removeProperty("animation-iteration-count");
      document.body.style.removeProperty("transition-duration");
    }
  };

  const handleSaturation = () => {
    setSaturation(!saturation);
    if (!saturation) {
      ensureGlobalFilterStyle();
      applyGlobalCSS("--saturation", "0.3");
    } else {
      applyGlobalCSS("--saturation", "1");
    }
  };

  const handleInvertColors = () => {
    setInvertColors(!invertColors);
    if (!invertColors) {
      ensureGlobalFilterStyle();
      applyGlobalCSS("--invert", "1");
    } else {
      applyGlobalCSS("--invert", "0");
    }
  };

  const handleHighlightLinks = () => {
    setHighlightLinks(!highlightLinks);
    if (!highlightLinks) {
      applyGlobalCSS("--link-highlight", "2px solid #ff0000");
      const style = document.createElement("style");
      style.id = "link-highlight";
      style.textContent = `
        a { border: var(--link-highlight) !important; background: rgba(255, 0, 0, 0.1) !important; }
        [data-accessibility-panel] a { border: none !important; background: none !important; }
      `;
      document.head.appendChild(style);
    } else {
      removeGlobalCSS("--link-highlight");
      const existingStyle = document.getElementById("link-highlight");
      if (existingStyle) existingStyle.remove();
    }
  };

  const handleTextToSpeech = () => {
    if (isSpeaking) {
      // Stop speech if currently speaking
      speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    // Check if speech synthesis is supported
    if (!("speechSynthesis" in window)) {
      alert(t("textToSpeechNotSupported"));
      return;
    }

    // Stop any ongoing speech
    speechSynthesis.cancel();

    // Get page content (simplified approach)
    const getPageText = () => {
      // Create a clone of the body
      const bodyClone = document.body.cloneNode(true);

      // Remove accessibility panel
      const panel = bodyClone.querySelector("[data-accessibility-panel]");
      if (panel) panel.remove();

      // Remove script and style elements
      const scripts = bodyClone.querySelectorAll("script, style, noscript");
      scripts.forEach((el) => el.remove());

      // Get text content
      return bodyClone.textContent || bodyClone.innerText || "";
    };

    const text = getPageText().trim().substring(0, 5000); // Limit length

    if (!text) {
      alert(t("noContentFound"));
      return;
    }

    // Create utterance
    const utterance = new SpeechSynthesisUtterance(text);

    // Set language and find appropriate voice
    const targetLang = language === "mr" ? "mr-IN" : "en-US";
    utterance.lang = targetLang;

    // Try to find a voice for the target language
    const voices = speechSynthesis.getVoices();
    const preferredVoice = voices.find((voice) =>
      voice.lang.includes(language === "mr" ? "mr" : "en")
    );

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    // Event handlers
    utterance.onstart = () => {
      setIsSpeaking(true);
      console.log("Speech started");
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      console.log("Speech ended");
    };

    utterance.onerror = (event) => {
      setIsSpeaking(false);
      console.error("Speech error:", event);

      // Fallback to English if Marathi fails
      if (language === "mr" && event.error === "language-not-supported") {
        console.log("Marathi not supported, trying English");
        utterance.lang = "en-US";
        const englishVoice = voices.find((voice) => voice.lang.includes("en"));
        if (englishVoice) utterance.voice = englishVoice;
        speechSynthesis.speak(utterance);
      }
    };

    // Start speaking
    speechSynthesis.speak(utterance);
  };

  // Auto text speech on page load (optional feature)
  React.useEffect(() => {
    const autoSpeakOnLoad = () => {
      // You can enable/disable this feature based on user preference
      const shouldAutoSpeak = localStorage.getItem("autoSpeak") === "true";

      if (shouldAutoSpeak && "speechSynthesis" in window) {
        // Wait a bit for page to load completely
        setTimeout(() => {
          handleTextToSpeech();
        }, 2000);
      }
    };

    autoSpeakOnLoad();
  }, [language]); // Re-run when language changes

  const handleLargeCursor = () => {
    setLargeCursor(!largeCursor);
    if (!largeCursor) {
      applyGlobalCSS("--cursor-size", "large");
      document.body.style.cursor =
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M0 0h32v32H0z' fill='%23000'/%3E%3C/svg%3E\"), auto";
    } else {
      removeGlobalCSS("--cursor-size");
      document.body.style.cursor = "";
    }
  };

  const handlePauseAnimations = () => {
    setPauseAnimations(!pauseAnimations);
    if (!pauseAnimations) {
      applyGlobalCSS("--animation-play-state", "paused");
      const style = document.createElement("style");
      style.id = "pause-animations";
      style.textContent =
        "body *:not([data-accessibility-panel]):not([data-accessibility-panel] *) { animation-play-state: var(--animation-play-state) !important; }";
      document.head.appendChild(style);
    } else {
      removeGlobalCSS("--animation-play-state");
      const existingStyle = document.getElementById("pause-animations");
      if (existingStyle) existingStyle.remove();
    }
  };

  const handleHideImages = () => {
    setHideImages(!hideImages);
    if (!hideImages) {
      applyGlobalCSS("--hide-images", "none");
      const style = document.createElement("style");
      style.id = "hide-images";
      style.textContent = `
        img, picture, video, svg { display: var(--hide-images) !important; }
        [data-accessibility-panel] img, [data-accessibility-panel] picture, [data-accessibility-panel] video, [data-accessibility-panel] svg { display: initial !important; }
      `;
      document.head.appendChild(style);
    } else {
      removeGlobalCSS("--hide-images");
      const existingStyle = document.getElementById("hide-images");
      if (existingStyle) existingStyle.remove();
    }
  };

  const resetAllSettings = () => {
    // Stop any ongoing speech
    if ("speechSynthesis" in window) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }

    handleFontSizeChange("1rem");
    setDarkMode(false);
    document.documentElement.classList.remove("dark");
    setTextSpacing(false);
    setLineHeight(false);
    setDyslexiaFont(false);
    setAdhdMode(false);
    setSaturation(false);
    setInvertColors(false);
    setHighlightLinks(false);
    setLargeCursor(false);
    setPauseAnimations(false);
    setHideImages(false);
    if (screenReaderEnabled) {
      toggleScreenReader();
    }

    // Clear all custom styles
    document.body.style.letterSpacing = "";
    document.body.style.lineHeight = "";
    document.body.style.fontFamily = "";
    document.body.style.filter = "";
    document.body.style.cursor = "";
    document.body.style.removeProperty("animation-duration");
    document.body.style.removeProperty("animation-iteration-count");
    document.body.style.removeProperty("transition-duration");

    // Remove custom style elements
    [
      "global-font-size",
      "text-spacing-style",
      "line-height-style",
      "link-highlight",
      "pause-animations",
      "hide-images",
      "global-filters",
      "dyslexia-font",
    ].forEach((id) => {
      const element = document.getElementById(id);
      if (element) element.remove();
    });

    // Clear CSS custom properties
    [
      "--text-spacing",
      "--line-height",
      "--dyslexia-font",
      "--reduced-motion",
      "--saturation",
      "--invert",
      "--link-highlight",
      "--cursor-size",
      "--animation-play-state",
      "--hide-images",
    ].forEach((prop) => {
      removeGlobalCSS(prop);
    });
  };

  // Keyboard shortcut handler
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "F2") {
        event.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const accessibilityOptions = [
    {
      icon: Plus,
      label: t("biggerText"),
      action: () => handleFontSizeChange("1.2rem"),
    },
    {
      icon: Minus,
      label: t("smallerText"),
      action: () => handleFontSizeChange("0.8rem"),
    },
    {
      icon: AlignJustify,
      label: t("textSpacing"),
      action: handleTextSpacing,
      active: textSpacing,
    },
    {
      icon: Type,
      label: t("lineHeight"),
      action: handleLineHeight,
      active: lineHeight,
    },
    {
      icon: Type,
      label: t("dyslexiaFriendly"),
      action: handleDyslexiaFont,
      active: dyslexiaFont,
    },
    {
      icon: Waves,
      label: t("adhdMode"),
      action: handleAdhdMode,
      active: adhdMode,
    },
    {
      icon: Palette,
      label: t("saturation"),
      action: handleSaturation,
      active: saturation,
    },
    {
      icon: darkMode ? Sun : Moon,
      label: t("lightDark"),
      action: toggleDarkMode,
      active: darkMode,
    },
    {
      icon: FlipHorizontal,
      label: t("invertColors"),
      action: handleInvertColors,
      active: invertColors,
    },
    {
      icon: Link,
      label: t("highlightLinks"),
      action: handleHighlightLinks,
      active: highlightLinks,
    },
    {
      icon: MousePointer,
      label: t("cursor"),
      action: handleLargeCursor,
      active: largeCursor,
    },
    {
      icon: Languages,
      label: t("language"),
      action: () => setLanguage(language === "en" ? "mr" : "en"),
      active: false,
    },
  ];

  return (
    <div
      className="fixed bottom-8 right-2 md:right-8 z-50"
      data-accessibility-panel
    >
      <div className="group" data-accessibility-panel>
        <button
          aria-label={t("accessibilityOptions")}
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center gap-3 rounded-full w-16 group-hover:w-64 h-16 bg-indigo-600 hover:bg-indigo-700 shadow-lg transition-all duration-300 overflow-hidden pr-4 pl-0 group-hover:pl-6"
          data-accessibility-panel
        >
          <PersonStanding className="w-6 h-6 scale-150 shrink-0 text-white translate-x-3 group-hover:translate-x-0" />
          <div className="overflow-hidden max-w-0 group-hover:max-w-[160px] transition-all duration-300">
            <span className="block text-white text-base font-medium whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              {t("accessibilityOptions")}
            </span>
          </div>
        </button>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
            data-accessibility-panel
          ></div>
          <motion.aside
            initial="hidden"
            animate="visible"
            className="fixed inset-y-0 right-0 h-full w-full max-w-md p-6 rounded-l-2xl shadow-xl bg-slate-50 dark:bg-slate-900"
            role="dialog"
            aria-modal="true"
            aria-labelledby="accessibility-title"
            data-accessibility-panel
          >
            <motion.div className="h-full flex flex-col">
              {/* Header */}
              <motion.div>
                <div className="px-0 pb-4">
                  <div className="flex items-center justify-between">
                    <h2
                      id="accessibility-title"
                      className="text-xl font-semibold text-indigo-600 dark:text-indigo-400"
                    >
                      {t("accessibilityOptions")}
                    </h2>
                    <div className="flex items-center gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 rounded px-2 py-1 text-sm">
                        {t("keyboardShortcut")}
                      </span>
                      <button
                        aria-label={t("close")}
                        onClick={() => setIsOpen(false)}
                        className="h-8 w-8 p-0 rounded hover:bg-gray-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200"
                        data-accessibility-panel
                      >
                        ×
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Language Selector */}
              <motion.div className="mb-4">
                <div className="flex items-center justify-center gap-4 p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {t("language")}:
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setLanguage("en")}
                      className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                        language === "en"
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
                      }`}
                    >
                      {t("english")}
                    </button>
                    <button
                      onClick={() => setLanguage("mr")}
                      className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                        language === "mr"
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
                      }`}
                    >
                      {t("marathi")}
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Speaking Indicator */}
              {isSpeaking && (
                <motion.div className="mb-4 p-3 bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded-lg">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                      {t("speaking")}
                    </span>
                  </div>
                </motion.div>
              )}

              {/* Grid of accessibility options */}
              <motion.div className="flex-1 grid grid-cols-2 p-5 gap-4 overflow-y-auto">
                {accessibilityOptions.map((option, index) => (
                  <motion.div key={index} transition={{ delay: index * 0.05 }}>
                    <button
                      onClick={option.action}
                      className={`h-20 w-full flex flex-col items-center hover:ring ring-indigo-300 justify-center gap-2 rounded-lg transition-all border ${
                        option.active
                          ? "bg-indigo-100 dark:bg-indigo-900/30 border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300"
                          : "bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                      }`}
                      data-accessibility-panel
                    >
                      <option.icon
                        className={`w-6 h-6 ${
                          option.active
                            ? "text-indigo-700 dark:text-indigo-300"
                            : "text-slate-800 dark:text-slate-200"
                        }`}
                      />
                      <span
                        className={`text-xs font-medium text-center px-1 ${
                          option.active
                            ? "text-indigo-700 dark:text-indigo-300"
                            : "text-slate-800 dark:text-slate-200"
                        }`}
                      >
                        {option.label}
                      </span>
                    </button>
                  </motion.div>
                ))}
              </motion.div>

              {/* Footer */}
              <motion.div className="mt-6 flex items-center justify-between">
                <button
                  onClick={resetAllSettings}
                  className="text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 flex items-center gap-2 rounded px-3 py-2"
                  data-accessibility-panel
                >
                  <RotateCcw className="w-4 h-4" />
                  {t("resetAll")}
                </button>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {t("createdBy")}
                </span>
              </motion.div>
            </motion.div>
          </motion.aside>
        </>
      )}
    </div>
  );
};

export default PageAccessibilityChanger;
