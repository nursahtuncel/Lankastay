import "./style.scss";
import { Button } from "../../Button";
import { Form, Input, Select, DatePicker } from "antd";
import { useState } from "react";
function SecondStep({ nextStep, prevStep, totalCost, days }) {
  const { Option } = Select;

  return (
    <div className="pymentContainer">
      <div className="title">
        <h1>Payment</h1>
        <p>Kindly follow the instructions below</p>
      </div>
      <div className="container">
        <div className="leftContainer">
          <p>Transfer LankaStay:</p>
          <p>{days} Days at Blue Origin Fams, Galle, Sri Lanka</p>
          <p>
            Total: <span>${totalCost} USD</span>
          </p>
          <p>
            Initial Payment: <span>${(totalCost / 100) * 30} USD</span>
          </p>
        </div>
        <Form layout="vertical">
          <Form.Item label="Bank" name="bank">
            <Select className="form-item" placeholder="Select Bank">
              <Option value="bank1">VakıfBank</Option>
              <Option value="bank2"> Ziraat Bankası</Option>
              <Option value="bank3">Akbank</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Exp Date" name="expDate">
            <DatePicker
              className="form-item"
              placeholder="Validation date"
              picker="date"
            />
          </Form.Item>

          <Form.Item label="CVV" name="cvv">
            <Input
              maxLength={4}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
              className="form-item"
              placeholder="Beside the card"
            />
          </Form.Item>
        </Form>
      </div>

      <div className="buttonContainer">
        <Button onClick={nextStep} padding="18px 40px" type="secondary">
          Book Now
        </Button>
        <Button onClick={prevStep} padding="12px 40px">
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default SecondStep;
