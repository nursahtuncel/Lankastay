/* eslint-disable react/prop-types */
import "./styles.scss";
import { Button } from "./../Button/index";

const BookingComponent = ({ price }) => {
  return (
    <section className="booking-component">
      <div className="booking-component-title">
        <h1 className="booking-component-title-h">Start Booking</h1>
      </div>

      <div className="booking-component-price">
        <p className="booking-component-price-number">{price}</p>
        <p className="booking-component-price-text">per Day</p>
      </div>

      <div className="booking-component-button">
        <Button type="primary" className={"booking-component-btn"}>
          Book Now
        </Button>
      </div>
    </section>
  );
};

export default BookingComponent;
