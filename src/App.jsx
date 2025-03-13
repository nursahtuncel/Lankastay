import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/global.scss";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/NotFoundPage/index";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Details from "./pages/Details";
import CookiesCard from "./components/CookiesCardComponent";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfCondition from "./pages/TermsOfCondition";
import { SWRConfig } from "swr";
import AdminDashboard from "./components/AdminDashboard"; 

const fetcher = (url) => fetch(url).then((res) => res.json());

function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <Router>
        <CookiesCard />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="objectives" element={<Booking />} />
            <Route path="booking" element={<Booking />} />
            <Route path="refunds" element={<Booking />} />
            <Route path="messages" element={<Booking />} />
            <Route path="help" element={<Booking />} />
            <Route path="settings" element={<Booking />} />
            <Route path="admin" element={<AdminDashboard />} />
          </Route>

          <Route path="/details" element={<Details />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </SWRConfig>
  );
}

export default App;