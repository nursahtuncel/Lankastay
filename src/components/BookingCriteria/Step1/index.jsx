import "./style.scss";
import img5 from "../../../assets/images/blue.svg";

const FirstStep = () => {
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
            <div>
              <img className="calender" src="ic_calendar.svg" alt="" />
            </div>
            <div className="date">20january - 22january</div>
          </div>
          <p className="price">You will pay: $400 USD</p>
          <p className="price">per 2 Days</p>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
