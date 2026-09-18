import Script from "next/script";
import SiteHeader from "../../components/SiteHeader";
import ServiceLandingFooter from "../../components/ServiceLandingFooter";
import TradingBotPurchaseLink from "../../components/TradingBotPurchaseLink";

const features = [
  ["Trades Gold (XAUUSD)", "Built specifically to analyze and trade Gold on the XAUUSD market."],
  ["MT4 or MT5", "Available for either MetaTrader 4 or MetaTrader 5, depending on your preferred platform."],
  ["Proper Risk Management", "Uses breakeven and trailing-stop features to protect positions and mitigate trading risk."],
  ["Adjustable Lot Size", "Set the trading volume to suit your account balance and preferred risk level."],
  ["Adjustable Frequency", "Control how frequently the bot is allowed to identify and place eligible trades."],
  ["News Filter", "Includes a news filter to help manage exposure around high-impact economic events."],
  ["4-Hour Analysis", "Trades on the H4 timeframe, allowing more time to analyze market structure before placing pending orders around supply and demand zones."],
  ["Small-Account Support", "Flexible risk and lot-size settings allow the bot to be configured for smaller account balances."],
];

export default function TradingBotBuy() {
  return (
    <div className="service-page">
      <Script id="realdeel-trading-bot-meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','2015589922470530');
fbq('track','PageView');`}
      </Script>
      <noscript><img height="1" width="1" style={{ display: "none" }} alt="" src="https://www.facebook.com/tr?id=2015589922470530&ev=PageView&noscript=1" /></noscript>
      <SiteHeader standalone />
      <main className="service-landing personal-bot-landing">
        <section className="page-hero">
          <div className="eyebrow">REALDEEL TRADING BOT</div>
          <h1>Own the bot.<br /><span>Trade on your terms.</span></h1>
          <p>Purchase the RealDeel Trading Bot for your personal use and get a configurable automated strategy designed for structured Gold trading.</p>
          <TradingBotPurchaseLink />
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
            <div className="eyebrow light">REAL WORK. REAL CLIENT FEEDBACK.</div>
            <h2>See the work behind RealDeel.</h2>
            <p>RealDeel has developed trading bots for clients on Freelancer.com, a global marketplace. Explore our profile, completed projects and client reviews to see why traders trust us with their ideas.</p>
            <div>
              <a href="https://www.freelancer.com/u/sdqtrades" target="_blank" rel="noreferrer" className="primary-button">View Reviews on Freelancer.com →</a>
            </div>
            <div>
              <TradingBotPurchaseLink />
            </div>
          </div>
        </section>
      </main>
      <ServiceLandingFooter standalone />
    </div>
  );
}
