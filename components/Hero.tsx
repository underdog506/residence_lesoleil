'use client';

import Image from 'next/image';
import { Sparkles, ArrowRight, Phone, Heart, Shield, Stethoscope, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/facade.jpg"
          alt="Façade de Résidence Le Soleil"
          fill
          className="object-cover opacity-20"
          priority
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-800/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-slate-100 px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="mb-8 inline-block">
          <span className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md text-amber-300 shadow-lg shadow-amber-500/20">
            <Sparkles className="w-4 h-4" />
            Partenaire du CISSSO
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-none tracking-tighter">
          <span className="text-white">Résidence</span>
          <br />
          <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
            Le Soleil
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl md:text-3xl mb-6 font-semibold max-w-4xl mx-auto leading-snug text-slate-200">
          Transformons vos années dorées en moments de sérénité
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg mb-12 text-slate-400 font-normal max-w-2xl mx-auto">
          Un environnement chaleureux et sécurisé au cœur de Gatineau
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto mb-12">
          <button
            onClick={() => scrollToSection('reserver')}
            className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 px-10 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 relative overflow-hidden touch-manipulation"
          >
            <span className="relative z-10">Réserver une visite</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="tel:8197440672"
            className="group inline-flex items-center justify-center gap-2 bg-slate-800/50 backdrop-blur-md border-2 border-amber-500/50 hover:bg-amber-500/10 hover:border-amber-400 text-amber-400 px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 touch-manipulation"
          >
            <Phone className="w-5 h-5" />
            819-744-0672
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800/60 backdrop-blur-md border border-amber-500/20 shadow-lg">
            <Stethoscope className="w-5 h-5 text-amber-400" />
            <span className="text-slate-200 font-medium">Soins professionnels</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800/60 backdrop-blur-md border border-amber-500/20 shadow-lg">
            <Shield className="w-5 h-5 text-amber-400" />
            <span className="text-slate-200 font-medium">Sécurité 24/7</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800/60 backdrop-blur-md border border-amber-500/20 shadow-lg">
            <Heart className="w-5 h-5 text-amber-400" />
            <span className="text-slate-200 font-medium">Personnel dévoué</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('a-propos')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-amber-400 hover:text-amber-300 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
