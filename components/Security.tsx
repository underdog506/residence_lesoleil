import Image from "next/image";
import {
  Home,
  Bell,
  DoorClosed,
  Stethoscope,
  Ambulance,
  Accessibility,
  CheckCircle,
} from "lucide-react";

export default function Security() {
  const features = [
    {
      icon: Home,
      title: "Système de maison intelligente",
      description:
        "Technologie de pointe pour surveiller et sécuriser l'environnement 24h/24, 7j/7.",
    },
    {
      icon: Bell,
      title: "Boutons d'urgence personnels",
      description:
        "Chaque résident dispose d'un bouton d'appel d'urgence sans fil pour une assistance immédiate.",
    },
    {
      icon: DoorClosed,
      title: "Accès sécurisé",
      description:
        "Contrôle d'accès pour assurer la sécurité de tous les résidents et du personnel.",
    },
    {
      icon: Stethoscope,
      title: "Personnel présent",
      description:
        "Personnel amical et qualifié disponible pour répondre rapidement à tous les besoins.",
    },
    {
      icon: Ambulance,
      title: "Réponse rapide",
      description:
        "Protocoles d'urgence établis pour une intervention rapide en cas de besoin.",
    },
    {
      icon: Accessibility,
      title: "Aménagements sécuritaires",
      description:
        "Barres d'appui, couloirs larges et éclairage optimal pour prévenir les chutes et assurer votre mobilité.",
    },
  ];

  return (
    <section
      id="securite"
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4 tracking-tight">
            Sécurité & Confort
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed px-4">
            Votre sécurité et votre tranquillité d&apos;esprit sont notre
            priorité absolue
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
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
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-6">
              Des installations pensées pour votre sécurité
            </h3>
            <div className="space-y-5">
              <div className="flex items-start">
                <CheckCircle
                  className="w-6 h-6 text-amber-400 mr-4 mt-1 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <h4 className="font-bold text-slate-100 mb-2">
                    Couloirs sécuritaires
                  </h4>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    Larges couloirs avec mains courantes et éclairage optimal
                    pour votre sécurité
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  className="w-6 h-6 text-amber-400 mr-4 mt-1 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <h4 className="font-bold text-slate-100 mb-2">
                    Salles de bain adaptées
                  </h4>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    Équipées de barres d&apos;appui, bancs de douche et
                    planchers antidérapants
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  className="w-6 h-6 text-amber-400 mr-4 mt-1 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <h4 className="font-bold text-slate-100 mb-2">
                    Surveillance continue
                  </h4>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    Système de sécurité moderne pour votre protection et
                    tranquillité
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4 order-1 lg:order-2">
            <div className="relative h-40 sm:h-48 rounded-lg overflow-hidden shadow-lg border border-amber-500/20">
              <Image
                src="/images/couloir1.jpg"
                alt="Couloir sécurisé avec rampes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg border border-amber-500/20">
              <Image
                src="/images/salle-de-bain2.jpg"
                alt="Salle de bain accessible"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg border border-amber-500/20">
              <Image
                src="/images/salle-a-manger.jpg"
                alt="Salle à manger moderne."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-40 sm:h-48 rounded-lg overflow-hidden shadow-lg border border-amber-500/20">
              <Image
                src="/images/couloir2.jpg"
                alt="Couloir bien éclairé"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
