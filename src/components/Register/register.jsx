import styles from "./register.module.scss";
import registerImg from "../../assets/images/Login&Register/login&register.png";
import logo from "../../assets/images/Dashboard/Logo.svg";
import { Button } from "../Button";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    username: "",
    password: "",
    termsAccepted: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{3}-\d{3}-\d{2}-\d{2}$/;

    if (!formData.username || !formData.email || !formData.password) {
      alert("Username, Email, and Password are required!");
      return;
    }
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address!");
      return;
    }
    if (!phoneRegex.test(formData.phone)) {
      alert("Phone number must be in 3-3-2-2 format!");
      return;
    }
    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }
    if (!formData.termsAccepted) {
      alert("You must agree to the terms and conditions!");
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));
    alert("Registration successful!");
  };

  return (
    <div className={styles.registerPageWrapper}>
      <div
        className={styles.registerImageContainer}
        style={{ backgroundImage: `url(${registerImg})` }}
      >
        <div className={styles.imageOverlay}></div>
        <img className={styles.registerLogo} src={logo} alt="Logo" />
      </div>
      <div className={styles.registerFormContainer}>
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formElement}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div className={styles.formElement}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="name@example.com"
            />
          </div>
          <div className={styles.formElement}>
            <label>Phone No</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="123-456-78-90"
            />
          </div>
          <div className={styles.formElement}>
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Enter your country"
            />
          </div>
          <div className={styles.formElement}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Chose a username"
            />
          </div>
          <div className={`${styles.formElement} ${styles.passwordField}`}>
            <label>Password</label>
            <div className={styles.passwordInputWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="6+ characters"
              />
              <span
                className={styles.passwordToggle}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>
          <div className={styles.termsContainer}>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            <label>
              By signing up you agree to <a href="#">terms and conditions</a> at
              zoho.
            </label>
          </div>
          <Button
            type="primary"
            onClick={handleSubmit}
            className={styles.registerBtn}
          >
            Register
          </Button>
          <a className={styles.redirectToLogin} href="/login">
            Login
          </a>
        </form>
      </div>
    </div>
  );
};

export default Register;
