import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SiteHeader from "@/components/SiteHeader";

const AfricaHowItWorksPage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("fr");
  }, [i18n]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Dernière mise à jour : avril 2026</p>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Comment fonctionne PagoPay en Afrique
        </h1>
        <p className="text-lg text-foreground/90 mb-8 leading-relaxed">
          Déposez des crypto-actifs sur votre compte PagoPay : ils sont convertis en USD pour alimenter une carte
          prépayée utilisable dans le monde entier, avec <strong>zéro frais de change</strong> sur les dépenses
          internationales — utile lorsque l’accès au système bancaire classique est limité.
        </p>

        <ol className="list-decimal pl-5 space-y-5 text-foreground/90 mb-10">
          <li>
            <strong className="text-foreground">Inscription et KYC.</strong> Créez votre compte et complétez la
            vérification d’identité conformément aux obligations LBA/CFT.
          </li>
          <li>
            <strong className="text-foreground">Dépôt en crypto.</strong> Envoyez BTC, ETH, USDT, USDC ou d’autres
            actifs pris en charge vers votre portefeuille PagoPay.
          </li>
          <li>
            <strong className="text-foreground">Dépenser ou retirer.</strong> Payez avec la carte virtuelle ou
            physique ; les plafonds et frais dépendent de votre formule (
            <Link to="/pricing" className="text-primary font-medium hover:underline">
              tarifs
            </Link>
            ).
          </li>
        </ol>

        <p className="text-sm text-muted-foreground">
          <strong>Auteur :</strong> PagoPay · <strong>Mise à jour :</strong> avril 2026
        </p>
        <p className="mt-6 flex flex-wrap gap-4">
          <Link to="/africa" className="text-primary font-medium hover:underline">
            ← Accueil Afrique
          </Link>
          <Link to="/how-it-works" className="text-primary font-medium hover:underline">
            English overview
          </Link>
        </p>
      </article>
    </div>
  );
};

export default AfricaHowItWorksPage;
