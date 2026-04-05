const WHY_CARDS = [
  { title: "Pure Bagasse Fuel",        desc: "100% pure bagasse briquettes without mixing other agricultural waste, ensuring consistent fuel quality.",                                                 icon: "⚙️", side: "L" },
  { title: "Direct Raw Material Source",desc: "Our plants operate inside sugar factory premises, allowing us to receive fresh bagasse directly from sugarcane processing.",                              icon: "🏭", side: "R" },
  { title: "Reliable Supply",           desc: "With two manufacturing plants, we ensure continuous production and dependable supply to customers.",                                                      icon: "🚚", side: "L" },
  { title: "Consistent Quality",        desc: "Our briquettes are produced with controlled moisture, uniform density, and stable calorific value for efficient combustion.",                            icon: "📦", side: "R" },
  { title: "Transparent Process",       desc: "We maintain complete transparency in production, weight, and quality, building long-term customer trust.",                                               icon: "🔄", side: "L" },
  { title: "Industry Ready Fuel",       desc: "Our briquettes are widely used in boilers, furnaces, food processing, textile units, chemical plants, and paper mills.",                                icon: "🔥", side: "R" },
];

const Dot = () => (
  <span
    style={{
      display: "inline-block",
      width: 13, height: 13,
      background: "#2e7a14",
      marginLeft: 6, marginBottom: 4,
      verticalAlign: "bottom",
      flexShrink: 0,
    }}
  />
);

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="sec"
      style={{ background: "#f5f4ee", padding: "clamp(56px,7vw,96px) clamp(20px,5vw,60px)" }}
    >
      <div style={{ maxWidth: 1220, margin: "0 auto" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: "#888", textTransform: "uppercase", marginBottom: 6 }}>
          WHY CHOOSE
        </p>
        <h2
          className="why-h2"
          style={{
            fontWeight: 700,
            color: "#111",
            marginBottom: "clamp(36px,5vw,64px)",
            display: "flex",
            alignItems: "flex-end",
            flexWrap: "wrap",
          }}
        >
          New Green AgroCoal ?<Dot />
        </h2>

        {/* ── Desktop: orbital diagram ── */}
        <div className="orbital-diagram">
          {/* SVG dashed ellipse */}
          <svg
            style={{
              position: "absolute",
              left: "50%", top: "50%",
              transform: "translate(-50%,-50%)",
              width: 540, height: 540,
              pointerEvents: "none",
              zIndex: 1,
            }}
            viewBox="0 0 540 540"
          >
            <ellipse cx="270" cy="270" rx="240" ry="234" fill="none" stroke="#a5d6a7" strokeWidth="1.5" strokeDasharray="7 5" />
          </svg>

          {/* Center circle */}
          <div
            style={{
              position: "absolute",
              left: "50%", top: "50%",
              transform: "translate(-50%,-50%)",
              width: 216, height: 216,
              borderRadius: "50%",
              background: "linear-gradient(145deg,#66bb6a,#2e7d32)",
              display: "flex", alignItems: "center", justifyContent: "center",
              textAlign: "center",
              zIndex: 3,
              boxShadow: "0 18px 52px rgba(46,125,50,.48)",
            }}
          >
            <div>
              <p style={{ color: "#fff", fontSize: 17, fontWeight: 700, lineHeight: 1.55 }}>Pure Fuel.</p>
              <p style={{ color: "#fff", fontSize: 17, fontWeight: 700, lineHeight: 1.55 }}>Reliable Supply.</p>
              <p style={{ color: "#fff", fontSize: 17, fontWeight: 700, lineHeight: 1.55, textDecoration: "underline", textUnderlineOffset: 3 }}>Trusted Quality.</p>
            </div>
          </div>

          {/* 6 orbital cards */}
          {WHY_CARDS.map((c, i) => {
            const row  = Math.floor(i / 2);
            const tops = ["4%", "39%", "72%"];
            const isL  = c.side === "L";
            return (
              <div
                key={c.title}
                style={{
                  position: "absolute",
                  top: tops[row],
                  ...(isL ? { left: 0 } : { right: 0 }),
                  display: "flex",
                  alignItems: "center",
                  width: "clamp(240px,28vw,338px)",
                  zIndex: 2,
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                {isL ? (
                  <>
                    <div style={{ flex: 1, background: "rgba(216,242,216,.72)", border: "1px solid rgba(76,175,80,.18)", borderRadius: 60, padding: "17px 18px 17px 22px" }}>
                      <h4 style={{ fontSize: "clamp(13px,1.2vw,15px)", fontWeight: 700, color: "#2e7d32", marginBottom: 7 }}>{c.title}</h4>
                      <p  style={{ fontSize: "clamp(11px,1vw,13px)", color: "#555", lineHeight: 1.62 }}>{c.desc}</p>
                    </div>
                    <div style={{ width: 54, height: 54, borderRadius: "50%", flexShrink: 0, background: "#c8e6c9", border: "1.5px solid rgba(76,175,80,.35)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginLeft: -2, zIndex: 1, boxShadow: "0 2px 10px rgba(0,0,0,.1)" }}>
                      {c.icon}
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ width: 54, height: 54, borderRadius: "50%", flexShrink: 0, background: "#c8e6c9", border: "1.5px solid rgba(76,175,80,.35)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginRight: -2, zIndex: 1, boxShadow: "0 2px 10px rgba(0,0,0,.1)" }}>
                      {c.icon}
                    </div>
                    <div style={{ flex: 1, background: "rgba(216,242,216,.72)", border: "1px solid rgba(76,175,80,.18)", borderRadius: 60, padding: "17px 22px 17px 18px" }}>
                      <h4 style={{ fontSize: "clamp(13px,1.2vw,15px)", fontWeight: 700, color: "#2e7d32", marginBottom: 7 }}>{c.title}</h4>
                      <p  style={{ fontSize: "clamp(11px,1vw,13px)", color: "#555", lineHeight: 1.62 }}>{c.desc}</p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Mobile: card list ── */}
        <div className="orbital-mobile" style={{ gridTemplateColumns: "1fr", gap: 12 }}>
          {/* Center piece */}
          <div
            style={{
              width: 160, height: 160,
              borderRadius: "50%",
              background: "linear-gradient(145deg,#66bb6a,#2e7d32)",
              display: "flex", alignItems: "center", justifyContent: "center",
              textAlign: "center",
              margin: "0 auto 20px",
              boxShadow: "0 12px 36px rgba(46,125,50,.45)",
            }}
          >
            <div>
              <p style={{ color: "#fff", fontSize: 13, fontWeight: 700, lineHeight: 1.55 }}>Pure Fuel.</p>
              <p style={{ color: "#fff", fontSize: 13, fontWeight: 700, lineHeight: 1.55 }}>Reliable Supply.</p>
              <p style={{ color: "#fff", fontSize: 13, fontWeight: 700, lineHeight: 1.55, textDecoration: "underline" }}>Trusted Quality.</p>
            </div>
          </div>

          {WHY_CARDS.map(c => (
            <div
              key={c.title}
              style={{
                background: "rgba(216,242,216,.72)",
                border: "1px solid rgba(76,175,80,.18)",
                borderRadius: 16,
                padding: "16px 18px",
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
              }}
            >
              <div style={{ width: 42, height: 42, borderRadius: "50%", flexShrink: 0, background: "#c8e6c9", border: "1.5px solid rgba(76,175,80,.35)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                {c.icon}
              </div>
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: "#2e7d32", marginBottom: 5 }}>{c.title}</h4>
                <p  style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
