import { MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4 tracking-tight">
            Contactez-nous
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-6">
              Informations de contact
            </h3>

            <div className="space-y-5 md:space-y-6">
              <div className="flex items-start">
                <MapPin
                  className="w-6 h-6 text-amber-400 mr-4 mt-1 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <h4 className="font-bold text-slate-100 mb-1">Adresse</h4>
                  <p className="text-slate-400">
                    365 Rue Jean-Baptiste-Routhier
                    <br />
                    Gatineau, QC J8M 0B2
                  </p>
                  <a
                    href="https://maps.app.goo.gl/HAqQ33r9ekSSSnzN9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm mt-2 inline-block text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    Voir sur Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone
                  className="w-6 h-6 text-amber-400 mr-4 mt-1 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <h4 className="font-bold text-slate-100 mb-1">Téléphone</h4>
                  <a
                    href="tel:8197440672"
                    className="text-amber-400 hover:text-amber-300 transition-colors text-lg"
                  >
                    819-744-0672
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Clock
                  className="w-6 h-6 text-amber-400 mr-4 mt-1 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <h4 className="font-bold text-slate-100 mb-1">
                    Heures de visite
                  </h4>
                  <p className="text-slate-400">
                    Lundi - Vendredi: 9h00 - 17h00
                    <br />
                    Samedi - Dimanche: Sur rendez-vous
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 card p-6 bg-slate-800 border-amber-500/20 hover:border-amber-500/30 transition-all">
              <h4 className="font-bold text-slate-100 mb-3">
                Partenaire du CISSSO
              </h4>
              <p className="text-slate-400 leading-relaxed">
                Résidence Le Soleil est fière de collaborer avec le Centre
                intégré de santé et de services sociaux de l&apos;Outaouais pour
                offrir des soins de qualité.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-6">
              Emplacement
            </h3>
            <div className="bg-slate-700 rounded-lg overflow-hidden shadow-lg h-64 sm:h-80 lg:h-96 border border-amber-500/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.3312793820774!2d-75.43707892472933!3d45.543660971075354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce15acbd0bb61b%3A0x433ffa5a519659a4!2s365%20Rue%20Jean-Baptiste-Routhier%2C%20Gatineau%2C%20QC%20J8M%200B2!5e0!3m2!1sen!2sca!4v1762743898713!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte de Résidence Le Soleil"
              ></iframe>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              Situé dans un quartier paisible de Masson-Angers, facilement
              accessible
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
