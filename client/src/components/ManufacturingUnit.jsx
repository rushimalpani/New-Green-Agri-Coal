import { useState } from "react";

const Dot = () => (
  <span
    style={{
      display: "inline-block",
      width: 13, height: 13,
      background: "#2e7a14",
      marginLeft: 6, marginBottom: 4,
      verticalAlign: "bottom",
      flexShrink: 0,
    }}
  />
);

const PlantImg = ({ src, alt, fallback }) => {
  const [err, setErr] = useState(false);
  return err ? (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 52,
        background: "#607d8b",
      }}
    >
      {fallback}
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      onError={() => setErr(true)}
      loading="lazy"
    />
  );
};

const PLANTS = [
  {
    label: "First Plant",
    rows: [
      ["Address",           "Nanded MIDC, Maharashtra"],
      ["Area",              "1,30,680 sq.ft"],
      ["Production",        "30 tons / day"],
      ["Machines",          "2"],
    ],
  },
  {
    label: "Second Plant",
    rows: [
      ["Address",           "Golegaon, Maharashtra"],
      ["Area",              "65,340 sq.ft"],
      ["Production",        "20 tons / day"],
      ["Machines",          "2"],
    ],
  },
];

export default function ManufacturingUnit() {
  return (
    <section
      id="manufacturing"
      className="sec"
      style={{ background: "#fff", padding: "clamp(56px,7vw,88px) clamp(20px,5vw,60px)" }}
    >
      <div style={{ maxWidth: 1220, margin: "0 auto" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: "#888", textTransform: "uppercase", marginBottom: 8 }}>
          LOCATION
        </p>
        <h2
          className="sec-h2"
          style={{
            fontWeight: 700,
            color: "#111",
            marginBottom: "clamp(28px,4vw,40px)",
            display: "flex",
            alignItems: "flex-end",
            flexWrap: "wrap",
          }}
        >
          Our Manufacturing Unit<Dot />
        </h2>

        {/* .mfg-grid → 2-col desktop, 1-col mobile (CSS) */}
        <div className="mfg-grid">

          {/* Left: info panel */}
          <div>
            <h3
              style={{
                fontSize: "clamp(14px,1.8vw,19px)",
                fontWeight: 700,
                color: "#2e7d32",
                marginBottom: 16,
              }}
            >
              Nanded MIDC & Golegaon, Maharashtra
            </h3>

            {/* Factory preview image */}
            <div className="map-frame" style={{ height: "clamp(160px,20vw,210px)", marginBottom: 24, background: "#607d8b" }}>
              <PlantImg
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80"
                alt="New Green Agro Coal factory facility"
                fallback="🏗️"
              />
            </div>

            {/* Plant details */}
            {PLANTS.map(p => (
              <div key={p.label} style={{ marginBottom: 20 }}>
                <h4
                  style={{
                    fontSize: "clamp(13px,1.4vw,15px)",
                    fontWeight: 700,
                    color: "#2e7d32",
                    marginBottom: 8,
                    borderBottom: "1px solid #e8f5e9",
                    paddingBottom: 4,
                  }}
                >
                  {p.label}
                </h4>
                {p.rows.map(([k, v]) => (
                  <p key={k} style={{ fontSize: "clamp(12px,1.3vw,14px)", color: "#444", marginBottom: 5, lineHeight: 1.5 }}>
                    <strong>{k}: </strong>{v}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Right: Google Map */}
          <div
            className="map-frame"
            style={{
              border: "2.5px solid #4caf50",
              height: "clamp(280px,40vw,450px)",
              boxShadow: "0 8px 32px rgba(0,0,0,.1)",
            }}
          >
            <iframe
              title="New Green Agro Coal – Factory Location"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.414908544471!2d77.68066!3d18.957275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce11007b3d3019%3A0x9b122ed72dd8f2ef!2sNew%20green%20agro%20coal!5e0!3m2!1sen!2sin!4v1773817925889!5m2!1sen!2sin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
