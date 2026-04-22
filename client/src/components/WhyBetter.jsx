import { Link } from "react-router-dom";

export default function WhyBetter() {
  return (
    <section
      id="why-better"
      className="banner-sec"
      style={{
        position: "relative",
        minHeight: "clamp(260px,40vw,340px)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background photo */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=85"
          alt=""
          aria-hidden="true"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          loading="lazy"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(4,14,2,.92) 0%, rgba(6,18,3,.84) 45%, rgba(10,25,6,.55) 100%)",
          }}
        />
      </div>

      {/* Decorative dots row */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 12,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 5,
          zIndex: 1,
        }}
      >
        {Array(14).fill(0).map((_, i) => (
          <div key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,.28)" }} />
        ))}
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 680, width: "100%", padding: "0 4px" }}>
        <h2
          className="banner-h2"
          style={{ fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "clamp(12px,2vw,18px)" }}
        >
          Why Briquettes are Better<br />Than Coal
        </h2>
        <p
          className="banner-p"
          style={{ lineHeight: 1.75, color: "rgba(255,255,255,.7)", marginBottom: "clamp(20px,3vw,32px)", maxWidth: 560 }}
        >
          Biomass briquettes offer a cleaner and more sustainable alternative to traditional coal,
          producing lower emissions and less ash during combustion.
        </p>
        <Link
          to="/use-case/bio-coal-vs-traditional-coal"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "12px 26px",
            borderRadius: 28,
            border: "1.5px solid rgba(255,255,255,.4)",
            color: "rgba(255,255,255,.88)",
            fontSize: "clamp(13px,1.4vw,14px)",
            fontWeight: 500,
            transition: "all .25s",
            textDecoration: "none",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "#4caf50"; e.currentTarget.style.color = "#8bc34a"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,.4)"; e.currentTarget.style.color = "rgba(255,255,255,.88)"; }}
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
