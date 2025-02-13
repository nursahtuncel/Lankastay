import HeaderImplementationComponent from "../../components/HeaderImplementationComponent";
import Footer from "../../components/Footer";
import Hero from "../../components/HeroSection";
import FilterBar from "../../components/HeroSection/FilterBar";
import "./styles.scss";
import MostPickedSection from "../../components/MostPickedSection/MostPicked";

const Homepage = () => {
  return (
  <div className="homepage">
    <HeaderImplementationComponent />
      <Hero />
      <FilterBar />
      <MostPickedSection />
      <Footer />
    </div>
  );
};

export default Homepage;
