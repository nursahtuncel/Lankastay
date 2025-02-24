import "./styles.scss";
import { Flex, Layout } from "antd";
const { Header, Sider } = Layout;
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import lanka from "../../assets/images/Dashboard/dashboardLankaStay.png";
import bell from "../../assets/images/Dashboard/dashboard-bell.png";
import profile from "../../assets/images/Dashboard/dashboard-profile.png";
import AdminDashboard from "../AdminDashboard";
import DashboardCard from "../DashboardCard";

const items = [
  {
    label: <Link to="/ProfileSettings">Profile Settings</Link>,
    key: "0",
  },
  {
    label: <Link to="/Settings">Settings</Link>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: <Link to="/">Log Out</Link>,
    key: "2",
  },
];

const DashboardSection = () => (
  <Flex gap="middle" wrap>
    <Layout className="dashboard-layout">
      <Sider width="254px" className="dashboard-sider">
        <img className="sider-img" src={lanka} alt="img" />
        <div className="sider-space"></div>
      </Sider>
      <Layout>
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
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
        </Header>
        <DashboardCard />
      </Layout>
    </Layout>
  </Flex>
);

export default DashboardSection;
