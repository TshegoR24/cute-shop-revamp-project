import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on component mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Mobile fallback background */}
        {isMobile && !isVideoLoaded && (
          <div className="absolute inset-0 bg-gradient-dreamy"></div>
        )}
        
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/placeholder.svg"
          preload="auto"
          onError={(e) => console.log('Video error:', e)}
          onLoadStart={() => console.log('Video loading started')}
          onCanPlay={() => {
            console.log('Video can play');
            setIsVideoLoaded(true);
          }}
          onLoadedData={() => console.log('Video data loaded')}
          onPlay={() => console.log('Video started playing')}
          onPause={() => console.log('Video paused')}
        >
          <source src="/1113242_Front_view_Veil_3840x2160.mp4" type="video/mp4" />
          <source src="/7509446-hd_1066_1920_25fps.mp4" type="video/mp4" />
        </video>
        {/* Overlay removed for clear video visibility */}
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