import { useState } from "react";
import "./styles.scss";
import { Input, Space } from "antd";

const { Search } = Input;

const Help = () => {
  const guides = [
    { href: "../Booking", text: "How to Make a Booking?" },
    {
      href: "../",
      text: "Learn how to refine your search results using filters.",
    },
    {
      href: "../register",
      text: "Step-by-step guide to creating a new account.",
    },
    {
      href: "../register",
      text: "Instructions for adding and managing new listings.",
    },
    {
      href: "../",
      text: "Find answers to common questions about our platform.",
    },
    {
      href: "../login",
      text: "Guidance on logging in and troubleshooting access issues.",
    },
    {
      href: "../",
      text: "Reach out to our support team for assistance.",
    },
    {
      href: "../dashboard",
      text: "Manage your profile, bookings, and settings easily.",
    },
  ];

  const [filteredGuides, setFilteredGuides] = useState(guides);

  const onSearch = (value) => {
    const filtered = guides.filter((guide) =>
      guide.text.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredGuides(filtered);
  };

  return (
    <div className="help-sec">
      <div className="help-how">
        <h1 className="help-title">How can we help you?</h1>

        <Space direction="vertical">
          <Search
            placeholder="Search"
            allowClear
            onSearch={onSearch}
            style={{ width: 200 }}
            onChange={(e) => onSearch(e.target.value)}
          />
        </Space>
      </div>

      <h2 className="help-guides">How-To Guides</h2>
      <div className="scroll-container">
        <ul>
          {filteredGuides.length > 0 ? (
            filteredGuides.map((guide, index) => (
              <li key={index}>
                <a href={guide.href}>{guide.text}</a>
              </li>
            ))
          ) : (
            <li>No results found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Help;
