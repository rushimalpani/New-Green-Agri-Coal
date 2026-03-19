import { useState, useEffect } from "react";

export default function Hero() {
  return (
    <section id="home" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Real photo background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1920&q=85"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        {/* Dark overlay — matches screenshot's dark green tint */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(5,15,3,.82) 0%, rgba(10,25,6,.70) 50%, rgba(5,15,3,.75) 100%)" }} />
      </div>

      {/* Content */}
      <div className="hero-inner" style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "110px 60px 56px", maxWidth: 820 }}>
        <div className="hero-h0" style={{ fontSize: "clamp(32px,4.5vw,52px)", fontWeight: 300, color: "#fff", lineHeight: 1.15, animation: "fadeUp .9s ease both", letterSpacing: -.3 }}>We Fuel</div>
        <div className="hero-h1" style={{ fontSize: "clamp(48px,7.5vw,86px)", fontWeight: 800, color: "#fff", lineHeight: 1.05, animation: "fadeUp .9s .12s ease both", marginBottom: 28, letterSpacing: -2 }}>Your Future</div>
        <p className="hero-p" style={{ fontSize: "clamp(14px,1.7vw,17px)", lineHeight: 1.85, color: "rgba(255,255,255,.82)", maxWidth: 650, animation: "fadeUp .9s .24s ease both", marginBottom: 40 }}>
          <span style={{ fontSize: "clamp(22px,3vw,30px)", fontWeight: 800 }}>W</span>e New Green Agro Coal manufactures premium quality Bagasse Briquettes (Bio Coal) made from 100% agricultural waste. Our briquettes are eco friendly, high in calorific value, low in ash content, and ideal for industrial boilers, furnaces, and heating systems.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", animation: "fadeUp .9s .36s ease both" }}>
          <a href="#footer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#4caf50", color: "#fff", padding: "12px 22px", borderRadius: 36, fontWeight: 700, fontSize: 15, boxShadow: "0 6px 22px rgba(76,175,80,.5)", transition: "all .25s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#388e3c"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#4caf50"; e.currentTarget.style.transform = "none"; }}>
            <span style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,.22)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>↗</span>
            Contact Us
          </a>
          <a href="#footer" style={{ display: "inline-flex", alignItems: "center", padding: "12px 26px", borderRadius: 36, fontWeight: 600, fontSize: 15, color: "#fff", border: "1.5px solid rgba(255,255,255,.45)", transition: "all .25s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#4caf50"; e.currentTarget.style.color = "#8bc34a"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,.45)"; e.currentTarget.style.color = "#fff"; }}>
            Get Quote
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="stats-bar" style={{ position: "relative", zIndex: 1, background: "#4caf50", display: "flex" }}>
        {[{ num: "100%", lbl: "Made from\nAgricultural Waste" }, { num: "550+", lbl: "Tons monthly\nproduction capacity" }, { num: "05+", lbl: "Years of industry\nExperience" }].map((s, i) => (
          <div key={i} className="stat-item" style={{ flex: 1, display: "flex", alignItems: "center", gap: 18, padding: "22px 0 22px", paddingLeft: i === 0 ? 52 : 40, borderLeft: i > 0 ? "1px solid rgba(255,255,255,.3)" : "none" }}>
            <span className="stat-num" style={{ fontSize: "clamp(36px,4vw,52px)", fontWeight: 300, color: "#fff", lineHeight: 1, flexShrink: 0, letterSpacing: -1 }}>{s.num}</span>
            <span style={{ fontSize: "clamp(12px,1.2vw,14px)", color: "rgba(255,255,255,.82)", lineHeight: 1.6, whiteSpace: "pre-line" }}>{s.lbl}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

