import { Star, Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Principal",
      school: "KMK Hr.Sec & Montessori School",
      image: testimonial1,
      rating: 5,
      text: "Evoulth ERP transformed our operations completely. The parent communication feature alone saved us 10 hours per week. Our parents love getting daily updates with photos!"
    },
    {
      name: "Rajesh Kumar",
      role: "Director",
      school: "srvs national H.R school",
      image: testimonial2,
      rating: 5,
      text: "The fee management system is incredible. No more manual tracking or payment disputes. Everything is automated and transparent. Highly recommended for Chennai preschools!"
    },
    {
      name: "Meera Krishnan",
      role: "Administrator",
      school: "Euro Wis Kids",
      image: testimonial3,
      rating: 5,
      text: "We implemented this ERP 6 months ago and haven't looked back. The reporting features help us make data-driven decisions. The support team understands Chennai's needs perfectly."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-preschool-blue-light/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Chennai Preschools{" "}
            <span className="text-preschool-blue">Say About Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join 150+ satisfied preschools who've transformed their operations with our ERP system
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-card hover:shadow-feature transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-preschool-yellow text-preschool-yellow" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-preschool-blue/20" />
                <p className="text-muted-foreground leading-relaxed pl-6">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name} - ${testimonial.role}`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-preschool-blue font-medium">{testimonial.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-4 shadow-card">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-preschool-green rounded-full animate-pulse-glow"></div>
              <span className="text-sm font-medium text-foreground">Trusted by 150+ Preschools</span>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-preschool-yellow text-preschool-yellow" />
              <span className="text-sm font-medium text-foreground">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}