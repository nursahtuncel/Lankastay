import "./styles.scss";
import "antd/dist/reset.css";
import {
  Space,
  Table,
  Spin,
  Layout,
  Modal,
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  Popover,
  Checkbox,
} from "antd";
import img1 from "../../assets/images/Dashboard/dashboard-layout-1.png";
import img2 from "../../assets/images/Dashboard/dashboard-layout-2.png";
import img4 from "../../assets/images/Dashboard/dashboard-layout-4.png";
import icon1 from "../../assets/images/Dashboard/dashboard-icon1.png";
import icon2 from "../../assets/images/Dashboard/dashboard-icon2.png";
import useSWR from "swr";
import { useEffect, useState } from "react";

const { Content } = Layout;
const { Column, ColumnGroup } = Table;
const roles = ["manager", "engineer", "technician", "customer", "owner"];

const endpoint =
  "https://67b4bf36a9acbdb38ed03c5f.mockapi.io/locationData/locationData";

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [localData, setLocalData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const { data, error } = useSWR(endpoint);

  useEffect(() => {
    if (data) {
      setLocalData(data);
    }
  }, [data]);

  if (error) return <h1>Hata: {error.message}</h1>;
  if (!data) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "700px",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  const handleRoleFilterChange = (checkedValues) => {
    setSelectedRoles(checkedValues);
  };

  const filteredData = localData.filter((item) => {
    if (!item.name) return false;

    //return item.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchName = item.name.toLowerCase().includes(searchTerm.toLowerCase());

    const roleMatch =
      selectedRoles.length === 0
        ? true
        : selectedRoles.includes(item.role?.toLowerCase());

    return matchName && roleMatch;

   
  });

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {
    let dateFormatted = "1 March, 2025";
    if (values.date) {
      dateFormatted = values.date.format("DD MMM, YYYY");
    }

    const newUser = {
      id: Date.now(),
      name: values.name,
      email: values.email,
      role: values.role,
      date: [dateFormatted],
    };
    setLocalData([...localData, newUser]);
    setIsModalVisible(false);
  };

  return (
    <Content className="content-content">
      <h1 className="content-title">Admin Dashboard</h1>
      <div className="content-header">
        <div className="search-container">
          <img className="search-Icon" src={img1} alt="Search Icon" />
          <input
            className="search-input"
            type="text"
            name="search-owners"
            id="search-owners"
            placeholder="Search owners"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="dashboard-actions">
          <button className="add-owner" onClick={showModal}>
            <p className="add-owner-text">Add Owner</p>
            <img className="add-owner-icon" src={img2} alt="Add Owner" />
          </button>
          <Popover
            title="Filter by Role"
            trigger="click"
            content={
              <Checkbox.Group
                options={roles}
                value={selectedRoles}
                onChange={handleRoleFilterChange}
                style={{ display: "flex", flexDirection: "column" }}
              />
            }
          >
            <img className="filter-icon" src={img4} alt="Filter Icon" />
          </Popover>
          
        </div>
      </div>

      <Table dataSource={filteredData} className="table" rowKey="id">
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
            sorter={(a, b) => a.name.localeCompare(b.name)}
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
            sorter={(a, b) => a.name.localeCompare(b.name)}
          />
          <Column
            title="Create Date"
            dataIndex="date"
            key="date"
            className="column-date"
            render={(date) => <div className="date">{date}</div>}
            sorter={(a, b) => a.name.localeCompare(b.name)}
          />
          <Column
            title="Action"
            key="action"
            className="column-action"
            render={() => (
              <Space size="middle" className="action-container">
                <button className="action-invite">
                  <img src={icon1} alt="Invite" />
                </button>
                <button className="action-delete">
                  <img src={icon2} alt="Delete" />
                </button>
              </Space>
            )}
          />
        </ColumnGroup>
      </Table>
      <Modal
        title="Add New Owner"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Role" name="role" rules={[{ required: true }]}>
            <Select placeholder="Select Role" style={{ width: "100%" }}>
              <Select.Option value="manager">Manager</Select.Option>
              <Select.Option value="engineer">Engineer</Select.Option>
              <Select.Option value="technician">Technician</Select.Option>
              <Select.Option value="customer">Customer</Select.Option>
              <Select.Option value="owner">Owner</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Date" name="date">
            <DatePicker style={{ width: "100%" }} placeholder="Select date" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginRight: 8 }}>
              Submit
            </Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </Form.Item>
        </Form>
      </Modal>
    </Content>
  );
};

export default AdminDashboard;
