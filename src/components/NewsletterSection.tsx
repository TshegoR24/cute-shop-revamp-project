import { useState } from "react";
import { Mail, Gift } from "lucide-react";
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
        title: "Success! 🎉",
        description: "You've been subscribed to our newsletter. Check your email for a special discount!",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <Gift className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get 15% Off Your First Order!
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new arrivals, 
            exclusive deals, and cute surprises delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 bg-white/95 border-0 text-foreground placeholder:text-gray-500 rounded-full h-12"
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 rounded-full font-semibold"
              >
                Subscribe
              </Button>
            </div>
          </form>

          <p className="text-white/70 text-sm mt-4">
            No spam, unsubscribe at any time. Your email is safe with us! 💕
          </p>
        </div>
      </div>
    </section>
  );
};