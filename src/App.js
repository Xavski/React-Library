import Footer from "./components/Footer";
import React, { useState,useEffect } from 'react';
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";

function App() {
  const [cart,setCart] = useState([]);
  function addToCart(book){
    setCart([...cart,book])
  }

  useEffect(()=> {  //since console.log in function is asyncronous
    console.log(cart)
  },[cart])  //everytime cart changes it will console.log
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* exact where path cannot be altered and output same page */}
          <Route path="/books" element={<Books books={books} />} />
          {/* send props to route */}
          <Route path="/books/:id" element={<BookInfo books={books} addToCart = {addToCart} cart={cart}/>} />
          <Route path="/cart" element={<Cart books={books}/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
