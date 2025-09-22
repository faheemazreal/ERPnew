import { School, Globe, MapPin } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="py-12 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center">
              <img src="evoulth.jpg" alt="" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Evoulth ERP</h3>
              <p className="text-slate-400 text-sm">Chennai's Leading ERP Solution</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-preschool-blue" />
              <span className="text-slate-300">www.evoulth.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-preschool-green" />
              <span className="text-slate-300">Chennai, Tamil Nadu</span>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-slate-400 text-sm mb-1">Designed for Preschools</p>
            <p className="text-slate-500 text-xs">© 2025 Evoulth ERP. All rights reserved.</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400 text-sm">
            Empowering early childhood education through innovative technology solutions
          </p>
        </div>
      </div>
    </footer>
  );
}