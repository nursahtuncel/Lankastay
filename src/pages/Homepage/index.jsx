import "./styles.scss";
import HeaderImplementationComponent from "../../components/HeaderImplementationComponent";
import Footer from "../../components/Footer";
import Hero from "../../components/HeroSection";
import FilterBar from "../../components/HeroSection/FilterBar";
import MostPickedSection from "../../components/MostPickedSection/MostPicked";
import FAQs from "../../components/FaqComponent";
import ContactUs from "../../components/ContactUsSection/ContactUs";

const Homepage = () => {
  return (
    <div className="homepage">
      <HeaderImplementationComponent />
      <Hero />
      <FilterBar />
      <MostPickedSection />
      <ContactUs />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Homepage;
