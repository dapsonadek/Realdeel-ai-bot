import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="site-brand footer-brand"><span className="brand-mark">RD</span><span>RealDeel <b>FX</b></span></div>
          <p>Trading technology, automation and AI solutions built for traders, trading businesses and people ready to automate.</p>
        </div>
        <div><h4>Explore</h4><Link href="/trading">Trading</Link><Link href="/development">Development</Link><Link href="/ai-automation">AI Automation</Link></div>
        <div><h4>Company</h4><Link href="/portfolio">Portfolio</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} RealDeel FX. All rights reserved.</span><span>Automated trading involves risk. Past performance does not guarantee future results.</span></div>
    </footer>
  );
}
