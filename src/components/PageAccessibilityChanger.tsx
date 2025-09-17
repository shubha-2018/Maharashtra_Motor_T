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
} from "lucide-react";
import { motion } from "framer-motion";
import { useScreenReader } from "../hooks/useScreenReader";

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
  const [darkMode, setDarkMode] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const { isEnabled: screenReaderEnabled, toggleScreenReader } =
    useScreenReader();

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
    // Apply font-size globally but exclude the accessibility panel
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
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(document.body.innerText);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }
  };

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
      label: "Bigger Text",
      action: () => handleFontSizeChange("1.2rem"),
    },
    {
      icon: Minus,
      label: "Smaller Text",
      action: () => handleFontSizeChange("0.8rem"),
    },
    {
      icon: AlignJustify,
      label: "Text Spacing",
      action: handleTextSpacing,
      active: textSpacing,
    },
    {
      icon: Type,
      label: "Line Height",
      action: handleLineHeight,
      active: lineHeight,
    },
    {
      icon: Type,
      label: "Dyslexia Friendly",
      action: handleDyslexiaFont,
      active: dyslexiaFont,
    },
    {
      icon: Waves,
      label: "ADHD Mode",
      action: handleAdhdMode,
      active: adhdMode,
    },
    {
      icon: Palette,
      label: "Saturation",
      action: handleSaturation,
      active: saturation,
    },
    {
      icon: darkMode ? Sun : Moon,
      label: "Light-Dark",
      action: toggleDarkMode,
      active: darkMode,
    },
    {
      icon: FlipHorizontal,
      label: "Invert Colors",
      action: handleInvertColors,
      active: invertColors,
    },
    {
      icon: Link,
      label: "Highlight Links",
      action: handleHighlightLinks,
      active: highlightLinks,
    },
    { icon: Volume2, label: "Text To Speech", action: handleTextToSpeech },
    {
      icon: screenReaderEnabled ? VolumeX : Volume2,
      label: "Screen Reader",
      action: toggleScreenReader,
      active: screenReaderEnabled,
    },
    {
      icon: MousePointer,
      label: "Cursor",
      action: handleLargeCursor,
      active: largeCursor,
    },
    {
      icon: Pause,
      label: "Pause Animation",
      action: handlePauseAnimations,
      active: pauseAnimations,
    },
    {
      icon: ImageOff,
      label: "Hide Images",
      action: handleHideImages,
      active: hideImages,
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50" data-accessibility-panel>
      <div className="group" data-accessibility-panel>
        <button
          aria-label="Accessibility options"
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center gap-3 rounded-full w-16 group-hover:w-64 h-16 bg-indigo-600 hover:bg-indigo-700 shadow-lg transition-all duration-300 overflow-hidden pr-4 pl-0 group-hover:pl-6"
          data-accessibility-panel
        >
          <PersonStanding className="w-6 h-6 scale-150 shrink-0 text-white translate-x-3 group-hover:translate-x-0" />
          <div className="overflow-hidden max-w-0 group-hover:max-w-[160px] transition-all duration-300">
            <span className="block text-white text-base font-medium whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Accessibility options
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
              <motion.div >
                <div className="px-0 pb-4">
                  <div className="flex items-center justify-between">
                    <h2
                      id="accessibility-title"
                      className="text-xl font-semibold text-indigo-600 dark:text-indigo-400"
                    >
                      Accessibility options
                    </h2>
                    <div className="flex items-center gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 rounded px-2 py-1 text-sm">
                        Ctrl+F2
                      </span>
                      <button
                        aria-label="Close accessibility panel"
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

              {/* Grid of accessibility options */}
              <motion.div
                className="flex-1 grid grid-cols-3 gap-4"
              >
                {accessibilityOptions.map((option, index) => (
                  <motion.div
                    key={index}
                 
                    transition={{ delay: index * 0.05 }}
                  >
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
                        className={`text-xs font-medium ${
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
              <motion.div
                className="mt-6 flex items-center justify-between"
              >
                <button
                  onClick={resetAllSettings}
                  className="text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 flex items-center gap-2 rounded px-3 py-2"
                  data-accessibility-panel
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset All Settings
                </button>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Created by Nashik Police Department
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
