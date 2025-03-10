import "./styles.scss";
import { Button } from "../Button/index";
import LankaStay from "../../assets/images/Footer/LankaStay.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <section className="footer">
      <div className="footer-contents">
        <div className="footer-contents-title">
          <div className="footer-contents-title-image">
            <Link to="/">
              <img className="footer-img" src={LankaStay} alt="LankaStay." />
            </Link>
          </div>
          <p className="footer-text">
            We kaboom your beauty holiday instantly and memorable.
          </p>
        </div>

        <div className="footer-links">
          <div><Link className="footer-links-privacy" to="/privacy-policy">Privacy Policy</Link></div>
          <div><Link className="footer-links-terms" to="/terms-of-condition">Terms of Condition</Link></div>
        </div>

        <div className="footer-contents-visitor">
          <p className="footer-visitor-text">Become hotel Owner</p>
          <div className="footer-register-button">
            <Link to="/Register" className="link-to">
              <Button type="primary" className={"footer-register-button-btn"}>
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-info">
        <p className="footer-info-text">Copyright</p>
        <p className="footer-info-text">{thisYear}</p>
        <p className="footer-info-text">• All rights reserved • Salman Faris</p>
      </div>
    </section>
  );
};

export default Footer;
