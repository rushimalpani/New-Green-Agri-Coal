import { useParams, Link } from "react-router-dom";
import { useCases } from "../data/useCasesData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function UseCaseDetail() {
  const { slug } = useParams();
  const useCase = useCases.find((uc) => uc.slug === slug);

  useEffect(() => {
    // Analytics or meta tag updates could go here
  }, [useCase]);

  if (!useCase) {
    return (
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "20px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: 700 }}>Use Case Not Found</h1>
        <Link to="/" style={{ color: "#2E7D32", fontWeight: 600 }}>Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Navbar />
      
      {/* Hero Section */}
      <section style={{ 
        position: "relative", 
        height: "clamp(400px, 60vh, 600px)", 
        width: "100%", 
        overflow: "hidden",
        background: useCase.color 
      }}>
        <img 
          src={useCase.image} 
          alt={useCase.title} 
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover", 
            opacity: 0.4,
            position: "absolute",
            inset: 0
          }} 
        />
        <div style={{ 
          position: "absolute", 
          inset: 0, 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: "center",
          padding: "0 20px",
          textAlign: "center",
          color: "#ffffff"
        }}>
          <h1 style={{ 
            fontSize: "clamp(28px, 5vw, 64px)", 
            fontWeight: 800, 
            maxWidth: "900px", 
            lineHeight: 1.1,
            marginBottom: "20px",
            animation: "fadeUp 0.8s ease both"
          }}>
            {useCase.title}
          </h1>
          <div style={{ 
            width: "60px", 
            height: "4px", 
            background: "#86EFAC", 
            borderRadius: "2px",
            animation: "fadeIn 1s ease both 0.3s"
          }}></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="sec" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ 
          maxWidth: "800px", 
          margin: "0 auto",
          animation: "fadeUp 0.8s ease both 0.2s"
        }}>
          <Link 
            to="/" 
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "8px", 
              color: "#71717A", 
              fontSize: "14px", 
              fontWeight: 600,
              marginBottom: "40px",
              transition: "color 0.2s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#2E7D32"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#71717A"}
          >
            ← Back to Insights
          </Link>

          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "24px",
            lineHeight: 1.8,
            fontSize: "clamp(16px, 1.8vw, 18px)",
            color: "#374151"
          }}>
            {useCase.content.map((item, i) => {
              if (item.startsWith("h2:")) {
                return (
                  <h2 key={i} style={{ fontSize: "28px", fontWeight: 800, color: "#111827", marginTop: "24px", marginBottom: "8px" }}>
                    {item.replace("h2:", "")}
                  </h2>
                );
              }
              if (item.startsWith("h3:")) {
                return (
                  <h3 key={i} style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "16px", marginBottom: "4px" }}>
                    {item.replace("h3:", "")}
                  </h3>
                );
              }
              if (item.startsWith("li:")) {
                return (
                  <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "4px" }}>
                    <span style={{ color: "#2E7D32", fontWeight: 900 }}>•</span>
                    <span>{item.replace("li:", "")}</span>
                  </div>
                );
              }
              return (
                <p key={i} style={{ marginBottom: "8px" }}>
                  {item}
                </p>
              );
            })}
          </div>

          <div style={{ 
            marginTop: "64px", 
            padding: "40px", 
            borderRadius: "24px", 
            background: "#F9FAFB",
            border: "1px solid #E5E7EB",
            textAlign: "center"
          }}>
            <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "12px", color: "#111827" }}>
              Ready to make the switch?
            </h3>
            <p style={{ color: "#6B7280", marginBottom: "32px" }}>
              Join the growing number of industries optimizing their energy consumption with our premium bio-coal briquettes.
            </p>
            <a 
              href="#contact" 
              onClick={() => window.location.href = "/#contact"}
              style={{ 
                display: "inline-block",
                background: "#2E7D32", 
                color: "#ffffff", 
                padding: "16px 32px", 
                borderRadius: "12px", 
                fontWeight: 700,
                transition: "transform 0.2s ease, background 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.background = "#1B5E20";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.background = "#2E7D32";
              }}
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
