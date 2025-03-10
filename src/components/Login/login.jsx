import styles from "./login.module.scss";
import loginImg from "../../assets/images/Login&Register/login&register.png";
import logo from "../../assets/Logo.svg";
import { Button } from "../Button";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ModalComponent from "../ModalComponent"; 

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); 
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      !storedUser ||
      storedUser.username !== formData.username ||
      storedUser.password !== formData.password
    ) {
      alert("Invalid username or password!");
      return;
    }

    if (!formData.username || !formData.password) {
      alert("Username and Password are required!");
      return;
    }

    setIsModalVisible(true);
  };

  return (
    <div className={styles.loginPageWrapper}>
      <div
        className={styles.loginImageContainer}
        style={{ backgroundImage: `url(${loginImg})` }}
      >
        <div className={styles.imageOverlay}></div>
        <img className={styles.loginLogo} src={logo} alt="Logo" />
      </div>
      <div className={styles.loginFormContainer}>
        <h1>Login Account</h1>
        <form onSubmit={handleLogin}>
          <div className={styles.formElement}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
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
                placeholder="Enter your password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className={styles.passwordToggle}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>
          <Button
            type="primary"
            onClick={handleLogin}
            className={styles.loginBtn}
          >
            Login
          </Button>
          <a className={styles.redirectToRegister} href="/register">
            Create an Account
          </a>
        </form>
      </div>

      {isModalVisible && (
        <ModalComponent
          modalMessage="Giriş Başarılı!"
          buttonName="Devam Et"
          onClose={() => navigate("/dashboard")}
        />
      )}
    </div>
  );
};

export default Login;
