import "./styles.scss";
import { Outlet, Link } from "react-router-dom";
import DashboardSidebarComponent from "../../components/DashboardSidebarComponent";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Layout } from "antd";
import profile from "../../assets/images/Dashboard/dashboard-profile.png";
import Notification from "../../components/Notification";
const { Header, Sider, Content } = Layout;
// import DashboardFilterComponent from "../../components/DashboardFilterComponent";

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
const Dashboard = () => {
  return (
    <div className="dashboard-content">
      <div className="dashboard-page">
        <Layout className="dashboard-layout">
          <Sider width="18%">
            <DashboardSidebarComponent />
          </Sider>
          <Layout>
            <Header className="dashboard-header">
              <div className="dashboard-container">
                <div className="headerdiv">
                  <h1 className="greeting-title">Hello, Hotel Owner</h1>
                  <h2 className="greeting-subtitle">Have a nice day</h2>
                </div>
                <div className="dashboard-user-info">
                  <Notification />
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

            <Content>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default Dashboard;
