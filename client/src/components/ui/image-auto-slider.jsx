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

        .infinite-scroll {
          animation: scroll-right 30s linear infinite;
        }

        .scroll-container {
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

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>
      
      <div className="w-full relative overflow-hidden flex items-center justify-center" style={{ background: "#1E3922", borderRadius: "24px", padding: "48px 0" }}>
        {/* Scrolling images container */}
        <div className="relative w-full flex items-center justify-center py-4">
          <div className="scroll-container w-full">
            <div className="infinite-scroll flex gap-6 w-max">
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="image-item flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${(index % images.length) + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
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
