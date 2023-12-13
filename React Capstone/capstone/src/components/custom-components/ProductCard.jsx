import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import truncate from "../util/truncate";
import { useCartContext } from "../context/CartContext";

export default function ProductCard(props) {
  const { yourCart, handleSetCart } = useCartContext();
  const [isDisabled, setIsDisabled] = useState(false);

  // useEffect(() => {
  //   if (yourCart.includes(props.productInfo)) {
  //     setIsDisabled(true);
  //   }
  // }, []);

  function addToCartButton() {
    handleSetCart((prev) => [...prev, props.productInfo]);
    setIsDisabled(true);
  }

  function removeFromCartButton(idToRemove) {
    const updatedArray = yourCart.filter((cartItem) => {
      return cartItem.id !== idToRemove;
    });
    handleSetCart(updatedArray);
  }

  return (
    <div className="product-cards-container">
      {console.log(yourCart)}
      {console.log(props.indexToIncrement)}

      <div className="individual-card-wrapper">
        <img alt="pic" src={props.productInfo?.image} className="card-image" />
        <div className="card-title">
          {props?.onProduct
            ? props.productInfo.title
            : truncate(props.productInfo?.title)}
        </div>
        <div className="card-category">{props.productInfo?.category}</div>
        <div className="card-description">
          {props?.onProduct
            ? props.productInfo.description
            : truncate(props.productInfo?.description)}
        </div>
        <div className="card-price">$ {props.productInfo?.price}</div>
        {props.onProduct ? (
          ""
        ) : (
          <NavLink to={`/products/${props.productInfo.id}`}>See More</NavLink>
        )}

        {props.productPage ? (
          <button
            className="add-product-button"
            onClick={() => addToCartButton()}
            disabled={isDisabled}
          >
            + add to cart
          </button>
        ) : (
          <div className="cart-buttons">
            <button
              onClick={() =>
                handleSetCart((prevState) => [
                  {
                    ...prevState[props?.indexToIncrement],
                    quantity: prevState[props?.indexToIncrement].quantity - 1,
                  },
                ])
              }
            >
              - 1
            </button>
            <button
              className="remove-product-button"
              onClick={() => removeFromCartButton(props.productInfo.id)}
            >
              remove from cart
            </button>
            <button
              onClick={() =>
                handleSetCart((prevState) => [
                  {
                    ...prevState[props?.indexToIncrement],
                    quantity: prevState[props?.indexToIncrement].quantity + 1,
                  },
                ])
              }
            >
              + 1
            </button>
            <br />
            {props.productInfo.quantity > 0
              ? `Current Quantity: ${props.productInfo.quantity}`
              : "0 in your cart, please add or remove"}
          </div>
        )}
      </div>
    </div>
  );
}
