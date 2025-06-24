import { Route, Routes } from "react-router"


import Header from "./components/Header"

import Productlandingpage from "./components/Productlandingpage"

import Home from "./Home"
import Footer from "./components/Footer"
import Comment from "./components/Comment"
import About from "./About"
import Contact from "./components/Contact"
import BlogPage from "./BlogPage"

import Products from "./Products"
import ProductDetailsPage from "./components/ProductDetailsPage"

import { useEffect, useState } from "react"
import CartList from "./components/CartList"
import { products } from "./Utilities/productsCollection"


function App() {


  const [productId, setProductId] = useState(0);

  const [cart, setCart] = useState([]);

  useEffect(() => {

    const filterObject = products.filter(productItem => productItem.id == productId)
    setCart([...cart,  ...filterObject])

  }, [productId])




  return (
    <>
      <Header cart={cart} />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blogs" element={<BlogPage />} />

        <Route path="/products/sofa" element={<ProductDetailsPage title="Sofa" />} />
        <Route path="/products/chair" element={<ProductDetailsPage title="Chair" />} />
        <Route path="/products/furniture" element={<ProductDetailsPage title="Furniture" />} />
        <Route path="/products/table" element={<ProductDetailsPage title="Table" />} />
        <Route path="/products/new_furniture" element={<ProductDetailsPage title="New Furniture" />} />
        <Route path="/products/special_furniture" element={<ProductDetailsPage title="Special Furniture" />} />

        <Route path="/products/:id" element={<Productlandingpage setProductId={setProductId}  />} />
        <Route path="/comments" element={<Comment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartList cart={cart} setCart={setCart} />} />


      </Routes>


      <Footer />












    </>
  )
}

export default App
