import { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus(''), 4000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="footer-outer" style={{ background: "#f0efe7", padding: "28px 36px" }}>
      <footer id="footer" className="footer-card" style={{ background: "#1c4e0e", borderRadius: 20, padding: "54px 52px 0", overflow: "hidden" }}>
        {/* 3-col grid: brand+links | location | contact form */}
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1.15fr", gap: 48, marginBottom: 48 }}>

          {/* ── Col 1: Brand, Quick Links, Bank, Socials, Get Quote ── */}
          <div>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 30 }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: "radial-gradient(circle at 38% 60%,#9dc940,#2e7d32)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>🌱</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 15, color: "#9dc940", lineHeight: 1.18 }}>New Green</div>
                <div style={{ fontWeight: 800, fontSize: 15, color: "#9dc940", lineHeight: 1.18 }}>Agro Coal</div>
              </div>
            </div>

            <p style={{ fontSize: 13, fontWeight: 700, color: "#8bc34a", marginBottom: 13, letterSpacing: .3 }}>Quick Links</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: 10, columnGap: 16, marginBottom: 24 }}>
              {["Products", "Insights", "About us", "Certifications", "Contact Us", "Terms & Conditions"].map(l => (
                <a key={l} href="#" style={{ color: "rgba(255,255,255,.68)", fontSize: 13.5, transition: "color .2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#8bc34a"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.68)"}>
                  {l}
                </a>
              ))}
            </div>

            <p style={{ fontSize: 13, fontWeight: 700, color: "#8bc34a", marginBottom: 11, letterSpacing: .3 }}>Bank Details</p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
              <span style={{ fontSize: 16 }}>🏦</span>
              <span style={{ color: "rgba(255,255,255,.68)", fontSize: 13.5 }}>Bank of Maharashtra</span>
            </div>
            <div style={{ display: "flex", gap: 18, marginBottom: 22, flexWrap: "wrap" }}>
              <span style={{ color: "rgba(255,255,255,.5)", fontSize: 13 }}>AC &nbsp;60414130761</span>
              <span style={{ color: "rgba(255,255,255,.5)", fontSize: 13 }}>IFSC &nbsp;MAHB0000035</span>
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 9, marginBottom: 24 }}>
              {[{ l: "Instagram", ic: "◻" }, { l: "YouTube", ic: "▷" }, { l: "LinkedIn", ic: "in" }, { l: "Facebook", ic: "f" }].map(s => (
                <a key={s.l} href="#" title={s.l} style={{ width: 36, height: 36, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,.26)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,.65)", fontSize: 13, fontWeight: 700, transition: "all .2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#4caf50"; e.currentTarget.style.color = "#4caf50"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,.26)"; e.currentTarget.style.color = "rgba(255,255,255,.65)"; }}>
                  {s.ic}
                </a>
              ))}
            </div>

            {/* Get Quote */}
            <a href="#footer" style={{ display: "inline-block", padding: "11px 26px", border: "1.5px solid rgba(255,255,255,.38)", borderRadius: 28, color: "rgba(255,255,255,.85)", fontSize: 14, fontWeight: 500, transition: "all .25s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#4caf50"; e.currentTarget.style.color = "#8bc34a"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,.38)"; e.currentTarget.style.color = "rgba(255,255,255,.85)"; }}>
              Get Quote
            </a>
          </div>

          {/* ── Col 2: Location + Connect ── */}
          <div className="footer-mid">
            <p style={{ fontSize: 13, fontWeight: 700, color: "#8bc34a", marginBottom: 16, letterSpacing: .3 }}>Location</p>
            <div style={{ display: "flex", gap: 9, alignItems: "flex-start", marginBottom: 28 }}>
              <span style={{ fontSize: 17, flexShrink: 0 }}>🇮🇳</span>
              <div>
                <p style={{ color: "rgba(255,255,255,.8)", fontSize: 13.5, fontWeight: 600, marginBottom: 5 }}>Factory Address</p>
                <p style={{ color: "rgba(255,255,255,.52)", fontSize: 13, lineHeight: 1.65 }}>New green agro coal, XM4J+W7,<br />Golegaon, Maharashtra 431807</p>
              </div>
            </div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#8bc34a", marginBottom: 13, letterSpacing: .3 }}>Connect with us</p>
            {[{ ic: "📞", val: "+91 7058160130", href: "tel:+917058160130" }, { ic: "✉️", val: "newgreenargocoal@gmail.com", href: "mailto:newgreenargocoal@gmail.com" }].map(c => (
              <div key={c.val} style={{ display: "flex", alignItems: "flex-start", gap: 9, marginBottom: 10 }}>
                <span style={{ fontSize: 14, flexShrink: 0, marginTop: 2 }}>{c.ic}</span>
                <a href={c.href} style={{ color: "rgba(255,255,255,.62)", fontSize: 13, lineHeight: 1.5, wordBreak: "break-word", transition: "color .2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#8bc34a"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.62)"}>
                  {c.val}
                </a>
              </div>
            ))}
          </div>

          {/* ── Col 3: Contact Form ── */}
          <div style={{ background: "rgba(0,0,0,.22)", borderRadius: 14, padding: "26px 26px 30px" }}>
            <h3 style={{ color: "#fff", fontSize: 21, fontWeight: 700, marginBottom: 20 }}>Contact Us</h3>
            {status === 'success' && <div style={{ background: "rgba(76,175,80,.18)", border: "1px solid #4caf50", borderRadius: 8, padding: "9px 13px", marginBottom: 14, color: "#8bc34a", fontSize: 13, fontWeight: 600 }}>✅ Message sent successfully!</div>}
            {status === 'error' && <div style={{ background: "rgba(244,67,54,.18)", border: "1px solid #f44336", borderRadius: 8, padding: "9px 13px", marginBottom: 14, color: "#ef9a9a", fontSize: 13, fontWeight: 600 }}>❌ Failed to send. Please try again.</div>}
            <form onSubmit={handleSubmit}>
              {[{ ph: "Your name", k: "name", t: "text" }, { ph: "example@company.com", k: "email", t: "email" }, { ph: "Contact Number", k: "phone", t: "tel" }].map(f => (
                <div key={f.k} style={{ marginBottom: 16 }}>
                  <input type={f.t} name={f.k} placeholder={f.ph} value={formData[f.k]} onChange={handleChange}
                    style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,.22)", color: "rgba(255,255,255,.78)", fontSize: 13.5, padding: "7px 0 5px", outline: "none" }} />
                </div>
              ))}
              <div style={{ marginBottom: 18 }}>
                <textarea name="message" placeholder="Leave us a Message" rows={3} value={formData.message} onChange={handleChange}
                  style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,.22)", color: "rgba(255,255,255,.78)", fontSize: 13.5, padding: "7px 0 5px", outline: "none", resize: "none" }} />
              </div>
              <button type="submit" disabled={status === 'sending'} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#4caf50", color: "#fff", border: "none", padding: "11px 22px", borderRadius: 34, fontSize: 15, fontWeight: 700, transition: "all .25s", boxShadow: "0 4px 16px rgba(76,175,80,.38)", cursor: "pointer", opacity: status === 'sending' ? 0.6 : 1 }}
                onMouseEnter={e => { e.currentTarget.style.background = "#388e3c"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#4caf50"; e.currentTarget.style.transform = "none"; }}>
                <span style={{ width: 30, height: 30, borderRadius: "50%", background: "rgba(255,255,255,.22)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>↗</span>
                {status === 'sending' ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,.1)", padding: "18px 0", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,.38)", fontSize: 13 }}>Copyright © 2026 New Green Agro Coal All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
