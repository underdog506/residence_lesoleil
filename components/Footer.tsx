import { Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-16 border-t border-amber-500/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Résidence Le Soleil
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Un environnement chaleureux et sécurisé pour votre tranquillité
              d&apos;esprit
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:8197440672"
                className="text-amber-400 hover:text-amber-300 transition-colors"
                aria-label="Téléphone"
              >
                <Phone className="w-6 h-6" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-slate-100">
              Liens rapides
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a
                  href="#accueil"
                  className="hover:text-amber-400 transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#a-propos"
                  className="hover:text-amber-400 transition-colors"
                >
                  À Propos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-amber-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#chambres"
                  className="hover:text-amber-400 transition-colors"
                >
                  Chambres
                </a>
              </li>
              <li>
                <a
                  href="#reserver"
                  className="hover:text-amber-400 transition-colors"
                >
                  Réserver une visite
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-slate-100">
              Coordonnées
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li className="leading-relaxed">
                365 Rue Jean-Baptiste-Routhier
                <br />
                Gatineau, QC J8M 0B2
              </li>
              <li>
                <a
                  href="tel:8197440672"
                  className="text-amber-400 hover:text-amber-300 transition-colors text-lg font-semibold"
                >
                  819-744-0672
                </a>
              </li>
              <li className="pt-2">
                <span className="text-sm text-slate-900 font-bold px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg shadow-amber-500/20">
                  Partenaire CISSSO
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>© {currentYear} Résidence Le Soleil. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
