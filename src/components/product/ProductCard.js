import{ useState } from "react";
import "./productStyle.css"
import { Link } from "react-router-dom";

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
        <Link className="details-btn" to={`/Details/${product.id}`}>
          Product Details
        </Link>
      <div className="arrow-btn">→</div>
</div>
    </div>
  );
}
