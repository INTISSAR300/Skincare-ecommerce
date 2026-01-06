import ProductGrid from "../components/product/ProductGrid";

export default function Serum({ products }) {
  const creamProducts = products.filter(
    (product) => product.category === "cream"
  );

  return (
    <main>
      <ProductGrid products={creamProducts} />
    </main>
  );
}
