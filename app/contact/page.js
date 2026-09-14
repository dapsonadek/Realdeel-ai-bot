import SiteHeader from "../../components/SiteHeader";
import ServiceLandingFooter from "../../components/ServiceLandingFooter";

const contacts = [
  ["WhatsApp", "Speak directly with RealDeel about trading tools, development or AI automation.", "https://wa.me/2349124688089?text=Hi%2C%20I%27m%20interested%20in%20RealDeel%27s%20services%21", "Message on WhatsApp"],
  ["Telegram", "Follow RealDeel Trade and connect with us directly on Telegram.", "https://t.me/realdeeltrade", "Contact on Telegram"],
  ["Instagram", "Follow RealDeel FX for trading, automation and product updates.", "https://www.instagram.com/realdeelfx/", "Follow on Instagram"],
  ["Facebook", "Connect with the official RealDeel FX page on Facebook.", "https://www.facebook.com/RealDeeLFX", "Visit Facebook"],
];

export default function Contact() {
  return (
    <div className="service-page">
      <SiteHeader />
      <main className="service-landing contact-landing">
        <section className="page-hero">
          <div className="eyebrow">CONTACT REALDEEL</div>
          <h1>Let’s build something<br /><span>useful.</span></h1>
          <p>Tell us what you want to automate, build or improve. We can discuss trading technology, custom development or AI automation.</p>
        </section>

        <section className="section">
          <div className="section-heading">
            <div className="eyebrow">CONNECT WITH US</div>
            <h2>Choose the channel that works for you.</h2>
            <p>Reach RealDeel through WhatsApp, Telegram, Instagram or Facebook.</p>
          </div>
          <div className="contact-link-grid">
            {contacts.map(([name, text, href, cta], index) => (
              <article className="contact-link-card" key={name}>
                <div className="product-number">0{index + 1}</div>
                <h3>{name}</h3>
                <p>{text}</p>
                <a href={href} target="_blank" rel="noreferrer" className="text-link">{cta} →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="dark-band">
          <div>
            <div className="eyebrow light">WHAT CAN WE HELP WITH?</div>
            <h2>Trading automation, development or AI.</h2>
            <p>Contact us about the RealDeel AI Bot, CopyTrading, Trade-Copier, custom MT4/MT5 development, TradingView, NinjaTrader, TradeStation, cTrader, crypto bots or AI automation.</p>
            <a href={contacts[0][2]} target="_blank" rel="noreferrer" className="primary-button">Message RealDeel on WhatsApp →</a>
          </div>
        </section>
      </main>
      <ServiceLandingFooter />
    </div>
  );
}
