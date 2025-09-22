import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

export function DemoPreviewSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            See Evoulth ERP in{" "}
            <span className="text-preschool-blue">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a quick tour of our intuitive dashboard and see how easy it is to manage your preschool
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative group">
            <img 
              src={dashboardPreview}
              alt="Evoulth ERP dashboard preview showing student management features"
              className="w-full rounded-3xl shadow-hero group-hover:shadow-feature transition-all duration-500"
            />
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button 
                size="lg"
                className="w-20 h-20 rounded-full bg-white/90 hover:bg-white text-preschool-blue hover:text-preschool-blue shadow-hero hover:shadow-feature transition-all duration-300 hover:scale-110 group"
              >
                <Play className="w-8 h-8 ml-1 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            {/* Floating feature callouts */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-card animate-bounce-subtle">
              <div className="text-sm font-semibold text-preschool-blue">Live Dashboard</div>
              <div className="text-xs text-muted-foreground">Real-time insights</div>
            </div>

            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-card animate-float">
              <div className="text-sm font-semibold text-preschool-green">Parent App</div>
              <div className="text-xs text-muted-foreground">Instant communication</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-hero text-white hover:shadow-hero transition-bounce px-8 py-6 text-lg rounded-2xl group"
            >
              Try Interactive Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-preschool-blue text-preschool-blue hover:bg-preschool-blue-light px-8 py-6 text-lg rounded-2xl"
            >
              Schedule Live Demo
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            No signup required • See all features • 5-minute tour
          </p>
        </div>
      </div>
    </section>
  );
}