import React from "react";
import classes from './HeaderCartComponent.module.css'
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = function(props) {
  return (
    <button className={classes.button} onClick={props.onClickButton}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

export default HeaderCartButton;