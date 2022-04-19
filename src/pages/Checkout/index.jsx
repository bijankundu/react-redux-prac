import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { applyPromo, clearPromo } from "./../../store/cart/cartAction";

import Cart from "./../../components/Cart";

import styles from "./checkout.module.scss";

const Checkout = () => {
  const dispatch = useDispatch();

  const subTotalAmt = useSelector((state) => state.cartItems.totalAmt);
  const discountAmt = useSelector((state) => state.cartItems.discountAmt);
  const promoCode = useSelector((state) => state.cartItems.promoCode);
  const cartItems = useSelector((state) => state.cartItems.cart);

  const [promoCodeInput, setPromoCodeInput] = useState("");
  const [isWrongPromo, setIsWrongPromo] = useState(false);

  const handleApplyPromoCode = () => {
    if (["VEG25", "NONVEG50"].includes(promoCodeInput.toUpperCase())) {
      dispatch(applyPromo(promoCodeInput.toUpperCase()));
    } else {
      setIsWrongPromo(true);
    }
    setPromoCodeInput("");
  };

  return (
    <>
      {Object.keys(cartItems).length === 0 ? (
        <Navigate to="/" />
      ) : (
        <div className={styles["container"]}>
          <div className={styles["cart-container"]}>
            <Cart />
          </div>
          <div className={styles["bill-total-container"]}>
            <div className={styles["promocode-container"]}>
              {promoCode === "" && (
                <div className={styles["promo-input"]}>
                  <input
                    type="text"
                    placeholder="Apply promocode"
                    value={promoCodeInput}
                    onChange={(event) => setPromoCodeInput(event.target.value)}
                  />
                  <p onClick={handleApplyPromoCode}>APPLY</p>
                </div>
              )}
              {isWrongPromo && <h6>Wrong promocode!!!</h6>}
              {promoCode !== "" && (
                <div className={styles["promocode"]}>
                  <p>
                    Promo Code <b>{promoCode}</b> Applied!
                  </p>
                  <FiX onClick={() => dispatch(clearPromo())} />
                </div>
              )}
              <div className={styles["bill"]}>
                <div className={styles["subtotal"]}>
                  <h6>Subtotal:</h6>
                  <p>{`₹${subTotalAmt}`}</p>
                </div>
                <div className={styles["discount"]}>
                  <h6>Discount:</h6>
                  <p>{`₹${discountAmt}`}</p>
                </div>
                <hr />
                <div className={styles["total"]}>
                  <h6>Total:</h6>
                  <p>{`₹${subTotalAmt - discountAmt}`}</p>
                </div>
              </div>
            </div>
            <button className={styles["pay-now-btn"]}>Pay now</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
