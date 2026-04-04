import aboutSprout from "../assets/WhatsApp Image 2026-04-01 at 22.22.48 (2).jpeg";
import aboutFactory from "../assets/about_factory.png";
import aboutField from "../assets/about_field.png";
import aboutBriquettes from "../assets/WhatsApp Image 2026-04-01 at 22.22.45.jpeg";

const Dot = () => <span style={{ display: "inline-block", width: 14, height: 14, background: "#2E7D32", marginLeft: 8, borderRadius: "1px" }} />;

export default function Gallery() {
  return (
    <section id="gallery" style={{ background: "#ffffff", padding: "96px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        
        <p style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.1em", color: "#71717A", textTransform: "uppercase", marginBottom: "16px" }}>GALLERY</p>
        <h2 style={{ fontSize: "56px", fontWeight: 800, color: "#111827", lineHeight: "1.1", marginBottom: "56px", display: "flex", alignItems: "baseline" }}>
          Our Production Hub <Dot />
        </h2>

        {/* Asymmetrical Grid Layout */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(4, 1fr)", 
          gridAutoRows: "240px", 
          gap: "24px",
          gridAutoFlow: "dense"
        }}>
          
          {/* Card 1: 100% Stats Card (Top Left) */}
          <div style={{ 
            gridColumn: "span 1", 
            gridRow: "span 1", 
            background: "#ECF3E9", 
            borderRadius: "24px", 
            padding: "32px", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.02)"
          }}>
            <div style={{ fontSize: "48px", fontWeight: 800, color: "#2E7D32", lineHeight: "1" }}>100%</div>
            <p style={{ fontSize: "16px", color: "#4B5563", fontWeight: 600, marginTop: "12px", lineHeight: "1.4" }}>Pure &<br/>Organic Waste</p>
          </div>

          {/* Card 2: Landscape Image (Top Middle-Right) */}
          <div style={{ 
            gridColumn: "span 2", 
            gridRow: "span 1", 
            borderRadius: "24px", 
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
          }}>
            <img src={aboutFactory} alt="Factory" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          {/* Card 3: Portrait Image (Middle Left) */}
          <div style={{ 
            gridColumn: "span 1", 
            gridRow: "span 2", 
            borderRadius: "24px", 
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
          }}>
            <img src={aboutSprout} alt="Sprout" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          {/* Card 4: Horizontal Image (Bottom Left center) */}
          <div style={{ 
            gridColumn: "span 2", 
            gridRow: "span 1", 
            borderRadius: "24px", 
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
          }}>
            <img src={aboutField} alt="Eco Field" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          {/* Card 5: Square Image */}
          <div style={{ 
            gridColumn: "span 1", 
            gridRow: "span 1", 
            borderRadius: "24px", 
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
          }}>
            <img src={aboutBriquettes} alt="Briquettes" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          {/* Card 6: Customer Rating Box (Bottom Right) */}
          <div style={{ 
            gridColumn: "span 1", 
            gridRow: "span 1", 
            background: "#1E3922", 
            borderRadius: "24px", 
            padding: "32px", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "space-between",
            color: "#ffffff",
            boxShadow: "0 15px 35px rgba(30, 57, 34, 0.2)"
          }}>
            <div>
              <div style={{ display: "flex", gap: "4px", marginBottom: "8px" }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#FBBF24", fontSize: "16px" }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>Customer Rating</p>
            </div>
            <div style={{ fontSize: "40px", fontWeight: 800 }}>4.8</div>
          </div>

        </div>
      </div>
    </section>
  );
}
