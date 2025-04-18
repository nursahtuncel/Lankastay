import styles from "./ContactUs.module.scss";
import phoneIcon from "../../assets/images/icons/phoneicon.png";
import faxIcon from "../../assets/images/icons/faxicon.png";
import emailIcon from "../../assets/images/icons/emailicon.png";
import { Button } from "../Button";
import { Select } from "antd";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      source: e.target.source.value,
      message: e.target.message.value,
    };

    const phonePattern = /^\d{3} \d{3} \d{2} \d{2}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phonePattern.test(formData.phone)) {
      alert("Phone number must be in the format 123 123 12 12");
      return;
    }

    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    localStorage.setItem("contactForm", JSON.stringify(formData));
    alert("Thank you for contacting us! We will reach out to you soon");
  };

  return (
    <div className={styles.contactUsSectionWrapper}>
      <h1>Contact Us</h1>
      <div className={styles.contactUsMain}>
        <div className={styles.contactUsForm}>
          <h2>Do you have any question?</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name *"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email *"
              required
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone number *"
              required
            />
            <Select
              defaultValue="How did you find us?"
              style={{ width: "100%" }}
              options={[
                { value: "engine", label: "Search Engine" },
                { value: "media", label: "Social Media" },
                { value: "friends", label: "Friend Referral" },
                { value: "other", label: "Other" },
              ]}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
            ></textarea>
            <Button className={styles.submitBtn} type="primary">
              SEND
            </Button>
          </form>
          <div className={styles.contactInfo}>
            <div className={styles.phone}>
              <div className={styles.infoImg}>
                <img src={phoneIcon} alt="Phone Icon" />
              </div>
              <div className={styles.mainInfo}>
                <h3>PHONE</h3>
                <p>123 456 12</p>
              </div>
            </div>
            <div className={styles.fax}>
              <div className={styles.infoImg}>
                <img src={faxIcon} alt="Fax Icon" />
              </div>
              <div className={styles.mainInfo}>
                <h3>FAX</h3>
                <p>123 456 13</p>
              </div>
            </div>
            <div className={styles.mail}>
              <div className={styles.infoImg}>
                <img src={emailIcon} alt="Email Icon" />
              </div>
              <div className={styles.mainInfo}>
                <h3>EMAIL</h3>
                <p>info@lankastay.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contactUsMap}>
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093127!2d144.9537353153189!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xb19a1e1c2a3356e6!2sMelbourne%20Central!5e0!3m2!1sen!2sau!4v1613963647031!5m2!1sen!2sau"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
