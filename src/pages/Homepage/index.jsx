import Hero from "../../components/HeroSection";
import "./styles.scss";
import MostPickedSection from "../../components/MostPickedSection/MostPicked"

const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <MostPickedSection />
    </div>
  );
};

export default Homepage;
