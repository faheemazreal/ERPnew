import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, QrCode } from "lucide-react";

export function CTASection() {
  return (
    <section id="cta" className="py-20 gradient-cta relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Bring Smart ERP to Your{" "}
            <span className="text-preschool-yellow">Preschool Today!</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Join the growing community of Chennai preschools that have revolutionized their operations. 
            Start your free demo today and see the difference.
          </p>
          
          {/* Removed Request a Free Demo button as requested */}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
            <p className="text-white/80">+91 63747 49765</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
            <p className="text-white/80">evoulth.work@gmail.com</p>
          </div>
          
          
        </div>
        
        <div className="text-center mt-12">
          <p className="text-white/70 text-sm">
            Available Monday - Sunday | 8:00 AM - 10:00 PM IST
          </p>
        </div>
      </div>
    </section>
  );
}