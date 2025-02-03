import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/global.scss";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/NotFoundPage/index";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { BrowserRouter } from "react-router-dom";
import Breadcrumb from "./components/Breadcrumb";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFoundPage />} />
        <BrowserRouter>
        <Breadcrumb currentLocation="Hotel Details" homePath="/" />
        </BrowserRouter>
      </Routes>
      
    </Router>
  );
}

export default App;
