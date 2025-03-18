import "./styles.scss";
import { useState, useEffect, useRef } from "react";
import { Badge } from "antd";
import { Button, notification } from "antd";
import bell from "../../assets/images/Dashboard/bell.png";
import messages from "../../constants/Messages";

const Notification = () => {
  const [api, contextHolder] = notification.useNotification();
  const [badgeCount, setBadgeCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const notificationRef = useRef(null);

  const openNotification = () => {
    if (notifications.length === 0 || isNotificationOpen) return;
    setIsNotificationOpen(true);

    api.open({
      className: "custom-notification",
      message: <span className="custom-notification-title">Notifications</span>,
      description: (
        <div ref={notificationRef} className="custom-notification-content">
          {notifications.map((msg, index) => (
            <p key={index} className="custom-notification-message">
              {msg}
            </p>
          ))}
        </div>
      ),
      duration: 0,
      onClose: () => setIsNotificationOpen(false),
    });
    setBadgeCount(0);
    setNotifications([]);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        api.destroy();
        setIsNotificationOpen(false);
      }
    };
    if (isNotificationOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isNotificationOpen]);

  useEffect(() => {
    const randomTimeout = () => {
      const randomDelay = Math.floor(Math.random() * (60000 - 1000 + 1)) + 1000;

      setTimeout(() => {
        setBadgeCount((prev) => prev + 1);
        setNotifications((prev) => [
          ...prev,
          messages[Math.floor(Math.random() * messages.length)],
        ]);
        randomTimeout();
      }, randomDelay);
    };
    randomTimeout();

    return () => clearTimeout(randomTimeout);
  }, []);

  useEffect(() => {
    if (isNotificationOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isNotificationOpen]);

  return (
    <div className="notification-sec">
      <a href="#">
        <Badge count={badgeCount}>
          <>
            {contextHolder}
            <Button className="bell-button" onClick={openNotification}>
              <img src={bell} alt="img" style={{ width: "30px" }} />
            </Button>
          </>
        </Badge>
      </a>
    </div>
  );
};

export default Notification;
