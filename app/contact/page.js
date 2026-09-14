import SiteHeader from "../../components/SiteHeader";
import ServiceLandingFooter from "../../components/ServiceLandingFooter";

const contacts = [
  ["WhatsApp", "Speak directly with RealDeel about trading tools, development or AI automation.", "https://wa.me/2349124688089?text=Hi%2C%20I%27m%20interested%20in%20RealDeel%27s%20services%21", "Message on WhatsApp"],
  ["Telegram", "Follow RealDeel Trade and connect with us directly on Telegram.", "https://t.me/realdeeltrade", "Contact on Telegram"],
  ["Instagram", "Follow RealDeel FX for trading, automation and product updates.", "https://www.instagram.com/realdeelfx/", "Follow on Instagram"],
  ["Facebook", "Connect with the official RealDeel FX page on Facebook.", "https://www.facebook.com/RealDeeLFX", "Visit Facebook"],
];

function PlatformIcon({ name }) {
  if (name === "WhatsApp") {
    return <svg viewBox="0 0 24 24" role="img" aria-label="WhatsApp"><path d="M12 2a9.7 9.7 0 0 0-8.35 14.63L2.3 21.7l5.2-1.36A9.7 9.7 0 1 0 12 2Zm0 17.65a7.9 7.9 0 0 1-4.03-1.1l-.29-.17-3.08.8.82-3-.19-.31A7.9 7.9 0 1 1 12 19.65Zm4.33-5.92c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.61.77-.75.93-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18a7.1 7.1 0 0 1-1.32-1.64c-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.4-.58 1.6-1.13.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"/></svg>;
  }
  if (name === "Telegram") {
    return <svg viewBox="0 0 24 24" role="img" aria-label="Telegram"><path d="M21.5 3.4 18.3 19c-.24 1.1-.88 1.37-1.79.85l-4.87-3.59-2.35 2.26c-.26.26-.48.48-.98.48l.35-4.96 9.03-8.16c.39-.35-.09-.55-.61-.2L5.92 12.7l-4.8-1.5c-1.05-.33-1.07-1.05.22-1.55L20.1 2.42c.87-.32 1.63.2 1.4.98Z"/></svg>;
  }
  if (name === "Instagram") {
    return <svg viewBox="0 0 24 24" role="img" aria-label="Instagram"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.7" r="1.1" className="icon-fill"/></svg>;
  }
  return <svg viewBox="0 0 24 24" role="img" aria-label="Facebook"><path d="M14.2 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.25-1.5 1.56-1.5h1.66V3.63a22 22 0 0 0-2.42-.13c-2.4 0-4.04 1.46-4.04 4.15V10H8.25v3.1h2.71v8h3.24Z"/></svg>;
}

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
                <div className="contact-card-top">
                  <div className={`contact-platform-icon ${name.toLowerCase()}`}><PlatformIcon name={name} /></div>
                  <div className="product-number">0{index + 1}</div>
                </div>
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
