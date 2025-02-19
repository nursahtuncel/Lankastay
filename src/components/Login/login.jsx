import styles from "./login.module.scss";
import loginImg from "../../assets/images/Login&Register/login&register.png";
import logo from "../../assets/Logo.svg";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!formData.username || !formData.password) {
      alert("Username and Password are required!");
      return;
    }

    if (
      !storedUser ||
      storedUser.username !== formData.username ||
      storedUser.password !== formData.password
    ) {
      alert("Invalid username or password!");
      return;
    }

    alert("Login successful!");
  };

  return (
    <div className={styles.loginPageWrapper}>
      <div
        className={styles.loginImageContainer}
        style={{ backgroundImage: `url(${loginImg})` }}
      >
        <img className={styles.loginLogo} src={logo} alt="Logo" />
      </div>
      <div className={styles.loginFormContainer}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formElement}>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </div>
          <div className={`${styles.formElement} ${styles.passwordField}`}>
            <label>Password:</label>
            <div className={styles.passwordInputWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className={styles.passwordToggle}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <button className={styles.loginBtn} type="submit">
            Login
          </button>
          <a className={styles.redirectToRegister} href="/register">
            Create an Account
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
