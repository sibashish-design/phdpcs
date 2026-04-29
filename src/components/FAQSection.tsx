'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is the Uttarakhand Pharma & Healthcare Conclave?",
      answer:
        "It's a premier healthcare event bringing together industry leaders, researchers, and professionals to discuss innovations in healthcare technology, research, and collaboration in the Uttarakhand region.",
    },
    {
      question: 'Who should attend this conclave?',
      answer:
        'Healthcare professionals, researchers, pharmaceutical reps, med-tech innovators, policy makers, and students in the pharma & healthcare fields are encouraged to attend.',
    },
    {
      question: 'How can I participate in this Event?',
      answer:
        'Browse the Nomination Categories section and submit your interest. Our team will connect you with the companies for demos and discussions.',
    },
    {
      question: 'What are the key benefits of attending?',
      answer:
        'Networking, access to cutting-edge healthcare tech, research insights, business development, and opportunities to contribute to regional innovation.',
    },
  ];

  return (
    <section className="py-7 bg-[#f2edeb] relative overflow-hidden">
      {/* Black Lamination Overlay */}
      <div className="absolute inset-0 bg-black opacity-5 pointer-events-none z-0" />
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#015D67]/10 rounded-full translate-x-48 -translate-y-48 opacity-30 blur-2xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#015D67]/10 rounded-full -translate-x-36 translate-y-36 opacity-30 blur-2xl z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#2e5b8e] to-[#0096a0] text-transparent bg-clip-text">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[#336699] leading-relaxed">
              Find quick answers to your queries about the event, registration, and participation.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group transition-all duration-300 border border-[#336699]/20 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg hover:border-[#336699]"
              >
                <AccordionTrigger className="text-left py-5 px-6 text-lg font-semibold text-[#336699] transition-colors group-hover:text-[#336699]/80 [&[data-state=open]]:text-[#336699]">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 mt-1 text-[#336699] shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-0 text-[#336699]/80 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
