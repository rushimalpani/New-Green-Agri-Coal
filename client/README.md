# New Green Agro - Frontend

This is the React-based frontend for the New Green Agro application. It is built using [Vite](https://vitejs.dev/) for a lightning-fast development experience and leverages [Tailwind CSS v4](https://tailwindcss.com/) for modern styling, supplemented by **Custom Vanilla CSS** for complex, high-performance UI components.

## 🚀 Key Features & Recent Improvements

- **Precision Infinite Slider**: A custom-engineered auto-scrolling gallery (`image-auto-slider.jsx`) with enforced uniform image dimensions (square tiles) and smart lazy loading.
- **Mobile-First Responsive Design**: 
    - **About Us Collage**: Intelligent grid-switching that converts a complex absolute-positioned layout on desktop to a clean 2x2 grid on mobile devices.
    - **Fluid Typography**: Uses CSS `clamp()` for perfectly scaling text across all resolutions.
- **Biomass Briquettes Incorporation**: Content updated across the Vision and Mission sections to reflect our core focus.
- **Optimized Asset Loading**: High-resolution imagery with fallback error handling to ensure a seamless user experience.

## 🛠️ Technology Stack

- **Framework**: React 19 (Modern functional components with Hooks)
- **Build Tool**: Vite (Lightning-fast HMR)
- **Styling**: 
    - **Tailwind CSS v4**: Utility-first styling for layout and common UI.
    - **Vanilla CSS**: Scoped styles for complex sections like the About Us Collage and Gallery.
- **Icons**: Lucide React, React Icons
- **Routing**: React Router Dom v7

## ⚙️ Development Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 📂 Key Directory Structure

- `src/components/`: Modular UI sections (Hero, AboutUs, Gallery, etc.).
- `src/components/ui/`: Low-level reusable UI components (Sliders, Buttons).
- `src/assets/`: Global CSS resets, fonts, and high-resolution product imagery.

## 📄 License

This frontend is part of the New Green Agro project, licensed under the ISC License.
