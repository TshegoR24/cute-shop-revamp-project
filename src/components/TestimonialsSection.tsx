import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    rating: 5,
    comment: "Absolutely love everything I've ordered! The quality is amazing and shipping was super fast. My friends always ask where I get my cute accessories from! 💕",
    avatar: "SC",
    product: "Heart Earrings Set"
  },
  {
    id: 2,
    name: "Emma Rodriguez",
    rating: 5,
    comment: "Best online store for cute items! Customer service is incredible and they helped me find the perfect gift for my bestie. Will definitely shop here again! ✨",
    avatar: "ER",
    product: "Unicorn Keychain"
  },
  {
    id: 3,
    name: "Jessica Kim",
    rating: 5,
    comment: "The attention to detail in packaging is amazing! Everything arrives perfectly wrapped and feels like receiving a special gift. Highly recommend! 🎁",
    avatar: "JK",
    product: "Cat Phone Case"
  },
  {
    id: 4,
    name: "Mia Thompson",
    rating: 5,
    comment: "I'm obsessed with their collection! Every item is carefully curated and the quality exceeds expectations. This is my go-to place for cute accessories! 🌸",
    avatar: "MT",
    product: "Rainbow Hair Clips"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy customers who've fallen in love with our cute collections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="group hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= testimonial.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  "{testimonial.comment}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white text-sm font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Purchased: {testimonial.product}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="text-2xl">⭐</div>
            <div>
              <p className="font-semibold text-foreground">4.9/5</p>
              <p className="text-xs">Average Rating</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-2xl">👥</div>
            <div>
              <p className="font-semibold text-foreground">10,000+</p>
              <p className="text-xs">Happy Customers</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-2xl">📦</div>
            <div>
              <p className="font-semibold text-foreground">50,000+</p>
              <p className="text-xs">Orders Delivered</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-2xl">🌍</div>
            <div>
              <p className="font-semibold text-foreground">25+</p>
              <p className="text-xs">Countries Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};