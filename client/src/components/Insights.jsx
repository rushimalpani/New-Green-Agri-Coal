import { useNavigate } from "react-router-dom";
import { useCases } from "../data/useCasesData";

const Dot = () => (
  <span
    style={{ display: "inline-block", width: 14, height: 14, background: "#2E7D32", marginLeft: 8, borderRadius: "1px" }}
  />
);

export default function Insights() {
  const navigate = useNavigate();

  return (
    <section id="insights" style={{ background: "#ffffff", padding: "clamp(56px,8vw,96px) 0", overflow: "hidden" }}>
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
          INSIGHTS
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
          Stay Ahead <Dot />
        </h2>

        {/* .ins-grid → 2-col desktop, 1-col mobile (CSS controlled) */}
        <div className="ins-grid">
          {useCases.map((ins, i) => (
            <div
              key={i}
              className="ins-card"
              onClick={() => navigate(`/use-case/${ins.slug}`)}
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                background: ins.color,
                position: "relative",
                boxShadow: "0 10px 30px rgba(0,0,0,0.07)",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; }}
            >
              <img
                src={ins.image}
                alt=""
                aria-hidden="true"
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.3, position: "absolute", inset: 0 }}
                loading="lazy"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  padding: "clamp(24px,4vw,48px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  color: "#ffffff",
                }}
              >
                <h3 style={{ fontSize: "clamp(18px,2.5vw,28px)", fontWeight: 700, marginBottom: "12px", lineHeight: "1.3" }}>
                  {ins.title}
                </h3>
                <p style={{ fontSize: "clamp(13px,1.5vw,16px)", opacity: 0.8, marginBottom: "20px", lineHeight: "1.6" }}>
                  {ins.shortDesc}
                </p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: 600, fontSize: "14px", color: "#86EFAC" }}>
                  Read More <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
