import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import OtherServicesCta from "../../components/OtherServicesCta";

const products = [
  ["AI Trading Bot", "Automated trade execution built around a configured trading strategy.", "/ai-trading-bot-free-usage", "Explore the free onboarding"],
  ["CopyTrader", "A managed copy-trading setup designed for traders who want automation and simplicity.", "/copytrading", "Learn about CopyTrader"],
  ["MT4 / MT5 Trade Copier", "One-click trade copying for account managers and multi-account trading workflows.", "/trade-copier", "View trade copier"],
];

export default function Trading() {
  return <div className="service-page"><SiteHeader />
  <main className="service-landing personal-bot-landing">
    <section className="page-hero">
      <div>
      <div className="eyebrow">TRADING TECHNOLOGY</div>
      <h1>Automate the way<br /><span>you trade.</span></h1>
      <p>RealDeel builds practical trading tools that reduce manual execution and help traders operate with more structure.</p>
      </div>
      </section>
    <section className="section">
      <div className="section-heading left">
        <div className="eyebrow">OUR PRODUCTS</div>
        <h2>Tools built around real trading workflows.</h2>
      </div>
      <div className="product-grid">
        {products.map(([title,text,href,cta])=>
        <article className="product-card" key={title}><div className="product-number">0{products.findIndex(p=>p[0]===title)+1}</div><h3>{title}</h3><p>{text}</p><Link href={href} className="text-link">{cta} →</Link>
        </article>
      )}
      </div>
      </section>
    <section className="dark-band">
      <div>
        <div className="eyebrow light">REALDEEL APPROACH</div>
      <h2>Automation without giving up control.</h2>
      <p>Your trading account remains yours. Our technology is designed to automate execution while keeping you in control of your account and decisions.</p>
      </div>
    </section>
  <OtherServicesCta />
  </main>
  <SiteFooter /></div>;
}


