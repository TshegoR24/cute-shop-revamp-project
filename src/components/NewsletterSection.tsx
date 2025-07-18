import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to All Things Cute",
        description: "You've been subscribed to our newsletter. Check your email for exclusive updates.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-dreamy p-6 rounded-none">
              <Mail className="h-8 w-8 text-foreground" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-wide">
            Stay Cozy & Cute
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Subscribe to our newsletter and be the first to discover new nightwear collections, 
            exclusive offers, and adorable pieces delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background border-border/50 text-foreground placeholder:text-muted-foreground rounded-none h-14 font-light"
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 rounded-none font-light tracking-wide"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>

          <p className="text-muted-foreground text-sm mt-6 font-light">
            No spam, unsubscribe at any time. Your privacy is our priority.
          </p>
        </div>
      </div>
    </section>
  );
};