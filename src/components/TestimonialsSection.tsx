import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    rating: 5,
    comment: "My daughter absolutely loves her unicorn pajamas! They're so soft and comfortable. She won't take them off!",
    avatar: "SC",
    product: "Unicorn Pajama Set"
  },
  {
    id: 2,
    name: "Emma Rodriguez",
    rating: 5,
    comment: "The floral pajama set is perfect for me. So cozy and the quality is amazing. My new favorite sleepwear!",
    avatar: "ER",
    product: "Floral Pajama Set"
  },
  {
    id: 3,
    name: "Jessica Kim",
    rating: 5,
    comment: "My little boy adores his dinosaur pajamas. They're so cute and he sleeps so much better in them.",
    avatar: "JK",
    product: "Kids Dinosaur PJs"
  },
  {
    id: 4,
    name: "Mia Thompson",
    rating: 5,
    comment: "The silk robe is absolutely gorgeous. Perfect for those cozy mornings. All Things Cute never disappoints!",
    avatar: "MT",
    product: "Silk Robe"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-wide">
            Happy Families
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Discover what our happy customers have to say about their All Things Cute experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="group transition-all duration-300 border border-border/50 hover:border-foreground/30 bg-background"
            >
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= testimonial.rating
                          ? 'fill-foreground text-foreground'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-muted-foreground mb-8 leading-relaxed text-sm font-light">
                  "{testimonial.comment}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-muted/50 text-foreground text-sm font-light">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-light text-foreground text-sm tracking-wide">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground font-light">
                      Purchased: {testimonial.product}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-12 text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="text-2xl opacity-60">✦</div>
            <div>
              <p className="font-light text-foreground text-lg">4.9/5</p>
              <p className="text-xs font-light">Average Rating</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-2xl opacity-60">✦</div>
            <div>
              <p className="font-light text-foreground text-lg">10,000+</p>
              <p className="text-xs font-light">Satisfied Clients</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-2xl opacity-60">✦</div>
            <div>
              <p className="font-light text-foreground text-lg">50,000+</p>
              <p className="text-xs font-light">Orders Delivered</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-2xl opacity-60">✦</div>
            <div>
              <p className="font-light text-foreground text-lg">25+</p>
              <p className="text-xs font-light">Countries Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};