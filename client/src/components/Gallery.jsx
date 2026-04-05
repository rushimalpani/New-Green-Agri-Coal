import aboutSprout   from "../assets/WhatsApp Image 2026-04-01 at 22.22.48 (2).jpeg";
import aboutFactory  from "../assets/about_factory.png";
import aboutField    from "../assets/about_field.png";
import aboutBriquettes from "../assets/WhatsApp Image 2026-04-01 at 22.22.45.jpeg";

const Dot = () => (
  <span
    style={{ display: "inline-block", width: 14, height: 14, background: "#2E7D32", marginLeft: 8, borderRadius: "1px" }}
  />
);

export default function Gallery() {
  return (
    <section id="gallery" style={{ background: "#ffffff", padding: "clamp(56px,8vw,96px) 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,32px)" }}>

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
          GALLERY
        </p>
        <h2
          style={{
            fontSize: "clamp(26px,4.5vw,56px)",
            fontWeight: 800,
            color: "#111827",
            lineHeight: "1.1",
            marginBottom: "clamp(32px,4vw,56px)",
            display: "flex",
            alignItems: "baseline",
            flexWrap: "wrap",
          }}
        >
          Our Production Hub <Dot />
        </h2>

        {/* Asymmetric Grid — .gallery-grid-main handles responsive breakpoints in CSS */}
        <div className="gallery-grid-main">

          {/* Card 1: Stats (Top Left) */}
          <div
            className="gallery-stat-card"
            style={{
              gridColumn: "span 1",
              gridRow: "span 1",
              background: "#ECF3E9",
              borderRadius: "24px",
              padding: "clamp(20px,3vw,32px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
              minHeight: "180px",
            }}
          >
            <div style={{ fontSize: "clamp(36px,5vw,48px)", fontWeight: 800, color: "#2E7D32", lineHeight: "1" }}>
              100%
            </div>
            <p style={{ fontSize: "clamp(13px,1.5vw,16px)", color: "#4B5563", fontWeight: 600, marginTop: "12px", lineHeight: "1.4" }}>
              Pure &<br />Organic Waste
            </p>
          </div>

          {/* Card 2: Landscape Image (Top Middle-Right) */}
          <div
            style={{
              gridColumn: "span 2",
              gridRow: "span 1",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            }}
          >
            <img
              src={aboutFactory}
              alt="New Green Agro Coal manufacturing factory"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              loading="lazy"
            />
          </div>

          {/* Card 3: Portrait Image (spans 2 rows) */}
          <div
            style={{
              gridColumn: "span 1",
              gridRow: "span 2",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            }}
          >
            <img
              src={aboutSprout}
              alt="Biomass sprout growing from briquettes"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              loading="lazy"
            />
          </div>

          {/* Card 4: Horizontal image */}
          <div
            style={{
              gridColumn: "span 2",
              gridRow: "span 1",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            }}
          >
            <img
              src={aboutField}
              alt="Eco green agricultural field"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              loading="lazy"
            />
          </div>

          {/* Card 5: Briquettes image */}
          <div
            style={{
              gridColumn: "span 1",
              gridRow: "span 1",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            }}
          >
            <img
              src={aboutBriquettes}
              alt="Premium bagasse briquettes"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              loading="lazy"
            />
          </div>

          {/* Card 6: Customer Rating */}
          <div
            className="gallery-stat-card"
            style={{
              gridColumn: "span 1",
              gridRow: "span 1",
              background: "#1E3922",
              borderRadius: "24px",
              padding: "clamp(20px,3vw,32px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              color: "#ffffff",
              boxShadow: "0 15px 35px rgba(30,57,34,0.25)",
              minHeight: "180px",
            }}
          >
            <div>
              <div style={{ display: "flex", gap: "3px", marginBottom: "8px" }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#FBBF24", fontSize: "16px" }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>
                Customer Rating
              </p>
            </div>
            <div style={{ fontSize: "clamp(32px,4vw,40px)", fontWeight: 800 }}>4.8</div>
          </div>

        </div>
      </div>
    </section>
  );
}
