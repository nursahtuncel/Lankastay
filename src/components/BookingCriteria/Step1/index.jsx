import "./style.scss";
import img5 from "../../../assets/images/blue.svg";
import calenderIcon from "../../../assets/images/icons/calenderIcon.svg";
import { Button } from "../../Button";
const FirstStep = ({ nextStep }) => {
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
              <button className="eksi-btn">-</button>
              <div>2 Day</div>

              <button className="arti-btn">+</button>
            </div>
          </div>
          <div className="calender-container">
            <p>Pick a Date</p>
            <div>
              <div className="selectDate">
                <img src={calenderIcon} alt="Calender" />
                <input type="date" />
              </div>
            </div>
          </div>

          <p className="price">
            You will pay:<span>$400 USD</span>
          </p>
          <p className="price">
            per <span>2 Days</span>
          </p>
        </div>
      </div>
      <div className="buttonContainer">
        <Button onClick={nextStep} padding="18px 40px" type="secondary">
          Book Now
        </Button>
        <Button padding="12px 40px">Cansel</Button>
      </div>
    </div>
  );
};

export default FirstStep;
