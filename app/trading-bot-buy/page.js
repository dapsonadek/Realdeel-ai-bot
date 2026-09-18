import SiteHeader from "../../components/SiteHeader";
import ServiceLandingFooter from "../../components/ServiceLandingFooter";

const TELEGRAM_CHANNEL_URL = "https://t.me/+thhE8lo9Ogg0ZGJk";

const features = [
  ["Trades Gold (XAUUSD)", "Built specifically to analyze and trade Gold on the XAUUSD market."],
  ["MT4 or MT5", "Available for either MetaTrader 4 or MetaTrader 5, depending on your preferred platform."],
  ["Proper Risk Management", "Uses breakeven and trailing-stop features to protect positions and mitigate trading risk."],
  ["Adjustable Lot Size", "Set the trading volume to suit your account balance and preferred risk level."],
  ["Adjustable Frequency", "Control how frequently the bot is allowed to identify and place eligible trades."],
  ["News Filter", "Includes a news filter to help manage exposure around high-impact economic events."],
  ["4-Hour Analysis", "Trades on the H4 timeframe, allowing more time to analyze market structure before placing pending orders around supply and demand zones."],
  ["75% Win Rate", "The strategy has achieved a 75% win rate under its tested conditions. Performance can vary with market conditions."],
  ["Small-Account Support", "Flexible risk and lot-size settings allow the bot to be configured for smaller account balances."],
];

export default function TradingBotBuy() {
  return (
    <div className="service-page">
      <SiteHeader />
      <main className="service-landing personal-bot-landing">
        <section className="page-hero">
          <div className="eyebrow">REALDEEL TRADING BOT</div>
          <h1>Own the bot.<br /><span>Trade on your terms.</span></h1>
          <p>Purchase the RealDeel Trading Bot for your personal use and get a configurable automated strategy designed for structured Gold trading.</p>
          <a href={TELEGRAM_CHANNEL_URL} target="_blank" rel="noreferrer" className="primary-button">Get RealDeel Trading Bot Now →</a>
        </section>

        <section className="section">
          <div className="section-heading">
            <div className="eyebrow">BOT CHARACTERISTICS</div>
            <h2>Built for disciplined XAUUSD automation.</h2>
            <p>A focused set of trading and risk-management features that you can configure around your account.</p>
          </div>
          <div className="product-grid">
            {features.map(([title, text], index) => (
              <article className="product-card" key={title}>
                <div className="product-number">{String(index + 1).padStart(2, "0")}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="dark-band">
          <div>
            <div className="eyebrow light">SUPPLY & DEMAND APPROACH</div>
            <h2>More time to analyze before execution.</h2>
            <p>The bot evaluates the 4-hour timeframe and places pending orders around identified supply and demand zones according to its configured strategy and risk settings.</p>
            <a href={TELEGRAM_CHANNEL_URL} target="_blank" rel="noreferrer" className="primary-button">Get RealDeel Trading Bot Now →</a>
          </div>
        </section>
      </main>
      <ServiceLandingFooter />
    </div>
  );
}
