import Link from "next/link";

const internalLinks = [
  ["/", "Home", "30.0%", "1.0%", "4.2%", "2.8%"],
  ["/trading", "Services", "35.8%", "1.0%", "7.6%", "2.8%"],
  ["/about", "About", "44.8%", "1.0%", "5.0%", "2.8%"],
  ["/portfolio", "Portfolio", "50.3%", "1.0%", "6.0%", "2.8%"],
  ["/blog", "Blog", "56.8%", "1.0%", "4.2%", "2.8%"],
  ["/contact", "Contact", "62.1%", "1.0%", "5.8%", "2.8%"],
  ["/ai-trading-bot-free-usage", "Get Started", "82.0%", "0.7%", "12.5%", "3.0%"],
  ["/trading", "Explore Our Services", "5.5%", "16.4%", "19.5%", "3.2%"],
  ["/ai-trading-bot-free-usage", "Use RealDeel AI Bot 100%", "3.5%", "28.8%", "30.4%", "22.7%"],
  ["/copytrading", "Copy your Trades with RealDeel", "35.4%", "28.8%", "29.6%", "22.7%"],
  ["/ai-trading-bot", "Buy RealDeel AI Bot", "66.3%", "28.8%", "30.3%", "22.7%"],
  ["/trade-copier", "Buy our Copy Trading Software", "3.5%", "52.2%", "30.4%", "22.7%"],
  ["/development", "Develop Your Trading Software", "35.4%", "52.2%", "29.6%", "22.7%"],
  ["/ai-automation", "AI Automation for beginners", "66.3%", "52.2%", "30.3%", "22.7%"],
];

const reviewLinks = [
  ["Peter review", "1.3%"],
  ["Jay review", "17.8%"],
  ["Joaquin review", "34.3%"],
  ["Chen Chong review", "50.6%"],
  ["Ifionu review", "66.8%"],
  ["Oliver review", "83.0%"],
];

export default function Home() {
  return (
    <main className="approved-homepage">
      <div className="approved-canvas">
        <img src="/approved-homepage.webp" alt="RealDeel FX homepage showing trading automation services, six service cards and verified Freelancer.com client reviews." />
        {internalLinks.map(([href,label,left,top,width,height]) => (
          <Link key={label} href={href} aria-label={label} className="design-hotspot" style={{left,top,width,height}} />
        ))}
        {reviewLinks.map(([label,left], index) => (
          <a
            key={label}
            href={index === 4
              ? "https://www.freelancer.com/projects/c-programming/Engulfing-Candlestick-F/reviews"
              : index === 5
                ? "https://www.freelancer.com/projects/testing-qa/Trading-Strategy-coding-PineScript-for/reviews"
                : "https://www.freelancer.com/u/dapsonadek"}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="design-hotspot"
            style={{left,top:"82.1%",width:"15.5%",height:"10.8%"}}
          />
        ))}
        <a href="https://www.freelancer.com/u/dapsonadek" target="_blank" rel="noreferrer" aria-label="View more reviews on Freelancer.com" className="design-hotspot" style={{left:"36.3%",top:"94.3%",width:"27.3%",height:"3.2%"}} />
      </div>
    </main>
  );
}
