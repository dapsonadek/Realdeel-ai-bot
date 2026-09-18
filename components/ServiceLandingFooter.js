import Link from "next/link";

export default function ServiceLandingFooter({ standalone = false }) {
  const brand = (
    <>
      <span className="service-footer-logo"><img src="/realdeel-logo.JPG" alt="RealDeel logo" /></span>
      <span>RealDeel <em>FX</em><small>AUTOMATE · TRADE · GROW</small></span>
    </>
  );

  return (
    <footer className="service-landing-footer">
      {!standalone && (
        <div className="service-footer-cta">
          <span>More ways to trade, automate and grow</span>
          <Link href="/#services">Explore More RealDeel Solutions <b>→</b></Link>
        </div>
      )}
      {standalone ? (
        <div className="service-footer-brand">{brand}</div>
      ) : (
        <Link href="/" className="service-footer-brand">{brand}</Link>
      )}
      <p>Automated trading involves risk. Past or simulated performance does not guarantee future results.</p>
      <p>© {new Date().getFullYear()} RealDeel FX. All rights reserved.</p>
    </footer>
  );
}
