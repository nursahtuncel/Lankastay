import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles/global.scss";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/NotFoundPage/index";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Help from "./pages/Help";
import Details from "./pages/Details";
import CookiesCard from "./components/CookiesCardComponent";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfCondition from "./pages/TermsOfCondition";
import { SWRConfig } from "swr";
import AdminDashboard from "./components/AdminDashboard";
import Messages from "./components/Messages";
import HelpCenterComponent from "./components/HelpCenterComponent";
import DashboardSettings from "./components/DashboardSettings";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import ListHotelComponent from "./components/ListHotelComponent";

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
          <Route path="/help" element={<Help />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-condition" element={<TermsOfCondition />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="list" element={<ListHotelComponent />} />
            <Route path="booking" element={<Booking />} />
            <Route path="refunds" element={<Booking />} />
            <Route path="messages" element={<Messages />} />
            <Route path="help" element={<HelpCenterComponent />} />
            <Route path="settings" element={<DashboardSettings />} />
            <Route path="admin" element={<AdminDashboard />} />
          </Route>

          <Route path="/details" element={<Details />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <div>
          <Link to="/help">
            <FloatButton
              icon={<QuestionCircleOutlined />}
              type="primary"
              style={{
                insetInlineEnd: 24,
              }}
            />
          </Link>
        </div>
      </Router>
    </SWRConfig>
  );
}

export default App;
