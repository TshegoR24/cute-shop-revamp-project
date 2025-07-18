import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
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
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background - Video or Fallback */}
      <div className="absolute inset-0 z-0">
        {/* Show video on all devices */}
        {!videoError && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/placeholder.svg"
            preload="auto"
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
            {/* Mobile-optimized video */}
            {isMobile && (
              <source src="/7509446-hd_1066_1920_25fps.mp4" type="video/mp4" />
            )}
            {/* Desktop high-quality video */}
            {!isMobile && (
              <source src="/1113242_Front_view_Veil_3840x2160.mp4" type="video/mp4" />
            )}
            {/* Fallback for both */}
            <source src="/7509446-hd_1066_1920_25fps.mp4" type="video/mp4" />
          </video>
        )}
        
        {/* Fallback if video fails */}
        {videoError && (
          <div className="absolute inset-0 bg-gradient-dreamy">
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
      
      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="flex justify-center items-center">
          {/* Hero Content */}
          <div className="text-center md:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 text-muted-foreground text-sm font-light tracking-wide mb-8">
              <div className="w-1 h-1 bg-foreground rounded-full"></div>
              Cozy Nightwear Collection
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light text-foreground mb-8 leading-tight tracking-wide">
              Sweet Dreams
              <span className="block font-normal">
                Begin Here
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
              Discover adorable nightwear for the whole family. From cozy pajamas to 
              cute sleepwear, make bedtime the sweetest part of the day.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 rounded-none font-light tracking-wide transition-all duration-300 hover-lift"
              >
                Shop Nightwear
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border border-foreground/20 text-foreground hover:bg-foreground hover:text-background px-8 py-6 rounded-none font-light tracking-wide transition-all duration-300"
              >
                View Collections
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center md:justify-start gap-8 mt-12 text-sm text-muted-foreground font-light">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-foreground/40 rounded-full"></div>
                Free Shipping
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-foreground/40 rounded-full"></div>
                Quality Guaranteed
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-foreground/40 rounded-full"></div>
                Secure Checkout
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};