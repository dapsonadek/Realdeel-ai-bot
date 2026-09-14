import SiteHeader from "../../components/SiteHeader";
import ServiceLandingFooter from "../../components/ServiceLandingFooter";

const WHATSAPP_URL = "https://wa.me/2349124688089?text=Hello%20RealDeel%2C%20I%20want%20to%20get%20the%20RealDeel%20Trade-Copier.";

export default function TradeCopierBuy() {
  return (
    <div className="service-page">
      <SiteHeader />
      <main className="service-landing trade-copier-landing">
        <section className="page-hero">
          <div className="eyebrow">REALDEEL TRADE-COPIER</div>
          <h1>Execute across hundreds of accounts.<br /><span>From one main account.</span></h1>
          <p>Are you a Forex IB, affiliate, fund manager, copy trader or trading-community owner looking for a tool to instantly execute trades across hundreds of accounts? With the RealDeel Trade-Copier, you can open, modify and close trades from the main account in real time—with no intentional delay.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="primary-button">Get Trade-Copier Now →</a>
        </section>

        <section className="section">
          <div className="section-heading">
            <div className="eyebrow">BUILT FOR MULTI-ACCOUNT EXECUTION</div>
            <h2>One workflow for every connected account.</h2>
          </div>
          <div className="product-grid">
            <article className="product-card">
              <div className="product-number">01</div>
              <h3>MT4 & MT5</h3>
              <p>Built for common MetaTrader account-management workflows across supported setups.</p>
            </article>
            <article className="product-card">
              <div className="product-number">02</div>
              <h3>Fast Replication</h3>
              <p>Designed to simplify the process of replicating trades between connected accounts.</p>
            </article>
            <article className="product-card">
              <div className="product-number">03</div>
              <h3>Installation Guide</h3>
              <p>Purchase and setup will be accompanied by free remote installation and usage guidance.</p>
            </article>
          </div>
        </section>

        <section className="dark-band">
          <div>
            <div className="eyebrow light">CONTROL FROM THE MAIN ACCOUNT</div>
            <h2>Open, modify and close in real time.</h2>
            <p>Manage trade execution for connected accounts from a single main account, helping you serve your trading community or account-management operation efficiently.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="primary-button">Get Trade-Copier Now →</a>
          </div>
        </section>
      </main>
      <ServiceLandingFooter />
    </div>
  );
}
