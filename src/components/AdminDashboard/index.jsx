import "./styles.scss";
import { useState, useEffect } from "react";
import {
  Space,
  Table,
  Spin,
  Layout,
  Button,
  Popover,
  Modal,
  Input,
  Select,
  Checkbox,
  Form,
  DatePicker,
} from "antd";
import useSWR from "swr";
import img1 from "../../assets/images/Dashboard/dashboard-layout-1.png";
import img2 from "../../assets/images/Dashboard/dashboard-layout-2.png";
import img4 from "../../assets/images/Dashboard/dashboard-layout-4.png";
import icon1 from "../../assets/images/Dashboard/dashboard-icon1.png";
import icon2 from "../../assets/images/Dashboard/dashboard-icon2.png";

const { Content } = Layout;
const { Column, ColumnGroup } = Table;
const { Option } = Select;
const roles = ["manager", "engineer", "technician", "customer", "owner"];

const endpoint =
  "https://67b4bf36a9acbdb38ed03c5f.mockapi.io/locationData/locationData";

const AdminDashboard = () => {
  const { data: fetchedData, error } = useSWR(endpoint);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [localData, setLocalData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedRow, setEditedRow] = useState({});
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [recordToDelete, setRecordToDelete] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    if (fetchedData) {
      setLocalData(fetchedData.slice(0, 7));
    }
  }, [fetchedData]);

  const handleDelete = () => {
    if (recordToDelete) {
      const newData = localData.filter((item) => item.id !== recordToDelete.id);
      setLocalData(newData);
      setIsDeleteModalOpen(false);
      setRecordToDelete(null);
    }
  };

  const handleEdit = (record) => {
    setEditingId(record.id);
    setEditedRow({ ...record });
  };

  const handleSave = () => {
    const newData = localData.map((item) => {
      if (item.id === editingId) {
        return { ...item, ...editedRow };
      }
      return item;
    });
    setLocalData(newData);
    setEditingId(null);
  };

  const showDeleteConfirm = (record) => {
    setRecordToDelete(record);
    setIsDeleteModalOpen(true);
  };

  const getRoleButtonClass = (role) => {
    if (role === "Super Admin" || role === "Owner") {
      return "role-button role-button-blue";
    } else if (role === "Pending") {
      return "role-button role-button-gray";
    }
    return "role-button";
  };

  if (error) return <h1>Error: {error.message}</h1>;
  if (!fetchedData) {
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

    const matchName = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const roleMatch =
      selectedRoles.length === 0
        ? true
        : selectedRoles.includes(item.role?.toLowerCase());

    return matchName && roleMatch;
  });

  const showModal = () => {
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
    setRecordToDelete(null);
  };

  const onFinish = (values) => {
    let dateFormatted = "1 March, 2025";
    if (values.date) {
      dateFormatted = values.date.format("DD MMM, YYYY");
    }

    const newUser = {
      id: Date.now().toString(),
      name: values.name,
      email: values.email,
      role: values.role,
      date: dateFormatted,
    };
    setLocalData([...localData, newUser]);
    setIsModalVisible(false);
    form.resetFields();
  };

  const editPopoverContent = (
    <div>
      <Input
        value={editedRow.name}
        onChange={(e) => setEditedRow({ ...editedRow, name: e.target.value })}
        placeholder="Name"
        style={{ marginBottom: 8 }}
      />
      <Input
        value={editedRow.email}
        onChange={(e) => setEditedRow({ ...editedRow, email: e.target.value })}
        placeholder="Email"
        style={{ marginBottom: 8 }}
      />
      <Select
        value={editedRow.role}
        onChange={(value) => setEditedRow({ ...editedRow, role: value })}
        style={{ width: "100%", marginBottom: 8 }}
      >
        <Option value="Super Admin">Super Admin</Option>
        <Option value="Owner">Owner</Option>
        <Option value="Pending">Pending</Option>
      </Select>
      <Button type="primary" onClick={handleSave} style={{ width: "100%" }}>
        Save
      </Button>
    </div>
  );

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
            render={(role) => (
              <button className={getRoleButtonClass(role)}>{role}</button>
            )}
            sorter={(a, b) =>
              a.role && b.role ? a.role.localeCompare(b.role) : 0
            }
          />
          <Column
            title="Create Date"
            dataIndex="date"
            key="date"
            className="column-date"
            render={(date) => <div className="date">{date}</div>}
            sorter={(a, b) => {
              if (!a.date || !b.date) return 0;
              return a.date.toString().localeCompare(b.date.toString());
            }}
          />
          <Column
            title="Action"
            key="action"
            className="column-action"
            render={(_, record) => (
              <Space size="middle" className="action-container">
                <Popover
                  content={editPopoverContent}
                  title="Edit User"
                  trigger="click"
                  open={editingId === record.id}
                  onOpenChange={(open) => {
                    if (!open) setEditingId(null);
                  }}
                >
                  <button
                    className="action-invite"
                    onClick={() => handleEdit(record)}
                  >
                    <img src={icon1} alt="Edit" />
                  </button>
                </Popover>
                <Button
                  className="action-delete"
                  onClick={() => showDeleteConfirm(record)}
                >
                  <img src={icon2} alt="Delete" />
                </Button>
              </Space>
            )}
          />
        </ColumnGroup>
      </Table>

      {/* Add User Modal */}
      <Modal
        title="Add New Owner"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
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
              <Select.Option value="Super Admin">Super Admin</Select.Option>
              <Select.Option value="Owner">Owner</Select.Option>
              <Select.Option value="Pending">Pending</Select.Option>
              <Select.Option value="manager">Manager</Select.Option>
              <Select.Option value="engineer">Engineer</Select.Option>
              <Select.Option value="technician">Technician</Select.Option>
              <Select.Option value="customer">Customer</Select.Option>
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

      {/* Delete Confirmation Modal */}
      <Modal
        title="Delete User"
        open={isDeleteModalOpen}
        onOk={handleDelete}
        onCancel={handleDeleteCancel}
        okText="Yes, Delete"
        cancelText="Cancel"
      >
        <p>Are you sure you want to delete this user?</p>
        {recordToDelete && (
          <p>
            <strong>{recordToDelete.name}</strong> ({recordToDelete.email})
          </p>
        )}
      </Modal>
    </Content>
  );
};

export default AdminDashboard;
