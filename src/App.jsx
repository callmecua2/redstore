import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./Pages/First";
import Main from "./Pages/Main";
import Cart from "./Pages/Cart";
import Categories from "./components/Categories";
import Intro from "./Pages/Intro";
import Navbar from "./components/Navbar";
import { CartContext } from "./Pages/Cart";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (details) => {
    setCartItem((prevCartItems) => {
      const itemExist = prevCartItems.find((item) => item.id === details.id);
      if (itemExist) {
        alert(`already exist`);
        return prevCartItems;
      } else {
        alert('added to your Cart')
        return [...prevCartItems, { ...details, unit: 1 }];
      }
    });
    console.log(cartItem);
  };

  useEffect(() => {
    const json = localStorage.getItem("cartItem");
    const savedCart = JSON.parse(json);
    if (savedCart) {
      setCartItem(savedCart);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cartItem);
    if (cartItem.length >= 1) {
      localStorage.setItem("cartItem", json);
    }
  }, [cartItem]);

  return (
    <CartContext.Provider value={{ cartItem, addToCart, setCartItem }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/all" element={<Main />} />
          <Route path="/categories/:categoryID/" element={<Categories />} />
          <Route path="/product/:productID" element={<Cart />} />
          <Route />
        </Routes>
        <Footer />
      </Router>
    </CartContext.Provider>
  );
}

export default App;
