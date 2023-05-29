import vector from "../../assets/images/Vector.png";
import "./product.css";
import * as data from "../../data.js";
import bag from "../../assets/images/Bag_alt-white.png";
import { useActionCart, useCart } from "../../provider/CartProvider";
import CartPage from "../../pages/cartPage/CartPage";
const Product = () => {
  const { cart } = useCart();
  const dispatch = useActionCart();

  const addHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const checkInCart = (product) => {
    return cart.find((p) => p.id === product.id);
  };
  return (
    <main>
      <div className="productTitle">
        <a name='shop'><div>Product</div></a>
        <div className="filter">
          <img src={vector} />
          <span>Filter</span>
        </div>
      </div>
      <div className="productList">
        {data.products.map((product) => (
          <div className="product" key={product.id}>
            <div>
              <img src={product.image} className="productImg" />
            </div>
            <div className="shopBtn" onClick={() => addHandler(product)}>
              <img src={bag} />
              <span>{checkInCart(product) ? "In Cart" : "Shop Now"}</span>
            </div>
            <p className="productName">{product.name}</p>
            <div className="productDesc">
              <span className="productCategory">{product.category}</span>
              <p>
                {product.offPrice !== product.price ? (
                  <div >
                    <span className="productPrice">${product.price}</span>
                    <span className="productOff">${product.offPrice}</span>
                  </div>
                ) : (
                 <span>$ {product.price}</span>
                )}
              </p> 
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Product;
