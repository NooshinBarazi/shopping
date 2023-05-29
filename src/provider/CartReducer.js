const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex((p) => p.id === action.payload.id);
      if (index < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
        console.log(updatedCart);
      } else {
        const updatedProduct = { ...updatedCart[index] };
        updatedProduct.quantity++;
        updatedCart[index] = updatedProduct;
      }
      return { ...state, cart: updatedCart, total: state.total + action.payload.offPrice };
    }
    case "DECREMENT": {
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex((p) => p.id === action.payload.id);
      const updatedProduct = { ...updatedCart[index] };

      if (updatedProduct.quantity === 1) {
        const filteredCart = updatedCart.filter(
          (p) => p.id !== action.payload.id
        );
        return { ...state, cart: filteredCart, total: state.total - action.payload.offPrice };
      } else {
        updatedProduct.quantity--;
        updatedCart[index] = updatedProduct;
        return { ...state, cart: updatedCart, total: state.total - action.payload.offPrice };
      }
    }
    default:
      return state;
  }
};

export default CartReducer;
