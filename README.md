# 🇱🇰 LankaStay - Premium Hotel & Housing Booking Platform

LankaStay is a modern, high-performance, and feature-rich hotel and housing booking web application designed specifically for tourists and residents looking for premium accommodation in Sri Lanka. From beautiful beach villas in Galle to cozy retreats in Nuwara Eliya, LankaStay makes finding and booking your next stay a seamless experience.

🌐 **Live Demo:** [https://majestic-tiramisu-4570c7.netlify.app/](https://majestic-tiramisu-4570c7.netlify.app/)

---

## ✨ Features

LankaStay is built with a component-driven architecture and boasts a wide variety of features:

### 🏠 Homepage & Accommodation Search
- **Dynamic Hero Section:** High-converting, visually stunning entry point.
- **"Most Picked" Section:** Hand-curated premium locations (Colombo, Kandy, Galle, Hikkaduwe, Nuwara Eliya, Beruwala, etc.).
- **Rich Choice Cards:** Interactive cards showcasing ratings, locations, and pricing at a glance.
- **Amenities Filter:** View properties by their top amenities.

### 📅 Multi-Step Booking System
- **Intuitive Booking Flow:** A smooth multi-step checkout process.
- **Interactive Calendar:** Pick booking dates seamlessly using custom datepickers.
- **Booking Summary:** Real-time calculation of nights, taxes, and total costs.

### 👤 Dashboard (User & Admin)
- **Admin Dashboard:** Manage properties, views, and system-wide settings.
- **User Settings & Profile:** Update user personal info and manage preferences.
- **Notifications & Messages:** Keep track of booking statuses and communicate directly.

### 🔐 Authentication & Security
- **Secure Auth Flow:** Dedicated, beautifully styled Login and Registration interfaces.
- **Token & Cookie Management:** Session persistence utilizing secure cookies.

### 📞 Help & Support
- **Support & FAQ Center:** Comprehensive interactive support system with searchable categories and collapsible FAQ dropdowns.
- **Contact Us Form:** Direct channel for customer inquiries.
- **Legal Compliance:** Standard Privacy Policy and Terms & Conditions pages.

---

## 🛠️ Technology Stack

LankaStay leverages modern front-end technologies for a fast, responsive, and robust experience:

* **Core & Bundler:** [React 18](https://react.dev/) + [Vite](https://vite.dev/) (Client-side Rendering with HMR)
* **Styling:** [Sass (SCSS)](https://sass-lang.com/) for rich, custom designs + [Ant Design (antd)](https://ant.design/) for polished UI components + [React Icons](https://react-icons.github.io/react-icons/)
* **Animations:** [Motion (Framer Motion)](https://motion.dev/) for premium micro-interactions and smooth page transitions.
* **Routing:** [React Router DOM v7](https://reactrouter.com/) for fast, seamless client-side routing.
* **State Management & Data Fetching:** [SWR](https://swr.vercel.app/) (stale-while-revalidate) for fast data caching + [Axios](https://axios-http.com/) for HTTP requests.
* **Date Utilities:** [React Datepicker](https://reactdatepicker.com/) & [Moment.js](https://momentjs.com/) for perfect schedule management.

---

## 📂 Project Structure

```bash
Lankastay/
├── public/                  # Static assets (icons, images)
├── src/
│   ├── assets/              # Premium images, SVG logos and background graphics
│   ├── components/          # Reusable UI elements (Buttons, Cards, Dashboards, Booking Steps)
│   │   ├── BookingCriteria/
│   │   ├── HeroSection/
│   │   ├── AmenitiesSection/
│   │   └── ... (25+ specialized components)
│   ├── constants/           # Action constants, configuration values
│   ├── pages/               # Page-level components
│   │   ├── Homepage/
│   │   ├── Booking/
│   │   ├── Details/
│   │   ├── Dashboard/
│   │   ├── Help/
│   │   └── ... (Auth and Legal pages)
│   ├── styles/              # Global variables, mixins, and theme files
│   ├── App.jsx              # Main App entry with route definitions
│   └── main.jsx             # React DOM rendering
├── package.json             # Scripts & dependencies
├── vite.config.js           # Vite development server and plugin configs
└── README.md                # Project documentation
```

---

## 🚀 Local Development

To run this project on your local machine, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/nursahtuncel/Lankastay.git
cd Lankastay
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser to view the application.

### 4. Build for production
```bash
npm run build
```
This generates a highly optimized static bundle inside the `dist` directory, ready to be deployed to any static host.

---

## 🌐 Production Deployment

LankaStay is configured for **Continuous Integration (CI) and Deployment (CD)** via **Netlify** connected directly to the GitHub repository.

* Every push to the `master`/`main` branch automatically triggers a production build and deploys the updates to live instantly.
* **Build Command:** `npm run build`
* **Publish Directory:** `dist`

---

Developed with ❤️ by [Nürşah Tuncel](https://github.com/nursahtuncel).
