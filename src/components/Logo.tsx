import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface LogoProps {
  isOverHero?: boolean;
}

export const Logo = ({ isOverHero = false }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300">
      {/* Decorative element */}
      <div className="relative">
        <div className={`h-6 w-6 animate-pulse text-2xl transition-colors duration-300 ${
          isOverHero ? 'text-white' : 'text-pink'
        }`}>🎀</div>
        <Sparkles className={`h-3 w-3 absolute -top-1 -right-1 animate-sparkle transition-colors duration-300 ${
          isOverHero ? 'text-white/80' : 'text-lavender'
        }`} />
      </div>

      {/* Logo text */}
      <div className="flex items-center">
        <h1 className={`text-2xl font-light tracking-wide transition-colors duration-300 ${
          isOverHero ? 'text-white' : 'text-foreground'
        }`}>
          All Things
        </h1>
        <span className={`text-2xl font-normal tracking-wide ml-2 transition-colors duration-300 ${
          isOverHero ? 'text-pink-300' : 'text-pink'
        }`}>
          Cute
        </span>
      </div>
    </Link>
  );
}; 