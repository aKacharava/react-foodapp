import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = function () {
    setIsCartShown(true);
  };

  const hideCartHandler = function () {
    setIsCartShown(false);
  };

  return (
    <CartProvider>
      {isCartShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onClickCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
