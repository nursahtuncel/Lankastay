import "./style.scss";
import { useState } from "react";
import FirstStep from "./Step1";
import SecondStep from "./Step2";
import TertiaryStep from "./Step3";
import Icon from "../../assets/images/icons/completed.svg";
import { Button } from "../Button";

export default function BookingStepper() {
  const [currentStep, setCurrentStep] = useState(2);

  const steps = ["1", "2", "3"];
  const nextStep = () => {
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
              {index <= currentStep ? (
                <img
                  style={{ position: "absolute", right: "0", top: "-4px" }}
                  src={Icon}
                  alt="Users Icon"
                />
              ) : null}
              {index + 1}
            </div>
          </div>
        ))}
      </div>

      <div className="stepsContent">
        {currentStep === 0 && (
          <div>
            <FirstStep></FirstStep>
          </div>
        )}

        {currentStep === 1 && (
          <div>
            <SecondStep></SecondStep>
          </div>
        )}

        {currentStep === 2 && (
          <TertiaryStep>
            <Button></Button>
          </TertiaryStep>
        )}
      </div>
    </div>
  );
}
