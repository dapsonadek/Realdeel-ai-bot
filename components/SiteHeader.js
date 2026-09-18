import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="site-brand">
          <img className="brand-logo" src="/realdeel-logo.JPG" alt="RealDeel logo" />
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
      </div>
    </header>
  );
}
