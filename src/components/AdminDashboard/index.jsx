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
} from "antd";
import useSWR from "swr";
import img1 from "../../assets/images/Dashboard/dashboard-layout-1.png";
import img2 from "../../assets/images/Dashboard/dashboard-layout-2.png";
import img3 from "../../assets/images/Dashboard/dashboard-layout-3.png";
import img4 from "../../assets/images/Dashboard/dashboard-layout-4.png";
import icon1 from "../../assets/images/Dashboard/dashboard-icon1.png";
import icon2 from "../../assets/images/Dashboard/dashboard-icon2.png";

const { Content } = Layout;
const { Column, ColumnGroup } = Table;
const { Option } = Select;
const endpoint =
  "https://67b4bf36a9acbdb38ed03c5f.mockapi.io/locationData/locationData";

const AdminDashboard = () => {
  const { data: fetchedData, error } = useSWR(endpoint);
  const [localData, setLocalData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedRow, setEditedRow] = useState({});
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [recordToDelete, setRecordToDelete] = useState(null);

  useEffect(() => {
    if (fetchedData) {
      setLocalData(fetchedData.slice(0, 7));
    }
  }, [fetchedData]);

  const handleDelete = (record) => {
    const newData = localData.filter((item) => item.id !== record.id);
    setLocalData(newData);
    setIsDeleteModalOpen(false);
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
      <Table dataSource={localData} className="table" rowKey="id">
        <ColumnGroup title="List Hotel Owners" className="column-group">
          <Column
            title="Name"
            key="name"
            className="column-name"
            render={(_, record) => (
              <div className="name-container">
                <div className="name">{record.name}</div>
                <div className="email">{record.email}</div>
              </div>
            )}
          />
          <Column
            title="Role"
            key="role"
            className="column-role"
            render={(_, record) => (
              <button className={getRoleButtonClass(record.role)}>
                {record.role}
              </button>
            )}
          />
          <Column
            title="Create Date"
            key="date"
            className="column-date"
            render={(_, record) => <div className="date">{record.date}</div>}
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
      <Modal
        title="Delete Confirmation"
        open={isDeleteModalOpen}
        onCancel={() => setIsDeleteModalOpen(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsDeleteModalOpen(false)}>
            Cancel
          </Button>,
          <Button
            key="delete"
            type="primary"
            danger
            onClick={() => handleDelete(recordToDelete)}
          >
            Delete
          </Button>,
        ]}
      >
        <p>Are you sure you want to delete this record?</p>
      </Modal>
    </Content>
  );
};

export default AdminDashboard;
