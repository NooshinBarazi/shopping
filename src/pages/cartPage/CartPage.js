import { useActionCart, useCart } from "../../provider/CartProvider";
import { Link } from "react-router-dom";
import "./cartPage.css";

const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useActionCart();

  const incrementHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const decrementHandler = (product)=>{
    dispatch({type: 'DECREMENT', payload: product})
  }
  return (
    <main className="container">
      <section className="cartCenter">
        <section className="cartItemList">
          {cart.map((product) => {
            return (
              <div className="cartItem" key={product.id}>
                <div className="itemImg">
                  <img src={product.image} alt={product.name}></img>
                </div>
                <div>{product.name}</div>
                <div>${product.offPrice * product.quantity}</div>
                <div className="btnGroup">
                  <button onClick={() => decrementHandler(product)}>-</button>
                  <button>{product.quantity}</button>
                  <button onClick={() => incrementHandler(product)}>+</button>
                </div>
              </div>
            );
          })}
        </section>
        <CartSummery cart={cart} total={total}/>
      </section>
    </main>
  );
};

export default CartPage;

const CartSummery = ({cart, total}) => {
  const originalPrice = cart.reduce((acc, curr)=>{
    return acc + (curr.price * curr.quantity)
  }, 0)
  return (
    <section className="cartSummery">
      <h2 style={{ marginBottom: "30px" }}>Cart summery</h2>
      <div className="summeryItem">
        <p>original total price:</p>
        <p>${originalPrice}</p>
      </div>
      <div className="summeryItem">
        <p>cart discount:</p>
        <p>${originalPrice - total}</p>
      </div>

      <div className="summeryItem net">
        <p>net price:</p>
        <p>${total}</p>
      </div>
      <Link to="/signup?redirect=checkout">
        <button className="checkoutBtn">checkout</button>
      </Link>
    </section>
  );
};
