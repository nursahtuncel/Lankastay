import Hero from "../../components/HeroSection";
import FilterBar from "../../components/HeroSection/FilterBar";
import "./styles.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <FilterBar />
    </div>
  );
};

export default Homepage;
