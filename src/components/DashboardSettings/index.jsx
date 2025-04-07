import "./styles.scss";
import { useState } from "react";
import {
  message,
  Upload,
  Form,
  Input,
  Button,
  Space,
  Modal,
  Row,
  Col,
} from "antd";
import add from "../../assets/images/Dashboard/gallery-add.png";
import axios from "axios";

const DashboardSettings = () => {
  const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);

  const handlePreview = (file) => {
    let src = file.url || URL.createObjectURL(file.originFileObj);
    setPreviewImage(src);
    setPreviewOpen(true);
  };

  const handleFileChange = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const onFinish = async (values) => {
    setIsSubmitting(true);

    const { name, email, username, phone, bio, imageUrl } = values;

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name,
          email,
          username,
          phone,
          bio,
          imageUrl,
        },
      );

      if (response.status === 200 || response.status === 201) {
        message.success("Profile updated successfully!");
      } else {
        message.error("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);

      if (error.response) {
        message.error(
          `Server Error: ${error.response.data.message || "Unknown error"}`,
        );
      } else if (error.request) {
        message.error("No response received from server.");
      } else {
        message.error(`Error: ${error.message}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const onReset = () => {
    form.resetFields();
    setFileList([]);
  };

  return (
    <div className="setting-container">
      <div className="profile-container">
        <h1 className="help-title">Help</h1>
        <h2 className="help-subtitle">What are you looking for?</h2>

        <Form
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          className="user-info-section"
          layout="vertical"
        >
          <Form.Item
            name="imageUrl"
            label="Your Profile Picture"
            style={{ width: "100%" }}
            className="imageUrl"
          >
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleFileChange}
            >
              {fileList.length >= 8 ? null : (
                <div className="upload-button">
                  <div className="upload-text">Upload your photo</div>
                  <img src={add} alt="add" className="upload-img" />
                </div>
              )}
            </Upload>
          </Form.Item>

          <Modal
            open={previewOpen}
            footer={null}
            onCancel={() => setPreviewOpen(false)}
          >
            <img alt="Preview" style={{ width: "100%" }} src={previewImage} />
          </Modal>
          <Row gutter={16} className="w-100">
            <Col xs={24} sm={24} lg={12}>
              <Form.Item name="name" label="Name" className="form-item">
                <Input placeholder="Please enter your name" className="w-100" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} lg={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ type: "email" }]}
                className="form-item "
              >
                <Input
                  placeholder="Please enter your email"
                  className="form-input w-100"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16} className="w-100">
            <Col xs={24} sm={24} lg={12}>
              <Form.Item name="username" label="Username" className="form-item">
                <Input
                  placeholder="Please enter your username"
                  className="form-input w-100"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} lg={12}>
              <Form.Item
                name="phone"
                label="Phone Number"
                className="form-item"
              >
                <Input
                  placeholder="Please enter your phone number"
                  className="form-input w-100"
                  type="number"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16} className="w-100">
            <Col span={24}>
              <Form.Item name="bio" label="Bio" className="form-item">
                <Input.TextArea
                  placeholder="Write your Bio here e.g your hobbies, interests ETC"
                  className="form-input-bio w-100"
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item className="form-buttons w-100">
            <Space wrap className="w-100">
              <Button
                type="primary"
                htmlType="submit"
                className="submit-button"
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                Update Profile
              </Button>
              <Button
                htmlType="button"
                onClick={onReset}
                className="reset-button"
              >
                Reset
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default DashboardSettings;
