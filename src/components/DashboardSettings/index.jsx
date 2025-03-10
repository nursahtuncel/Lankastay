import "./styles.scss";
import { useState } from "react";
import { message, Upload, Form, Input, Button, Space } from "antd";
import add from "../../assets/images/Dashboard/gallery-add.png";
import axios from "axios";
import { Image } from "antd";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const DashboardSettings = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const [imageUrl] = useState();
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleFileChange = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const onFinish = async (values) => {
    setIsSubmitting(true);

    const { name, email, username, phone, bio } = values;

    try {
      const avatarUrl = imageUrl;
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name,
          email,
          username,
          phone,
          bio,
          avatar: avatarUrl,
        }
      );
      console.log(response);
      if (response.status === 200) {
        message.success("Profile updated successfully!");
      } else {
        message.error("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      message.error("An error occurred while updating your profile.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className="setting-container">
      <div className="profile-container">
        <h1 className="help-title">Help</h1>
        <h2 className="help-subtitle">What are you looking for?</h2>

        <div className="profile-picture-section">
          <h1 className="profile-picture-title">Your Profile Picture</h1>
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleFileChange}
          >
            {fileList.length >= 8 ? null : (
              <div
                className="upload-image-container"
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    marginBottom: 8,
                  }}
                >
                  Upload your photo
                </div>
                <img src={add} alt="add" className="upload-image" />
              </div>
            )}
          </Upload>
          {previewImage && (
            <Image
              wrapperStyle={{
                display: "none",
              }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(""),
              }}
              src={previewImage}
            />
          )}
        </div>

        <Form
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          className="user-info-section"
          layout="vertical"
        >
          <Form.Item name="name" label="Name" className="form-item">
            <Input
              placeholder="Please enter your name"
              className="form-input"
            />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ type: "email" }]}
            className="form-item"
          >
            <Input
              placeholder="Please enter your email"
              className="form-input"
            />
          </Form.Item>
          <Form.Item name="username" label="Username" className="form-item">
            <Input
              placeholder="Please enter your username"
              className="form-input"
            />
          </Form.Item>
          <Form.Item name="phone" label="Phone Number" className="form-item">
            <Input
              placeholder="Please enter your phone number"
              className="form-input"
            />
          </Form.Item>
          <Form.Item name="bio" label="Bio" className="form-item">
            <Input
              placeholder="Write your Bio here e.g your hobbies, interests ETC"
              className="form-input-bio"
            />
          </Form.Item>
          <Form.Item className="form-buttons">
            <Space>
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
