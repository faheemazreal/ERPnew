import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight } from "lucide-react";

export function PricingSection()

{
  const plans = [
    {
      name: "basic",
      price: "₹50,000",
      period: "/Annual",
      description: "Perfect for small preschools with up to 50 children",
      popular: false,
      features: [
        "Up to 50 students",
        "Basic parent communication",
        "Attendance tracking",
        "Fee management",
        "Daily updates sharing",
        "Email support",
        "Mobile app access",
        "Class anouncement"
      ]
    },
   
    {
      name: "Premium",
      price: "₹based on custom requirements",
      period: "/Annual",
      description: "For large preschools and multiple branches",
      popular: false,
      features: [
        "custom requirements add",
        "Unlimited students",
        "Multi-branch management",
        "Advanced analytics dashboard",
        "Custom integrations",
        "API access",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom training sessions",
        "Data migration assistance",
        
      ]
    }
  ];
  
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-preschool-green-light to-preschool-yellow-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent{" "}
            <span className="text-preschool-blue">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your preschool. All plans include free setup and training.
          </p>
          <div className="inline-flex items-center gap-2 bg-preschool-green/10 rounded-full px-4 py-2">
            <Star className="w-4 h-4 text-preschool-green" />
            <span className="text-sm font-medium text-preschool-green">30-day free trial • No setup fees</span>
          </div>
        </div>

        <div className="flex justify-content-center align-items center flex-wrap w-100 gap-10">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-card hover:shadow-feature transition-all duration-300 hover:-translate-y-2 animate-fade-in-up ${
                plan.popular ? 'ring-2 ring-preschool-blue scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-preschool-blue text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold text-preschool-blue">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-preschool-green flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-6 text-lg rounded-2xl transition-bounce group ${
                  plan.popular 
                    ? 'gradient-hero text-white hover:shadow-hero' 
                    : 'border-2 border-preschool-blue text-preschool-blue hover:bg-preschool-blue hover:text-white'
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-2">Need a custom solution?</h3>
            <p className="text-muted-foreground mb-4">
              We offer custom pricing for preschool chains and unique requirements.
            </p>
            <Button variant="outline" className="border-preschool-green text-preschool-green hover:bg-preschool-green hover:text-white">
              Contact Sales Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}