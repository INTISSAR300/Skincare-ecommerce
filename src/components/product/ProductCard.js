import{ useState } from "react";
import "./productStyle.css"

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);

  return (
    <div className="product-card">
      <button className={`heart-btn ${liked ? "active" : ""}`} onClick={toggleLike}>
        {liked ? "♥" : "♡"}
      </button>
      <div className="img-wrapper">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">${product.price}</p>
      </div>
      <div className="card-footer">
        <button className="add-btn">Add to Cart</button>
        <div className="arrow-btn">→</div>
      </div>
    </div>
  );
}
