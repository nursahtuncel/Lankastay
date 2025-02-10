import "./style.scss";
import PaymentImage from "../../../assets/images/payment.svg";
import { Button } from "../../Button";
import { useNavigate } from "react-router-dom";
function TertiaryStep() {
  const navigate = useNavigate();
  const goToDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <div className="paymentContainer">
      <h1> Yay! Payment Completed</h1>
      <div className="paymentImageDiv">
        <img src={PaymentImage} alt="..." />
      </div>
      <p>
        Please check your email & phone Message. We have sent all the
        Information
      </p>
      <Button onClick={goToDashboard} padding="10px 40px" type="tertiary">
        Go to dashboard
      </Button>
    </div>
  );
}

export default TertiaryStep;
