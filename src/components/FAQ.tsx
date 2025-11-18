import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "1. What is PagoPay?",
    answer: "PagoPay is a digital wallet and card platform that lets you store, send, convert, and spend both crypto and fiat currencies. Load your wallet using crypto or bank transfer, convert seamlessly, and pay globally wherever major cards are accepted.",
  },
  {
    question: "2. How Do I Get Started with PagoPay?",
    answer: "Getting started is fast and easy. Create an account, complete your identity verification, and fund your wallet using crypto or a connected bank account. Once approved, you can request your virtual or physical PagoPay card and begin spending your funds worldwide.\n\nBe among the first to access PagoPay. Sign up now to reserve your spot and receive early access to our cards as we roll out across Canada, the Americas and Europe.",
  },
  {
    question: "3. Which cryptocurrencies does PagoPay support?",
    answer: "PagoPay supports a wide range of major cryptocurrencies, including Bitcoin, Ethereum, USDT, USDC, and many others. Our platform is designed to evolve with user needs, so we continuously expand our list of supported assets to ensure maximum flexibility. Whether you're using crypto for everyday purchases or managing your portfolio, PagoPay gives you the freedom to convert and spend with ease.",
  },
  {
    question: "4. Are there any fees for using PagoPay?",
    answer: "PagoPay follows a transparent, tiered pricing model designed to match your usage and volume. There are no monthly maintenance fees. We apply a competitive conversion fee when you exchange between crypto and fiat, and our tiers offer reduced rates for higher usage. For a full breakdown of fees across all tiers, visit our pricing page.",
  },
  {
    question: "5. Is my money safe with PagoPay?",
    answer: "Yes. At PagoPay, security is fundamental. We use AES-256 encryption, multi-factor authentication, and partner with regulated custodians like ALT 5 Sigma to safeguard user funds and manage crypto operations. All fiat card balances are held with licensed issuing banks, and we comply fully with international financial and data protection regulations. Your money is handled with the same care and protection as traditional financial institutions.",
  },
  {
    question: "6. Can I use PagoPay internationally?",
    answer: "Yes. PagoPay cards can be used worldwide anywhere major card networks are accepted. While all cards currently operate in USD, we do not charge any additional foreign exchange fees when you spend in other currencies. Your crypto is converted to USD at the point of load or transaction, giving you a seamless and cost-efficient global payment experience.",
  },
  {
    question: "7. How long do crypto-to-fiat conversions take?",
    answer: "Crypto-to-fiat conversions on PagoPay are processed instantly at market rates. When you load your card or initiate a swap in the app, your crypto is immediately converted to USD and made available for spending. There are no delays and your funds are usable as soon as the transaction is confirmed.",
  },
  {
    question: "8. What should I do if my card is lost or stolen?",
    answer: "If your PagoPay card is lost or stolen, you can immediately freeze it within the app to prevent unauthorized use. Our support team is available 24/7 to assist you with securing your account and issuing a replacement card promptly.",
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
                <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line">
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
