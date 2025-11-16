import { Home } from "lucide-react";

export default function MarqueeBanner() {
  const message = "3 Chambres Disponibles";

  return (
    <div className="py-6 overflow-hidden bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 border-y border-amber-400/30 shadow-lg shadow-amber-500/20">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(20)].map((_, index) => (
          <div key={index} className="flex items-center mx-8">
            <span className="text-slate-900 text-xl md:text-2xl font-extrabold tracking-tight">
              {message}
            </span>
            <Home className="ml-4 w-6 h-6 text-slate-900" />
          </div>
        ))}
      </div>
    </div>
  );
}
