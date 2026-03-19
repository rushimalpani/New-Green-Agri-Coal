import { useState, useEffect } from "react";

const NL = ({ href, children, arrow }) => {
  const [h, sh] = useState(false);
  return (
    <a href={href} style={{ color: h ? "#8bc34a" : "rgba(255,255,255,.88)", fontSize: 15, fontWeight: 500, display: "flex", alignItems: "center", gap: 4, transition: "color .2s" }}
      onMouseEnter={() => sh(true)} onMouseLeave={() => sh(false)}>
      {children}{arrow && <span style={{ fontSize: 10 }}>▾</span>}
    </a>
  );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", s);
    return () => window.removeEventListener("scroll", s);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, height: 68,
        display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 36px",
        background: scrolled ? "rgba(4,12,3,.96)" : "rgba(0,0,0,.25)",
        backdropFilter: "blur(14px)", transition: "background .4s,box-shadow .4s",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,.45)" : "none",
      }}>
        {/* Logo */}
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", background: "radial-gradient(circle at 38% 60%,#9dc940,#2e7d32)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>🌱</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 14, color: "#9dc940", lineHeight: 1.2, letterSpacing: .1 }}>New Green</div>
            <div style={{ fontWeight: 800, fontSize: 14, color: "#9dc940", lineHeight: 1.2, letterSpacing: .1 }}>Agro Coal</div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 36 }}>
          <NL href="#products" arrow>Products</NL>
          <NL href="#insights">Insights</NL>
          <NL href="#about">About Us</NL>
          <a href="#footer" style={{ background: "#4caf50", color: "#fff", padding: "10px 28px", borderRadius: 32, fontWeight: 700, fontSize: 15, boxShadow: "0 4px 18px rgba(76,175,80,.45)", transition: "all .25s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#388e3c"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#4caf50"; e.currentTarget.style.transform = "none"; }}>
            Contact Us
          </a>
        </div>

        {/* Hamburger */}
        <button className={`ham${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(v => !v)}>
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mob-nav${menuOpen ? " open" : ""}`}>
        <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
        <a href="#insights" onClick={() => setMenuOpen(false)}>Insights</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
        <a href="#footer" className="mob-cta" onClick={() => setMenuOpen(false)}>Contact Us</a>
      </div>
    </>
  );
}

