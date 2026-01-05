import Hero from "../components/hero/hero";
import ProductGrid from "../components/product/ProductGrid";


export default function Home({products}){
    return (
        <>
        
         <Hero/>
        <main>
             <ProductGrid products={products} />
        </main>
        </>
    )
}