import { useState } from "react";

const Dot = () => <span style={{ display: "inline-block", width: 14, height: 14, background: "#2E7D32", marginLeft: 8, borderRadius: "1px" }} />;

export default function Insights() {
  return (
    <section id="insights" style={{ background: "#ffffff", padding: "96px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        
        <p style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.1em", color: "#71717A", textTransform: "uppercase", marginBottom: "16px" }}>INSIGHTS</p>
        <h2 style={{ fontSize: "56px", fontWeight: 800, color: "#111827", lineHeight: "1.1", marginBottom: "56px", display: "flex", alignItems: "baseline" }}>
          Stay Ahead <Dot />
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          {[
            { 
              title: "Why Use Bagasse Briquettes (Bio Coal)?", 
              desc: "Discover the industrial advantages of switching to sustainable biomass fuel.",
              img: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?w=900&q=80",
              color: "#1E3922"
            },
            { 
              title: "The Future of Industrial Energy", 
              desc: "How renewable energy is reshaping the manufacturing landscape in India.",
              img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80",
              color: "#2E7D32"
            },
          ].map((ins, i) => (
            <div key={i} style={{ 
              borderRadius: "24px", 
              overflow: "hidden", 
              background: ins.color, 
              height: "400px", 
              position: "relative",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              cursor: "pointer",
              transition: "transform 0.3s ease"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-8px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "none"}>
              <img src={ins.img} alt={ins.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.3, position: "absolute" }} />
              <div style={{ position: "absolute", inset: 0, padding: "48px", display: "flex", flexDirection: "column", justifyContent: "flex-end", color: "#ffffff" }}>
                <h3 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "16px", lineHeight: "1.3" }}>{ins.title}</h3>
                <p style={{ fontSize: "16px", opacity: 0.8, marginBottom: "24px" }}>{ins.desc}</p>
                <div style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  gap: "8px", 
                  fontWeight: 600, 
                  fontSize: "15px" ,
                  color: "#86EFAC"
                }}>
                  Read Story <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
