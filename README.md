# New Green Agro - Sustainable Energy Solutions

![New Green Agro Logo](client/public/logo.png)

New Green Agro is a modern, high-performance web application dedicated to promoting sustainable energy solutions. We focus on eco-friendly fuel alternatives like **biomass briquettes**, agri-coal, and pellets. The platform provides a comprehensive overview of the company's mission, products, manufacturing process, and industry insights.

## ✨ Recent Updates

- **Visionary Growth**: Updated our mission and vision to explicitly include **biomass briquettes**, reflecting our expanding product line.
- **Enhanced Mobile UI**: Redesigned the "About Us" collage for mobile devices. It now uses a sleek 2x2 grid layout that ensures a perfect fit on any screen size.
- **Precision Image Slider**: Implemented a pixel-perfect, infinite auto-scrolling slider for our operations gallery. Enforced uniform dimensions (200px to 320px) across all viewports to prevent layout shifts.
- **Build Optimization**: Resolved PostCSS import ordering issues to ensure lightning-fast production builds with Tailwind CSS v4.

## 🚀 Features

- **Dynamic Hero Section**: Engaging introduction to green energy solutions.
- **Detailed About Us**: Insights into the company's vision, mission, and core values.
- **Product Specifications**: Technical details (calorific value, ash content, size) of eco-friendly fuel products.
- **Infinite Operations Gallery**: A smooth, auto-scrolling showcase of our manufacturing unit.
- **Interactive Workspace**: Asymmetric grid layout for a modern, industrial feel.
- **Fully Responsive**: Pixel-perfect design optimized for mobile, tablet, and desktop.
- **Contact Integration**: Fully functional contact form with automated email notifications via high-reliability SMTP.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom Vanilla CSS for specialized layouts
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Routing**: [React Router Dom v7](https://reactrouter.com/)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Email Service**: [Nodemailer](https://nodemailer.com/)
- **Security**: [CORS](https://github.com/expressjs/cors), [Dotenv](https://github.com/motdotla/dotenv)

## 📂 Project Structure

```text
NewGreenAgro/
├── client/                # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components & Sections
│   │   ├── pages/         # Page-level components
│   │   └── assets/        # Styles, fonts, and images
│   └── package.json
├── server/                # Node.js backend API
│   ├── routes/            # API route definitions
│   ├── .env               # Environment variables (server-side)
│   └── server.js          # Entry point for the server
└── README.md              # Project documentation
```

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/New-Green-Agri-Coal.git
   cd New-Green-Agri-Coal
   ```

2. **Setup Server**:
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the `server` directory and add the following:
   ```env
   PORT=5000
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   RECEIVER_EMAIL=recipient-email@gmail.com
   ```

3. **Setup Client**:
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

1. **Start the Backend**:
   ```bash
   cd server
   npm run dev
   ```

2. **Start the Frontend**:
   ```bash
   cd client
   npm run dev
   ```

## 📧 Contact API

The backend exposes a POST endpoint at `/api/contact` to handle form submissions. It validates the input and sends a professionally formatted HTML email using Nodemailer.

## 📄 License

This project is licensed under the ISC License.
