import "./styles.scss";
import Hero from "../../components/HeroSection";
import { Button } from "../../components/Button";

const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <div className="buttons">
        <Button padding="20px 120px" type="primary">
          Book Now
        </Button>
        <Button padding="10px 70px" type="secondary">
          Regiser Now
        </Button>
        <Button padding="20px 150px" type="tertiary">
          Go to dashboard
        </Button>
        <Button padding="10px 28px" type="fourth">
          Login
        </Button>
        <Button padding="20px 130px" type="default">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Homepage;
