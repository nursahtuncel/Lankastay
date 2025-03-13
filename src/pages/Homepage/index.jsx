import HeaderImplementationComponent from "../../components/HeaderImplementationComponent";
import Footer from "../../components/Footer";
import Hero from "../../components/HeroSection";
import FilterBar from "../../components/HeroSection/FilterBar";
import "./styles.scss";
import MostPickedSection from "../../components/MostPickedSection/MostPicked";
import Help from "../../components/HelpCenterComponent";

const Homepage = () => {
  return (
  <div className="homepage">
        <Help/>
    <HeaderImplementationComponent />
      <Hero />
      <FilterBar />

      <MostPickedSection />
      <Footer />

    </div>
  );
};

export default Homepage;
