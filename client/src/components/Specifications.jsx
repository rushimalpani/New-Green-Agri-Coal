import aboutBriquettes from "../assets/WhatsApp Image 2026-04-01 at 22.22.45.jpeg";

const Dot = () => (
  <span
    style={{ display: "inline-block", width: 14, height: 14, background: "#2E7D32", marginLeft: 8, borderRadius: "1px" }}
  />
);

const SpecItem = ({ label, value }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "14px 0",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      gap: "12px",
    }}
  >
    <span
      style={{
        fontSize: "13px",
        fontWeight: 600,
        color: "#71717A",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        flexShrink: 0,
      }}
    >
      {label}
    </span>
    <span style={{ fontSize: "15px", fontWeight: 700, color: "#111827", textAlign: "right" }}>
      {value}
    </span>
  </div>
);

const BenefitItem = ({ text }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
    <div
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        background: "#E8F5E9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <span style={{ color: "#2E7D32", fontSize: "12px", fontWeight: 900 }}>✓</span>
    </div>
    <span style={{ fontSize: "15px", color: "#4B5563", fontWeight: 500 }}>{text}</span>
  </div>
);

export default function Specifications() {
  return (
    <section id="specifications" style={{ background: "#F5F4EE", overflow: "hidden", padding: "clamp(56px,8vw,96px) 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,32px)" }}>

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(36px,5vw,64px)" }}>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#71717A",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            SPECIFICATIONS
          </p>
          <h2
            style={{
              fontSize: "clamp(28px,5vw,56px)",
              fontWeight: 800,
              color: "#111827",
              lineHeight: "1.1",
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            Technical Details <Dot />
          </h2>
        </div>

        {/* 3-col responsive grid — controlled by .spec-grid in index.css */}
        <div className="spec-grid">

          {/* Left: Technical Specs */}
          <div>
            <h3 style={{ fontSize: "clamp(18px,2vw,24px)", fontWeight: 700, color: "#111827", marginBottom: "20px" }}>
              Product Specs
            </h3>
            <SpecItem label="Shape"           value="Cylindrical" />
            <SpecItem label="Diameter"        value="90 mm" />
            <SpecItem label="Calorific Value" value="3700 – 4000 Kcal/Kg" />
            <SpecItem label="Moisture"        value="Below 10%" />
            <SpecItem label="Ash Content"     value="Below 10%" />
          </div>

          {/* Middle: Product image */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: "-20px",
                border: "1px solid #2E7D32",
                borderRadius: "32px",
                opacity: 0.2,
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={aboutBriquettes}
                alt="Bagasse briquettes product"
                style={{ width: "100%", height: "auto", display: "block" }}
                loading="lazy"
              />
              <div
                style={{
                  position: "absolute",
                  top: "clamp(12px,2vw,24px)",
                  right: "clamp(12px,2vw,24px)",
                  background: "#2E7D32",
                  color: "#ffffff",
                  padding: "7px 16px",
                  borderRadius: "99px",
                  fontWeight: 700,
                  fontSize: "13px",
                  boxShadow: "0 4px 15px rgba(46,125,50,0.4)",
                }}
              >
                100% Pure
              </div>
            </div>
          </div>

          {/* Right: Industrial Benefits */}
          <div>
            <h3 style={{ fontSize: "clamp(18px,2vw,24px)", fontWeight: 700, color: "#111827", marginBottom: "20px" }}>
              Industrial Benefits
            </h3>
            <BenefitItem text="Reduced fuel costs" />
            <BenefitItem text="Consistent heat production" />
            <BenefitItem text="Low carbon emissions" />
            <BenefitItem text="Easy storage & handling" />
            <BenefitItem text="100% Environmentally friendly" />
            <div
              style={{
                marginTop: "36px",
                padding: "clamp(16px,2vw,24px)",
                background: "#1E3922",
                borderRadius: "20px",
                color: "#ffffff",
              }}
            >
              <p style={{ fontSize: "14px", lineHeight: "1.7", fontStyle: "italic", opacity: 0.9 }}>
                "Our briquettes are engineered to provide stable energy density for the most demanding industrial boilers."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
