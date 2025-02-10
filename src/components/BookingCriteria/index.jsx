import "./style.scss";
import { useState } from "react";
import FirstStep from "./Step1";
import SecondStep from "./Step2";
import TertiaryStep from "./Step3";
import Icon from "../../assets/images/icons/completed.svg";

export default function BookingStepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [days, setDays] = useState(0);

  const steps = ["1", "2", "3"];

  const nextStep = (newTotalCost, newDays) => {
    if (newTotalCost !== undefined && newDays !== undefined) {
      setTotalCost(newTotalCost);
      setDays(newDays);
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="BookingStepperContainer">
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index}>
            <div className="step">
              {" "}
              {index <= currentStep ? (
                <img
                  style={{ position: "absolute", right: "0", top: "-4px" }}
                  src={Icon}
                  alt="Users Icon"
                />
              ) : null}
              {index + 1}{" "}
            </div>{" "}
          </div>
        ))}
        <div className="progressBar"></div>
      </div>

      <div className="stepsContent">
        {currentStep === 0 && (
          <div>
            <FirstStep nextStep={nextStep} prevStep={prevStep} />
          </div>
        )}

        {currentStep === 1 && (
          <div>
            <SecondStep
              totalCost={totalCost}
              days={days}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          </div>
        )}
        {currentStep === 2 && (
          <TertiaryStep nextStep={nextStep} prevStep={prevStep} />
        )}
      </div>
    </div>
  );
}
