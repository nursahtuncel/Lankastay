
import Footer from "../../components/Footer";
import Hero from "../../components/HeroSection";
import FilterBar from "../../components/HeroSection/FilterBar";
import "./styles.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <FilterBar />
      <Footer />
    </div>
  );
};

export default Homepage;
