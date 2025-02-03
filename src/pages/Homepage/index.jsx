import Breadcrumb from "../../components/Breadcrumb";
import Hero from "../../components/HeroSection";
import "./styles.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <Breadcrumb currentLocation= "Hotel Details"  homePath= "/" />
    </div>
  );
};

export default Homepage;
