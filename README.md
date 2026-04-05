# New Green Agro - Sustainable Energy Solutions

![New Green Agro Logo](client/public/logo.png) <!-- Note: Assuming logo path based on common patterns, will verify if needed -->

New Green Agro is a modern, high-performance web application dedicated to promoting sustainable energy solutions, specifically focusing on eco-friendly fuel alternatives like agri-coal, pellets, and briquettes. The platform provides a comprehensive overview of the company's mission, products, manufacturing process, and industry insights.

## 🚀 Features

- **Dynamic Hero Section**: Engaging introduction to green energy solutions.
- **Detailed About Us**: Insights into the company's vision and values.
- **Product Specifications**: Technical details of eco-friendly fuel products.
- **Interactive Gallery**: Showcase of the manufacturing unit and workspace.
- **Testimonials**: Real feedback from satisfied clients.
- **Insights & Blogs**: Educational content on sustainable energy.
- **Contact Integration**: Fully functional contact form with automated email notifications.
- **Fully Responsive**: Optimized for seamless experience across mobile, tablet, and desktop.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Routing**: [React Router Dom](https://reactrouter.com/)

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
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Main page layouts
│   │   └── assets/        # Styles and images
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
