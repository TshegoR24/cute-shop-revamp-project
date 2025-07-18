import { Truck, RotateCcw, Shield, Headphones, Star, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
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
              className="group hover-lift transition-all duration-300 border border-lavender/30 hover:border-pink/50 bg-background"
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