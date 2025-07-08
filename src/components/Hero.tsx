import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-accent to-primary/20 py-20 md:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-accent rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary/60 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              New Collection Available
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Discover Your
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Cute Side
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto md:mx-0">
              From adorable accessories to kawaii home decor, find everything that makes you smile. 
              Curated with love for the cutest souls.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                View Collections
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center md:justify-start gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Free Shipping
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                30-Day Returns
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Secure Checkout
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-white to-accent/20 rounded-3xl p-8 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/20 rounded-2xl flex items-center justify-center">
                <div className="text-8xl">🎀</div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <div className="text-2xl">✨</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                <div className="text-2xl">💕</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};