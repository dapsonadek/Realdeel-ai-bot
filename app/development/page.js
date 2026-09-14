import SiteHeader from "../../components/SiteHeader";
import ServiceLandingFooter from "../../components/ServiceLandingFooter";

const WHATSAPP_URL = "https://wa.me/2349124688089?text=Hi%2C%20I%27m%20interested%20in%20the%20trading%20development%20service%21";
const FREELANCER_URL = "https://www.freelancer.com/u/sdqtrades";

const platforms = [
  ["MT4 / MT5", "Indicators and Expert Advisors in mql4 and mql5 respectively with full source code."],
  ["TradingView / Pine Script", "TradingView indicators, strategies and studies in Pine Script."],
  ["NinjaTrader", "NT8 indicators and strategies in NinjaScript."],
  ["TradeStation / EasyLanguage", "TradeStation developments in EasyLanguage."],
  ["cTrader / cAlgo", "cAlgo and cBots for cTrader."],
  ["Crypto Bots / APIs", "Bybit, Binance, Coinbase and 3Commas crypto trading bots."],
];

export default function Development() {
  return (
    <div className="service-page">
      <SiteHeader />
      <main className="service-landing development-landing">
        <section className="page-hero">
          <div className="eyebrow">TRADING SOFTWARE DEVELOPMENT</div>
          <h1>Have a strategy?<br /><span>Turn it into software.</span></h1>
          <p>Custom Indicators, Expert Advisors, Trading Strategies, Trade-copiers and Crypto Bots built around your specifications.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="primary-button">Discuss Your Project →</a>
        </section>

        <section className="section">
          <div className="section-heading left">
            <div className="eyebrow">PLATFORMS</div>
            <h2>Development across the tools traders already use.</h2>
          </div>
          <div className="platform-grid">
            {platforms.map(([platform, description], index) => (
              <article className="platform-card" key={platform}>
                <span>0{index + 1}</span>
                <h3>{platform}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="split-section">
          <div>
            <div className="eyebrow">FROM IDEA TO EXECUTION</div>
            <h2>Bring the rules. We build the technology.</h2>
          </div>
          <div>
            <p>Whether you have a complete strategy or only a trading concept, we can translate defined rules into a practical automated tool.</p>
            <a href={FREELANCER_URL} target="_blank" rel="noreferrer" className="text-link">See development portfolio →</a>
          </div>
        </section>
      </main>
      <ServiceLandingFooter />
    </div>
  );
}
