
import Hero from "../../components/HeroSection";
import FilterBar from "../../components/HeroSection/FilterBar";
import "./styles.scss";
import MostPickedSection from "../../components/MostPickedSection/MostPicked";

const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <MostPickedSection />
      <FilterBar />
    </div>
  );
};

export default Homepage;
