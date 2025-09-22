import clientLogos from "@/assets/client-logos.jpg";
import { AlignVerticalSpaceAround } from "lucide-react";

export function ClientLogosSection() {


  return (
    <section className="py-16 bg-white border-t border-preschool-blue/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground mb-8">
            Trusted by Chennai's leading preschools
          </p>
          
          <div style={{display: "flex", flexDirection: "row", justifycontent: "space-between"}}>

          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '25px',
              padding: '30px',
              width: '100px',
              aspectRatio: '1/1',
              flex: 1,
            }}>
                <img style={{objectFit: 'contain'}} src="kmk.png"/>
                <span 
                key='1'
                className="px-4 py-2 bg-preschool-blue-light/30 rounded-full hover:bg-preschool-blue-light/50 transition-smooth animate-fade-in"
                style={{ animationDelay: `${1 * 100}ms` }}
              >
                KMK Hr.Sec & Montessori School
              </span>
            </div>

            <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '25px',
              padding: '30px',
              width: '100px',
              aspectRatio: '1/1',
              flex: 1,
            }}>
                <img style={{objectFit: 'contain'}} src="srvs.png"/>
                <span 
                key='1'
                className="px-4 py-2 bg-preschool-blue-light/30 rounded-full hover:bg-preschool-blue-light/50 transition-smooth animate-fade-in"
                style={{ animationDelay: `${1 * 100}ms` }}
              >
                SRVS National H.R school
              </span>
            </div>

            <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '25px',
              padding: '30px',
              width: '100px',
              aspectRatio: '1/1',
              flex: 1,
            }}>
                <img style={{objectFit: 'contain'}} src="euro.png"/>
                <span 
                key='1'
                className="px-4 py-2 bg-preschool-blue-light/30 rounded-full hover:bg-preschool-blue-light/50 transition-smooth animate-fade-in"
                style={{ animationDelay: `${1 * 100}ms` }}
              >
                Eurowis Kids Preschol
              </span>
            </div>


            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}