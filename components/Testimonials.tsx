"use client";

import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marie Leblanc",
      relation: "Fille de résidente",
      text: "Ma mère est très heureuse à la Résidence Le Soleil. Le personnel est attentionné et professionnel. Je suis rassurée de savoir qu'elle est entre de bonnes mains.",
      rating: 5,
    },
    {
      name: "Jean-Pierre Gagnon",
      relation: "Fils de résident",
      text: "Les installations sont impeccables et modernes. Mon père apprécie particulièrement les repas personnalisés et l'attention portée à ses besoins médicaux.",
      rating: 5,
    },
    {
      name: "Sophie Tremblay",
      relation: "Nièce de résidente",
      text: "Un environnement chaleureux et sécuritaire. Ma tante se sent vraiment chez elle. Le système d'appel d'urgence nous donne une grande tranquillité d'esprit.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4 tracking-tight">
            Témoignages de Familles
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed px-4">
            Ce que disent les familles de nos résidents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card p-8 relative transition-transform hover:scale-105 bg-slate-800 border-amber-500/10 hover:border-amber-500/30"
            >
              <Quote className="w-10 h-10 text-amber-400 opacity-20 mb-6" />

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed mb-6 italic text-base">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="border-t border-slate-700 pt-4">
                <p className="font-bold text-slate-100 blur-sm select-none">
                  {testimonial.name}
                </p>
                <p className="text-sm text-slate-400">{testimonial.relation}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/80 backdrop-blur-md rounded-full shadow-lg border border-amber-500/30">
            <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-slate-100">5.0 étoiles</span>
            <span className="text-slate-400">• Plus de 25 avis positifs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
