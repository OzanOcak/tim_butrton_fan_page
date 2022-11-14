import "./product.css";

const Product = ({ img, link }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle red"></div>
        <div className="p-circle yellow"></div>
        <div className="p-circle green"></div>
      </div>
      <img src={img} alt="" className="p-img" />
    </div>
  );
};

export default Product;
