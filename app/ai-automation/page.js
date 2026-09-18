import SiteHeader from "../../components/SiteHeader";
import ServiceLandingFooter from "../../components/ServiceLandingFooter";

export default function AIAutomation() {
  return <div className="service-page"><SiteHeader standalone /><main className="service-landing ai-automation-landing"><section className="page-hero"><div className="eyebrow">AI AUTOMATION</div><h1>Use AI to do more.<br /><span>Without doing everything yourself.</span></h1><p>Practical AI workflows for creators, beginners and businesses looking to automate repetitive digital work.</p><a href="https://wa.me/2349124688089?text=Hi%2C%20I%27m%20interested%20in%20the%20AI%20automation%20service%21" target="_blank" rel="noreferrer" className="primary-button">Explore AI Automation →</a></section><section className="section"><div className="product-grid"><article className="product-card"><div className="product-number">01</div><h3>Faceless YouTube</h3><p>Explore AI-assisted workflows for research, scripting, production and publishing without being on camera.</p></article><article className="product-card"><div className="product-number">02</div><h3>Everything AI</h3><p>Learn practical ways to use modern AI tools for productivity, content, research and everyday digital workflows.</p></article><article className="product-card"><div className="product-number">03</div><h3>Custom AI Workflows</h3><p>Identify repetitive tasks and turn them into structured, AI-assisted workflows.</p></article></div></section></main><ServiceLandingFooter standalone /></div>;
}


