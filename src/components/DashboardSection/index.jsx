import "./styles.scss";
import { Flex, Layout } from "antd";
const { Header, Sider, Content } = Layout;
import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Table, Tag } from "antd";
const { Column, ColumnGroup } = Table;
import { Link } from "react-router-dom";
import data from "../../constants/HotelOwners";
import lanka from "../../assets/images/Dashboard/dashboardLankaStay.png";
import bell from "../../assets/images/Dashboard/dashboard-bell.png";
import profile from "../../assets/images/Dashboard/dashboard-profile.png";

import img1 from "../../assets/images/Dashboard/dashboard-layout-1.png";
import img2 from "../../assets/images/Dashboard/dashboard-layout-2.png";
import img3 from "../../assets/images/Dashboard/dashboard-layout-3.png";
import img4 from "../../assets/images/Dashboard/dashboard-layout-4.png";
import icon1 from "../../assets/images/Dashboard/dashboard-icon1.png";
import icon2 from "../../assets/images/Dashboard/dashboard-icon2.png";

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
        <Content className="content-content">
          <h1 className="content-title">Admin Dashboard</h1>
          <div className="content-header">
            <div className="search-container">
              <img className="search-icon" src={img1} alt="Search Icon" />
              <input
                className="search-input"
                type="text"
                name="search-documents"
                id="search-documents"
                placeholder="Search documents"
              />
            </div>
            <div className="dashboard-actions">
              <div className="add-owner">
                <p className="add-owner-text">Add Owner</p>
                <img className="add-owner-icon" src={img2} alt="Add Owner" />
              </div>
              <p className="sort-text">Sort by</p>
              <img className="sort-icon" src={img3} alt="Sort Icon" />
              <img className="filter-icon" src={img4} alt="Filter Icon" />
            </div>
          </div>
          <Table dataSource={data} className="table">
            <ColumnGroup title="List Hotel Owners" className="column-group">
              <Column
                title="Name"
                key="name"
                className="column-name"
                render={(record) => (
                  <div className="name-container">
                    <div className="name">{record.name}</div>
                    <div className="email">{record.email}</div>
                  </div>
                )}
              />
              <Column
                title="Role"
                dataIndex="role"
                key="role"
                className="column-role"
                render={(role) => {
                  let buttonClass = "role-button";

                  if (role === "Super Admin" || role === "Owner") {
                    buttonClass += " role-button-blue";
                  } else if (role === "Pending") {
                    buttonClass += " role-button-gray";
                  }

                  return <button className={buttonClass}>{role}</button>;
                }}
              />
              <Column
                title="Create Date"
                dataIndex="date"
                key="date"
                className="column-date"
                render={(date) => <div className="date">{date}</div>}
              />
              <Column
                title="Action"
                key="action"
                className="column-action"
                render={(_, record) => (
                  <Space size="middle" className="action-container">
                    <button className="action-invite">
                      <img src={icon1} alt="img" />
                    </button>
                    <button className="action-delete">
                      <img src={icon2} alt="img" />
                    </button>
                  </Space>
                )}
              />
            </ColumnGroup>
          </Table>
        </Content>
      </Layout>
    </Layout>
  </Flex>
);

export default DashboardSection;
