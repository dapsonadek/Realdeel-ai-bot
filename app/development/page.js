import Script from "next/script";
import SiteHeader from "../../components/SiteHeader";
import ServiceLandingFooter from "../../components/ServiceLandingFooter";
import styles from "./page.module.css";

const TELEGRAM_URL = "https://t.me/realdeeltrade";
const FREELANCER_URL = "https://www.freelancer.com/u/sdqtrades";

const platforms = [
  ["MT4 / MT5", "Indicators and Expert Advisors in mql4 and mql5 respectively with full source code."],
  ["TradingView / Pine Script", "TradingView indicators, strategies and studies in Pine Script."],
  ["NinjaTrader", "NT8 indicators and strategies in NinjaScript."],
  ["TradeStation / EasyLanguage", "TradeStation developments in EasyLanguage."],
  ["cTrader / cAlgo", "cAlgo and cBots for cTrader."],
  ["Crypto Bots / APIs", "Bybit, Binance, Coinbase and 3Commas crypto trading bots."],
];

const reviews = [
  {
    name: "Peter",
    flag: "🇦🇺",
    project: "MT4 indicator development",
    quote: "Developer did a great job, we worked through an issue with the development scope sensibly and I got what I wanted quickly and with minimal fuss.",
    url: "https://www.freelancer.com/projects/mql4/Custom-Time-Grid-Indicator/details",
  },
  {
    name: "Jay",
    flag: "🇺🇸",
    project: "NinjaTrader strategy",
    quote: "Great work! Eniola O. really knows what she is doing and is very responsive with any question or concerns about anything, I highly recommend.",
    url: "https://www.freelancer.com/projects/backtesting/SMA-EMA-Based-NinjaTrader-Scaling/details",
  },
  {
    name: "Joaquin",
    flag: "🇦🇷",
    project: "MT4 / MT5 trading development",
    quote: "At the beginning of work cost to understand each other, but in the end we could speak and coordinate perfectly. Professional, recommended.",
    url: "https://www.freelancer.com/projects/mql4/Trading-Development/details",
  },
  {
    name: "Chen Chong",
    flag: "🇲🇾",
    project: "Trading script conversion",
    quote: "Eniola has successfully completed my 2nd project. Her work ethics are excellent and her technical expertise is remarkable. Highly recommend.",
    url: "https://www.freelancer.com/projects/software-architecture/Convert-script-39507717/details",
  },
  {
    name: "Ifionu",
    flag: "🇳🇬",
    project: "Forex bot development",
    quote: "Great developer. Delivered exactly what I needed. Communication was smooth and the project was completed successfully. I highly recommend.",
    url: "https://www.freelancer.com/projects/c-programming/Engulfing-Candlestick-Forex-Bot/details",
  },
  {
    name: "Oliver",
    flag: "🇧🇬",
    project: "Pine Script strategy",
    quote: "Great experience! Delivered high-quality work, understood the requirements clearly, and was very responsive throughout the project. Highly recommend.",
    url: "https://www.freelancer.com/projects/testing-qa/Trading-Strategy-coding-PineScript-for/details",
  },
];

export const metadata = {
  title: "Custom Trading Software Development | RealDeel FX",
  description: "Commission custom MT4/MT5 Expert Advisors, TradingView Pine Script, NinjaTrader strategies, trade copiers and crypto bots. Explore client reviews and discuss your project.",
};

export default function Development() {
  return (
    <div className="service-page">
      <Script id="realdeel-development-meta-pixel" strategy="afterInteractive">
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
      <main className="service-landing development-landing">
        <section className={`page-hero ${styles.hero}`}>
          <div className="eyebrow">CUSTOM TRADING SOFTWARE DEVELOPMENT</div>
          <h1>Have a strategy?<br /><span>Turn it into software.</span></h1>
          <p>Custom Indicators, Expert Advisors, Trading Strategies, Trade-copiers and Crypto Bots built around your specifications.</p>
          <p className={styles.marketNote}>For traders, firms and trading communities worldwide.</p>
          <div className={styles.heroActions}>
            <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="primary-button">Discuss Your Project →</a>
            <a href={FREELANCER_URL} target="_blank" rel="noreferrer" className={styles.heroLink}>See our Portfolio on Freelancer.com</a>
          </div>
        </section>

        <section className={styles.reviews} aria-labelledby="development-reviews-heading">
          <div className={styles.reviewsInner}>
            <div className={styles.reviewHeading}>
              <div>
                <div className="eyebrow">CLIENT PROJECTS & FEEDBACK</div>
                <h2 id="development-reviews-heading">See what development clients say.</h2>
                <p>Explore feedback from real software-development projects before starting yours.</p>
              </div>
              <a href={FREELANCER_URL} target="_blank" rel="noreferrer" className={styles.profileLink}>View full reviews on Global Marketplace - Freelancer.com</a>
            </div>
            <div className={styles.reviewGrid}>
              {reviews.map((review) => (
                <article className={styles.reviewCard} key={review.name}>
                  <span className={styles.reviewProject}>{review.project}</span>
                  <p className={styles.reviewQuote}>{review.quote}</p>
                  <div className={styles.reviewBottom}>
                    <strong><span className={styles.flag} aria-label="Country flag">{review.flag}</span> {review.name}</strong>
                    <a href={review.url} target="_blank" rel="noreferrer" aria-label={`View ${review.name}'s project on Freelancer`}>View project ↗</a>
                  </div>
                </article>
              ))}
            </div>
            <div className={styles.reviewCta}>
              <span>Have a strategy or a technical brief ready?</span>
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">Discuss Your Project →</a>
            </div>
          </div>
        </section>

        <div className={styles.platformTheme}>
          <section className="section">
          <div className="section-heading left">
            <div className="eyebrow">PLATFORMS</div>
            <h2>Development across the tools traders already use.</h2>
          </div>
          <div className="platform-grid">
            {platforms.map(([platform, description], index) => (
              <article className={`platform-card ${styles.platformCard}`} key={platform}>
                <span>0{index + 1}</span>
                <h3>{platform}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          </section>
        </div>

        <div className={styles.ideaTheme}>
          <section className="split-section">
          <div>
            <div className="eyebrow">FROM IDEA TO EXECUTION</div>
            <h2>Bring the rules. We build the technology.</h2>
          </div>
          <div>
            <p>Whether you have a complete strategy or only a trading concept, we can translate defined rules into a practical automated tool.</p>
            <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="primary-button">Discuss Your Project →</a>
            <div><a href={FREELANCER_URL} target="_blank" rel="noreferrer" className="text-link">See development portfolio →</a></div>
          </div>
          </section>
        </div>
      </main>
      <ServiceLandingFooter standalone />
    </div>
  );
}
