import { useContext } from "react";
import Carts from "./Context";

const SingleProduct = ({ prod }) => {
  const { cart, setcart } = useContext(Carts);

  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>$ {prod.price.substring(0, 3)}</span>
      </div>
      {/* if cart includes then show me remove otherwise show to add button */}
      {cart.includes(prod) ? (
        <button
          className="add"
          onClick={() => {
            setcart(cart.filter((c) => c.id !== prod.id));
          }}
        >
          {" "}
          Remove from cart
        </button>
      ) : (
        <button
          className="add"
          onClick={() => {
            setcart([...cart, prod]);
          }}
        >
          {" "}
          add To cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
