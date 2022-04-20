import React from "react";
import Modal from "react-modal";
import { FiX } from "react-icons/fi";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

import styles from "./paymentModal.module.scss";

const PaymentModal = ({ isModalOpen, setIsModalOpen }) => {
  const navigate = useNavigate();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const cardDetails = {
      number: event.target.number.value,
      expiry: event.target.expiry.value,
      cvv: event.target.cvv.value,
      name: event.target["cardholder-name"].value,
    };

    console.log(cardDetails);
    closeModal();

    navigate("/order", { replace: true });
  };

  return (
    <Modal
      isOpen={isModalOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      contentLabel="Payment Modal"
      className={styles["modal-content"]}
      overlayClassName={styles["modal-overlay"]}
    >
      <header>
        <h2>Enter card details</h2>
        <button onClick={closeModal}>
          <FiX />
        </button>
      </header>
      <main>
        <form onSubmit={handleFormSubmit}>
          <div className={styles["group"]}>
            <label htmlFor="card-number">Card Number</label>
            <input
              type="text"
              id="card-number"
              name="number"
              pattern="\d{16}"
              placeholder="Enter card number"
              required
            />
          </div>
          <div className={styles["row"]}>
            <div className={styles["group"]}>
              <label htmlFor="card-expirydate">Expiry</label>
              <input
                type="date"
                name="expiry"
                id="card-expirydate"
                min={dayjs().add(1, "day").format("YYYY-MM-DD")}
                required
              />
            </div>
            <div className={styles["group"]}>
              <label htmlFor="card-cvv">CVV</label>
              <input type="text" id="card-cvv" name="cvv" pattern="\d{3}" placeholder="Enter CVV" required />
            </div>
          </div>
          <div className={styles["group"]}>
            <label htmlFor="cardholder-name">Cardholder's Name</label>
            <input
              type="text"
              name="cardholder-name"
              id="cardholder-name"
              pattern="[^\d]+"
              placeholder="Enter cardholder's name"
              required
            />
          </div>

          <button type="submit" className={styles["payment-btn"]}>
            Confirm Order
          </button>
        </form>
      </main>
    </Modal>
  );
};

export default PaymentModal;
