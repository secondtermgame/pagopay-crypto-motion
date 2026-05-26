export type BlogCategory = "GUIDE" | "INSIGHTS" | "TIPS";

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  metaDescription: string;
  category: BlogCategory;
  date: string;
  keywords: string[];
};

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "how-to-spend-crypto-in-real-life",
    title: "How to Spend Crypto in Real Life: A Complete 2026 Guide",
    description:
      "Learn how to turn Bitcoin, Ethereum, and stablecoins into everyday spending power. Discover how crypto cards work and how to use them for groceries, travel, online shopping, and more.",
    metaDescription:
      "Want to spend your crypto in the real world? This complete 2026 guide shows how crypto cards work, what to look for, and how to start spending Bitcoin and stablecoins anywhere.",
    category: "GUIDE",
    date: "2026-05-26",
    keywords: [
      "how to spend crypto",
      "crypto card 2026",
      "spend bitcoin in real life",
      "spend ethereum",
      "spend stablecoins",
      "crypto debit card guide",
    ],
  },
  {
    slug: "what-is-a-crypto-card",
    title: "What Is a Crypto Card and How Does It Work?",
    description:
      "A beginner-friendly breakdown of crypto cards — what they are, how they convert digital assets to fiat, and what to look for before getting one in 2026.",
    metaDescription:
      "A crypto card lets you spend Bitcoin, Ethereum, and stablecoins like cash. Learn how they work, what fees to expect, and how to choose the right one in 2026.",
    category: "GUIDE",
    date: "2026-05-20",
    keywords: [
      "what is a crypto card",
      "how does a crypto card work",
      "crypto card explained",
      "crypto debit card",
      "crypto to fiat card",
    ],
  },
  {
    slug: "stablecoins-everyday-spending",
    title: "Why Stablecoins Are Changing Everyday Spending",
    description:
      "USDC, USDT, and other stablecoins are reshaping how people hold and use money. Here's why stablecoin spending is the next big shift in personal finance.",
    metaDescription:
      "Stablecoins like USDC and USDT are changing how people spend money. Learn why USD-backed digital assets are becoming the new standard for everyday spending in 2026.",
    category: "INSIGHTS",
    date: "2026-05-15",
    keywords: [
      "stablecoin spending",
      "USDC card",
      "USDT card",
      "how to spend stablecoins",
      "stablecoin payments",
      "spend USDC USDT",
    ],
  },
  {
    slug: "crypto-to-fiat-conversion-explained",
    title: "Crypto-to-Fiat Conversion: How It Works and What It Costs",
    description:
      "Understanding how digital assets convert into spendable USD — including conversion fees, exchange rates, and what to look for in a fair crypto card.",
    metaDescription:
      "Learn how crypto-to-fiat conversion works, what fees to expect, and how to avoid hidden costs when turning Bitcoin, Ethereum, or stablecoins into spendable USD.",
    category: "GUIDE",
    date: "2026-05-10",
    keywords: [
      "crypto to fiat conversion",
      "crypto to USD",
      "bitcoin to fiat",
      "ethereum to usd",
      "crypto conversion fees",
      "convert crypto to cash",
    ],
  },
  {
    slug: "crypto-card-travel-guide",
    title: "How to Travel with a Crypto Card in 2026",
    description:
      "Tips for using your crypto card abroad — including FX fees, ATM withdrawals, contactless payments, and what to do if your card is lost or stolen.",
    metaDescription:
      "Traveling with a crypto card? Learn how to use it abroad without hidden FX fees, withdraw cash from ATMs, and stay protected against fraud in 2026.",
    category: "TIPS",
    date: "2026-05-05",
    keywords: [
      "crypto card travel",
      "crypto card abroad",
      "using crypto card overseas",
      "crypto debit card international",
      "spend crypto while traveling",
      "ATM crypto card",
    ],
  },
  {
    slug: "freelancers-getting-paid-in-crypto",
    title: "Getting Paid in Crypto: A Practical Guide for Freelancers",
    description:
      "More remote workers and freelancers are getting paid in Bitcoin and stablecoins. Here's how to accept crypto payments and turn them into real spending power.",
    metaDescription:
      "Freelancers are getting paid in crypto more than ever. Learn how to accept Bitcoin and stablecoin payments, manage your earnings, and spend them seamlessly with a crypto card.",
    category: "INSIGHTS",
    date: "2026-04-28",
    keywords: [
      "get paid in crypto",
      "freelancer crypto payments",
      "get paid in bitcoin",
      "get paid in stablecoins",
      "crypto for freelancers",
      "accept crypto payments",
      "crypto remote work",
    ],
  },
  {
    slug: "plastic-vs-metal-pagopay-card",
    title: "Plastic vs Metal: Which PagoPay Card Should You Choose?",
    description:
      "A side-by-side breakdown of PagoPay's Plastic and Metal cards — fees, perks, and which option fits your lifestyle.",
    metaDescription:
      "Plastic or Metal? Compare PagoPay's two card tiers — fees, perks, and benefits — to find the best crypto card for your everyday spending in 2026.",
    category: "GUIDE",
    date: "2026-04-20",
    keywords: [
      "pagopay plastic card",
      "pagopay metal card",
      "pagopay card review",
      "best pagopay card",
      "pagopay card comparison",
      "crypto card tiers",
    ],
  },
];
