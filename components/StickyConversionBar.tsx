"use client";

import { useState, useEffect } from "react";
import { Phone, Calendar } from "lucide-react";

export default function StickyConversionBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling past hero section (approx 100vh)
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      setIsVisible(scrollPosition > viewportHeight * 0.75);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-slate-900/95 backdrop-blur-lg border-t-2 border-amber-500/30 shadow-2xl shadow-black/50">
        <div className="flex items-center gap-3 px-4 py-3">
          {/* Book Visit Button */}
          <button
            onClick={() => scrollToSection("reserver")}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 px-6 py-4 rounded-lg font-bold transition-all shadow-lg shadow-amber-500/30 active:scale-98 touch-manipulation"
          >
            <Calendar className="w-5 h-5" />
            <span className="text-base">Réserver</span>
          </button>

          {/* Call Button */}
          <a
            href="tel:8197440672"
            className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 border border-amber-500/50 text-amber-400 px-6 py-4 rounded-lg font-semibold transition-all shadow-lg active:scale-98 touch-manipulation"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>

        {/* Scarcity Indicator */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-500 px-4 py-2 border-t border-amber-400/20">
          <p className="text-xs text-center font-bold text-slate-900">
            Seulement 3 chambres disponibles
          </p>
        </div>
      </div>
    </div>
  );
}
