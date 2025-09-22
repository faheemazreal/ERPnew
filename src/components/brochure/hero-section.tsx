import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-preschool.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">{/* Added pt-16 for nav spacing */}
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Happy children learning in a modern preschool classroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/85"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Smart ERP for{" "}
            <span className="bg-gradient-to-r from-preschool-blue to-preschool-green bg-clip-text text-transparent">
              Preschools
            </span>{" "}
            in Chennai
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Simplify operations. Strengthen connections. Focus on growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-preschool-blue text-preschool-blue hover:bg-preschool-blue-light px-8 py-6 text-lg rounded-2xl group"
            >
              <a href="https://erp.evoulth.com/?demo=yes">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-bounce" />
                Quick Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-preschool-yellow/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-preschool-green/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
}