import { AnimatedCounter } from "@/components/ui/animated-counter";
import { School, Users, Clock, Award } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: School,
      value: 150,
      suffix: "+",
      title: "Preschools",
      description: "Trust our ERP system"
    },
    {
      icon: Users,
      value: 5000,
      suffix: "+",
      title: "Happy Children",
      description: "Learning every day"
    },
    {
      icon: Clock,
      value: 75,
      suffix: "%",
      title: "Time Saved",
      description: "On administrative tasks"
    },
    {
      icon: Award,
      value: 98,
      suffix: "%",
      title: "Satisfaction",
      description: "From our customers"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-preschool-blue to-preschool-green">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center text-white animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce-subtle">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-xl font-semibold mb-1">{stat.title}</h3>
              <p className="text-white/80 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}