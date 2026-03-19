import { useState } from "react";

const Dot = () => <span style={{ display: "inline-block", width: 13, height: 13, background: "#2e7a14", marginLeft: 6, marginBottom: 4, verticalAlign: "bottom", flexShrink: 0 }} />;

const Img = ({ src, alt, style, fallback }) => {
  const [err, setErr] = useState(false);
  return err ? <div style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 52 }}>{fallback}</div>
    : <img src={src} alt={alt} style={style} onError={() => setErr(true)} />;
};

export default function Insights() {
  return (
    <section id="insights" className="sec" style={{ background: "#fff", padding: "72px 60px 60px", borderBottom: "1px solid #e8e8e8" }}>
      <div style={{ maxWidth: 1220, margin: "0 auto" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: "#888", textTransform: "uppercase", marginBottom: 8 }}>INSIGHTS</p>
        <h2 className="sec-h2" style={{ fontSize: "clamp(26px,3.8vw,50px)", fontWeight: 700, color: "#111", marginBottom: 28, display: "flex", alignItems: "flex-end" }}>Stay Ahead<Dot /></h2>
        <div className="ins-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          {[
            { title: "Why Use Bagasse Briquettes (Bio Coal)?", overlay: "rgba(27,80,18,.78)", img: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?w=900&q=80" },
            { title: "Why Briquettes are Better Than Coal", overlay: "rgba(30,42,50,.78)", img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80" },
          ].map((ins, i) => (
            <div key={i} className="ins-card" style={{ borderRadius: 16, overflow: "hidden", height: 290, position: "relative", cursor: "pointer", transition: "transform .3s,box-shadow .3s", transitionDelay: `${i * .1}s` }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 44px rgba(0,0,0,.22)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
              <Img src={ins.img} alt={ins.title} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} fallback="" />
              <div style={{ position: "absolute", inset: 0, background: ins.overlay }} />
              {/* Text centered in card */}
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "28px 36px", textAlign: "center" }}>
                <h3 style={{ fontSize: "clamp(17px,2vw,26px)", fontWeight: 700, color: "#fff", lineHeight: 1.3, marginBottom: 16, maxWidth: 360 }}>{ins.title}</h3>
                <a href="#" style={{ color: "rgba(255,255,255,.82)", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 4, transition: "color .2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#8bc34a"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.82)"}>
                  Know more <span>›</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
