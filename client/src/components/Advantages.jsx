const ADV = [
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16c-2.2 0-4-1.8-4-4s1.8-4 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><path d="M5 12a7 7 0 0 0 7 7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="12" r="1.5" fill="#fff"/></svg>, num: "Below 10%", sub: "Low Moisture Content" },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="3" y="8" width="18" height="3" rx="1.5" stroke="#fff" strokeWidth="1.4"/><rect x="3" y="13" width="18" height="3" rx="1.5" stroke="#fff" strokeWidth="1.4"/><rect x="7" y="3" width="10" height="3" rx="1.5" stroke="#fff" strokeWidth="1.4"/></svg>, num: "90mm Diameter", sub: "Uniform Size" },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 3c-3.5 0-6 3.1-6 6.2 0 4.5 6 11.8 6 11.8s6-7.3 6-11.8C18 6.1 15.5 3 12 3z" stroke="#fff" strokeWidth="1.4"/><circle cx="12" cy="9.5" r="2" stroke="#fff" strokeWidth="1.4"/></svg>, num: "Eco-Friendly", sub: "Renewal Fuel" },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="#fff" strokeWidth="1.4"/><path d="M12 8v4l3 3" stroke="#fff" strokeWidth="1.4" strokeLinecap="round"/></svg>, num: "Cost Effective", sub: "Alternative to Coal" },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="#fff" strokeWidth="1.4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M17.66 6.34l-1.41 1.41M4.93 19.07l1.41-1.41" stroke="#fff" strokeWidth="1.4" strokeLinecap="round"/></svg>, num: "3700+", sub: "High Calorific Value" },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="#fff" strokeWidth="1.4"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="#fff" strokeWidth="1.4"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="#fff" strokeWidth="1.4"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="#fff" strokeWidth="1.4"/></svg>, num: "Low Ash", sub: "Content" },
];

const Dot = () => <span style={{ display: "inline-block", width: 13, height: 13, background: "#2e7a14", marginLeft: 6, marginBottom: 4, verticalAlign: "bottom", flexShrink: 0 }} />;

export default function Advantages() {
  return (
    <section id="products" className="sec" style={{ background: "linear-gradient(180deg,#dce9d6 0%,#bfd4b2 10%,#5a7e2c 42%,#1e5009 72%,#0c2c03 100%)", padding: "80px 60px 90px" }}>
      <div style={{ maxWidth: 1220, margin: "0 auto" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: "#445", textTransform: "uppercase", marginBottom: 8 }}>ADVANTAGES OF</p>
        <h2 className="sec-h2" style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 700, color: "#111", marginBottom: 44, display: "flex", alignItems: "flex-end" }}>Briquettes<Dot /></h2>
        <div className="adv-grid" style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 14 }}>
          {ADV.map((a, i) => (
            <div key={a.num} className="adv-card" style={{ background: "#1a4d0c", borderRadius: 16, padding: "24px 18px 28px", display: "flex", flexDirection: "column", minHeight: 270, transition: "transform .3s,box-shadow .3s", transitionDelay: `${i * .07}s`, border: "1px solid rgba(255,255,255,.06)", cursor: "default" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 22px 44px rgba(0,0,0,.38)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
              <div style={{ width: 50, height: 50, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,.36)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginBottom: "auto" }}>{a.icon}</div>
              <div style={{ marginTop: 30 }}>
                <h3 className="adv-num" style={{ fontSize: "clamp(18px,2vw,27px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: 7 }}>{a.num}</h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,.52)", fontWeight: 400 }}>{a.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
