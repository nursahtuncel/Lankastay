import "./styles.scss";
import img1 from "../../assets/images/heroimg1.png";
import img2 from "../../assets/images/heroimg2.png";
import img3 from "../../assets/images/heroimg3.png";
import img4 from "../../assets/images/heroimg4.png";
import { Button } from "../Button";
const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Forget Busy Work, Start Next Vacation</h1>
        <p className="hero-description">
          We provide what you need to enjoy your holiday with family. Time to
          make another memorable moments.
        </p>
        <Button padding="5px 32px" type="fourth">
          Show More
        </Button>
        <div className="hero-stats">
          <div className="hero-stat-item">
            <img className="hero-stat-icon" src={img2} alt="Users Icon" />
            <p className="hero-stat-text">
              <span className="number">2500</span> Users
            </p>
          </div>
          <div className="hero-stat-item">
            <img className="hero-stat-icon" src={img3} alt="Treasure Icon" />
            <p className="hero-stat-text">
              <span className="number">200</span> Treasure
            </p>
          </div>
          <div className="hero-stat-item">
            <img className="hero-stat-icon" src={img4} alt="Cities Icon" />
            <p className="hero-stat-text">
              <span className="number">100</span> Cities
            </p>
          </div>
        </div>
      </div>
      <div className="hero-image-container">
        <img className="hero-image" src={img1} alt="Hero Main Image" />
        <p className="hero-border"></p>
      </div>
    </div>
  );
};

export default Hero;
