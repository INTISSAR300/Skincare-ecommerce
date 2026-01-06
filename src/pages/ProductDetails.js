import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ProductDetails.css";

export default function ProductDetails({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  // Find the product by ID
  const product = products.find((p) => p.id === (id));

  if (!product) return <p className="error-msg">Product not found!</p>;

  return (
    <main className="details-container">
      <div className="details-grid">
        
        {/* LEFT SIDE: IMAGE */}
        <section className="details-visual">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← BACK TO CATALOG
          </button>
          <div className="image-wrapper">
            <img src={product.image} alt={product.name} />
          </div>
        </section>

        {/* RIGHT SIDE: INFO */}
        <section className="details-info">
          <div className="info-header">
            <span className="category-label">CATEGORY: {product.category}</span>
            <h1 className="product-name">{product.name}</h1>
            <p className="product-price">${product.price}.00</p>
          </div>

          <div className="info-body">
            <p className="product-description">{product.description}</p>
            
            <ul className="specs-list">
              <li><span>VOLUME</span> 30ML / 1.01 FL.OZ.</li>
              <li><span>SKIN TYPE</span> SENSITIVE, ALL TYPES</li>
              <li><span>BENEFITS</span> {product.category === "ampoule" ? "CALMING, HYDRATING" : "PROTECTING"}</li>
            </ul>
          </div>

          <div className="info-actions">
            <div className="quantity-controls">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>—</button>
              <span>{quantity.toString().padStart(2, '0')}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            
            <button className="wishlist-btn">
              ADD TO WISHLIST <span className="heart-icon">♡</span>
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}