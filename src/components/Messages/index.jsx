import React, { useState } from "react";
import { Input, Avatar, Upload, Modal } from "antd";
import { SendOutlined, SearchOutlined, VideoCameraOutlined, PhoneOutlined, PaperClipOutlined } from "@ant-design/icons";
import Green from "../../assets/images/Messages/green.png";
import messagesData from "../../constants/Chat.js"; 
import "./styles.scss";

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(messagesData.length > 0 ? messagesData[0] : null);
  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const sendMessage = () => {
    if (!newMessage.trim() || !selectedUser) return;
    const now = new Date();
    const timestamp = `${now.toLocaleDateString()} ${now.getHours()}:${now.getMinutes()}`;
    setMessages((prev) => ({
      ...prev,
      [selectedUser.id]: [...(prev[selectedUser.id] || []), { sender: "me", text: newMessage, time: timestamp }],
    }));
    setNewMessage("");
  };
  const handleFileUpload = (file) => {
    if (!selectedUser) return;
    const now = new Date();
    const timestamp = `${now.toLocaleDateString()} ${now.getHours()}:${now.getMinutes()}`;
    const reader = new FileReader();
    reader.onload = () => {
      const fileData = reader.result; 
      setMessages((prev) => ({
        ...prev,
        [selectedUser.id]: [
          ...(prev[selectedUser.id] || []),
          {
            sender: "me",
            text: (
              <img
                src={fileData}
                alt="Uploaded"
                style={{ maxWidth: "200px", cursor: "pointer" }}
                onClick={() => handleImageClick(fileData)}
              />
            ), 
            time: timestamp,
          },
        ],
      }));
    };
    reader.readAsDataURL(file);
    return false; 
  };
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalVisible(true);
  };
  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedImage(null);
  };
  const filteredUsers = messagesData.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="main-container">
      <div className="chat-container">
        <div className="message">
          <h3 className="title">Message</h3>
          <p className="desc">Place you are gonna stay</p>
        </div>
        <div className="chat-content">
          <div className="chat-sidebar">
            <div className="search-bar">
              <Input
                prefix={<SearchOutlined />}
                placeholder="Search Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="user-list">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className={`user-item ${selectedUser?.id === user.id ? "active" : ""}`}
                  onClick={() => setSelectedUser(user)}
                >
                  <div className="user-item-contents">
                    <Avatar src={user.avatar} style={{ width: '48px', height: '48px' }} />
                    <div className="item-texts">
                      <h4>{user.name}</h4>
                      <p>{user.lastMessage}</p>
                    </div>
                  </div>
                  <div className="item-time">
                    <p>{user.time}</p>
                    <img src={user.img} alt="status" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="chat-main">
            {selectedUser ? (
              <>
                <div className="chat-header">
                  <div className="chat-header-main">
                    <Avatar src={selectedUser.avatar} style={{ width: '48px', height: '48px' }} />
                    <div className="chat-header-info">
                      <h3>{selectedUser.name}</h3>
                      <p className="online-status"><img src={Green} alt="online" /> Online</p>
                    </div>
                  </div>
                  <div className="chat-header-icons">
                    <VideoCameraOutlined className="chat-icon" />
                    <PhoneOutlined className="chat-icon" />
                  </div>
                </div>
                <div className="chat-messages">
                  {messages[selectedUser.id]?.map((msg, index) => (
                    <div key={index} className={`message-wrapper ${msg.sender}`}>
                      <div className={`message ${msg.sender}`}>
                        {msg.text}
                      </div>
                      <span className="message-time">{msg.time}</span>
                    </div>
                  ))}
                </div>
                <div className="chat-input">
                  <Input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onPressEnter={sendMessage}
                    placeholder="Send your message..."
                    style={{ padding: "20px" }}
                    suffix={
                      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        <Upload beforeUpload={handleFileUpload} showUploadList={false}>
                          <PaperClipOutlined style={{ cursor: "pointer", fontSize: "20px" }} />
                        </Upload>
                        <SendOutlined
                          onClick={sendMessage}
                          style={{
                            backgroundColor: "blue",
                            color: "white",
                            padding: "8px",
                            borderRadius: "50%",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    }
                  />
                </div>
              </>
            ) : (
              <p className="no-user-selected">Please select a user to start chatting</p>
            )}
          </div>
        </div>
      </div>
      <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={handleModalClose}
        centered
      >
        <img alt="Preview" src={selectedImage} style={{ width: "100%" }} />
      </Modal>
    </div>
  );
};
export default Chat;