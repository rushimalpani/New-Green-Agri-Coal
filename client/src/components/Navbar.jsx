import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import logoIcon from "../assets/logo_main.png";

const NavLink = ({ href, children, hasDropdown, isScrolled }) => {
  const [isHovered, setIsHovered] = useState(false);
  const color = isHovered ? "#9DC940" : (isScrolled ? "#1a1a1a" : "rgba(255, 255, 255, 0.9)");
  return (
    <a 
      href={href} 
      style={{ 
        color, 
        fontSize: "15px", 
        fontWeight: 500, 
        display: "flex", 
        alignItems: "center", 
        gap: "6px", 
        transition: "all 0.3s ease",
        textDecoration: "none"
      }}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {hasDropdown && <ChevronDown size={14} style={{ opacity: isScrolled ? 1 : 0.8 }} />}
    </a>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        style={{
          position: "fixed", 
          top: 0, 
          left: 0, 
          right: 0, 
          zIndex: 1000, 
          height: "55px",
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between", 
          padding: "0 60px",
          background: isScrolled ? "rgba(255, 255, 255, 0.1)" : "transparent",
          backdropFilter: isScrolled ? "blur(30px) saturate(180%)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        {/* Logo */}
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <img 
            src={logoIcon} 
            alt="Logo" 
            style={{ 
              width: "48px", 
              height: "48px", 
              objectFit: "contain",
              borderRadius: "4px"
            }} 
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: 700, fontSize: "17px", color: "#9DC940", lineHeight: "1.1", letterSpacing: "0.2px" }}>New Green</span>
            <span style={{ fontWeight: 700, fontSize: "17px", color: "#9DC940", lineHeight: "1.1", letterSpacing: "0.2px" }}>Agro Coal</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          <NavLink href="#products" isScrolled={isScrolled}>Products</NavLink>
          <NavLink href="#insights" isScrolled={isScrolled}>Insights</NavLink>
          <NavLink href="#about" isScrolled={isScrolled}>About Us</NavLink>
          <a 
            href="#footer" 
            style={{ 
              background: "#2E7D32", 
              color: "#FFFFFF", 
              padding: "10px 28px", 
              borderRadius: "9999px", 
              fontWeight: 700, 
              fontSize: "15px", 
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: isScrolled ? "0 4px 15px rgba(46, 125, 50, 0.2)" : "none"
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#1B5E20"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#2E7D32"; e.currentTarget.style.transform = "none"; }}
          >
            Contact Us
          </a>
        </div>

        {/* Hamburger for mobile */}
        <button 
          className="ham-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ 
            display: "none", // Will be visible via CSS media query
            background: "none", 
            border: "none", 
            cursor: "pointer" 
          }}
        >
          {/* Hamburger Icon */}
        </button>
      </nav>

      {/* Mobile Menu logic remains similar but centered */}
    </>
  );
}

