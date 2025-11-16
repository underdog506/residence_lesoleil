'use client';

import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import AnimatedBurger from './AnimatedBurger';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-black/20 border-b border-amber-500/10'
          : 'bg-slate-900/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('accueil')}
            className="flex items-center space-x-2 group"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent transition-all group-hover:from-amber-300 group-hover:to-amber-400">
              Résidence Le Soleil
            </div>
          </button>

          {/* Desktop Navigation - Improved Spacing */}
          <div className="hidden lg:flex items-center gap-10">
            <button
              onClick={() => scrollToSection('accueil')}
              className="text-slate-300 hover:text-amber-400 transition-colors font-medium text-base"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('a-propos')}
              className="text-slate-300 hover:text-amber-400 transition-colors font-medium text-base"
            >
              À Propos
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-slate-300 hover:text-amber-400 transition-colors font-medium text-base"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('chambres')}
              className="text-slate-300 hover:text-amber-400 transition-colors font-medium text-base"
            >
              Chambres
            </button>
            <button
              onClick={() => scrollToSection('securite')}
              className="text-slate-300 hover:text-amber-400 transition-colors font-medium text-base"
            >
              Sécurité
            </button>
            <button
              onClick={() => scrollToSection('reserver')}
              className="text-slate-300 hover:text-amber-400 transition-colors font-medium text-base"
            >
              Réserver
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-300 hover:text-amber-400 transition-colors font-medium text-base"
            >
              Contact
            </button>

            {/* CTA Button */}
            <a
              href="tel:8197440672"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 px-6 py-3 rounded-lg font-bold transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105"
            >
              <Phone className="w-4 h-4 text-slate-900" />
              <span className="font-bold text-slate-900">819-744-0672</span>
            </a>
          </div>

          {/* Animated Burger Menu */}
          <AnimatedBurger
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>

        {/* Mobile Menu - Dark Theme */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[600px] opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('accueil')}
              className="block w-full text-left px-5 py-4 text-slate-300 hover:bg-slate-800/50 hover:text-amber-400 rounded-lg transition-all font-medium active:scale-98 touch-manipulation border border-slate-700/50"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('a-propos')}
              className="block w-full text-left px-5 py-4 text-slate-300 hover:bg-slate-800/50 hover:text-amber-400 rounded-lg transition-all font-medium active:scale-98 touch-manipulation border border-slate-700/50"
            >
              À Propos
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-5 py-4 text-slate-300 hover:bg-slate-800/50 hover:text-amber-400 rounded-lg transition-all font-medium active:scale-98 touch-manipulation border border-slate-700/50"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('chambres')}
              className="block w-full text-left px-5 py-4 text-slate-300 hover:bg-slate-800/50 hover:text-amber-400 rounded-lg transition-all font-medium active:scale-98 touch-manipulation border border-slate-700/50"
            >
              Chambres
            </button>
            <button
              onClick={() => scrollToSection('securite')}
              className="block w-full text-left px-5 py-4 text-slate-300 hover:bg-slate-800/50 hover:text-amber-400 rounded-lg transition-all font-medium active:scale-98 touch-manipulation border border-slate-700/50"
            >
              Sécurité
            </button>
            <button
              onClick={() => scrollToSection('reserver')}
              className="block w-full text-left px-5 py-4 text-slate-300 hover:bg-slate-800/50 hover:text-amber-400 rounded-lg transition-all font-medium active:scale-98 touch-manipulation border border-slate-700/50"
            >
              Réserver
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-5 py-4 text-slate-300 hover:bg-slate-800/50 hover:text-amber-400 rounded-lg transition-all font-medium active:scale-98 touch-manipulation border border-slate-700/50"
            >
              Contact
            </button>

            {/* Mobile CTA */}
            <a
              href="tel:8197440672"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 px-5 py-5 rounded-lg font-bold hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/30 active:scale-98 mt-4 touch-manipulation"
            >
              <Phone className="w-5 h-5" />
              819-744-0672
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
