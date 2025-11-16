"use client";

import { useState } from "react";
import {
  AlertCircle,
  Phone,
  CheckCircle,
  Clock,
  Calendar,
  Shield,
  Award,
  Heart,
} from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    date: "",
    heure: "",
    message: "",
    website: "", // Honeypot field - should remain empty
  });

  const [formStartTime] = useState(Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          formStartTime,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
          date: "",
          heure: "",
          message: "",
          website: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="reserver"
      className="py-24 bg-gradient-to-b from-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4 tracking-tight">
            Réserver une visite
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed px-4">
            Venez découvrir nos installations et rencontrer notre équipe
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
          <div className="text-center p-4 bg-slate-800/50 rounded-lg shadow-lg border border-amber-500/20">
            <Shield className="w-8 h-8 mx-auto mb-2 text-amber-400" />
            <p className="text-xs sm:text-sm font-medium text-slate-300">
              Sécurisé 24/7
            </p>
          </div>
          <div className="text-center p-4 bg-slate-800/50 rounded-lg shadow-lg border border-amber-500/20">
            <Award className="w-8 h-8 mx-auto mb-2 text-amber-400" />
            <p className="text-xs sm:text-sm font-medium text-slate-300">
              Certifié CISSSO
            </p>
          </div>
          <div className="text-center p-4 bg-slate-800/50 rounded-lg shadow-lg border border-amber-500/20">
            <Heart className="w-8 h-8 mx-auto mb-2 text-amber-400" />
            <p className="text-xs sm:text-sm font-medium text-slate-300">
              Soins experts
            </p>
          </div>
        </div>

        <div className="card bg-slate-800 shadow-2xl p-6 sm:p-8 md:p-12 border-amber-500/20">
          {/* Scarcity Alert */}
          <div className="flex items-start gap-3 bg-amber-500/10 border-l-4 border-amber-500 p-5 mb-8 rounded-lg">
            <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-400 mb-1">
                Places limitées
              </p>
              <p className="text-sm text-slate-300">
                Seulement 3 chambres disponibles - Réservez votre visite dès
                aujourd&apos;hui
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="prenom"
                  className="block text-slate-200 font-semibold mb-2 text-sm"
                >
                  Prénom *
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 text-slate-100 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all placeholder-slate-500"
                  placeholder="Prenom"
                />
              </div>
              <div>
                <label
                  htmlFor="nom"
                  className="block text-slate-200 font-semibold mb-2 text-sm"
                >
                  Nom de famille *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 text-slate-100 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all placeholder-slate-500"
                  placeholder="Nom"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-slate-200 font-semibold mb-2 text-sm"
                >
                  Courriel *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 text-slate-100 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all placeholder-slate-500"
                  placeholder="nom@exemple.com"
                />
              </div>
              <div>
                <label
                  htmlFor="telephone"
                  className="block text-slate-200 font-semibold mb-2 text-sm"
                >
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 text-slate-100 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all placeholder-slate-500"
                  placeholder="819-555-1234"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="date"
                  className="block text-slate-200 font-semibold mb-2 text-sm"
                >
                  <Calendar className="inline w-4 h-4 mr-1 mb-0.5 text-amber-400" />
                  Date préférée *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 text-slate-100 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="heure"
                  className="block text-slate-200 font-semibold mb-2 text-sm"
                >
                  <Clock className="inline w-4 h-4 mr-1 mb-0.5 text-amber-400" />
                  Heure préférée *
                </label>
                <select
                  id="heure"
                  name="heure"
                  value={formData.heure}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 text-slate-100 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                >
                  <option value="">Sélectionnez une heure</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-slate-200 font-semibold mb-2 text-sm"
              >
                Message (optionnel)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 text-slate-100 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all placeholder-slate-500"
                placeholder="Avez-vous des questions ou des besoins particuliers?"
              />
            </div>

            {/* Honeypot field - hidden from users, visible to bots */}
            <div className="opacity-0 absolute -left-[9999px] pointer-events-none" aria-hidden="true">
              <label htmlFor="website">Site web</label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 py-4 px-8 rounded-lg text-lg font-bold transition-all shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/50 disabled:from-slate-600 disabled:to-slate-600 disabled:cursor-not-allowed active:scale-98 touch-manipulation"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Envoi en cours...
                </span>
              ) : (
                "Réserver ma visite"
              )}
            </button>

            {submitStatus === "success" && (
              <div className="flex items-start gap-3 bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="text-sm">
                  <strong>Merci!</strong> Votre demande a été envoyée. Nous vous
                  contactons sous peu.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="text-sm">
                  Une erreur est survenue. Veuillez réessayer ou nous appeler au
                  819-744-0672.
                </p>
              </div>
            )}
          </form>

          {/* Alternative Contact */}
          <div className="mt-10 pt-8 border-t border-slate-700">
            <p className="text-center text-slate-400 mb-4 font-medium">
              Ou contactez-nous directement
            </p>
            <a
              href="tel:8197440672"
              className="flex items-center justify-center gap-2 mx-auto max-w-xs bg-slate-700/50 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 px-6 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-amber-500/20 active:scale-98 touch-manipulation"
            >
              <Phone className="w-5 h-5" />
              819-744-0672
            </a>
          </div>
        </div>

        {/* Social Proof Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 italic">
            Plus de 50 familles nous font confiance pour le bien-être de leurs
            proches
          </p>
        </div>
      </div>
    </section>
  );
}
