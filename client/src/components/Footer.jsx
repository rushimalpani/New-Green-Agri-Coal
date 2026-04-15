import { useState } from "react";
import logoIcon from "../assets/WhatsApp Image 2026-03-10 at 4.43.35 PM 1.png";

const SocialIcon = ({ name, url, children }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Visit our ${name} page`}
    style={{
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      border: "1px solid rgba(255,255,255,0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#ffffff",
      textDecoration: "none",
      transition: "all 0.3s",
      flexShrink: 0,
    }}
    onMouseEnter={e => { e.currentTarget.style.background = "#2E7D32"; e.currentTarget.style.borderColor = "#2E7D32"; }}
    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
  >
    {children}
  </a>
);

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus]     = useState("");

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus(""), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "12px",
    padding: "13px 16px",
    color: "#ffffff",
    outline: "none",
    width: "100%",
    fontSize: "14px",
    transition: "border-color 0.25s",
  };

  return (
    <div className="footer-outer">
      <footer
        id="footer"
        style={{
          background: "#1E3922",
          borderRadius: "24px",
          overflow: "hidden",
          color: "#ffffff",
        }}
      >
        <div className="footer-card">
          {/* ── 3-col grid → CSS controls responsive ── */}
          <div className="footer-grid">

            {/* Column 1: Brand & Quick Links */}
            <div>
              <div style={{ marginBottom: "28px" }}>
                <div
                  style={{
                    width: "clamp(120px,15vw,160px)",
                    borderRadius: "8px",
                    background: "#ffffff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    padding: "10px",
                  }}
                >
                  <img
                    src={logoIcon}
                    alt="New Green Agro Coal logo"
                    style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }}
                  />
                </div>
              </div>

              <p style={{ fontSize: "13px", fontWeight: 700, color: "#86EFAC", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
                Quick Links
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {[
                  ["Products",       "/#products"],
                  ["Insights",       "/#insights"],
                  ["About Us",       "/#about"],
                  ["Contact Us",     "/#contact-form"],
                  ["Privacy Policy", "#"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#ffffff"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
                  >
                    {label}
                  </a>
                ))}
              </div>

              <div style={{ marginTop: "36px" }}>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#86EFAC", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "14px" }}>
                  Connect with us
                </p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <SocialIcon name="Instagram" url="https://www.instagram.com/newgreenagrocoal?igsh=cG85d2UzcGhlYzRp">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  </SocialIcon>
                  <SocialIcon name="LinkedIn" url="#">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  </SocialIcon>
                  <SocialIcon name="Facebook" url="https://www.facebook.com/share/1J2HqT5zLa/">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </SocialIcon>
                </div>
              </div>
            </div>

            {/* Column 2: Location (hidden on mobile via .footer-mid CSS) */}
            <div className="footer-mid">
              <p style={{ fontSize: "13px", fontWeight: 700, color: "#86EFAC", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px" }}>
                Location
              </p>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", marginBottom: "28px" }}>
                <span style={{ fontSize: "22px", flexShrink: 0 }}>🇮🇳</span>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: 700, marginBottom: "8px" }}>Factory Address</p>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: "1.65" }}>
                    New Green Agro Coal, XM4J+W7,<br />Golegaon, Maharashtra 431807
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "#86EFAC", flexShrink: 0 }}>✉️</span>
                  <a
                    href="mailto:newgreenargocoal@gmail.com"
                    style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "14px", wordBreak: "break-all" }}
                  >
                    newgreenargocoal@gmail.com
                  </a>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "#86EFAC", flexShrink: 0 }}>📞</span>
                  <a
                    href="tel:+917058160130"
                    style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "14px" }}
                  >
                    +91 70581 60130
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: Contact Form */}
            <div
              id="contact-form"
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "20px",
                padding: "clamp(20px,3vw,32px)",
              }}
            >
              <h3 style={{ fontSize: "clamp(18px,2.5vw,24px)", fontWeight: 700, marginBottom: "20px" }}>
                Send a Message
              </h3>
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "12px" }}
                noValidate
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={e => { e.currentTarget.style.borderColor = "rgba(76,175,80,0.6)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={e => { e.currentTarget.style.borderColor = "rgba(76,175,80,0.6)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={e => { e.currentTarget.style.borderColor = "rgba(76,175,80,0.6)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
                />
                <textarea
                  name="message"
                  placeholder="How can we help?"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={e => { e.currentTarget.style.borderColor = "rgba(76,175,80,0.6)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    background: status === "success" ? "#388E3C" : "#2E7D32",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "12px",
                    padding: "14px",
                    fontWeight: 700,
                    fontSize: "15px",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    transition: "background 0.3s",
                    width: "100%",
                    opacity: status === "sending" ? 0.75 : 1,
                  }}
                  onMouseEnter={e => { if (status !== "sending") e.currentTarget.style.background = "#1B5E20"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = status === "success" ? "#388E3C" : "#2E7D32"; }}
                >
                  {status === "sending" ? "Sending…" : status === "success" ? "✓ Message Sent!" : "Send Message"}
                </button>
                {status === "error" && (
                  <p style={{ color: "#f87171", fontSize: "13px", textAlign: "center" }}>
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>

          </div>

          {/* Bottom bar */}
          <div
            className="footer-bottom"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "24px",
            }}
          >
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
              © 2026 New Green Agro Coal. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <a href="#" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Terms</a>
              <a href="#" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
