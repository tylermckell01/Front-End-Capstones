import { useState } from "react";

import { useCartContext } from "../context/CartContext";
import ProductCard from "../custom-components/ProductCard";

export default function MyCart(props) {
  const { yourCart, handleSetCart } = useCartContext();
  const [checkoutMessage, setCheckoutMessage] = useState(false);

  const subTotal = yourCart.reduce((acc, cartitem) => {
    return acc + cartitem.price * cartitem.quantity;
  }, 0);

  const shippingCost = yourCart.reduce((acc, cartitem) => {
    return acc + cartitem.quantity * 3;
  }, 0);

  const totalPrice = subTotal + shippingCost;

  function updateQuantity(quantity) {
    return quantity + 1;
  }

  function checkoutButton() {
    return (
      <div className="checkout-message">
        {" "}
        ${totalPrice.toFixed(2)} has been charged to your account... <br />{" "}
        <br /> ${subTotal.toFixed(2)} for your items and $
        {shippingCost.toFixed(2)} for shipping
      </div>
    );
  }

  return (
    <div className="mycart-page-container">
      {/* {console.log(shippingCost)} */}

      <div className="total-cost">
        {totalPrice > 1
          ? `Your current total is: $${totalPrice.toFixed(2)}`
          : "Your current total is: $0"}
        <button onClick={() => setCheckoutMessage(true)}>Checkout</button>
        <div>{checkoutMessage ? checkoutButton() : ""}</div>
      </div>
      <div className="cards-wrapper">
        {yourCart.map((cartproduct, index) => {
          console.log(index);
          return (
            <ProductCard
              key={cartproduct.id}
              productInfo={cartproduct}
              productPage={false}
              indexToIncrement={index}
            />
          );
        })}
      </div>
    </div>
  );
}
