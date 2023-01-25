import React, { useContext } from "react";
import classes from './HeaderCartComponent.module.css'
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-content";

const HeaderCartButton = function(props) {
  const cartCtx = useContext(CartContext);
  const amountOfCartItems = cartCtx.items.reduce((currentAmount, item) => {
    return currentAmount + item.amount;
  }, 0)

  return (
    <button className={classes.button} onClick={props.onClickButton}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{amountOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;