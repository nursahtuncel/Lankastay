import Stepper from "../../components/BookingCriteria";
import Hero from "../../components/HeroSection";
import "./styles.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <Stepper />
    </div>
  );
};

export default Homepage;
