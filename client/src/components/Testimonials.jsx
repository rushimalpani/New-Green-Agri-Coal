import { useState } from "react";

const TESTIMONIALS = [
  { quote: `We have been using biomass briquettes for our industrial boiler for the past several months, and the results have been outstanding. The fuel burns consistently, produces excellent heat output, and generates significantly less smoke compared to coal. Not only has it helped us reduce our fuel expenses, but it has also improved our environmental compliance. The product quality and timely delivery from the supplier have made our operations much smoother.`, name: "Rajesh Sharma", role: "Manufacturing Unit Owner", color: "#3a6b2a" },
  { quote: `Switching to bagasse briquettes was one of the best decisions for our factory. The consistent quality and timely supply has significantly improved our boiler efficiency. Their team is always responsive and professional. We've seen a noticeable reduction in fuel costs and emissions.`, name: "Amit Verma", role: "Factory Operations Manager", color: "#2a5b4a" },
  { quote: `As an energy procurement head, I prioritize both cost-efficiency and environmental impact. New Green Agro Coal's briquettes deliver on both fronts. High calorific value, low ash, and reliable bulk supply — exactly what we need across multiple sites.`, name: "Priya Mehta", role: "Energy Procurement Head", color: "#6a4a2a" },
  { quote: `The uniformity of the briquettes is impressive — every batch is consistent in size and calorific value. Our plant operations have become far more predictable. New Green Agro Coal sets a high standard in the biomass fuel industry.`, name: "Sanjay Gupta", role: "Plant Manager", color: "#3a4a6a" },
];

const Dot = () => <span style={{ display: "inline-block", width: 13, height: 13, background: "#2e7a14", marginLeft: 6, marginBottom: 4, verticalAlign: "bottom", flexShrink: 0 }} />;

export default function Testimonials() {
  const [tIdx, setTIdx] = useState(0);

  return (
    <section style={{ position: "relative", padding: "80px 60px 72px", background: "#060f05", overflow: "hidden" }}>
      {/* Leaf texture BG image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1600&q=70" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: .18 }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(3,10,2,.82)" }} />
      </div>
      {/* Decorative circles right */}
      <svg style={{ position: "absolute", right: -70, top: "50%", transform: "translateY(-50%)", zIndex: 0, opacity: .1 }} width="440" height="440" viewBox="0 0 440 440">
        <circle cx="220" cy="220" r="210" fill="none" stroke="white" strokeWidth="1" />
        <circle cx="220" cy="220" r="152" fill="none" stroke="white" strokeWidth="1" />
      </svg>
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: "rgba(255,255,255,.42)", textTransform: "uppercase", marginBottom: 8 }}>TESTIMONIALS</p>
        <h2 style={{ fontSize: "clamp(26px,3.8vw,46px)", fontWeight: 700, color: "#fff", marginBottom: 40, display: "flex", alignItems: "flex-end", flexWrap: "wrap" }}>What Our Customers Say<Dot /></h2>

        {/* Green double quote mark — matches figma "//" style */}
        <div style={{ fontSize: 52, fontWeight: 900, color: "#4caf50", lineHeight: .9, marginBottom: 20, fontFamily: "Georgia,serif", letterSpacing: -4 }}>"</div>

        {/* Quote */}
        <div style={{ minHeight: 180, marginBottom: 30 }}>
          <p className="test-body" style={{ fontSize: "clamp(15px,1.8vw,20px)", lineHeight: 1.82, color: "rgba(255,255,255,.88)", maxWidth: 920 }} key={tIdx}>
            {TESTIMONIALS[tIdx].quote}"
          </p>
        </div>

        <div style={{ height: 1, background: "rgba(255,255,255,.12)", marginBottom: 26 }} />

        {/* Bottom: customers + arrows */}
        <div className="test-bottom" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          <div className="test-customers" style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
            {TESTIMONIALS.map((t, i) => (
              <button key={i} onClick={() => setTIdx(i)} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, padding: 0, opacity: i === tIdx ? 1 : .38, transition: "opacity .3s" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: t.color, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 13, border: i === tIdx ? "2.5px solid #4caf50" : "2.5px solid transparent", boxShadow: i === tIdx ? "0 0 0 3px rgba(76,175,80,.25)" : "none", transition: "all .3s" }}>
                  {t.name.split(" ").map(w => w[0]).join("")}
                </div>
                <div style={{ textAlign: "left" }}>
                  <p style={{ color: "#fff", fontWeight: 600, fontSize: 15, lineHeight: 1.3 }}>{t.name}</p>
                  <p style={{ color: "rgba(255,255,255,.4)", fontSize: 12 }}>{t.role}</p>
                </div>
              </button>
            ))}
          </div>
          {/* Arrows */}
          <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
            {[{ ch: "‹", fn: () => setTIdx(p => (p - 1 + 4) % 4), active: false }, { ch: "›", fn: () => setTIdx(p => (p + 1) % 4), active: true }].map((a, i) => (
              <button key={i} onClick={a.fn} style={{ width: 42, height: 42, borderRadius: "50%", border: a.active ? "1.5px solid rgba(76,175,80,.55)" : "1.5px solid rgba(255,255,255,.28)", background: a.active ? "rgba(76,175,80,.15)" : "transparent", color: "#fff", fontSize: 24, display: "flex", alignItems: "center", justifyContent: "center", transition: "all .25s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#4caf50"; e.currentTarget.style.color = "#4caf50"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = a.active ? "rgba(76,175,80,.55)" : "rgba(255,255,255,.28)"; e.currentTarget.style.color = "#fff"; }}>
                {a.ch}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
