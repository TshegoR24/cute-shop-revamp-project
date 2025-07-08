import { Truck, RotateCcw, Shield, Headphones, Sparkles, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on all orders over $50 worldwide",
    color: "text-green-500"
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day hassle-free returns and exchanges",
    color: "text-blue-500"
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure payment with SSL encryption",
    color: "text-purple-500"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer service support",
    color: "text-orange-500"
  },
  {
    icon: Sparkles,
    title: "Quality Guaranteed",
    description: "Premium quality products with warranty",
    color: "text-yellow-500"
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Each item is carefully curated with passion",
    color: "text-pink-500"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-secondary/50 to-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose All Things Cute?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to bringing you the highest quality cute accessories with exceptional service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20 bg-background/80 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/10 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
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