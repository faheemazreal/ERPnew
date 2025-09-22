import { School, Users, Heart } from "lucide-react";
import erpWorkflowImage from "@/assets/erp-workflow.jpg";

export function IntroductionSection() {
  return (
    <section className="py-20 bg-preschool-blue-light/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Built Exclusively for{" "}
              <span className="text-preschool-blue">Chennai Preschools</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We provide School ERP software designed exclusively for preschools in Chennai, 
              understanding the unique needs of early childhood education and local requirements.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-preschool-blue/10 flex items-center justify-center">
                  <School className="w-6 h-6 text-preschool-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Tailored for Preschools</h4>
                  <p className="text-muted-foreground">Designed specifically for ages 2-6 education</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-preschool-green/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-preschool-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Local Understanding</h4>
                  <p className="text-muted-foreground">Built for Chennai's educational ecosystem</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-preschool-yellow/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-preschool-yellow" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Child-Centric Approach</h4>
                  <p className="text-muted-foreground">Focus on nurturing young minds</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={erpWorkflowImage} 
              alt="Modern ERP workflow illustration with educational elements"
              className="w-full rounded-3xl shadow-feature"
            />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-preschool-yellow rounded-2xl opacity-80 blur-sm"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-preschool-green rounded-2xl opacity-60 blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}