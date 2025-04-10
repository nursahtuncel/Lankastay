import "./styles.scss";
import Stepper from "../../components/BookingCriteria";
import { Button } from "../../components/Button/index.jsx";
import ListHotelComponent from "../../components/ListHotelComponent";
const Booking = () => {
  return (
    <div className="booking-page">
      <Stepper>
        <Button />
      </Stepper>
      <ListHotelComponent />
    </div>
  );
};

export default Booking;
