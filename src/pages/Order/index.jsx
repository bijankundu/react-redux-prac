import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { resetCart } from "./../../store/cart/cartAction";

import CartItemsRow from "./../../components/CartItemsRow";
import orderConfirmedStamp from "./../../assets/order-confirm.jpg";

import styles from "./order.module.scss";

const generateRandomOrderId = () => {
  const randomId = "x".repeat(4).replace(/x/g, (x) => parseInt(Math.random() * 9));
  return `${parseInt(Math.random() * 8) + 1}${randomId}`;
};

const Order = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subTotalAmt = useSelector((state) => state.cartItems.totalAmt);
  const discountAmt = useSelector((state) => state.cartItems.discountAmt);
  const promoCode = useSelector((state) => state.cartItems.promoCode);
  const cartItems = useSelector((state) => state.cartItems.cart);

  const handleReturnHome = () => {
    dispatch(resetCart());
    navigate("/", { replace: true });
  };

  return (
    <>
      {Object.keys(cartItems).length === 0 ? (
        <Navigate to={"/"} />
      ) : (
        <div className={styles["container"]}>
          <div className={styles["order-card"]}>
            <div className={styles["header"]}>
              <h2>
                Order: <span>{`#${generateRandomOrderId()}`}</span>
              </h2>
              <img src={orderConfirmedStamp} alt="" />
            </div>
            <div className={styles["items-container"]}>
              <div className={styles["item-label-header"]}>
                <h5>Item name</h5>
                <p>Qty</p>
                <p>Price</p>
              </div>
              {Object.keys(cartItems).map((key) => {
                const { id, quantity, name, food_type, price } = cartItems[key];
                return <CartItemsRow key={id} food_type={food_type} quantity={quantity} name={name} price={price} />;
              })}
            </div>
            <hr />

            <div className={styles["bill"]}>
              <div className={styles["subtotal"]}>
                <h6>Subtotal:</h6>
                <p>{`₹${subTotalAmt}`}</p>
              </div>
              <div className={styles["discount"]}>
                <h6>{`Discount ${promoCode !== "" ? `(${promoCode}) :` : ":"}`}</h6>
                <p>{`₹${discountAmt}`}</p>
              </div>
              <hr />
              <div className={styles["total"]}>
                <h6>Total:</h6>
                <p>{`₹${subTotalAmt - discountAmt}`}</p>
              </div>
            </div>

            <div className={styles["back-btn-container"]}>
              <button className={styles["home-btn"]} onClick={handleReturnHome}>
                Retun to home
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Order;
