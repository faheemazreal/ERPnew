import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={cn(
      "group p-6 rounded-2xl bg-white shadow-card hover:shadow-feature transition-smooth",
      "hover:-translate-y-1 border border-preschool-blue/10",
      className
    )}>
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl gradient-feature">
        <Icon className="w-6 h-6 text-preschool-blue" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-preschool-blue transition-smooth">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}