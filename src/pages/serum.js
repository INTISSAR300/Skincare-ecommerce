import ProductGrid from "../components/product/ProductGrid";

export default function Serum({ products }) {
  const serumProducts = products.filter(
    (product) => product.category === "serum"
  );

  return (
    <main>
      <ProductGrid products={serumProducts} />
    </main>
  );
}
