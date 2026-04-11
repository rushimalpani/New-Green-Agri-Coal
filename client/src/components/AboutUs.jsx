import aboutSprout from "../assets/WhatsApp Image 2026-04-01 at 22.22.45.jpeg";
import aboutFactory from "../assets/about_factory.png";
import aboutField from "../assets/about_field.png";
import aboutBriquettes from "../assets/WhatsApp Image 2026-04-01 at 22.22.47 (1).jpeg";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <section id="about" className="about-section">
      <div className="grid-container">
        {/* ════════════ LEFT: Collage ════════════ */}
        <div className="collage-container">
          {/* Green L-frames (behind photos) */}
          <div className="frame-tl"></div>
          <div className="frame-tr"></div>
          <div className="frame-bl-br"></div>

          {/* Decorative squares */}
          <div className="sq-sage"></div>
          <div className="sq-green-lg"></div>
          <div className="sq-green-sm"></div>
          <div className="sq-gray"></div>

          {/* Photo TL: Seedling growing from biomass pellets */}
          <div className="photo-box p-tl">
            <img src={aboutSprout} alt="Biomass seedling" />
          </div>

          {/* Photo TR: Industrial factory / plant */}
          <div className="photo-box p-tr">
            <img src={aboutFactory} alt="Industrial plant" />
          </div>

          {/* Photo BL: Firewood / briquette logs */}
          <div className="photo-box p-bl">
            <img src={aboutBriquettes} alt="Briquette logs" />
          </div>

          {/* Photo BR: Green field with eco hexagon icons overlay */}
          <div className="photo-box p-br">
            <img src={aboutField} alt="Eco green field" style={{ opacity: 0.88 }} />
          </div>

          {/* Dot grid: below all photos, right-centre */}
          <div className="dot-grid-bg"></div>
        </div>

        {/* ════════════ RIGHT: Text ════════════ */}
        <div className="text-col">
          <p className="section-label">ABOUT US</p>

          <h2 className="section-title">
            Fueling Industries<span className="green-dot"></span>
          </h2>

          <p className="section-para">
            New Green Agro Coal produces high-quality bagasse
            <strong> briquettes (bio coal) </strong> made from 100%
            agricultural waste, providing a clean and renewable
            alternative to traditional coal. Our briquettes deliver
            <strong> 3700+ kcal/kg calorific value</strong>, low moisture
            (below 10%), and minimal ash for efficient industrial use.
          </p>

          <p className="section-para" style={{ marginBottom: "36px" }}>
            With a <strong>uniform 90mm size</strong>, our eco-friendly
            fuel is ideal for industrial boilers, furnaces, and heating
            systems. Backed by a
            <strong> monthly production capacity of 500+ tons, </strong>
            we ensure reliable bulk supply across India with timely
            delivery.
          </p>

          <div className="wrap-margin">
            <h3 className="sub-head">Our Vision</h3>
            <p className="sub-body">
              To become a leading provider of sustainable biomass
              briquettes and fuel solutions by promoting renewable energy
              and reducing dependence on fossil fuels.
            </p>
          </div>

          <div>
            <h3 className="sub-head">Our Mission</h3>
            <p className="sub-body">
              To support industries in adopting cleaner energy by
              delivering high-quality biomass briquettes that are
              efficient, environmentally responsible, and economically
              beneficial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
