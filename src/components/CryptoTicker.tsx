import { useEffect, useState } from "react";

interface CoinPrice {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const fallbackData: CoinPrice[] = [
  { id: "bitcoin", symbol: "btc", name: "Bitcoin", current_price: 97250, price_change_percentage_24h: 1.2 },
  { id: "ethereum", symbol: "eth", name: "Ethereum", current_price: 3420, price_change_percentage_24h: -0.5 },
  { id: "tether", symbol: "usdt", name: "Tether", current_price: 1.0, price_change_percentage_24h: 0.01 },
  { id: "usd-coin", symbol: "usdc", name: "USD Coin", current_price: 1.0, price_change_percentage_24h: 0.0 },
  { id: "solana", symbol: "sol", name: "Solana", current_price: 185, price_change_percentage_24h: 2.3 },
  { id: "ripple", symbol: "xrp", name: "XRP", current_price: 2.45, price_change_percentage_24h: 0.8 },
];

const CryptoTicker = () => {
  const [coins, setCoins] = useState<CoinPrice[]>(fallbackData);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,tether,usd-coin,solana,ripple&order=market_cap_desc"
        );
        if (res.ok) {
          const data = await res.json();
          setCoins(data);
        }
      } catch {
        // Use fallback data
      }
    };
    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  const tickerItems = [...coins, ...coins]; // duplicate for seamless scroll

  return (
    <div className="bg-primary overflow-hidden py-3">
      <div className="animate-marquee flex whitespace-nowrap">
        {tickerItems.map((coin, i) => (
          <span key={`${coin.id}-${i}`} className="inline-flex items-center gap-2 mx-8 text-primary-foreground/90 text-sm">
            <span className="font-semibold uppercase">{coin.symbol}</span>
            <span>${coin.current_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            <span className={coin.price_change_percentage_24h >= 0 ? "text-accent" : "text-destructive"}>
              {coin.price_change_percentage_24h >= 0 ? "+" : ""}
              {coin.price_change_percentage_24h.toFixed(2)}%
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default CryptoTicker;
