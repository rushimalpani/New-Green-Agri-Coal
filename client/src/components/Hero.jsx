import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
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
        fontFamily: "'Inter', sans-serif" 
      }}
    >
      {/* Background Image & Overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src={heroBg}
          alt="Sustainability Illustration"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div 
          style={{ 
            position: "absolute", 
            inset: 0, 
            background: "linear-gradient(135deg, rgba(5, 15, 3, 0.88) 0%, rgba(10, 25, 6, 0.75) 100%)" 
          }} 
        />
      </div>

      {/* Hero Content */}
      <div 
        className="hero-content" 
        style={{ 
          position: "relative", 
          zIndex: 1, 
          flex: 1, 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          padding: "120px 80px 80px", 
          maxWidth: "1000px" 
        }}
      >
        <h1 style={{ margin: 0, color: "#FFFFFF", display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "56px", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-1.5px" }}>We Fuel</span>
          <span style={{ fontSize: "92px", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-2.5px" }}>Your Future</span>
        </h1>
        
        <p 
          style={{ 
            fontSize: "16px", 
            lineHeight: "1.8", 
            color: "rgba(255, 255, 255, 0.88)", 
            maxWidth: "600px", 
            marginTop: "32px",
            position: "relative"
          }}
        >
          <span style={{ fontSize: "32px", fontWeight: 900, float: "left", marginRight: "6px", lineHeight: "1", color: "#FFFFFF" }}>W</span>
          e New Green Agro Coal manufactures premium quality Bagasse Briquettes (Bio Coal) made from 100% agricultural waste. Our briquettes are eco friendly, high in calorific value, low in ash content, and ideal for industrial boilers, furnaces, and heating systems.
        </p>

        <div style={{ display: "flex", gap: "20px", marginTop: "44px", alignItems: "center" }}>
          <a 
            href="#footer" 
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
              boxShadow: "0 8px 25px rgba(46, 125, 50, 0.3)"
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#1B5E20"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#2E7D32"; e.currentTarget.style.transform = "none"; }}
          >
            <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", color: "#2E7D32" }}>
              <ArrowUpRight size={22} />
            </div>
            Contact Us
          </a>

          <a 
            href="#footer" 
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              padding: "16px 36px", 
              borderRadius: "9999px", 
              fontWeight: 600, 
              fontSize: "15px", 
              color: "#FFFFFF", 
              border: "1.5px solid #2E7D32", 
              textDecoration: "none",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(46, 125, 50, 0.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
          >
            Get Quote
          </a>
        </div>
      </div>

      {/* Stats Bar */}
      <div 
        style={{ 
          position: "relative", 
          zIndex: 1, 
          background: "#4B9B16", 
          display: "flex", 
          height: "120px",
          overflow: "hidden",
          animation: "slideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both"
        }}
      >
        {[
          { num: "100", label: "Made from\nAgricultural Waste", suffix: "%" },
          { num: "550", label: "Tons monthly\nproduction capacity", suffix: "+" },
          { num: "05", label: "Years of industry\nExperience", suffix: "+" }
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
    let start = 0;
    const duration = 1500; // 1.5s
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [item.num]);

  return (
    <div 
      style={{ 
        flex: 1, 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        gap: "24px",
        borderLeft: index > 0 ? "1px solid rgba(255, 255, 255, 0.2)" : "none",
        padding: "0 40px",
        animation: `fadeUp 0.6s ${0.6 + index * 0.15}s ease both`
      }}
    >
      <span style={{ fontSize: "52px", fontWeight: 200, color: "#FFFFFF", letterSpacing: "-1px" }}>
        {count.toString().padStart(item.num.length, '0')}{item.suffix}
      </span>
      <span style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.8)", lineHeight: "1.5", whiteSpace: "pre-line", fontWeight: 400 }}>
        {item.label}
      </span>
    </div>
  );
}

