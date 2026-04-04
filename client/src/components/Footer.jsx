import { useState } from "react";
import logoIcon from "../assets/logo_main.png";

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
    <div className="footer-outer" style={{ background: "#F9F9F8", padding: "40px 32px" }}>
      <footer id="footer" style={{ background: "#1E3922", borderRadius: "32px", padding: "64px 64px 32px", overflow: "hidden", color: "#ffffff" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1.2fr", gap: "64px", marginBottom: "64px" }}>

          {/* Column 1: Brand & Links */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                <img src={logoIcon} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
              <div style={{ fontWeight: 800, fontSize: "18px", lineHeight: "1.1" }}>
                New Green<br/><span style={{ color: "#86EFAC" }}>Agro Coal</span>
              </div>
            </div>

            <p style={{ fontSize: "14px", fontWeight: 700, color: "#86EFAC", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px" }}>Quick Links</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {["Products", "Insights", "About us", "Contact Us", "Privacy Policy"].map(link => (
                <a key={link} href={`#${link.toLowerCase().replace(" ", "").replace("aboutus", "about")}`} style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", textDecoration: "none", transition: "color 0.2s" }}
                   onMouseEnter={e => e.currentTarget.style.color = "#ffffff"}
                   onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}>
                  {link}
                </a>
              ))}
            </div>
            
            <div style={{ marginTop: "40px" }}>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "#86EFAC", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>Connect with us</p>
              <div style={{ display: "flex", gap: "12px" }}>
                {[
                  { 
                    name: "Instagram", 
                    url: "https://www.instagram.com/newgreenagrocoal?igsh=cG85d2UzcGhlYzRp",
                    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  },
                  { 
                    name: "LinkedIn", 
                    url: "#",
                    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  },
                  { 
                    name: "Facebook", 
                    url: "https://www.facebook.com/share/1J2HqT5zLa/",
                    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  }
                ].map(platform => (
                  <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" 
                     style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", textDecoration: "none", transition: "all 0.3s" }}
                     onMouseEnter={e => { e.currentTarget.style.background = "#2E7D32"; e.currentTarget.style.borderColor = "#2E7D32"; }}
                     onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}>
                    {platform.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Location */}
          <div>
            <p style={{ fontSize: "14px", fontWeight: 700, color: "#86EFAC", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "24px" }}>Location</p>
            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "32px" }}>
              <span style={{ fontSize: "24px" }}>🇮🇳</span>
              <div>
                <p style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>Factory Address</p>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: "1.6" }}>
                  New Green Agro Coal, XM4J+W7,<br/>Golegaon, Maharashtra 431807
                </p>
              </div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ color: "#86EFAC" }}>✉️</span>
                <a href="mailto:newgreenargocoal@gmail.com" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "15px" }}>newgreenargocoal@gmail.com</a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ color: "#86EFAC" }}>📞</span>
                <a href="tel:+917058160130" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "15px" }}>+91 70581 60130</a>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Form */}
          <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "24px", padding: "32px" }}>
            <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "24px" }}>Send a Message</h3>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange}
                style={{ background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "12px", padding: "12px 16px", color: "#ffffff", outline: "none" }} />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange}
                style={{ background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "12px", padding: "12px 16px", color: "#ffffff", outline: "none" }} />
              <textarea name="message" placeholder="How can we help?" rows={3} value={formData.message} onChange={handleChange}
                style={{ background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "12px", padding: "12px 16px", color: "#ffffff", outline: "none", resize: "none" }} />
              <button type="submit" style={{ background: "#2E7D32", color: "#ffffff", border: "none", borderRadius: "12px", padding: "14px", fontWeight: 700, cursor: "pointer", transition: "background 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.background = "#1B5E20"}
                onMouseLeave={e => e.currentTarget.style.background = "#2E7D32"}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>© 2026 New Green Agro Coal. All rights reserved.</p>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="#" style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Terms</a>
            <a href="#" style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
