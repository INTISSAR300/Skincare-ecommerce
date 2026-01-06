import ProductGrid from "../components/product/ProductGrid";

export default function Serum({ products }) {
  const TonerProducts = products.filter(
    (product) => product.category === "toner"
  );

  return (
    <main>
      <ProductGrid products={TonerProducts} />
    </main>
  );
}
