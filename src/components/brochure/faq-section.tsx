import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "How quickly can we get started with Evoulth ERP?",
      answer: "Implementation typically takes 1-2 weeks. Our team provides complete setup, data migration, and staff training. Most schools are fully operational within 10 days of signing up."
    },
    {
      question: "Is the system suitable for small preschools with 20-30 children?",
      answer: "Absolutely! Our ERP scales perfectly for preschools of all sizes. Small schools often see the biggest impact as manual processes become fully automated, saving hours of administrative work daily."
    },
    {
      question: "Can parents access the system in Tamil language?",
      answer: "Yes, our parent app supports both English and Tamil languages. We understand Chennai's diverse linguistic needs and ensure all parents can easily access their child's information."
    },
    {
      question: "What about data security and privacy?",
      answer: "We use enterprise-grade security with 256-bit encryption, regular backups, and comply with data protection regulations. Your school and children's data is completely secure and private."
    },
    {
      question: "Do you provide training for our staff?",
      answer: "Yes! We provide comprehensive training for all staff members, including administrators, teachers, and support staff. Training includes live sessions, video tutorials, and ongoing support."
    },
    {
      question: "What if we need technical support?",
      answer: "Our Chennai-based support team is available Monday-Saturday, 9 AM-6 PM. We provide phone, email, and remote assistance to resolve any issues quickly."
    },
    {
      question: "Can we customize the system for our specific needs?",
      answer: "Yes, we offer customization options to match your school's unique processes. Whether it's custom report formats, specific fee structures, or unique workflows, we can adapt."
    },
    {
      question: "Is there a mobile app for parents and teachers?",
      answer: "Yes! Both parents and teachers get dedicated mobile apps for iOS and Android. Parents can view updates, make payments, and communicate. Teachers can mark attendance and share updates on-the-go."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked{" "}
            <span className="text-preschool-green">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Evoulth ERP
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index}
              value={`item-${index}`}
              className="bg-preschool-blue-light/20 rounded-2xl px-6 border-none animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold text-foreground hover:text-preschool-blue">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a 
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 text-preschool-blue hover:text-preschool-green transition-smooth font-semibold"
          >
            Call us at +91 98765 43210
          </a>
        </div>
      </div>
    </section>
  );
}