
import { useEffect,useState } from "react";
import { BrowserRouter,Routes,Route, data } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Nav from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Serum from "./pages/serum";
import Cream from "./pages/cream";
import Toner from "./pages/toner";
import Ampoule from "./pages/ampoule";

export default function App(){
    const [products,steProducts]=useState([])

    useEffect(()=>{
        fetch("/data/skincare.json")
        .then(res=>res.json())
        .then(data=>{
            steProducts(data)
        })
    },[])

    return (
        <BrowserRouter>
            <Nav/>
          <Routes>
          {/* nav path */}
            <Route path="/" element={<Home products={products}/>}/>
            <Route path="/Serums" element={<Serum products={products}/>}/>
            <Route path="/Creams" element={<Cream products={products}/>}/>
            <Route path="/Toners" element={<Toner products={products}/>}/>
            <Route path="/Ampoules" element={<Ampoule products={products}/>}/>
            <Route path="/Details/:id" element={<ProductDetails products={products}/>}/>
            {/* footer path */}
            <Route path="/About" element={<About/>}/>
            <Route path="/Shop" element={<Shop />}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    )
}

