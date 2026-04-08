import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SiteHeader from "@/components/SiteHeader";

const LatamHowItWorksPage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("es");
  }, [i18n]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Actualizado: abril 2026</p>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Cómo funciona PagoPay en Latinoamérica</h1>
        <p className="text-lg text-foreground/90 mb-8 leading-relaxed">
          Deposita cripto en tu cuenta PagoPay. Se convierte automáticamente a USD. Paga con tu tarjeta prepagada en
          millones de comercios o retira en ATMs, con <strong>cero comisiones de cambio de divisas</strong> al gastar en
          el extranjero — ideal para remesas y viajes sin necesidad de una cuenta bancaria tradicional.
        </p>

        <ol className="list-decimal pl-5 space-y-5 text-foreground/90 mb-10">
          <li>
            <strong className="text-foreground">Registro y KYC.</strong> Crea tu cuenta y completa la verificación de
            identidad para cumplir normativas AML.
          </li>
          <li>
            <strong className="text-foreground">Depósito en cripto.</strong> Envía BTC, ETH, USDT, USDC u otros
            activos admitidos a tu billetera PagoPay.
          </li>
          <li>
            <strong className="text-foreground">Gastar o retirar.</strong> Usa la tarjeta virtual o física con límites
            y comisiones transparentes según tu nivel (
            <Link to="/pricing" className="text-primary font-medium hover:underline">
              precios
            </Link>
            ).
          </li>
        </ol>

        <p className="text-sm text-muted-foreground">
          <strong>Autor:</strong> PagoPay · <strong>Actualizado:</strong> abril 2026
        </p>
        <p className="mt-6 flex flex-wrap gap-4">
          <Link to="/latam" className="text-primary font-medium hover:underline">
            ← Inicio LATAM
          </Link>
          <Link to="/how-it-works" className="text-primary font-medium hover:underline">
            English overview
          </Link>
        </p>
      </article>
    </div>
  );
};

export default LatamHowItWorksPage;
