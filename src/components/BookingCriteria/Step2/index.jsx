import "./style.scss";
import { Button } from "../../Button";
function SecondStep({ nextStep, prevStep }) {
  return (
    <div>
      <div>
        <h1>Payment</h1>
        <p>Kindly follow the instructions below</p>
      </div>

      <div className="buttonContainer">
        <Button onClick={nextStep} padding="18px 40px" type="secondary">
          Book Now
        </Button>
        <Button onClick={prevStep} padding="12px 40px">
          Cansel
        </Button>
      </div>
    </div>
  );
}

export default SecondStep;
