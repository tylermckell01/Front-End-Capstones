import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [yourCart, setYourCart] = useState([]);

  function handleSetCart(value) {
    setYourCart(value);
  }

  const values = { yourCart, handleSetCart };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};
