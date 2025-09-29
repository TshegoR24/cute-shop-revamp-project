import { useState, useEffect } from "react";
import { X, Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const EmailSignupPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user has already subscribed or dismissed
    const hasSubscribed = localStorage.getItem('emailSubscribed');
    const hasDismissed = localStorage.getItem('emailDismissed');
    
    if (!hasSubscribed && !hasDismissed) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem('emailSubscribed', 'true');
      setIsSubmitted(true);
      setIsLoading(false);
      
      // Close popup after 3 seconds
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }, 1000);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Remember that user dismissed the popup
    localStorage.setItem('emailDismissed', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 hover:bg-muted/50 transition-colors"
            onClick={handleClose}
            title="Close"
          >
            <X className="h-5 w-5" />
          </Button>
          <CardTitle className="text-2xl font-light">Stay in the Loop! ✨</CardTitle>
          <p className="text-muted-foreground">
            Get exclusive updates on new arrivals, special offers, and sweet dreams!
          </p>
          <div className="bg-pink-50 border border-pink-200 rounded-lg p-3 mt-4">
            <p className="text-sm text-pink-800">
              🎁 <strong>Special Offer:</strong> Get 10% off your first order when you subscribe!
            </p>
          </div>
        </CardHeader>
        
        <CardContent>
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-medium mb-2">Thank you for subscribing!</h3>
              <p className="text-muted-foreground">
                You'll receive our latest updates soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-foreground text-background hover:bg-foreground/90"
                disabled={isLoading}
              >
                {isLoading ? 'Subscribing...' : 'Subscribe Now'}
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
