import React from 'react';
import img1 from "../../assets/WhatsApp Image 2026-04-01 at 22.22.45.jpeg";
import img2 from "../../assets/WhatsApp Image 2026-04-01 at 22.22.47 (1).jpeg";
import img3 from "../../assets/WhatsApp Image 2026-04-01 at 22.22.47 (2).jpeg";
import img4 from "../../assets/WhatsApp Image 2026-04-01 at 22.22.47.jpeg";
import img5 from "../../assets/WhatsApp Image 2026-04-01 at 22.22.48 (1).jpeg";
import img6 from "../../assets/WhatsApp Image 2026-04-01 at 22.22.48 (2).jpeg";
import img7 from "../../assets/WhatsApp Image 2026-04-01 at 22.22.48 (3).jpeg";
import img8 from "../../assets/WhatsApp Image 2026-04-01 at 22.22.48.jpeg";
import img9 from "../../assets/WhatsApp Image 2026-04-01 at 22.22.49 (1).jpeg";
import img10 from "../../assets/WhatsApp Image 2026-04-01 at 22.22.49.jpeg";
import img11 from "../../assets/WhatsApp Image 2026-04-01 at 22.22.50 (1).jpeg";
import img12 from "../../assets/WhatsApp Image 2026-04-01 at 22.22.50 (2).jpeg";
import img13 from "../../assets/WhatsApp Image 2026-04-01 at 22.22.50.jpeg";
import img14 from "../../assets/WhatsApp Image 2026-04-01 at 22.22.51 (1).jpeg";
import img15 from "../../assets/WhatsApp Image 2026-04-01 at 22.22.51.jpeg";

export const ImageAutoSlider = () => {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8,
    img9, img10, img11, img12, img13, img14, img15
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  // Fixed pixel sizes for each breakpoint — enforced uniformly
  const CARD_SIZE_MOBILE = 200;   // px — phones
  const CARD_SIZE_TABLET = 260;   // px — tablets
  const CARD_SIZE_DESKTOP = 320;  // px — desktop

  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .slider-outer {
          width: 100%;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1E3922;
          border-radius: 24px;
          padding: 48px 0;
        }

        .slider-track-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 0;
        }

        .scroll-container {
          width: 100%;
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .infinite-scroll {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: scroll-right 30s linear infinite;
        }

        .slider-card {
          flex-shrink: 0;
          width: ${CARD_SIZE_MOBILE}px;
          height: ${CARD_SIZE_MOBILE}px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .slider-card:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }

        .slider-card img {
          width: ${CARD_SIZE_MOBILE}px !important;
          height: ${CARD_SIZE_MOBILE}px !important;
          max-width: none !important;
          object-fit: cover !important;
          display: block !important;
        }

        @media (min-width: 481px) and (max-width: 1024px) {
          .slider-card {
            width: ${CARD_SIZE_TABLET}px;
            height: ${CARD_SIZE_TABLET}px;
          }
          .slider-card img {
            width: ${CARD_SIZE_TABLET}px !important;
            height: ${CARD_SIZE_TABLET}px !important;
          }
        }

        @media (min-width: 1025px) {
          .slider-card {
            width: ${CARD_SIZE_DESKTOP}px;
            height: ${CARD_SIZE_DESKTOP}px;
          }
          .slider-card img {
            width: ${CARD_SIZE_DESKTOP}px !important;
            height: ${CARD_SIZE_DESKTOP}px !important;
          }
        }
      `}</style>
      
      <div className="slider-outer">
        {/* Scrolling images container */}
        <div className="slider-track-wrapper">
          <div className="scroll-container">
            <div className="infinite-scroll">
              {duplicatedImages.map((image, index) => (
                <div key={index} className="slider-card">
                  <img
                    src={image}
                    alt={`Gallery image ${(index % images.length) + 1}`}
                    loading={index < images.length ? 'eager' : 'lazy'}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
