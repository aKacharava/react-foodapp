import React, { useContext, useEffect, useState } from "react";
import classes from './HeaderCartComponent.module.css'
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-content";

const HeaderCartButton = function(props) {
  const [isBtnHiglighted, setIsBtnHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const amountOfCartItems = items.reduce((currentAmount, item) => {
    return currentAmount + item.amount;
  }, 0);


  const buttonClasses = `${classes.button} ${isBtnHiglighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsBtnHighlighted(true);

    const timer = setTimeout(() => {
      setIsBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onClickButton}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{amountOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;