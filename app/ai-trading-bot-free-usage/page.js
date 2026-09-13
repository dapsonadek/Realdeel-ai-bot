"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const TELEGRAM_URL = "https://t.me/RealDeelAI_bot";

const faqs = [
  {
    question: "Is the AI trading bot really free to use?",
    answer: "There is no subscription fee charged for access to the RealDeel AI bot. A compatible trading account and server/VPS infrastructure may be required.",
  },
  {
    question: "Do I need any trading experience to use ReaLDeel AI Bot?",
    answer: "No. Even with zero knowledge and experience, you can use the bot because everything is automated. We will share materials that can improve your trading knowledge (ebooks and videos) if you wish to know more about trading.",
  },
  {
    question: "Do I need to manually place trades?",
    answer: "No. Once the system is configured and activated, trade execution is automated according to the bot's programmed strategy.",
  },
  {
    question: "Do I remain in control of my trading account?",
    answer: "Yes. Your funds remain in your compatible trading account. You retain control of your account and are responsible for your account decisions.",
  },
  {
    question: "Can I withdraw my funds?",
    answer: "Withdrawal processing is completely handled by you. It is instant and there are no charges.",
  },
  {
    question: "What do I need to get started?",
    answer: "Start the RealDeel AI onboarding process on Telegram. You will be guided through compatibility, setup requirements, and activation by our support.",
  },
];

const benefits = [
  ["🤖", "Automated Execution", "The system can execute trades automatically according to its configured strategy."],
  ["🧠", "Rule-Based Decisions", "The system follows programmed logic rather than fear, greed, hesitation, or impulsive decisions."],
  ["🔐", "Your Account, Your Control", "Your trading capital remains in your compatible trading account."],
  ["💸", "Access to Your Funds", "You can manage your account and request withdrawals through your broker, subject to applicable terms and processing procedures."],
];

export default function AIBotFree() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <header className={styles.header}>
          <Link href="/" className={styles.brand}>
            <span className={styles.logoMark}><img src="/realdeel-logo.JPG" alt="RealDeel logo" /></span>
            <span>RealDeel<em>FX</em><small>AUTOMATE · TRADE · GROW</small></span>
          </Link>
          <Link href="/" className={styles.homeLink}>Home</Link>
          <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className={styles.outlineButton}>Try It Free <span>→</span></a>
        </header>

        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>AUTOMATED TRADING TECHNOLOGY</div>
            <h1>LET AI HANDLE <span>THE TRADING.</span><br />YOU STAY IN CONTROL.</h1>
            <p className={styles.heroText}>Experience automated trade execution with the RealDeel AI trading system. The bot follows its configured strategy while your trading account remains yours.</p>
            <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className={styles.primaryButton}>🤖 TRY THE BOT FREE <span>→</span></a>
            <p className={styles.smallNote}>No subscription fee for using the bot. A compatible trading account and server/VPS infrastructure may be required.</p>
          </div>

          <div className={styles.heroVisual}>
            <img src="/homepage-assets/ai-bot-v3.webp" alt="AI robot analyzing a trading chart" />
            <div className={styles.status}><i /> AI SYSTEM ACTIVE</div>
            <div className={styles.floatOne}><span>🤖</span><div><small>TRADE EXECUTION</small><strong>Automated</strong></div></div>
            <div className={styles.floatTwo}><span>🔐</span><div><small>ACCOUNT</small><strong>You Control It</strong></div></div>
          </div>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className={styles.sectionHeading}>
          <div className={styles.eyebrow}>WHY REALDEEL AI</div>
          <h2><span>AI EXECUTES.</span><span>YOU REMAIN IN CONTROL.</span></h2>
          <p>A structured automated approach designed to reduce manual execution and emotional decision-making.</p>
        </div>
        <div className={styles.benefitGrid}>
          {benefits.map(([icon, title, text]) => <article key={title}><div className={styles.icon}>{icon}</div><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className={styles.control}>
        <div className={styles.controlVisual}><video autoPlay muted controls playsInline preload="metadata" poster="/homepage-assets/ai-bot-v3.webp" aria-label="RealDeel AI trading bot demonstration"><source src="/ai-trading-bot.mp4" type="video/mp4" /></video></div>
        <div className={styles.controlContent}>
          <div className={styles.eyebrow}>AUTOMATION WITHOUT GIVING UP CONTROL</div>
          <h2>YOUR FUNDS STAY IN YOUR TRADING ACCOUNT.</h2>
          <p>RealDeel AI is designed to automate trading activity. Your broker account remains separate, allowing only you to access your balance and manage your account.</p>
          <div className={styles.controlPoints}><span>✓ Monitor your account</span><span>✓ Manage your balance</span><span>✓ Withdraw profits instantly!</span></div>
          <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className={styles.primaryButton}>START ON TELEGRAM →</a>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.sectionHeading}>
          <div className={styles.eyebrow}>QUESTIONS</div>
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => <div className={styles.faqItem} key={faq.question}>
            <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>{faq.question}<span>{openFaq === index ? "−" : "+"}</span></button>
            {openFaq === index && <p>{faq.answer}</p>}
          </div>)}
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.eyebrow}>REALDEEL AI</div>
        <h2>READY TO EXPLORE AUTOMATED TRADING?</h2>
        <p>Start your guided onboarding and learn what you need to get started.</p>
        <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className={styles.primaryButton}>🤖 TRY THE BOT FREE <span>→</span></a>
      </section>

      <footer className={styles.footer}>
        <div className={styles.moreServices}><span>More ways to trade, automate and grow</span><Link href="/#services">Explore More RealDeel Solutions <b>→</b></Link></div>
        <Link href="/" className={styles.brand}>
          <span className={styles.logoMark}><img src="/realdeel-logo.JPG" alt="" /></span>
          <span>ReaLDeeL <em>AI</em></span>
        </Link>
        <p>Automated trading involves risk. Past or simulated performance does not guarantee future results.</p>
        <p>© {new Date().getFullYear()} RealDeel AI. All rights reserved.</p>
      </footer>
    </main>
  );
}
