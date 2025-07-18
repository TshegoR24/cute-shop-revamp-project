import { Heart, Sparkles } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      {/* Decorative element */}
      <div className="relative">
        <Heart className="h-6 w-6 text-pink animate-pulse" />
        <Sparkles className="h-3 w-3 text-lavender absolute -top-1 -right-1 animate-sparkle" />
      </div>
      
      {/* Logo text */}
      <div className="flex items-center">
        <h1 className="text-2xl font-light tracking-wide text-foreground">
          All Things
        </h1>
        <span className="text-2xl font-normal tracking-wide text-pink ml-2">
          Cute
        </span>
      </div>
    </div>
  );
}; 