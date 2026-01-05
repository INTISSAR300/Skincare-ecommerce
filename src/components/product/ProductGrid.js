import ProductCard from "./ProductCard";
import "./productStyle.css"

export default function ProductGrid({products}){
    return (
    <section className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
    
}