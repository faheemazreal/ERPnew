import { FeatureCard } from "@/components/ui/feature-card";
import { 
  UserPlus, 
  CreditCard, 
  Camera, 
  MessageCircle, 
  BarChart3, 
  Clock 
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: UserPlus,
      title: "Admissions & Student Records",
      description: "Streamline enrollment process and maintain comprehensive student profiles all in one secure platform."
    },
    {
      icon: CreditCard,
      title: "Fee Management",
      description: "Automated fee collection, payment reminders, and transparent billing with multiple payment options."
    },
    {
      icon: Camera,
      title: "Daily Updates",
      description: "Share daily activities, homework, and precious moments with parents through photos and updates."
    },
    {
      icon: MessageCircle,
      title: "Parent Communication",
      description: "Instant updates via app notifications, SMS, and email to keep parents connected and informed."
    },
    {
      icon: BarChart3,
      title: "Reports & Analytics",
      description: "Real-time insights and comprehensive reports for better decision-making and school management."
    },
    {
      icon: Clock,
      title: "Attendance Tracking",
      description: "Digital attendance management with real-time notifications to parents about check-in and check-out."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need in{" "}
            <span className="text-preschool-green">One Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive ERP system covers every aspect of preschool management, 
            from admissions to graduation, making operations smooth and efficient.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}