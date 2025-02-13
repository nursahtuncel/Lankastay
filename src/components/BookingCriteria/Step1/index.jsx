import "./style.scss";
import img5 from "../../../assets/images/blue.svg";
import calenderIcon from "../../../assets/images/icons/calenderIcon.svg";
import { Button } from "../../Button";
import React, { useState } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const FirstStep = ({ nextStep, prevStep }) => {
  const [days, setDays] = useState(1);
  const [totalCost, setTotalCost] = useState(200);
  const [dates, setDates] = useState([dayjs(), dayjs().add(2, "day")]);

  const costPerDay = 200;
  const handleDaysChange = (value) => {
    if (value < 1) return;
    setDays(value);
    setTotalCost(value * costPerDay);
    setDates([dates[0], dates[0].add(value, "day")]);
  };

  const handleDateChange = (dates) => {
    setDates(dates);
    const newDays = dates[1].diff(dates[0], "day");
    setDays(newDays);
    setTotalCost(newDays * costPerDay);
  };

  return (
    <div className="page1">
      <div className="page-header">
        <h2 className="title">Booking Information</h2>
        <p className="desc">Please fill up the blank fields below</p>
      </div>
      <div className="container">
        <div className="left">
          <div className="image-div">
            <img src={img5} alt="Blue-Origin Fams" />
          </div>
          <div className="description">
            <div className="image-desc-left">Blue Origin Fams</div>
            <div className="image-desc-right">Galle, Sri Lanka</div>
          </div>
        </div>

        <div className="right-container">
          <div className="days-count-container">
            <div className="question">How long you will stay?</div>
            <div className="selectTotalDay">
              <button
                onClick={() => handleDaysChange(days - 1)}
                disabled={days <= 1}
                className="eksi-btn">
                -
              </button>
              <input
                min={1}
                value={days}
                onChange={(e) => handleDaysChange(Number(e.target.value))}
                style={{
                  width: "100%",
                  textAlign: "center",
                  border: "none",
                  height: "100%",
                  backgroundColor: "#F5F6F8",
                }}
              />
              <button
                onClick={() => handleDaysChange(days + 1)}
                className="arti-btn">
                +
              </button>
            </div>
          </div>
          <div className="calender-container">
            <p>Pick a Date</p>
            <div>
              <div className="selectDate">
                <img src={calenderIcon} alt="Calender" />
                <DatePicker.RangePicker
                  picker="date"
                  value={dates}
                  onChange={handleDateChange}
                  format="DD MMM"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    border: "none",
                    height: "100%",
                    backgroundColor: "#F5F6F8",
                    height: "45px",
                  }}
                />
              </div>
            </div>

            <h3 className="price">
              You will pay: <span>${totalCost} USD</span> <br />
              per <span>{days}</span> Days
            </h3>
          </div>
        </div>
      </div>
      <div className="buttonContainer">
        <Button
          onClick={() => nextStep(totalCost, days)}
          padding="18px 40px"
          type="secondary">
          Book Now
        </Button>
        <Button onClick={prevStep} padding="12px 40px">
          Cancel
        </Button>
      </div>
    </div>
  );
};
export default FirstStep;
