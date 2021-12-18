const SingleProduct = ({ prod }) => {
  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>$ {prod.price.substring(0, 3)}</span>
      </div>
      <button className="add"> add To cart</button>
    </div>
  );
};

export default SingleProduct;
