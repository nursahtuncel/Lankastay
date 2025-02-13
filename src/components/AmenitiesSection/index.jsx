import "./styles.scss";
import Icon1 from "../../assets/images/AmenitiesSection/icon-1.png";
import Icon2 from "../../assets/images/AmenitiesSection/icon-2.png";
import Icon3 from "../../assets/images/AmenitiesSection/icon-3.png";
import Icon4 from "../../assets/images/AmenitiesSection/icon-4.png";
import Icon5 from "../../assets/images/AmenitiesSection/icon-5.png";
import Icon6 from "../../assets/images/AmenitiesSection/icon-6.png";
import Icon7 from "../../assets/images/AmenitiesSection/icon-7.png";
import Icon8 from "../../assets/images/AmenitiesSection/icon-8.png";

const AmenitiesSection = () => {
  return (
    <div className="amenities">
      <div className="amenities-icons">
        <img className="icons-img" src={Icon1} alt="bedroom" />
        <p className="icons-text">
          <strong className="strong-texts">1</strong> bedroom
        </p>
      </div>

      <div className="amenities-icons">
        <img className="icons-img" src={Icon2} alt="living room" />
        <p className="icons-text">
          <strong className="strong-texts">1</strong> living room
        </p>
      </div>

      <div className="amenities-icons">
        <img className="icons-img" src={Icon3} alt="bathroom" />
        <p className="icons-text">
          <strong className="strong-texts">1</strong> bathroom
        </p>
      </div>

      <div className="amenities-icons">
        <img className="icons-img" src={Icon4} alt="dining room" />
        <p className="icons-text">
          <strong className="strong-texts">1</strong> dining room
        </p>
      </div>

      <div className="amenities-icons">
        <img className="icons-img" src={Icon5} alt="wi-fi icon" />
        <p className="icons-text">
          <strong className="strong-texts">10</strong> mbp/s
        </p>
      </div>

      <div className="amenities-icons">
        <img className="icons-img" src={Icon6} alt="unit ready" />
        <p className="icons-text">
          <strong className="strong-texts">7</strong> unit ready
        </p>
      </div>

      <div className="amenities-icons">
        <img className="icons-img" src={Icon7} alt="refigrator" />
        <p className="icons-text">
          <strong className="strong-texts">1</strong> refigrator
        </p>
      </div>

      <div className="amenities-icons">
        <img className="icons-img" src={Icon8} alt="television" />
        <p className="icons-text">
          <strong className="strong-texts">2</strong> television
        </p>
      </div>
    </div>
  );
};

export default AmenitiesSection;
