import "./styles.scss";
import { useState } from "react";
import "antd/dist/reset.css";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import { Flex, Layout, Button, Menu, Dropdown, Space } from "antd";
const { Header, Sider } = Layout;
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import lanka from "../../assets/images/Dashboard/dashboardLankaStay.png";
import bell from "../../assets/images/Dashboard/dashboard-bell.png";
import profile from "../../assets/images/Dashboard/dashboard-profile.png";
import AdminDashboard from "../AdminDashboard";
import DashboardCard from "../DashboardCard";
import DashboardSettings from "../DashboardSettings";

const items = [
  { label: <Link to="/ProfileSettings">Profile Settings</Link>, key: "0" },
  { label: <Link to="/Settings">Settings</Link>, key: "1" },
  { type: "divider" },
  { label: <Link to="/">Log Out</Link>, key: "2" },
];

const DashboardSection = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Flex gap="middle" wrap>
      <Layout className="dashboard-layout">
        <Sider
          collapsible
          width={254}
          collapsed={collapsed}
          onCollapse={setCollapsed}
          className="dashboard-sider"
        >
          <img className="sider-img" src={lanka} alt="img" />
          <Button
            style={{ backgroundColor: "#f0f2f5" }}
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="toggle-button"
          />
        </Sider>

        <Layout style={{ marginLeft: collapsed ? 80 : 254 }}>
          <Header className="dashboard-header">
            <div className="dashboard-container">
              <div className="header">
                <h1 className="greeting-title">Hello, Hotel Owner</h1>
                <h2 className="greeting-subtitle">Have a nice day</h2>
              </div>
              <div className="dashboard-user-info">
                <img className="dashboard-icon" src={bell} alt="img" />
                <img className="dashboard-img" src={profile} alt="img" />
                <div className="user-profile">
                  <p className="user-name">Wejaya Raaj</p>
                  <p className="user-role">Hotel Owner</p>
                </div>
                <Dropdown overlay={<Menu items={items} />}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            </div>
          </Header>
          <DashboardSettings />
          <DashboardCard />
          <AdminDashboard />
        </Layout>
      </Layout>
    </Flex>
  );
};

export default DashboardSection;
