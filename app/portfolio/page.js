import SiteHeader from "../../components/SiteHeader";
import ServiceLandingFooter from "../../components/ServiceLandingFooter";

const FREELANCER_URL = "https://www.freelancer.com/u/sdqtrades";

const work = [
  ["RealDeel AI Trading Bot", "Automated trading technology and onboarding funnel."],
  ["MT4 / MT5 Automation", "Indicators, Expert Advisors and account-management tools."],
  ["Trade Copier", "One-click trade copying for multi-account workflows."],
  ["Crypto Automation", "Bot concepts and integrations for crypto trading platforms."],
];

export default function Portfolio() {
  return (
    <div className="service-page">
      <SiteHeader />
      <main className="service-landing portfolio-landing">
        <section className="page-hero">
          <div className="eyebrow">SELECTED WORK</div>
          <h1>Technology built for<br /><span>real-world workflows.</span></h1>
          <p>A selection of trading automation and software projects developed through years of hands-on work.</p>
        </section>

        <section className="section">
          <div className="section-heading">
            <div className="eyebrow">REALDEEL PROJECTS</div>
            <h2>Practical tools built around real requirements.</h2>
          </div>
          <div className="portfolio-grid">
            {work.map(([title, text], index) => (
              <article className="portfolio-card" key={title}>
                <div className="product-number">0{index + 1}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="dark-band">
          <div>
            <div className="eyebrow light">DEVELOPMENT EXPERIENCE</div>
            <h2>Need proof before you start?</h2>
            <p>View the public development portfolio and verified client reviews on Freelancer.com.</p>
            <a href={FREELANCER_URL} target="_blank" rel="noreferrer" className="primary-button">View Freelancer Portfolio →</a>
          </div>
        </section>
      </main>
      <ServiceLandingFooter />
    </div>
  );
}
