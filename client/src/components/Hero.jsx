import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "../assets/hero_bg_v2.png";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Background Image & Overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(5,15,3,0.90) 0%, rgba(10,25,6,0.78) 100%)",
          }}
        />
      </div>

      {/* Hero Content */}
      <div
        className="hero-inner"
        style={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "1000px",
        }}
      >
        <h1 style={{ margin: 0, color: "#FFFFFF", display: "flex", flexDirection: "column" }}>
          <span className="hero-h0">We Fuel</span>
          <span className="hero-h1">Your Future</span>
        </h1>

        <p
          className="hero-p"
          style={{
            color: "rgba(255,255,255,0.88)",
            maxWidth: "600px",
            marginTop: "clamp(20px, 3vw, 32px)",
            position: "relative",
            lineHeight: "1.7",
          }}
        >
          <span
            style={{
              fontSize: "clamp(34px, 5vw, 44px)",
              fontWeight: 900,
              float: "left",
              lineHeight: "0.8",
              marginRight: "6px",
              marginTop: "4px",
              color: "#FFFFFF",
            }}
          >
            W
          </span>
          e New Green Agro Coal manufactures premium quality Bagasse Briquettes (Bio Coal) made
          from 100% agricultural waste. Our briquettes are eco-friendly, high in calorific value,
          low in ash content, and ideal for industrial boilers, furnaces, and heating systems.
        </p>

        <div
          className="hero-btns"
          style={{ marginTop: "clamp(28px, 4vw, 44px)" }}
        >
          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "#2E7D32",
              color: "#FFFFFF",
              padding: "8px 24px 8px 8px",
              borderRadius: "9999px",
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 25px rgba(46,125,50,0.35)",
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#1B5E20"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#2E7D32"; e.currentTarget.style.transform = "none"; }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#2E7D32",
                flexShrink: 0,
              }}
            >
              <ArrowUpRight size={22} />
            </div>
            Contact Us
          </Link>

          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "14px clamp(20px, 4vw, 36px)",
              borderRadius: "9999px",
              fontWeight: 600,
              fontSize: "15px",
              color: "#FFFFFF",
              border: "1.5px solid rgba(255,255,255,0.5)",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "#9DC940"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; }}
          >
            Get Quote
          </Link>
        </div>
      </div>

      {/* Stats Bar */}
      <div
        className="stats-bar"
        style={{
          position: "relative",
          zIndex: 1,
          animation: "slideUp 0.8s cubic-bezier(0.2,0.8,0.2,1) both",
        }}
      >
        {[
          { num: "100", label: "Made from\nAgricultural Waste", suffix: "%" },
          { num: "550", label: "Tons monthly\nproduction capacity", suffix: "+" },
          { num: "05",  label: "Years of industry\nExperience",         suffix: "+" },
        ].map((item, index) => (
          <StatItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

function StatItem({ item, index }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = parseInt(item.num);
    let current = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [item.num]);

  return (
    <div
      className="stat-item"
      style={{ animation: `fadeUp 0.6s ${0.6 + index * 0.15}s ease both` }}
    >
      <span className="stat-num">
        {count.toString().padStart(item.num.length, "0")}{item.suffix}
      </span>
      <span className="stat-label">{item.label}</span>
    </div>
  );
}
