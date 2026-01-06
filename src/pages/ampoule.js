import ProductGrid from "../components/product/ProductGrid";

export default function Serum({ products }) {
  const AmpoulProducts = products.filter(
    (product) => product.category === "ampoule"
  );

  return (
    <main>
      <ProductGrid products={AmpoulProducts} />
    </main>
  );
}
