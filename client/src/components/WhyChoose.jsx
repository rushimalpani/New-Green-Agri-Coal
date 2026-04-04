const WHY_CARDS = [
  { title: "Pure Bagasse Fuel", desc: "100% pure bagasse briquettes without mixing other agricultural waste, ensuring consistent fuel quality.", icon: "⚙️", side: "L" },
  { title: "Direct Raw Material Source", desc: "Our plants operate inside sugar factory premises, allowing us to receive fresh bagasse directly from sugarcane processing.", icon: "🏭", side: "R" },
  { title: "Reliable Supply", desc: "With two manufacturing plants, we ensure continuous production and dependable supply to customers.", icon: "🚚", side: "L" },
  { title: "Consistent Quality", desc: "Our briquettes are produced with controlled moisture, uniform density, and stable calorific value for efficient combustion.", icon: "📦", side: "R" },
  { title: "Transparent Process", desc: "We maintain complete transparency in production, weight, and quality, building long-term customer trust.", icon: "🔄", side: "L" },
  { title: "Industry Ready Fuel", desc: "Our briquettes are widely used in boilers, furnaces, food processing, textile units, chemical plants, and paper mills.", icon: "🔥", side: "R" },
];

const Dot = () => <span style={{ display: "inline-block", width: 13, height: 13, background: "#2e7a14", marginLeft: 6, marginBottom: 4, verticalAlign: "bottom", flexShrink: 0 }} />;

export default function WhyChoose() {
  return (
    <section id="why-choose" className="sec" style={{ background: "#f5f4ee", padding: "80px 60px 96px" }}>
      <div style={{ maxWidth: 1220, margin: "0 auto" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: "#888", textTransform: "uppercase", marginBottom: 6 }}>WHY CHOOSE</p>
        <h2 className="why-h2" style={{ fontSize: "clamp(28px,4vw,54px)", fontWeight: 700, color: "#111", marginBottom: 64, display: "flex", alignItems: "flex-end", flexWrap: "wrap" }}>New Green AgroCoal ?<Dot /></h2>

        {/* ── Desktop orbital ── */}
        <div className="orbital-diagram" style={{ position: "relative", height: 660 }}>
          {/* SVG dashed ellipse */}
          <svg style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 540, height: 540, pointerEvents: "none", zIndex: 1 }} viewBox="0 0 540 540">
            <ellipse cx="270" cy="270" rx="240" ry="234" fill="none" stroke="#a5d6a7" strokeWidth="1.5" strokeDasharray="7 5" />
          </svg>

          {/* Center circle */}
          <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 216, height: 216, borderRadius: "50%", background: "linear-gradient(145deg,#66bb6a,#2e7d32)", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", zIndex: 3, boxShadow: "0 18px 52px rgba(46,125,50,.48)" }}>
            <div>
              <p style={{ color: "#fff", fontSize: 17, fontWeight: 700, lineHeight: 1.55 }}>Pure Fuel.</p>
              <p style={{ color: "#fff", fontSize: 17, fontWeight: 700, lineHeight: 1.55 }}>Reliable Supply.</p>
              <p style={{ color: "#fff", fontSize: 17, fontWeight: 700, lineHeight: 1.55, textDecoration: "underline", textUnderlineOffset: 3 }}>Trusted Quality.</p>
            </div>
          </div>

          {/* 6 cards around orbit — top / mid / bottom rows */}
          {WHY_CARDS.map((c, i) => {
            const row = Math.floor(i / 2); // 0,1,2
            const tops = ["4%", "39%", "72%"];
            const isL = c.side === "L";
            return (
              <div key={c.title} style={{ position: "absolute", top: tops[row], ...(isL ? { left: 0 } : { right: 0 }), display: "flex", alignItems: "center", width: 338, zIndex: 2, transitionDelay: `${i * .1}s` }}>
                {isL ? (
                  <>
                    <div style={{ flex: 1, background: "rgba(216,242,216,.72)", border: "1px solid rgba(76,175,80,.18)", borderRadius: 60, padding: "17px 18px 17px 22px" }}>
                      <h4 style={{ fontSize: 15, fontWeight: 700, color: "#2e7d32", marginBottom: 7 }}>{c.title}</h4>
                      <p style={{ fontSize: 13, color: "#555", lineHeight: 1.62 }}>{c.desc}</p>
                    </div>
                    <div style={{ width: 54, height: 54, borderRadius: "50%", flexShrink: 0, background: "#c8e6c9", border: "1.5px solid rgba(76,175,80,.35)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginLeft: -2, zIndex: 1, boxShadow: "0 2px 10px rgba(0,0,0,.1)" }}>{c.icon}</div>
                  </>
                ) : (
                  <>
                    <div style={{ width: 54, height: 54, borderRadius: "50%", flexShrink: 0, background: "#c8e6c9", border: "1.5px solid rgba(76,175,80,.35)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginRight: -2, zIndex: 1, boxShadow: "0 2px 10px rgba(0,0,0,.1)" }}>{c.icon}</div>
                    <div style={{ flex: 1, background: "rgba(216,242,216,.72)", border: "1px solid rgba(76,175,80,.18)", borderRadius: 60, padding: "17px 22px 17px 18px" }}>
                      <h4 style={{ fontSize: 15, fontWeight: 700, color: "#2e7d32", marginBottom: 7 }}>{c.title}</h4>
                      <p style={{ fontSize: 13, color: "#555", lineHeight: 1.62 }}>{c.desc}</p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Mobile cards grid (hidden on desktop) ── */}
        <div className="orbital-mobile" style={{ display: "none", gridTemplateColumns: "1fr", gap: 14 }}>
          {/* Center circle for mobile */}
          <div style={{ width: 180, height: 180, borderRadius: "50%", background: "linear-gradient(145deg,#66bb6a,#2e7d32)", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", margin: "0 auto 24px", boxShadow: "0 12px 36px rgba(46,125,50,.45)" }}>
            <div>
              <p style={{ color: "#fff", fontSize: 14, fontWeight: 700, lineHeight: 1.55 }}>Pure Fuel.</p>
              <p style={{ color: "#fff", fontSize: 14, fontWeight: 700, lineHeight: 1.55 }}>Reliable Supply.</p>
              <p style={{ color: "#fff", fontSize: 14, fontWeight: 700, lineHeight: 1.55, textDecoration: "underline" }}>Trusted Quality.</p>
            </div>
          </div>
          {WHY_CARDS.map(c => (
            <div key={c.title} style={{ background: "rgba(216,242,216,.72)", border: "1px solid rgba(76,175,80,.18)", borderRadius: 16, padding: "18px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", flexShrink: 0, background: "#c8e6c9", border: "1.5px solid rgba(76,175,80,.35)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{c.icon}</div>
              <div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: "#2e7d32", marginBottom: 6 }}>{c.title}</h4>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
