import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/contexts/LocaleContext";
import { Link } from "react-router-dom";

export const Hero = () => {
  const { getText } = useLocale();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Check if mobile on component mount
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      console.log('Mobile detected:', mobile);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Video Background - Full viewport height to extend behind navbar */}
      <div className="absolute inset-0 z-0">
            {/* Show video on all devices with lazy loading */}
            {!videoError && (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                poster="/placeholder.svg"
                preload="none"
                loading="lazy"
                onError={(e) => {
                  console.log('Video error:', e);
                  setVideoError(true);
                }}
                onLoadStart={() => console.log('Video loading started')}
                onCanPlay={() => {
                  console.log('Video can play');
                  setIsVideoLoaded(true);
                }}
                onLoadedData={() => console.log('Video data loaded')}
                onPlay={() => console.log('Video started playing')}
                onPause={() => console.log('Video paused')}
              >
                {/* Optimized hero video for all devices */}
                <source src="/IMG_0285.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
        
        {/* Fallback if video fails */}
        {videoError && (
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
            {/* Animated elements for fallback */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 text-4xl opacity-20 animate-float">🌸</div>
              <div className="absolute top-1/3 right-1/4 text-3xl opacity-30 animate-sparkle">✨</div>
              <div className="absolute bottom-1/3 left-1/3 text-3xl opacity-25 animate-float-delay-1">🌙</div>
              <div className="absolute bottom-1/4 right-1/3 text-4xl opacity-20 animate-float-delay-2">💫</div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl opacity-30 animate-float">🦄</div>
            </div>
          </div>
        )}
        
      </div>
      
      {/* Optional overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20 z-10" />
      
      {/* Hero Content - Positioned to account for navbar height */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 w-full">
          <div className="flex justify-center items-center pt-20"> {/* pt-20 accounts for navbar height */}
            {/* Hero Content */}
            <div className="text-center md:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 text-white/80 text-sm font-light tracking-wide mb-8">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                Cozy Nightwear Collection
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-white mb-8 leading-tight tracking-wide">
                {getText('hero.title')}
              </h1>
              
              <p className="text-lg text-white/90 mb-12 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
                {getText('hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
                <Link to="/shop-all">
                  <Button 
                    size="lg" 
                    className="bg-white text-foreground hover:bg-white/90 px-6 sm:px-8 py-4 sm:py-6 rounded-none font-light tracking-wide transition-all duration-300 w-full sm:w-auto"
                  >
                    {getText('hero.cta.primary') || 'Shop Nightwear'}
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </Link>
                
                <Link to="/ladies">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border border-white/30 text-white hover:bg-white hover:text-foreground px-6 sm:px-8 py-4 sm:py-6 rounded-none font-light tracking-wide transition-all duration-300 w-full sm:w-auto"
                  >
                    {getText('hero.cta.secondary') || 'View Collections'}
                  </Button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};