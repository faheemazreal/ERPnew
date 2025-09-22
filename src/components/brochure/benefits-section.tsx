import { CheckCircle, Clock, Users, TrendingUp } from "lucide-react";
import parentTeacherImage from "@/assets/parent-teacher.jpg";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Saves Time & Reduces Paperwork",
      description: "Eliminate manual processes and focus on what matters most - teaching and nurturing children."
    },
    {
      icon: Users,
      title: "Strengthens Parent-Teacher Connection",
      description: "Build stronger relationships through transparent communication and regular updates."
    },
    {
      icon: TrendingUp,
      title: "Focus on Children's Growth",
      description: "Let teachers concentrate on education while we handle the administrative tasks."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-preschool-green-light to-preschool-blue-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Our{" "}
            <span className="text-preschool-blue">ERP Solution?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the transformation in your preschool operations with our proven benefits
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl gradient-feature flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <benefit.icon className="w-7 h-7 text-preschool-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-preschool-blue transition-smooth">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-preschool-green" />
                <span className="font-semibold text-foreground">Proven Results</span>
              </div>
              <p className="text-muted-foreground">
                Join 100+ preschools in Chennai who have already transformed their operations with our ERP system.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={parentTeacherImage} 
              alt="Happy parents and teachers discussing child's progress"
              className="w-full rounded-3xl shadow-feature"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-preschool-blue/20 to-transparent"></div>
            
            {/* Floating stats */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-card">
              <div className="text-2xl font-bold text-preschool-blue">95%</div>
              <div className="text-sm text-muted-foreground">Parent Satisfaction</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-card">
              <div className="text-2xl font-bold text-preschool-green">50%</div>
              <div className="text-sm text-muted-foreground">Time Saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}