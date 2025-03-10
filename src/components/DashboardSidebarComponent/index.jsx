import "./styles.scss";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    path: "/dashboard/admin",
    icon: "mdi_apple-keyboard-command.svg",
    label: "Dashboard",
  },
  { path: "/dashboard/objectives", icon: "mdi_poll.svg", label: "Objectives" },
  { path: "/dashboard/booking", icon: "document-text.svg", label: "Bookings" },
  {
    path: "/dashboard/refunds",
    icon: "mdi_hand-coin-outline.svg",
    label: "Refunds",
  },
  { path: "/dashboard/messages", icon: "document-text.svg", label: "Message" },
  {
    path: "/dashboard/help",
    icon: "mdi_help-circle-outline.svg",
    label: "Help",
  },
  {
    path: "/dashboard/settings",
    icon: "mdi_cog-outline.svg",
    label: "Settings",
  },
];

const DashboardSidebarComponent = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/src/assets/[JA-35]/LankaStay..svg" alt="LankaStay logo" />
      </div>

      <nav className="nav">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => (isActive ? "active" : "")}>
            <img
              src={`/src/assets/[JA-35]/${item.icon}`}
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

