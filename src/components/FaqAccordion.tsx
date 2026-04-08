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
          className="border border-border rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
        >
          <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
