interface AnimatedBurgerProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function AnimatedBurger({ isOpen, onClick }: AnimatedBurgerProps) {
  return (
    <button
      onClick={onClick}
      className="relative w-10 h-10 flex items-center justify-center lg:!hidden focus:outline-none group"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <div className="w-6 h-5 relative flex flex-col justify-between">
        {/* Top line */}
        <span
          className={`block h-0.5 w-full bg-amber-400 rounded-full transition-all duration-300 ease-in-out transform origin-center ${
            isOpen ? 'rotate-45 translate-y-2' : 'rotate-0'
          } group-hover:bg-amber-300`}
        />

        {/* Middle line */}
        <span
          className={`block h-0.5 w-full bg-amber-400 rounded-full transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
          } group-hover:bg-amber-300`}
        />

        {/* Bottom line */}
        <span
          className={`block h-0.5 w-full bg-amber-400 rounded-full transition-all duration-300 ease-in-out transform origin-center ${
            isOpen ? '-rotate-45 -translate-y-2' : 'rotate-0'
          } group-hover:bg-amber-300`}
        />
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-amber-500/10" />
    </button>
  );
}
