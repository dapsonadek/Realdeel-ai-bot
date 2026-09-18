import SiteHeader from "../../components/SiteHeader";
import ServiceLandingFooter from "../../components/ServiceLandingFooter";
import styles from "./page.module.css";

const WHATSAPP_URL = "https://wa.me/2349124688089?text=Hi%2C%20I%27m%20interested%20in%20the%20copytrading%20service%21";

const advantages = [
  ["Beginner Friendly", "Start participating even when you are still learning or do not yet have a profitable trading strategy."],
  ["Follow Pro Traders", "Connect your trading account to selected professional traders within RealDeel."],
  ["Automatic Trade Copying", "When a pro trader opens a buy or sell trade, the same action is copied to your connected account automatically."],
  ["No Signals to Copy", "You do not have to wait for messages or manually enter signal details on your trading platform."],
  ["No More Missed Entries", "Real-time copying helps prevent missed opportunities caused by delayed signal notifications or manual execution."],
  ["Save Your Time", "Your connected account can follow trading activity automatically while you focus on learning or other responsibilities."],
];

export default function CopyTrading() {
  return (
    <div className={`service-page ${styles.page}`}>
      <SiteHeader standalone />
      <main className="service-landing copytrading-landing">
        <section className="page-hero">
          <div className="eyebrow">REALDEEL COPYTRADING</div>
          <h1>Learn at your pace.<br /><span>Trade with experienced hands.</span></h1>
          <p>If you are a beginner, do not yet have a trading strategy, or have struggled to trade profitably, connect your account to a RealDeel pro trader and let their trades copy automatically.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="primary-button">Ask About CopyTrading →</a>
        </section>

        <section className="section">
          <div className="section-heading">
            <div className="eyebrow">WHY COPYTRADING?</div>
            <h2>Participate without trading manually.</h2>
            <p>You can continue learning while your connected account follows the actions of a selected pro trader.</p>
          </div>
          <div className="product-grid">
            {advantages.map(([title, text], index) => (
              <article className="product-card" key={title}>
                <div className="product-number">0{index + 1}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.videoSection} aria-labelledby="copytrading-video-title">
          <div className={styles.videoFrame}>
            <video autoPlay muted controls playsInline preload="metadata" aria-label="RealDeel CopyTrading demonstration">
              <source src="/realdeel-copytrading.mp4?v=20260917" type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>
          <div className={styles.videoContent}>
            <div className="eyebrow">SEE COPYTRADING IN ACTION</div>
            <h2 id="copytrading-video-title">Copy trades, not signals.</h2>
            <p>See how a connected trading account follows a pro trader’s actions automatically, without waiting for a signal or entering trades manually.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="primary-button">Ask About CopyTrading →</a>
          </div>
        </section>

        <section className="dark-band">
          <div>
            <div className="eyebrow light">HOW IT WORKS</div>
            <h2>They trade. Your account follows.</h2>
            <p>Once your account is connected, buy, sell, modification and closing actions from the selected pro trader can be copied to your account automatically. You do not need to stay online waiting for signals.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="primary-button">Ask About CopyTrading →</a>
          </div>
        </section>
      </main>
      <ServiceLandingFooter standalone />
    </div>
  );
}
