import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is PagoPay?",
    answer: "PagoPay is a comprehensive crypto-to-fiat financial platform that allows you to store, send, and spend your cryptocurrencies as easily as traditional money. Our card works anywhere that accepts major card networks.",
  },
  {
    question: "How do I get started with PagoPay?",
    answer: "Getting started is simple. Sign up for an account, complete the verification process, fund your wallet with crypto or fiat, and order your PagoPay card. You'll be able to start using your card within days of approval.",
  },
  {
    question: "Which cryptocurrencies does PagoPay support?",
    answer: "PagoPay supports all major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), USDT, USDC, and many more. We're constantly adding support for new currencies based on user demand.",
  },
  {
    question: "Are there any fees for using PagoPay?",
    answer: "PagoPay operates with transparent pricing. There are no monthly fees, and we only charge competitive conversion fees when swapping between crypto and fiat. Check our pricing page for detailed fee information.",
  },
  {
    question: "Is my money safe with PagoPay?",
    answer: "Absolutely. We use bank-grade security measures including 256-bit encryption, cold storage for crypto assets, multi-factor authentication, and comply with all relevant financial regulations. Your funds are insured and protected.",
  },
  {
    question: "Can I use PagoPay internationally?",
    answer: "Yes! PagoPay cards work globally wherever major card networks are accepted. You can spend your crypto anywhere in the world without worrying about currency conversions or international transaction fees.",
  },
  {
    question: "How long do crypto-to-fiat conversions take?",
    answer: "Conversions are processed instantly within the app. When you make a purchase with your PagoPay card, the crypto is automatically converted to fiat at the current market rate in real-time.",
  },
  {
    question: "What should I do if my card is lost or stolen?",
    answer: "You can instantly freeze your card through the PagoPay app. Contact our 24/7 support team immediately, and we'll help you secure your account and issue a replacement card.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about PagoPay
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
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

export default FAQ;
