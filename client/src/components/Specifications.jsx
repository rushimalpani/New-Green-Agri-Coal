import { useState } from "react";

const Dot = () => <span style={{ display: "inline-block", width: 13, height: 13, background: "#2e7a14", marginLeft: 6, marginBottom: 4, verticalAlign: "bottom", flexShrink: 0 }} />;

const Img = ({ src, alt, style, fallback }) => {
  const [err, setErr] = useState(false);
  return err ? <div style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 52 }}>{fallback}</div>
    : <img src={src} alt={alt} style={style} onError={() => setErr(true)} />;
};

const specifications = [
  { label: 'Shape', value: 'Cylindrical' },
  { label: 'Diameter', value: '90 mm' },
  { label: 'Length', value: 'Random' },
  { label: 'Calorific Value', value: '3700 to 4000 Kcal/Kg' },
  { label: 'Moisture', value: 'Below 10%' },
  { label: 'Ash Content', value: 'Below 10%' },
];

const benefits = [
  'Reduced fuel costs',
  'Consistent heat production',
  'Low emissions',
  'Easy storage & handling',
  'Environmentally friendly',
  'Ideal for industrial boilers',
];

const Specifications = () => {
  return (
    <section id="specifications" className="sec" style={{ background: "#f5f4ee", padding: "80px 60px" }}>
      <div style={{ maxWidth: 1220, margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: "#888", textTransform: "uppercase", marginBottom: 8 }}>SPECIFICATIONS</p>
          <h2 className="sec-h2" style={{ fontSize: "clamp(26px,3.8vw,50px)", fontWeight: 700, color: "#111", display: "flex", alignItems: "flex-end", justifyContent: "center", flexWrap: "wrap" }}>
            Technical Details<Dot />
          </h2>
        </div>

        <div className="spec-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48, alignItems: "start" }}>
          {/* Left Column - Technical Specs */}
          <div>
            <h3 style={{ fontSize: 24, fontWeight: 700, color: "#111", marginBottom: 20 }}>Technical Specs</h3>
            <div>
              {specifications.map((spec, index) => (
                <div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #e0e0e0", padding: "14px 0" }}>
                  <span style={{ color: "#888", fontSize: 12, textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 700 }}>{spec.label}</span>
                  <span style={{ color: "#111", fontWeight: 700, fontSize: 15, textAlign: "right" }}>{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Column - Image */}
          <div style={{ position: "relative", width: "100%", paddingBottom: 20 }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "calc(100% - 20px)", border: "1.5px solid #cbedbe", borderRadius: 32, zIndex: 0 }} />
            <div style={{ position: "relative", zIndex: 1, borderRadius: 32, overflow: "hidden", marginLeft: 14, marginTop: 14, boxShadow: "0 8px 32px rgba(0,0,0,.12)" }}>
              <Img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop"
                alt="Manufacturing process"
                style={{ width: "100%", height: "100%", objectFit: "cover", aspectRatio: "4/5" }}
                fallback="🏭"
              />
              <div style={{ position: "absolute", top: 20, right: 0, background: "#4caf50", color: "#fff", fontWeight: 700, padding: "10px 22px", borderRadius: "28px 0 0 28px", boxShadow: "0 4px 16px rgba(76,175,80,.4)", fontSize: 14, zIndex: 2 }}>
                100% Pure
              </div>
            </div>
          </div>

          {/* Right Column - Benefits and Quote */}
          <div>
            <div style={{ marginBottom: 36 }}>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: "#111", marginBottom: 20 }}>Industrial Benefits</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {benefits.map((benefit, index) => (
                  <div key={index} style={{ display: "flex", alignItems: "center", gap: 10, color: "#111", fontSize: 15, fontWeight: 500 }}>
                    <span style={{ color: "#4caf50", fontSize: 18, flexShrink: 0 }}>✓</span>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: "28px 26px", background: "#0E200C", borderRadius: "32px 32px 32px 80px", position: "relative", overflow: "hidden" }}>
              <p style={{ color: "#fff", fontSize: 15, lineHeight: 1.8, fontStyle: "italic", position: "relative", zIndex: 1 }}>
                "Our briquettes are engineered to provide <span style={{ color: "#4caf50", fontWeight: 700 }}>stable energy</span> density for the most demanding industrial boilers."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
