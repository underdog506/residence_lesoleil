"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Bed, Accessibility, Star, X } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/images/salon.JPG",
      alt: "Salon commun spacieux et confortable",
      category: "Espaces communs",
    },
    {
      src: "/images/salle-a-manger.JPG",
      alt: "Salle à manger accueillante",
      category: "Espaces communs",
    },
    {
      src: "/images/cuisine.JPG",
      alt: "Cuisine moderne et bien équipée",
      category: "Installations",
    },
    {
      src: "/images/chambre1-int1.JPG",
      alt: "Chambre privée lumineuse",
      category: "Chambres",
    },
    {
      src: "/images/chambre1-int2.JPG",
      alt: "Chambre privée spacieuse",
      category: "Chambres",
    },
    {
      src: "/images/salle-de-bain2.JPG",
      alt: "Salle de bain adaptée avec équipements de sécurité",
      category: "Salles de bain",
    },
    {
      src: "/images/buanderie.JPG",
      alt: "Buanderie moderne",
      category: "Installations",
    },
  ];

  return (
    <section
      id="chambres"
      className="py-24 bg-gradient-to-b from-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4 tracking-tight">
            Nos Chambres & Installations
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed px-4">
            Découvrez nos espaces confortables, modernes et adaptés à vos
            besoins
          </p>
        </div>

        {/* Image Carousel */}
        <div className="mb-12 md:mb-16">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="rounded-xl gallery-swiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="relative h-64 sm:h-72 md:h-80">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="text-sm font-bold mb-1 text-amber-400">
                        {image.category}
                      </p>
                      <p className="text-xs text-slate-300">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="card bg-slate-800 p-6 md:p-8 text-center border-amber-500/10 hover:border-amber-500/30 transition-all">
            <Bed
              className="w-12 h-12 md:w-14 md:h-14 mb-4 mx-auto text-amber-400"
              strokeWidth={1.5}
            />
            <h3 className="font-bold text-slate-100 mb-3 text-base md:text-lg">
              Chambres privées
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Spacieuses et lumineuses avec rangement
            </p>
          </div>
          <div className="card bg-slate-800 p-6 md:p-8 text-center border-amber-500/10 hover:border-amber-500/30 transition-all">
            <Accessibility
              className="w-12 h-12 md:w-14 md:h-14 mb-4 mx-auto text-amber-400"
              strokeWidth={1.5}
            />
            <h3 className="font-bold text-slate-100 mb-3 text-base md:text-lg">
              Accessibilité complète
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Barres d&apos;appui et équipements adaptés
            </p>
          </div>
          <div className="card bg-slate-800 p-6 md:p-8 text-center sm:col-span-2 lg:col-span-1 border-amber-500/10 hover:border-amber-500/30 transition-all">
            <Star
              className="w-12 h-12 md:w-14 md:h-14 mb-4 mx-auto text-amber-400"
              strokeWidth={1.5}
            />
            <h3 className="font-bold text-slate-100 mb-3 text-base md:text-lg">
              Propreté impeccable
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Entretien régulier de toutes les installations
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-slate-950/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Image agrandie"
              fill
              className="object-contain"
              sizes="90vw"
            />
            <button
              className="absolute top-4 right-4 text-white bg-slate-800/80 backdrop-blur-md rounded-full p-3 hover:bg-amber-500 transition-all shadow-xl border border-amber-500/30"
              onClick={() => setSelectedImage(null)}
              aria-label="Fermer"
            >
              <X className="w-6 h-6" strokeWidth={2} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
