import { ImageAutoSlider } from "./ui/image-auto-slider";

const Dot = () => <span style={{ display: "inline-block", width: 14, height: 14, background: "#2E7D32", marginLeft: 8, borderRadius: "1px" }} />;

export default function WorkspaceGallery() {
  return (
    <section id="workspace" style={{ background: "#ffffff", padding: "100px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1550px", margin: "0 auto" }}>
        
        <div style={{ textAlign: "center", marginBottom: "50px", padding: "0 40px" }}>
          <p style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.2em", color: "#2E7D32", textTransform: "uppercase", marginBottom: "16px" }}>INFRASTRUCTURE</p>
          <h2 style={{ fontSize: "clamp(34px, 5vw, 54px)", fontWeight: 800, color: "#111", lineHeight: "1.1", display: "inline-flex", alignItems: "center", gap: "12px" }}>
            Inside Our Operations <Dot />
          </h2>
          <p style={{ maxWidth: "750px", margin: "24px auto 0", fontSize: "17.5px", color: "#666", lineHeight: "1.8" }}>
            Step into the scale of our production. From raw material intake to final briquette packaging, witness the journey of sustainable biomass energy.
          </p>
        </div>

        {/* Infinite Scroll Slider */}
        <div className="w-full">
          <ImageAutoSlider />
        </div>

        {/* Footer text */}
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <p style={{ fontSize: "16px", color: "#2E7D32", fontWeight: 700, letterSpacing: "0.05em" }}>
            SCALE ● PRECISION ● SUSTAINABILITY
          </p>
        </div>
      </div>
    </section>
  );
}
