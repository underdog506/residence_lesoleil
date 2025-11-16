import { Hospital, UserCheck, Home, Heart } from "lucide-react";

export default function About() {
  return (
    <section
      id="a-propos"
      className="py-32 bg-gradient-to-b from-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-20">
          <span className="text-sm font-bold uppercase tracking-wider mb-4 inline-block text-amber-400">
            Notre Mission
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-100 mb-6 leading-tight tracking-tighter max-w-5xl mx-auto">
            Transformer vos années en moments de&nbsp;bonheur
          </h2>
          <p className="text-xl sm:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Un environnement où confort, sécurité et bien-être se rencontrent
          </p>
        </div>

        {/* Bento Grid Layout - Dark Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Large feature card */}
          <div className="lg:col-span-2 card p-10 md:p-14 shadow-2xl row-span-2 relative overflow-hidden bg-slate-800 border-amber-500/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 h-full flex flex-col justify-center">
              <Heart
                className="w-16 h-16 md:w-20 md:h-20 mb-8 text-amber-400"
                strokeWidth={1.5}
              />
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight text-slate-100">
                Votre nouveau chez-vous vous attend
              </h3>
              <p className="text-lg sm:text-xl leading-relaxed text-slate-300 font-normal">
                À la Résidence Le Soleil, nous comprenons l&apos;importance de
                vivre dans un environnement sûr, confortable et accueillant.
                Notre personnel amical et nos résidents satisfaits témoignent du
                confort et des soins professionnels que nous offrons chaque
                jour.
              </p>
            </div>
          </div>

          {/* Smaller feature cards - Dark Theme */}
          <div className="card p-8 md:p-10 shadow-xl hover:shadow-2xl hover:border-amber-500/30 transition-all bg-slate-800 border-amber-500/10">
            <Hospital
              className="w-14 h-14 md:w-16 md:h-16 mb-6 text-amber-400"
              strokeWidth={1.5}
            />
            <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-4 leading-tight">
              Partenaire du CISSSO
            </h3>
            <p className="text-base text-slate-400 leading-relaxed">
              En collaboration avec le CISSS de l&apos;Outaouais
            </p>
          </div>

          <div className="card p-8 md:p-10 shadow-xl hover:shadow-2xl hover:border-amber-500/30 transition-all bg-slate-800 border-amber-500/10">
            <UserCheck
              className="w-14 h-14 md:w-16 md:h-16 mb-6 text-amber-400"
              strokeWidth={1.5}
            />
            <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-4 leading-tight">
              Personnel dévoué
            </h3>
            <p className="text-base text-slate-400 leading-relaxed">
              Une équipe professionnelle offrant des soins de qualité
            </p>
          </div>

          <div className="card p-8 md:p-10 shadow-xl hover:shadow-2xl hover:border-amber-500/30 transition-all bg-slate-800 border-amber-500/10">
            <Home
              className="w-14 h-14 md:w-16 md:h-16 mb-6 text-amber-400"
              strokeWidth={1.5}
            />
            <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-4 leading-tight">
              Places limitées
            </h3>
            <p className="text-base text-slate-400 leading-relaxed">
              Dépêchez-vous, quelques places seulement sont encore disponibles.
              Contactez-nous avant qu’il ne soit trop tard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
