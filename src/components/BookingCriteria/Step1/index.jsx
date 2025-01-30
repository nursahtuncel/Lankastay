import "./style.scss";
const FirstStep = () => {
  return (
    <div className="page1">
      <div className="header">
        <h2 className="h2">Booking Information</h2>
        <p>Please fill up the blank fields below</p>
      </div>
      <div className="container">
        <div className="left">
          <div className="image-div">
            <img src="pic (1).svg" alt="" />
          </div>
          <div className="resminaltindakitext">
            <div>Blue Origin Fams</div>
            <div>Galle, Sri Lanka</div>
          </div>
        </div>
        <div className="right">
          <div className="right-container">
            <div className="days-count-container">
              <div>How long you will stay?</div>
              <div className="days">
                <button>-</button>
                <div>2 Day</div>

                <button>+</button>
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
    </div>
    //   <div className="button-div">
    //     <button>BOOk Now</button>
    //     <button>Cancel</button>
    //   </div>
  );
};

export default FirstStep;
