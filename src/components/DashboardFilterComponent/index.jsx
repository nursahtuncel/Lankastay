import "./styles.scss";
import React, { useState } from "react";
import { Button } from "./../Button/index";

import deleteIcon from "../../assets/JA-56/delete.png";
import arrowIcon from "../../assets/JA-56/arrow.png";
import bookIcon from "../../assets/JA-56/book.png";
import filterIcon from "../../assets/JA-56/filter.png";
import fileIcon from "../../assets/JA-56/file.png";
import printIcon from "../../assets/JA-56/print.png";
import plusIcon from "../../assets/JA-56/plus.png";
import searchIcon from "../../assets/JA-56/search.png";

const DashboardFilterComponent = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    console.log(`${buttonName} button clicked`);
  };

  const buttonClass = (buttonName) =>
    `filter-button ${activeButton === buttonName ? "active" : ""}`;

  const icons = {
    file: fileIcon,
    expand: arrowIcon,
    book: bookIcon,
    print: printIcon,
    trash: deleteIcon,
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-top">
        <h1 className="dashboard-title">Hotel Owner</h1>
      </div>

      <div className="dashboard-filter">
        <div className="search-sort-container">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search documents"
              className="search-input"
            />
            <div className="search-icon">
              <div
                className="icon"
                style={{ backgroundImage: `url(${searchIcon})` }}
              ></div>
            </div>
          </div>

          <div className="sort-container">
            <span className="sort-label">Sort by</span>
            <select className="sort-select">
              <option>Date</option>
              <option>Name</option>
            </select>
            <button className="filter-toggle-button">
              <div
                className="icon"
                style={{ backgroundImage: `url(${filterIcon})` }}
              ></div>
            </button>
          </div>
        </div>

        <div className="filter-action-container">
          <div className="filter-buttons">
            {Object.keys(icons).map((btn) => (
              <button
                key={btn}
                className={buttonClass(btn)}
                onClick={() => handleButtonClick(btn)}
              >
                <div
                  className="icon"
                  style={{ backgroundImage: `url(${icons[btn]})` }}
                ></div>
              </button>
            ))}
          </div>
          <div className="action-buttons">
            <select className="time-select">
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>
            <select className="type-select">
              <option>Bookings</option>
              <option>Objectives</option>
              <option>Refunds</option>
              <option>Message</option>
            </select>
            <Button className={"add-button"} type="primary">
              <div
                className="icon"
                style={{ backgroundImage: `url(${plusIcon})` }}
              ></div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardFilterComponent;
