import "./styles.scss";
import Stepper from "../../components/BookingCriteria";
import { Button } from "../../components/Button/index.jsx";
const Booking = () => {
  return (
    <div className="booking-page">
      <Stepper>
        <Button />
      </Stepper>
    </div>
  );
};

export default Booking;
