import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import ServiceLandingFooter from "../../components/ServiceLandingFooter";

const platforms = ["MT4 / MT5", "TradingView / Pine Script", "NinjaTrader", "TradeStation / EasyLanguage", "cTrader / cAlgo", "Crypto Bots / APIs"];

export default function Development() {
  return <div className="service-page"><SiteHeader /><main className="service-landing development-landing"><section className="page-hero"><div className="eyebrow">TRADING SOFTWARE DEVELOPMENT</div><h1>Have a strategy?<br /><span>Turn it into software.</span></h1><p>Custom indicators, Expert Advisors, strategies, trade copiers and crypto automation built around your specifications.</p><Link href="/contact" className="primary-button">Discuss Your Project →</Link></section><section className="section"><div className="section-heading left"><div className="eyebrow">PLATFORMS</div><h2>Development across the tools traders already use.</h2></div><div className="platform-grid">{platforms.map((p,i)=><article className="platform-card" key={p}><span>0{i+1}</span><h3>{p}</h3><p>Strategy development, automation and integration tailored to your trading workflow.</p></article>)}</div></section><section className="split-section"><div><div className="eyebrow">FROM IDEA TO EXECUTION</div><h2>Bring the rules. We build the technology.</h2></div><div><p>Whether you have a complete strategy or only a trading concept, we can translate defined rules into a practical automated tool.</p><Link href="/portfolio" className="text-link">See development portfolio →</Link></div></section></main><ServiceLandingFooter /></div>;
}


