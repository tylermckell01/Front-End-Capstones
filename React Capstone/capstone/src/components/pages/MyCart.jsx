import { useState } from "react";

import { useCartContext } from "../context/CartContext";
import ProductCard from "../custom-components/ProductCard";

export default function MyCart(props) {
  const { yourCart, handleSetCart } = useCartContext();
  const [checkoutMessage, setCheckoutMessage] = useState(false);

  const subTotal = yourCart.reduce((acc, cartitem) => {
    return cartitem.price * cartitem.quantity;
  }, 0);

  const shippingCost = yourCart.reduce((acc, cartitem) => {
    return cartitem.quantity * 3;
  }, 0);

  const totalPrice = subTotal + shippingCost;

  function updateQuantity(quantity) {
    return quantity + 1;
  }

  function checkoutButton() {
    return (
      <div>
        {" "}
        Nice purchase! your price breakdown is ${subTotal} for your items and $
        {shippingCost} for shipping
      </div>
    );
  }

  return (
    <div className="mycart-page-container">
      {/* {console.log(shippingCost)} */}

      <div>
        {totalPrice > 1 ? `Your total is: $${totalPrice}` : "Your total is: $0"}
        <button onClick={() => setCheckoutMessage(true)}>Checkout</button>
        <div>{checkoutMessage ? checkoutButton() : ""}</div>
      </div>
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
  );
}
