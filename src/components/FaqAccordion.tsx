import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const FaqAccordion = () => {
  const { t } = useTranslation();
  const items = t("faq.items", { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <Accordion type="single" collapsible className="space-y-4">
      {items.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="group relative rounded-3xl border border-border bg-card/80 backdrop-blur-md px-6 md:px-8 py-2 transition-all duration-300 data-[state=open]:border-accent data-[state=open]:shadow-[0_20px_60px_-25px_rgba(16,75,54,0.25)] data-[state=open]:bg-card"
        >
          <span className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full bg-accent opacity-0 group-data-[state=open]:opacity-100 transition-opacity" />
          <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:text-primary py-5">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm md:text-base pb-6">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
