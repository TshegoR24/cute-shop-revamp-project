import { Link } from "react-router-dom";

interface LogoProps {
  isOverHero?: boolean;
}

export const Logo = ({ isOverHero = false }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
      {/* Enhanced Logo Image */}
          <img
            src="/optimized/BCO.142c8f05-b911-4699-998e-125db3b67082.png"
            alt="All Things Cute - ATC Logo"
        className={`h-20 w-auto object-contain transition-all duration-300`}
        style={{
          maxWidth: 'none',
          filter: isOverHero 
            ? 'drop-shadow(0 2px 8px rgba(255,255,255,0.9)) drop-shadow(0 0 20px rgba(255,255,255,0.6))' 
            : 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
        }}
      />
    </Link>
  );
};