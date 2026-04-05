import { useState } from "react";

const TESTIMONIALS = [
  {
    quote: `We have been using biomass briquettes for our industrial boiler for the past several months, and the results have been outstanding. The fuel burns consistently, produces excellent heat output, and generates significantly less smoke compared to coal. Not only has it helped us reduce our fuel expenses, but it has also improved our environmental compliance. The product quality and timely delivery from the supplier have made our operations much smoother.`,
    name: "Rajesh Sharma",
    role: "Manufacturing Unit Owner",
    color: "#3a6b2a",
  },
  {
    quote: `Switching to bagasse briquettes was one of the best decisions for our factory. The consistent quality and timely supply has significantly improved our boiler efficiency. Their team is always responsive and professional. We've seen a noticeable reduction in fuel costs and emissions.`,
    name: "Amit Verma",
    role: "Factory Operations Manager",
    color: "#2a5b4a",
  },
  {
    quote: `As an energy procurement head, I prioritize both cost-efficiency and environmental impact. New Green Agro Coal's briquettes deliver on both fronts. High calorific value, low ash, and reliable bulk supply — exactly what we need across multiple sites.`,
    name: "Priya Mehta",
    role: "Energy Procurement Head",
    color: "#6a4a2a",
  },
  {
    quote: `The uniformity of the briquettes is impressive — every batch is consistent in size and calorific value. Our plant operations have become far more predictable. New Green Agro Coal sets a high standard in the biomass fuel industry.`,
    name: "Sanjay Gupta",
    role: "Plant Manager",
    color: "#3a4a6a",
  },
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

export default function Testimonials() {
  const [tIdx, setTIdx] = useState(0);
  const total = TESTIMONIALS.length;

  return (
    <section
      id="testimonials"
      style={{
        position: "relative",
        padding: "clamp(56px,7vw,80px) clamp(20px,5vw,60px)",
        background: "#060f05",
        overflow: "hidden",
      }}
    >
      {/* Leaf BG */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1600&q=70"
          alt=""
          aria-hidden="true"
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.18 }}
          loading="lazy"
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(3,10,2,.82)" }} />
      </div>

      {/* Decorative circles — hidden on mobile via pointer-events none and opacity */}
      <svg
        aria-hidden="true"
        style={{ position: "absolute", right: -70, top: "50%", transform: "translateY(-50%)", zIndex: 0, opacity: 0.1 }}
        width="440" height="440" viewBox="0 0 440 440"
      >
        <circle cx="220" cy="220" r="210" fill="none" stroke="white" strokeWidth="1" />
        <circle cx="220" cy="220" r="152" fill="none" stroke="white" strokeWidth="1" />
      </svg>

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: "rgba(255,255,255,.42)", textTransform: "uppercase", marginBottom: 8 }}>
          TESTIMONIALS
        </p>
        <h2
          style={{
            fontSize: "clamp(22px,3.8vw,46px)",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "clamp(24px,3vw,40px)",
            display: "flex",
            alignItems: "flex-end",
            flexWrap: "wrap",
          }}
        >
          What Our Customers Say<Dot />
        </h2>

        {/* Quote mark */}
        <div style={{ fontSize: "clamp(40px,5vw,52px)", fontWeight: 900, color: "#4caf50", lineHeight: 0.9, marginBottom: 18, fontFamily: "Georgia,serif", letterSpacing: -4 }}>
          "
        </div>

        {/* Quote text */}
        <div style={{ minHeight: "clamp(120px,20vw,180px)", marginBottom: "clamp(20px,3vw,30px)" }}>
          <p
            className="test-body"
            key={tIdx}
            style={{
              lineHeight: 1.82,
              color: "rgba(255,255,255,.88)",
              maxWidth: 920,
            }}
          >
            {TESTIMONIALS[tIdx].quote}"
          </p>
        </div>

        <div style={{ height: 1, background: "rgba(255,255,255,.12)", marginBottom: "clamp(16px,2vw,26px)" }} />

        {/* Bottom bar */}
        <div className="test-bottom">
          <div className="test-customers">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={i}
                onClick={() => setTIdx(i)}
                aria-label={`View testimonial from ${t.name}`}
                aria-pressed={i === tIdx}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "clamp(8px,1.5vw,12px)",
                  padding: 0,
                  opacity: i === tIdx ? 1 : 0.38,
                  transition: "opacity .3s",
                }}
              >
                <div
                  style={{
                    width: "clamp(38px,5vw,48px)",
                    height: "clamp(38px,5vw,48px)",
                    borderRadius: "50%",
                    background: t.color,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 12,
                    border: i === tIdx ? "2.5px solid #4caf50" : "2.5px solid transparent",
                    boxShadow: i === tIdx ? "0 0 0 3px rgba(76,175,80,.25)" : "none",
                    transition: "all .3s",
                  }}
                >
                  {t.name.split(" ").map(w => w[0]).join("")}
                </div>
                <div style={{ textAlign: "left" }}>
                  <p style={{ color: "#fff", fontWeight: 600, fontSize: "clamp(13px,1.5vw,15px)", lineHeight: 1.3 }}>{t.name}</p>
                  <p style={{ color: "rgba(255,255,255,.4)", fontSize: "clamp(11px,1.2vw,12px)" }}>{t.role}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Prev / Next arrows */}
          <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
            {[
              { ch: "‹", fn: () => setTIdx(p => (p - 1 + total) % total), label: "Previous testimonial" },
              { ch: "›", fn: () => setTIdx(p => (p + 1) % total),          label: "Next testimonial" },
            ].map((a, i) => (
              <button
                key={i}
                onClick={a.fn}
                aria-label={a.label}
                style={{
                  width: 42, height: 42,
                  borderRadius: "50%",
                  border: i === 1 ? "1.5px solid rgba(76,175,80,.55)" : "1.5px solid rgba(255,255,255,.28)",
                  background: i === 1 ? "rgba(76,175,80,.15)" : "transparent",
                  color: "#fff",
                  fontSize: 24,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all .25s",
                  cursor: "pointer",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#4caf50"; e.currentTarget.style.color = "#4caf50"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = i === 1 ? "rgba(76,175,80,.55)" : "rgba(255,255,255,.28)"; e.currentTarget.style.color = "#fff"; }}
              >
                {a.ch}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
