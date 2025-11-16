import { Utensils, Pill, Tv, Wifi, Bell, Shirt, BathIcon } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Utensils,
      title: "Menu du jour : fraîcheur et équilibre",
      description:
        "Trois repas sont servis chaque jour — déjeuner, dîner et souper — accompagnés de collations à volonté pour combler les petites faims tout au long de la journée.",
    },
    {
      icon: Pill,
      title: "Administration des médicaments",
      description:
        "Gestion rigoureuse des médicaments selon les prescriptions de chaque résident pour assurer leur santé et bien-être.",
    },
    {
      icon: Tv,
      title: "Télévision câble",
      description:
        "Service de télévision câble Vidéotron Illico disponible dans l'espace commun pour le divertissement de tous les résidents.",
    },
    {
      icon: Wifi,
      title: "WiFi inclus",
      description:
        "Connexion Internet sans fil disponible dans toute la résidence pour rester connecté avec vos proches.",
    },
    {
      icon: Bell,
      title: "Système d'appel d'urgence",
      description:
        "Système de téléavertisseur sans fil avec bouton dédié dans chaque chambre pour une assistance immédiate en cas de besoin.",
    },
    {
      icon: BathIcon,
      title: "Bien-être et soins au quotidien",
      description:
        "Nos résidents profitent chaque semaine d’un bain complet, ainsi que de soins d’hygiène quotidiens assurés avec douceur et respect. Chaque moment est pensé pour favoriser le confort, la détente et le bien-être de chacun.",
    },
    {
      icon: Shirt,
      title: "Buanderie sur place",
      description:
        "Chaque semaine, nous assurons le lavage complet des vêtements, draps et couvertures de chaque résident.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4 tracking-tight">
            Services & Commodités
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed px-4">
            Tout ce dont vous avez besoin pour vivre confortablement et en toute
            sécurité
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card bg-slate-800 p-6 md:p-8 border-amber-500/10 hover:border-amber-500/30 transition-all"
              >
                <Icon
                  className="w-12 h-12 md:w-14 md:h-14 mb-5 text-amber-400"
                  strokeWidth={1.5}
                />
                <h3 className="text-base md:text-lg font-bold text-slate-100 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
