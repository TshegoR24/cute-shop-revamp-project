import { Truck, RotateCcw, Shield, Headphones, Star, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary shipping on all orders worldwide",
    color: "text-foreground"
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day hassle-free returns and exchanges",
    color: "text-foreground"
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure payment with SSL encryption",
    color: "text-foreground"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer service support",
    color: "text-foreground"
  },
  {
    icon: Star,
    title: "Quality Guaranteed",
    description: "Premium quality products with warranty",
    color: "text-foreground"
  },
  {
    icon: Heart,
    title: "Curated with Care",
    description: "Each item is carefully selected for excellence",
    color: "text-foreground"
  }
];

export const FeaturesSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {!videoError && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/placeholder.svg"
            preload="metadata"
            loading="lazy"
            onError={(e) => {
              console.log('Features video error:', e);
              setVideoError(true);
            }}
            onCanPlay={() => {
              console.log('Features video can play');
              setIsVideoLoaded(true);
            }}
          >
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
            </div>
          </div>
        )}
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-wide">
            The All Things Cute Promise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            We're committed to bringing you the coziest, cutest nightwear with exceptional service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group transition-all duration-300 border border-lavender/30 hover:border-pink/50 bg-background/90 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-8">
                  <div className="w-16 h-16 mx-auto bg-gradient-dreamy rounded-none flex items-center justify-center group-hover:bg-pink group-hover:text-background transition-all duration-300">
                    <feature.icon className={`h-8 w-8 ${feature.color} group-hover:text-background`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-foreground mb-4 tracking-wide group-hover:text-foreground/70 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed font-light">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};