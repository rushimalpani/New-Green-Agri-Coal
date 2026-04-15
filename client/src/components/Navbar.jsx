import { useState, useEffect } from "react";
import logoIcon from "../assets/WhatsApp Image 2026-03-10 at 4.43.35 PM 1.png";

const NAV_LINKS = [
  { label: "Products",   href: "/#products"  },
  { label: "Insights",   href: "/#insights"  },
  { label: "About Us",   href: "/#about"     },
  { label: "Gallery",    href: "/#gallery"   },
];

/* DesktopLink — purely inline‑styled, no class dependency */
const DesktopLink = ({ href, children, isScrolled }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      style={{
        color: hovered ? "#9DC940" : isScrolled ? "#1a1a1a" : "rgba(255,255,255,0.9)",
        fontSize: "15px",
        fontWeight: 500,
        transition: "color .25s",
        textDecoration: "none",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
};

export default function Navbar() {
  const [isScrolled,  setIsScrolled]  = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [isMobile,    setIsMobile]    = useState(window.innerWidth <= 1024);

  /* scroll */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* resize */
  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* lock body scroll */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  /* ── Hamburger bar styles ── */
  const bar = (transform, opacity = 1) => ({
    display: "block",
    width: "23px",
    height: "2px",
    background: isScrolled ? "#1a1a1a" : "#ffffff",
    borderRadius: "2px",
    transition: "all .28s cubic-bezier(.4,0,.2,1)",
    transformOrigin: "center",
    transform,
    opacity,
  });

  return (
    <>
      {/* ══════════ NAVBAR BAR ══════════ */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          height: "55px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: `0 ${Math.max(20, Math.min(60, window.innerWidth * 0.05))}px`,
          background: isScrolled ? "rgba(255,255,255,0.92)" : "transparent",
          backdropFilter: isScrolled ? "blur(24px) saturate(160%)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(24px) saturate(160%)" : "none",
          boxShadow: isScrolled ? "0 1px 0 rgba(0,0,0,0.06)" : "none",
          transition: "background .35s ease, box-shadow .35s ease",
        }}
      >
        {/* Logo */}
        <a
          href="/#home"
          aria-label="New Green Agro Coal – Home"
          style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}
        >
          <img
            src={logoIcon}
            alt="New Green Agro Coal"
            style={{
              width: isMobile ? "120px" : "160px",
              height: "auto",
              objectFit: "contain",
              borderRadius: "4px",
              display: "block",
            }}
          />
        </a>

        {/* ── Desktop links (hidden on mobile) ── */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "clamp(20px,3vw,40px)" }}>
            {NAV_LINKS.map(l => (
              <DesktopLink key={l.label} href={l.href} isScrolled={isScrolled}>
                {l.label}
              </DesktopLink>
            ))}
            <a
              href="/#contact-form"
              style={{
                background: "#2E7D32",
                color: "#FFFFFF",
                padding: "9px 24px",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "14px",
                textDecoration: "none",
                transition: "background .25s ease, transform .25s ease",
                boxShadow: isScrolled ? "0 4px 15px rgba(46,125,50,0.25)" : "none",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#1B5E20"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#2E7D32"; e.currentTarget.style.transform = "none"; }}
            >
              Contact Us
            </a>
          </div>
        )}

        {/* ── Hamburger (mobile only) ── */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(p => !p)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5.5px",
              background: "none",
              border: "none",
              padding: "6px",
              cursor: "pointer",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <span style={bar(menuOpen ? "translateY(7.5px) rotate(45deg)" : "none")} />
            <span style={{ ...bar("none"), opacity: menuOpen ? 0 : 1 }} />
            <span style={bar(menuOpen ? "translateY(-7.5px) rotate(-45deg)" : "none")} />
          </button>
        )}
      </nav>

      {/* ══════════ MOBILE NAV PANEL ══════════ */}
      {isMobile && menuOpen && (
        <nav
          id="mobile-nav"
          role="navigation"
          aria-label="Mobile navigation"
          style={{
            position: "fixed",
            top: "55px", left: 0, right: 0,
            zIndex: 998,
            background: "rgba(3,10,2,0.97)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            display: "flex",
            flexDirection: "column",
            padding: "8px 0 20px",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            maxHeight: "calc(100dvh - 55px)",
            overflowY: "auto",
            animation: "menuSlide .22s ease both",
          }}
        >
          {NAV_LINKS.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={closeMenu}
              style={{
                display: "block",
                padding: "15px 24px",
                color: "rgba(255,255,255,0.85)",
                fontSize: "15px",
                fontWeight: 500,
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                textDecoration: "none",
                transition: "color .2s, background .2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "#9DC940"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.85)"; e.currentTarget.style.background = "transparent"; }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contact-form"
            onClick={closeMenu}
            style={{
              display: "block",
              margin: "12px 16px 0",
              padding: "14px",
              background: "#2E7D32",
              color: "#ffffff",
              borderRadius: "10px",
              textAlign: "center",
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
              transition: "background .2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#1B5E20"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#2E7D32"; }}
          >
            Contact Us
          </a>
        </nav>
      )}

      {/* Backdrop */}
      {isMobile && menuOpen && (
        <div
          onClick={closeMenu}
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 997,
            background: "rgba(0,0,0,0.45)",
          }}
        />
      )}
    </>
  );
}
