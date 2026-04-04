import aboutBriquettes from "../assets/WhatsApp Image 2026-04-01 at 22.22.45.jpeg";

const Dot = () => <span style={{ display: "inline-block", width: 14, height: 14, background: "#2E7D32", marginLeft: 8, borderRadius: "1px" }} />;

const SpecItem = ({ label, value }) => (
  <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
    <span style={{ fontSize: "14px", fontWeight: 600, color: "#71717A", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</span>
    <span style={{ fontSize: "16px", fontWeight: 700, color: "#111827" }}>{value}</span>
  </div>
);

const BenefitItem = ({ text }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
    <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#E8F5E9", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ color: "#2E7D32", fontSize: "12px", fontWeight: 900 }}>✓</span>
    </div>
    <span style={{ fontSize: "16px", color: "#4B5563", fontWeight: 500 }}>{text}</span>
  </div>
);

export default function Specifications() {
  return (
    <section id="specifications" style={{ background: "#F5F4EE", padding: "96px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.1em", color: "#71717A", textTransform: "uppercase", marginBottom: "16px" }}>SPECIFICATIONS</p>
          <h2 style={{ fontSize: "56px", fontWeight: 800, color: "#111827", lineHeight: "1.1", display: "flex", alignItems: "baseline", justifyContent: "center" }}>
            Technical Details <Dot />
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr 1fr", gap: "64px", alignItems: "start" }}>
          
          {/* Left Column: Technical Specs */}
          <div>
            <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#111827", marginBottom: "24px" }}>Product Specs</h3>
            <SpecItem label="Shape" value="Cylindrical" />
            <SpecItem label="Diameter" value="90 mm" />
            <SpecItem label="Calorific Value" value="3700 - 4000 Kcal/Kg" />
            <SpecItem label="Moisture" value="Below 10%" />
            <SpecItem label="Ash Content" value="Below 10%" />
          </div>

          {/* Middle Column: Visual Representation */}
          <div style={{ position: "relative" }}>
            <div style={{ 
              position: "absolute", 
              inset: "-20px", 
              border: "1px solid #2E7D32", 
              borderRadius: "32px", 
              opacity: 0.2, 
              zIndex: 0 
            }} />
            <div style={{ 
              position: "relative", 
              zIndex: 1, 
              borderRadius: "24px", 
              overflow: "hidden", 
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)" 
            }}>
              <img src={aboutBriquettes} alt="Briquettes" style={{ width: "100%", height: "auto", display: "block" }} />
              
              {/* 100% Pure Badge */}
              <div style={{ 
                position: "absolute", 
                top: "24px", 
                right: "24px", 
                background: "#2E7D32", 
                color: "#ffffff", 
                padding: "8px 20px", 
                borderRadius: "99px", 
                fontWeight: 700, 
                fontSize: "14px",
                boxShadow: "0 4px 15px rgba(46, 125, 50, 0.4)"
              }}>
                100% Pure
              </div>
            </div>
          </div>

          {/* Right Column: Industrial Benefits */}
          <div>
            <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#111827", marginBottom: "24px" }}>Industrial Benefits</h3>
            <BenefitItem text="Reduced fuel costs" />
            <BenefitItem text="Consistent heat production" />
            <BenefitItem text="Low carbon emissions" />
            <BenefitItem text="Easy storage & handling" />
            <BenefitItem text="100% Environmentally friendly" />
            
            <div style={{ 
              marginTop: "40px", 
              padding: "24px", 
              background: "#1E3922", 
              borderRadius: "24px", 
              color: "#ffffff" 
            }}>
              <p style={{ fontSize: "15px", lineHeight: "1.6", fontStyle: "italic", opacity: 0.9 }}>
                "Our briquettes are engineered to provide stable energy density for the most demanding industrial boilers."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
