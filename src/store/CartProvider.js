import CartContext from "./cart-content"

const CartProvider = function(props) {
  const addItemToCartHandler = () => {}
  const removeItemFromCartHandler = () => {}

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return(
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider