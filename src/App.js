
import { useEffect,useState } from "react";
import { BrowserRouter,Routes,Route, data } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Nav from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

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
            <Route path="/" element={<Home products={products}/>}/>
            <Route path="/About" element={<About products={products}/>}/>
            <Route path="/Shop" element={<Shop products={products}/>}/>
            <Route path="/Details" element={<ProductDetails products={products}/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    )
}

