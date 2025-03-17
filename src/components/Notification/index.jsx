import "./styles.scss";
import { useState, useEffect, useRef } from "react";
import { Badge } from "antd";
import { Button, notification } from "antd";
import bell from "../../assets/images/Dashboard/bell.png";

const Notification = () => {
  const [api, contextHolder] = notification.useNotification();
  const [badgeCount, setBadgeCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const notificationRef = useRef(null);

  const messages = [
    "Your stay at Blue Origin Fams getting closer",
    "Your stay at Ocean Land getting closer",
    "Your stay at The Lake Hotel getting closer",
    "Your stay at Stark House getting closer",
    "Your stay at Moonlight Resort getting closer",
    "Your stay at Redwood Mansion getting closer",
    "Your stay at Sapphire Villa getting closer",
    "Your stay at Crystal Bay Hotel getting closer",
    "Your stay at Ocean Breeze Inn getting closer",
    "Your stay at Summit Peak Lodge getting closer",
    "Your stay at Silver Lake Retreat getting closer",
    "Your stay at Emerald Gardens getting closer",
    "Your stay at Grand Canyon Lodge getting closer",
    "Your stay at Horizon View Resort getting closer",
    "Your stay at Pinecrest Chalet getting closer",
    "Your stay at Golden Sands Resort getting closer",
    "Your stay at Evergreen Valley Lodge getting closer",
    "Your stay at Sunset Ridge Hotel getting closer",
    "Your stay at Tranquil Springs Retreat getting closer",
    "Your stay at Willow Creek Cabin getting closer",
    "Your stay at Alpine Meadow Lodge getting closer",
    "Your stay at Mystic River Resort getting closer",
    "Your stay at Desert Rose Retreat getting closer",
    "Your stay at Lakeview Villas getting closer",
    "Your stay at Midnight Summit Lodge getting closer",
    "Your stay at Coral Reef Resort getting closer",
    "Your stay at Whispering Pines Inn getting closer",
    "Your stay at Amberwood Estate getting closer",
    "Your stay at Silverstone House getting closer",
    "Your stay at Clearwater Bay Resort getting closer",
    "Your stay at Royal Palm Villas getting closer",
    "Your stay at Horizon Grove Lodge getting closer",
    "Your stay at Ocean Crest Hotel getting closer",
    "Your stay at Birchwood Manor getting closer",
    "Your stay at Crystal Waters Retreat getting closer",
    "Your stay at Diamond Ridge Resort getting closer",
    "Your stay at Cedar Hill Lodge getting closer",
    "Your stay at Highland View Villas getting closer",
    "Your stay at Bluewater Escape getting closer",
    "Your stay at Silvermist Resort getting closer",
    "Your stay at Seaside Sanctuary getting closer",
    "Your stay at The Ridge Hotel getting closer",
    "Your stay at Redwood Valley Retreat getting closer",
    "Your stay at Cedar Springs Lodge getting closer",
    "Your stay at Desert Oasis Retreat getting closer",
    "Your stay at Lakeside Cottage getting closer",
    "Your stay at Glacier Peak Resort getting closer",
    "Your stay at Mountain Springs Retreat getting closer",
    "Your stay at Suncrest Bay Villas getting closer",
    "Your stay at Forest Haven Resort getting closer",
    "Your stay at Sunset Harbor Inn getting closer",
    "Your stay at Snowfall Lodge getting closer",
    "Your stay at Ocean Pearl Resort getting closer",
    "Your stay at Blue Horizon Retreat getting closer",
    "Your stay at Maplewood Lodge getting closer",
    "Your stay at Golden Gate Inn getting closer",
    "Your stay at Crystal Cove Hotel getting closer",
    "Your stay at Mountain View Chalet getting closer",
    "Your stay at Starry Night Resort getting closer",
    "Your stay at Sunrise Bay Resort getting closer",
    "Your stay at Autumn Breeze Lodge getting closer",
    "Your stay at Pine Haven Retreat getting closer",
    "Your stay at Serene Waters Resort getting closer",
    "Your stay at Timberline Chalet getting closer",
    "Your stay at Hidden Valley Lodge getting closer",
    "Your stay at Oceanview Escape getting closer",
    "Your stay at Moonstone Bay Resort getting closer",
    "Your stay at Wildflower Inn getting closer",
    "Your stay at Sapphire Shores Hotel getting closer",
    "Your stay at Blue Lagoon Retreat getting closer",
    "Your stay at Tranquility Bay Resort getting closer",
    "Your stay at Cedar Ridge Retreat getting closer",
    "Your stay at Wintergreen Lodge getting closer",
    "Your stay at Glacier Ridge Resort getting closer",
    "Your stay at Serendipity Springs getting closer",
    "Your stay at Twilight Cove Inn getting closer",
    "Your stay at Amber Sky Resort getting closer",
    "Your stay at Crystal Lagoon Villas getting closer",
    "Your stay at Morning Mist Lodge getting closer",
    "Your stay at Grand Summit Hotel getting closer",
    "Your stay at Starlight Retreat getting closer",
    "Your stay at Shadow Creek Lodge getting closer",
    "Your stay at Riverbend Resort getting closer",
    "Your stay at Majestic Pines Chalet getting closer",
    "Your stay at Blue Moon Inn getting closer",
    "Your stay at Paradise Cove Resort getting closer",
    "Your stay at Ocean Serenade Villas getting closer",
    "Your stay at Hidden Gem Lodge getting closer",
    "Your stay at Whispering Waves Resort getting closer",
    "Your stay at Sapphire Sunset Retreat getting closer",
    "Your stay at Cloud Nine Inn getting closer",
    "Your stay at Lush Haven Resort getting closer",
    "Your stay at Royal Waters Lodge getting closer",
    "Your stay at Emerald Bay Hotel getting closer",
    "Your stay at Tranquil Horizon Retreat getting closer",
    "Your stay at Cozy Pines Cabin getting closer",
    "Your stay at Celestial Cove Resort getting closer",
  ];

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
