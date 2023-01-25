import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = function () {
    setIsCartShown(true);
  };

  const hideCartHandler = function () {
    setIsCartShown(false);
  };

  return (
    <Fragment>
      {isCartShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onClickCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
