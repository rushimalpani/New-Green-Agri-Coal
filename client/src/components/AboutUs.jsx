import { useState } from "react";

const Dot = () => <span style={{ display: "inline-block", width: 13, height: 13, background: "#2e7a14", marginLeft: 6, marginBottom: 4, verticalAlign: "bottom", flexShrink: 0 }} />;

const Img = ({ src, alt, style, fallback }) => {
  const [err, setErr] = useState(false);
  return err ? <div style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 52 }}>{fallback}</div>
    : <img src={src} alt={alt} style={style} onError={() => setErr(true)} />;
};

export default function AboutUs() {
  return (
    <section id="about" className="sec" style={{ background: "#fff", padding: "88px 60px" }}>
      <div style={{ maxWidth: 1220, margin: "0 auto" }}>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

          {/* ── Collage ── */}
          <div className="collage" style={{ position: "relative", height: 560, marginTop: 24 }}>
            {/* Green L-frame top-left */}
            <div className="fl1" style={{ position: "absolute", top: 10, left: 0, width: 218, height: 170, border: "2.5px solid #4caf50", borderRight: "none", borderBottom: "none", zIndex: 0 }} />
            {/* Green L-frame bottom-right */}
            <div className="fl2" style={{ position: "absolute", bottom: 44, right: 10, width: 208, height: 162, border: "2.5px solid #4caf50", borderLeft: "none", borderTop: "none", zIndex: 0 }} />
            {/* Decorative gray square TL */}
            <div style={{ position: "absolute", top: 26, left: "44%", width: 40, height: 40, background: "#ccc", opacity: .5, zIndex: 0 }} />
            {/* Green square mid */}
            <div style={{ position: "absolute", top: "40%", right: "14%", width: 22, height: 22, background: "#4caf50", opacity: .6, zIndex: 0 }} />
            {/* Gray square bottom */}
            <div style={{ position: "absolute", bottom: "13%", right: "8%", width: 28, height: 28, background: "#bbb", opacity: .35, zIndex: 0 }} />

            {/* Photo 1 — TL: biomass pellets / seedling */}
            <div className="ci1" style={{ position: "absolute", top: 28, left: 12, width: 282, height: 212, borderRadius: 2, overflow: "hidden", zIndex: 1, background: "#795548" }}>
              <Img src="https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=600&q=80" alt="biomass" style={{ width: "100%", height: "100%", objectFit: "cover" }} fallback="🌱" />
            </div>
            {/* Photo 2 — TR: factory / plant */}
            <div className="ci2" style={{ position: "absolute", top: 105, left: 306, width: 236, height: 165, borderRadius: 2, overflow: "hidden", zIndex: 1, background: "#546e7a" }}>
              <Img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80" alt="factory" style={{ width: "100%", height: "100%", objectFit: "cover" }} fallback="🏭" />
            </div>
            {/* Photo 3 — BL: briquettes / logs */}
            <div className="ci3" style={{ position: "absolute", bottom: 48, left: 12, width: 210, height: 168, borderRadius: 2, overflow: "hidden", zIndex: 1, background: "#6d4c41" }}>
              <Img src="https://images.unsplash.com/photo-1597055181842-5cf37dc51e70?w=600&q=80" alt="briquettes" style={{ width: "100%", height: "100%", objectFit: "cover" }} fallback="🪵" />
            </div>
            {/* Photo 4 — BR: eco/green */}
            <div className="ci4" style={{ position: "absolute", bottom: 48, left: 234, width: 172, height: 150, borderRadius: 2, overflow: "hidden", zIndex: 1, background: "#2e7d32" }}>
              <Img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80" alt="eco" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: .8 }} fallback="♻️" />
            </div>
            {/* Dot grid */}
            <div style={{ position: "absolute", bottom: 14, right: -4, width: 108, height: 80, backgroundImage: "radial-gradient(circle,#aaa 1.5px,transparent 1.5px)", backgroundSize: "10px 10px", opacity: .38, zIndex: 0 }} />
          </div>

          {/* ── Text ── */}
          <div style={{ paddingTop: 4 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3.5, color: "#888", textTransform: "uppercase", marginBottom: 10 }}>ABOUT US</p>
            <h2 className="sec-h2" style={{ fontSize: "clamp(28px,3.8vw,52px)", fontWeight: 700, color: "#111", lineHeight: 1.1, marginBottom: 26, display: "flex", alignItems: "flex-end", flexWrap: "wrap" }}>
              Fueling Industries<Dot />
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.9, color: "#333", marginBottom: 20 }}>
              New Green Agro Coal produces high-quality bagasse <strong>briquettes (bio coal)</strong> made from 100% agricultural waste, providing a clean and renewable alternative to traditional coal. Our briquettes deliver <strong>3700+ kcal/kg calorific value</strong>, low moisture (below 10%), and minimal ash for efficient industrial use.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.9, color: "#333", marginBottom: 34 }}>
              With a <strong>uniform 90mm size</strong>, our eco-friendly fuel is ideal for industrial boilers, furnaces, and heating systems. Backed by a <strong>monthly production capacity of 500+ tons,</strong> we ensure reliable bulk supply across India with timely delivery.
            </p>
            {[{ h: "Our Vision", t: "To become a leading provider of sustainable biomass fuel solutions by promoting renewable energy and reducing dependence on fossil fuels." }, { h: "Our Mission", t: "To support industries in adopting cleaner energy by delivering high-quality biomass briquettes that are efficient, environmentally responsible, and economically beneficial." }].map(item => (
              <div key={item.h} style={{ marginBottom: 26 }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#2e7d32", borderBottom: "2.5px solid #4caf50", display: "inline-block", paddingBottom: 3, marginBottom: 10 }}>{item.h}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.85, color: "#555" }}>{item.t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
