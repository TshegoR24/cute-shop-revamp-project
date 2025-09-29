import { useState, useRef, useEffect } from "react";

interface ImageHoverZoomProps {
  src: string;
  alt: string;
  className?: string;
  zoomScale?: number;
  zoomPosition?: "top" | "bottom" | "left" | "right" | "center";
}

export const ImageHoverZoom = ({ 
  src, 
  alt, 
  className = "", 
  zoomScale = 1.5,
  zoomPosition = "center"
}: ImageHoverZoomProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setMousePosition({ x, y });
  };

  const getZoomTransform = () => {
    if (!isHovered) return "scale(1)";
    
    // Calculate zoom position based on mouse position
    let transformOrigin = `${mousePosition.x}% ${mousePosition.y}%`;
    
    // Override with specific position if provided
    switch (zoomPosition) {
      case "top":
        transformOrigin = "center top";
        break;
      case "bottom":
        transformOrigin = "center bottom";
        break;
      case "left":
        transformOrigin = "left center";
        break;
      case "right":
        transformOrigin = "right center";
        break;
      case "center":
        transformOrigin = "center center";
        break;
    }
    
    return `scale(${zoomScale})`;
  };

  const getZoomStyle = () => ({
    transform: isHovered 
      ? `${getZoomTransform()} translateZ(20px)` 
      : "scale(1) translateZ(0px)",
    transformOrigin: zoomPosition === "center" ? "center center" : `${mousePosition.x}% ${mousePosition.y}%`,
    transition: isHovered ? "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    zIndex: isHovered ? 10 : 1,
    boxShadow: isHovered 
      ? "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)" 
      : "none",
  });

  return (
    <div
      ref={containerRef}
      className={`relative ${isHovered ? 'overflow-visible' : 'overflow-hidden'} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        zIndex: isHovered ? 20 : 1,
      }}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-all duration-300"
        style={getZoomStyle()}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(false)}
      />
      
      {/* Loading overlay */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-muted/30 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-muted-foreground/30 border-t-foreground/60 rounded-full animate-spin" />
        </div>
      )}
      
      {/* Hover effects */}
      {isHovered && imageLoaded && (
        <>
          {/* Glow effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 animate-pulse" />
          </div>
        </>
      )}
    </div>
  );
};
