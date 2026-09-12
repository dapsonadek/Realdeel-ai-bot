import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const divisions = [
  ["01", "Trading Automation", "AI trading bot, CopyTrader and trade-copying tools built around real trading workflows.", "/trading"],
  ["02", "Trading Software Development", "Custom MT4/MT5, TradingView, NinjaTrader, TradeStation, cTrader and crypto solutions.", "/development"],
  ["03", "AI Automation", "Practical AI workflows for creators, beginners and businesses.", "/ai-automation"],
];

export default function Home() {
  return <><SiteHeader /><main>
    <section className="home-hero"><div className="hero-copy"><div className="eyebrow">TRADING TECHNOLOGY • AUTOMATION • AI</div><h1>Build smarter.<br/><span>Trade smarter.</span></h1><p>RealDeel FX builds practical technology for traders, trading businesses and people looking to automate the way they work.</p><div className="hero-actions"><Link href="/ai-trading-bot-free-usage" className="primary-button">TRY REALDEEL AI FREE →</Link><Link href="/development" className="secondary-button">EXPLORE SERVICES</Link></div></div><div className="hero-panel"><div className="panel-top"><span>REALDEEL FX</span><span>01 / 03</span></div><div className="panel-title">AUTOMATION<br/><strong>IN MOTION.</strong></div><div className="panel-line"></div><p>Trading systems • Custom development • AI workflows</p></div></section>
    <section className="section divisions"><div className="section-heading left"><div className="eyebrow">WHAT WE BUILD</div><h2>Technology across trading and AI.</h2></div><div className="division-grid">{divisions.map(([n,t,d,h])=><Link href={h} className="division-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><b>Explore →</b></Link>)}</div></section>
    <section className="feature-band"><div><div className="eyebrow light">FEATURED PRODUCT</div><h2>RealDeel AI Trading Bot</h2><p>Automated trade execution designed to reduce manual intervention while keeping the trading account in your control.</p><Link href="/ai-trading-bot-free-usage" className="gold-button">TRY THE BOT FREE →</Link></div><div className="feature-stat"><strong>AI</strong><span>Automated execution</span><strong>24/7</strong><span>Configured workflow</span></div></section>
    <section className="section development-preview"><div className="section-heading left"><div className="eyebrow">CUSTOM DEVELOPMENT</div><h2>Have a trading strategy?<br/>Turn it into software.</h2><p>From indicators and Expert Advisors to trade copiers, strategies and crypto bots.</p></div><div className="platform-strip"><span>MT4 / MT5</span><span>TRADINGVIEW</span><span>NINJATRADER</span><span>TRADESTATION</span><span>CTRADER</span><span>CRYPTO</span></div><Link href="/development" className="text-link">View development services →</Link></section>
    <section className="section story"><div><div className="eyebrow">THE REALDEEL APPROACH</div><h2>Developer. Trader. Builder.</h2></div><div><p>Years of software development and trading experience led to a simple idea: technology should make complex workflows easier to execute.</p><Link href="/about" className="text-link">Learn about RealDeel FX →</Link></div></section>
    <section className="final-cta"><div className="eyebrow light">REALDEEL FX</div><h2>Ready to build or automate?</h2><p>Explore the products and services or start with the RealDeel AI Bot.</p><div className="hero-actions"><Link href="/ai-trading-bot-free-usage" className="primary-button">TRY AI BOT FREE</Link><Link href="/contact" className="secondary-button light-link">CONTACT REALDEEL</Link></div></section>
  </main><SiteFooter /></>;
}
