import React, { useCallback, useState, useEffect } from "react";
import { Modal } from "antd";
import Button from "../Button/index";
import { useNavigate } from "react-router-dom"; 
import "../ModalComponent/styles.scss"; 
import LankaStay from "../../assets/images/ModalComponent/LankaStay.png";
import Approved from "../../assets/images/ModalComponent/onay.svg";

const ModalComponent = ({
  navigateTo = "/dashboard", 
  modalMessage = "Başarılı!", 
  buttonName = "Devam Et", 
  autoClose = true, 
  autoCloseTime = 5000,
  onClose, 
  ...modalProps 
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleModalClose = useCallback(() => {
    setIsModalVisible(false);
    if (onClose) {
      onClose();
    } else {
      navigate(navigateTo);
    }
  }, [navigate, navigateTo, onClose]);
  
  useEffect(() => {
    setIsModalVisible(true);
    if (autoClose) {
      setTimeout(() => {
        handleModalClose();
      }, autoCloseTime);
    }
  }, [autoClose, handleModalClose, autoCloseTime]);

  return (
    <div className="modal-container">
      <Modal
        open={isModalVisible}
        footer={null}
        closable={false}
        className="custom-modal"
        {...modalProps} 
      >
        <div className="modal-wrapper">
          <div className="modal-content">
            <img src={LankaStay} alt="Logo" className="logo" />
            <img src={Approved} alt="Success Icon" className="icon" />
            <p>{modalMessage}</p>
            <Button
              type="primary"
              onClick={handleModalClose}
              className="modal-button"
            >
              {buttonName}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalComponent;