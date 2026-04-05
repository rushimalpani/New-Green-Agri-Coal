import { ImageAutoSlider } from "./ui/image-auto-slider";

const Dot = () => (
  <span
    style={{
      display: "inline-block",
      width: 14, height: 14,
      background: "#2E7D32",
      marginLeft: 8,
      borderRadius: "1px",
    }}
  />
);

export default function WorkspaceGallery() {
  return (
    <section
      id="workspace"
      style={{
        background: "#ffffff",
        padding: "clamp(60px,8vw,100px) 0",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1550px", margin: "0 auto" }}>

        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(32px,4vw,50px)",
            padding: "0 clamp(16px,5vw,40px)",
          }}
        >
          <p
            style={{
              fontSize: "clamp(11px,1.2vw,14px)",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#2E7D32",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            INFRASTRUCTURE
          </p>
          <h2
            style={{
              fontSize: "clamp(28px,5vw,54px)",
              fontWeight: 800,
              color: "#111",
              lineHeight: "1.1",
              display: "inline-flex",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            Inside Our Operations <Dot />
          </h2>
          <p
            style={{
              maxWidth: "700px",
              margin: "clamp(14px,2vw,24px) auto 0",
              fontSize: "clamp(14px,2vw,17px)",
              color: "#666",
              lineHeight: "1.8",
              padding: "0 8px",
            }}
          >
            Step into the scale of our production. From raw material intake to final briquette
            packaging, witness the journey of sustainable biomass energy.
          </p>
        </div>

        {/* Infinite Scroll Slider */}
        <div style={{ width: "100%" }}>
          <ImageAutoSlider />
        </div>

        {/* Footer tag line */}
        <div style={{ textAlign: "center", marginTop: "clamp(28px,4vw,50px)" }}>
          <p
            style={{
              fontSize: "clamp(12px,1.5vw,16px)",
              color: "#2E7D32",
              fontWeight: 700,
              letterSpacing: "0.06em",
            }}
          >
            SCALE ● PRECISION ● SUSTAINABILITY
          </p>
        </div>
      </div>
    </section>
  );
}
