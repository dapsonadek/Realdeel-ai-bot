import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const services = [
  ["01", "Use RealDeel AI Bot 100% Free", "Start with our automated trading bot through a guided onboarding process.", "/ai-trading-bot-free-usage", "GET STARTED FREE"],
  ["02", "Trading Software Development", "Turn your strategy into an Expert Advisor, indicator, automated strategy, trade copier or crypto bot.", "/development", "EXPLORE DEVELOPMENT"],
  ["03", "Trading Products", "Explore the RealDeel AI Bot, CopyTrader and MT4/MT5 Trade Copier.", "/trading", "VIEW TRADING PRODUCTS"],
  ["04", "AI Automation", "Build practical AI workflows for content, research and repetitive business processes.", "/ai-automation", "EXPLORE AI AUTOMATION"],
];

const platforms = ["MT4 / MT5", "TRADINGVIEW", "NINJATRADER", "TRADESTATION", "CTRADER", "CRYPTO"];

const reviews = [
  ["🇧🇬", "Oliver", "Trading Strategy Coding — Pine Script", "https://www.freelancer.com/projects/testing-qa/Trading-Strategy-coding-PineScript-for/reviews"],
  ["🇳🇬", "Ifionu", "Engulfing Candlestick Development", "https://www.freelancer.com/projects/c-programming/Engulfing-Candlestick-F/reviews"],
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="home-hero">
          <div className="hero-copy">
            <div className="eyebrow">TRADING TECHNOLOGY • AUTOMATION • AI</div>
            <h1>Technology built<br /><span>for traders.</span></h1>
            <p>RealDeel FX brings trading products, custom software development and practical AI automation together under one technology brand.</p>
            <div className="hero-actions">
              <Link href="/ai-trading-bot-free-usage" className="primary-button">USE REALDEEL AI BOT 100% FREE →</Link>
              <Link href="/development" className="secondary-button">EXPLORE SERVICES</Link>
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-top"><span>REALDEEL FX</span><span>TRADING • TECH • AI</span></div>
            <div className="panel-title">BUILD.<br /><strong>AUTOMATE.</strong><br />TRADE.</div>
            <div className="panel-line"></div>
            <p>Trading systems • Custom development • AI workflows</p>
          </div>
        </section>

        <section className="services-section">
          <div className="section-heading left">
            <div className="eyebrow">WHAT WE DO</div>
            <h2>Technology and services built around real workflows.</h2>
            <p>Choose the service that matches what you want to trade, build or automate.</p>
          </div>
          <div className="service-grid">
            {services.map(([number, title, description, href, cta]) => (
              <Link href={href} className="service-card" key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <b>{cta} →</b>
              </Link>
            ))}
          </div>
        </section>

        <section className="feature-band">
          <div>
            <div className="eyebrow light">FEATURED SERVICE</div>
            <h2>Let RealDeel AI handle the trading.</h2>
            <p>Explore the complete original RealDeel AI Bot offer and begin the guided onboarding without a bot subscription fee.</p>
            <Link href="/ai-trading-bot-free-usage" className="gold-button">USE REALDEEL AI BOT 100% FREE →</Link>
          </div>
          <div className="feature-stat">
            <strong>AI</strong><span>Automated execution</span>
            <strong>24/7</strong><span>VPS-powered operation</span>
          </div>
        </section>

        <section className="section development-preview">
          <div className="section-heading left">
            <div className="eyebrow">CUSTOM DEVELOPMENT</div>
            <h2>Have a trading strategy?<br />Turn it into software.</h2>
            <p>We develop Expert Advisors, indicators, automated strategies, trading bots, trade copiers and custom tools.</p>
          </div>
          <div className="platform-strip">{platforms.map((platform) => <span key={platform}>{platform}</span>)}</div>
          <Link href="/development" className="text-link">REQUEST A DEVELOPMENT PROJECT →</Link>
        </section>

        <section className="reviews-section">
          <div className="section-heading left">
            <div className="eyebrow light">VERIFIED EXPERIENCE</div>
            <h2>Client reviews on Freelancer.com</h2>
            <p>Independent feedback from completed trading-software projects.</p>
          </div>
          <div className="review-grid">
            {reviews.map(([flag, name, project, href]) => (
              <article className="review-card" key={name}>
                <div className="review-person"><span>{flag}</span><div><h3>{name}</h3><p>{project}</p></div></div>
                <a href={href} target="_blank" rel="noreferrer">VIEW ON FREELANCER.COM →</a>
              </article>
            ))}
          </div>
          <a href="https://www.freelancer.com/u/dapsonadek" target="_blank" rel="noreferrer" className="reviews-more">VIEW MORE REVIEWS ON FREELANCER.COM →</a>
        </section>

        <section className="section story">
          <div><div className="eyebrow">THE REALDEEL STORY</div><h2>Developer. Trader. Builder.</h2></div>
          <div><p>RealDeel FX is built on years of developing automated trading systems and applying technology to real trading workflows.</p><Link href="/about" className="text-link">LEARN ABOUT REALDEEL FX →</Link></div>
        </section>

        <section className="final-cta">
          <div className="eyebrow light">REALDEEL FX</div>
          <h2>What do you want to automate?</h2>
          <p>Start with the RealDeel AI Bot or discuss a custom trading and AI automation project.</p>
          <div className="hero-actions"><Link href="/ai-trading-bot-free-usage" className="primary-button">USE AI BOT FREE</Link><Link href="/contact" className="secondary-button light-link">CONTACT REALDEEL</Link></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
