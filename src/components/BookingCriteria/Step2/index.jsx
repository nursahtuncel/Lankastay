import "./style.scss";
import { Button } from "../../Button";
function SecondStep({ nextStep, prevStep }) {
  return (
    <div className="pymentContainer">
      <div className="title">
        <h1>Payment</h1>
        <p>Kindly follow the instructions below</p>
      </div>
      <div className="container">
        <div className="leftContainer">
          <p>Transfer LankaStay:</p>
          <p>2 Days at Blue Origin Fams, Galle, Sri Lanka</p>
          <p>
            Total: <span>$400 USD</span>
          </p>
          <p>
            Initial Payment: <span> $200</span>
          </p>
        </div>

        <div className="right-form-container">
          <div className="form-group">
            <label htmlFor="bank" className="form-label">
              Bank
            </label>
            <select id="bank" name="bank" className="form-input">
              <option>Select Bank</option>
              <option>Select Bank</option>
              <option>Select Bank</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="expDate" className="form-label">
              Exp Date
            </label>
            <input
              type="text"
              id="expDate"
              name="expDate"
              placeholder="Validation date"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="cvv" className="form-label">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="Beside the card"
              className="form-input"
            />
          </div>
        </div>
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
