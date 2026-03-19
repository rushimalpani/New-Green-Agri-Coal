import { useState } from "react";

const Dot = () => <span style={{ display: "inline-block", width: 13, height: 13, background: "#2e7a14", marginLeft: 6, marginBottom: 4, verticalAlign: "bottom", flexShrink: 0 }} />;

const Img = ({ src, alt, style, fallback }) => {
  const [err, setErr] = useState(false);
  return err ? <div style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 52 }}>{fallback}</div>
    : <img src={src} alt={alt} style={style} onError={() => setErr(true)} />;
};

const images = [
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600',
  'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600',
  'https://images.unsplash.com/photo-1531476729961-4560a184f932?w=600',
  'https://images.unsplash.com/photo-1518173946687-a4c8a9ba332f?w=600',
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
];

const Gallery = () => {
  return (
    <section id="gallery" className="sec" style={{ background: "#fff", padding: "80px 60px", overflow: "hidden" }}>
      <div style={{ maxWidth: 1220, margin: "0 auto" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: "#888", textTransform: "uppercase", marginBottom: 8 }}>GALLERY</p>
        <h2 className="sec-h2" style={{ fontSize: "clamp(26px,3.8vw,50px)", fontWeight: 700, color: "#111", marginBottom: 40, display: "flex", alignItems: "flex-end", flexWrap: "wrap" }}>Our Production Hub<Dot /></h2>

        {/* Top row: 3 images */}
        <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: 14, marginBottom: 14 }}>
          {[images[0], images[1], images[2]].map((src, i) => (
            <div key={i} style={{ height: 180, borderRadius: 16, overflow: "hidden", position: "relative", cursor: "pointer", transition: "transform .3s,box-shadow .3s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 36px rgba(0,0,0,.18)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
              <Img src={src} alt="Gallery" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 1s" }} fallback="🖼️" />
            </div>
          ))}
        </div>

        {/* Bottom row: 2 larger images + rating card */}
        <div className="gallery-bottom" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 14 }}>
          <div style={{ height: 340, borderRadius: 16, overflow: "hidden", position: "relative", cursor: "pointer", transition: "transform .3s,box-shadow .3s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 36px rgba(0,0,0,.18)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
            <Img src={images[3]} alt="Factory overview" style={{ width: "100%", height: "100%", objectFit: "cover" }} fallback="🏭" />
          </div>
          <div style={{ height: 340, borderRadius: 16, overflow: "hidden", position: "relative", cursor: "pointer", transition: "transform .3s,box-shadow .3s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 36px rgba(0,0,0,.18)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
            <Img src={images[4]} alt="Green field" style={{ width: "100%", height: "100%", objectFit: "cover" }} fallback="🌿" />
          </div>
          {/* Stack: two small images + rating card */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14, height: 340 }}>
            <div style={{ display: "flex", gap: 14, height: "40%" }}>
              <div style={{ flex: 1, borderRadius: 16, overflow: "hidden" }}>
                <Img src={images[0]} alt="Sprout" style={{ width: "100%", height: "100%", objectFit: "cover" }} fallback="🌱" />
              </div>
              <div style={{ flex: 1, borderRadius: 16, overflow: "hidden", background: "#0F2D4A" }}>
                <Img src={images[1]} alt="Briquettes" style={{ width: "100%", height: "100%", objectFit: "contain" }} fallback="🪵" />
              </div>
            </div>
            <div style={{ flex: 1, borderRadius: 16, background: "#f2f2f2", padding: "20px 22px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 8 }}>Excellent Customer Rating</p>
              <div style={{ display: "flex", gap: 3, marginBottom: 10 }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#F5B82E", fontSize: 18 }}>★</span>
                ))}
              </div>
              <div style={{ fontSize: 42, fontWeight: 300, color: "#5BA829", lineHeight: 1 }}>4.8</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
