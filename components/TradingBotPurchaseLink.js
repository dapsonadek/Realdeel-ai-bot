"use client";

const TELEGRAM_CHANNEL_URL = "https://t.me/+thhE8lo9Ogg0ZGJk";

export default function TradingBotPurchaseLink() {
  function trackContact() {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Contact", {
        content_name: "RealDeel Trading Bot",
        contact_method: "Telegram",
      });
    }
  }

  return (
    <a href={TELEGRAM_CHANNEL_URL} target="_blank" rel="noreferrer" className="primary-button" onClick={trackContact}>
      Get RealDeel Trading Bot Now →
    </a>
  );
}
