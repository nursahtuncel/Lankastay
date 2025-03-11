import "./styles.scss";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    path: "/dashboard/admin",
    icon: "resim1.svg",
    label: "Dashboard",
  },
  { path: "/dashboard/objectives", icon: "resim3.svg", label: "Objectives" },
  { path: "/dashboard/booking", icon: "resim3.svg", label: "Bookings" },
  {
    path: "/dashboard/refunds",
    icon: "resim4.svg",
    label: "Refunds",
  },
  { path: "/dashboard/messages", icon: "resim5.svg", label: "Message" },
  {
    path: "/dashboard/help",
    icon: "resim6.svg",
    label: "Help",
  },
  {
    path: "/dashboard/settings",
    icon: "resim7.svg",
    label: "Settings",
  },
];

const DashboardSidebarComponent = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="../src/assets/images/Dashboard/Logo.svg" alt="LankaStay logo" />
      </div>

      <nav className="nav">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => (isActive ? "active" : "")}>
            <img
              src={`../src/assets/images/sidebar/${item.icon}`}
              alt={`${item.label} icon`}
            />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default DashboardSidebarComponent;

