import { useState } from "react";

const Dot = () => <span style={{ display: "inline-block", width: 13, height: 13, background: "#2e7a14", marginLeft: 6, marginBottom: 4, verticalAlign: "bottom", flexShrink: 0 }} />;

const Img = ({ src, alt, style, fallback }) => {
  const [err, setErr] = useState(false);
  return err ? <div style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 52 }}>{fallback}</div>
    : <img src={src} alt={alt} style={style} onError={() => setErr(true)} />;
};

export default function ManufacturingUnit() {
  return (
    <section className="sec" style={{ background: "#fff", padding: "88px 60px" }}>
      <div style={{ maxWidth: 1220, margin: "0 auto" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: "#888", textTransform: "uppercase", marginBottom: 8 }}>LOCATION</p>
        <h2 className="sec-h2" style={{ fontSize: "clamp(26px,3.8vw,50px)", fontWeight: 700, color: "#111", marginBottom: 40, display: "flex", alignItems: "flex-end", flexWrap: "wrap" }}>Our Manufacturing Unit<Dot /></h2>
        <div className="mfg-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 56, alignItems: "start" }}>
          {/* Left */}
          <div>
            <h3 style={{ fontSize: "clamp(15px,1.8vw,19px)", fontWeight: 700, color: "#2e7d32", marginBottom: 18 }}>Nanded MIDC , Maharashtra</h3>
            <div className="map-frame" style={{ height: 210, borderRadius: 10, overflow: "hidden", marginBottom: 24, background: "#607d8b" }}>
              <Img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80" alt="factory" style={{ width: "100%", height: "100%", objectFit: "cover" }} fallback="🏗️" />
            </div>
            {[{ label: "First plant", rows: [["Area", "1,30,680 sq.ft"], ["Production", "30 tons/ day"], ["Number of machine", "2"]] }, { label: "Second plant", rows: [["Area", "65,340 sq ft"], ["Production", "20 tons / day"], ["Number of machine", "2"]] }].map(p => (
              <div key={p.label} style={{ marginBottom: 20 }}>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: "#2e7d32", marginBottom: 9 }}>{p.label}</h4>
                {p.rows.map(([k, v]) => <p key={k} style={{ fontSize: 14, color: "#444", marginBottom: 5 }}><strong>{k} :</strong> {v}</p>)}
              </div>
            ))}
          </div>
          {/* Map */}
          <div className="map-frame" style={{ borderRadius: 12, overflow: "hidden", border: "2.5px solid #4caf50", height: 450, boxShadow: "0 8px 32px rgba(0,0,0,.1)" }}>
            <iframe title="New Green Agro Coal" width="100%" height="100%" style={{ border: 0, display: "block" }} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.414908544471!2d77.68066!3d18.957275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce11007b3d3019%3A0x9b122ed72dd8f2ef!2sNew%20green%20agro%20coal!5e0!3m2!1sen!2sin!4v1773817925889!5m2!1sen!2sin" />
          </div>
        </div>
      </div>
    </section>
  );
}
