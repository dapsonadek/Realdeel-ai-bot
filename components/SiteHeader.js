import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="site-brand">
          <span className="brand-mark">RD</span>
          <span>RealDeel <b>FX</b></span>
        </Link>
        <nav className="main-nav">
          <Link href="/trading">Trading</Link>
          <Link href="/development">Development</Link>
          <Link href="/ai-automation">AI Automation</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link href="/ai-trading-bot-free-usage" className="nav-cta">Try AI Bot Free</Link>
      </div>
    </header>
  );
}
