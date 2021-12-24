import React from "react";
import Header from "./components/Header"
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomeScreen from "../src/components/screens/HomeScreen"
import ProductScreen from "./components/screens/ProductScreen";
import Cart from "../src/components/screens/Cart"
import Login from "../src/components/screens/Login"
import { Container } from "react-bootstrap"
import "./app.css"



const App = () => {
  return (
    <Router>
      <Header />

      <main className="py-3">

        <Container>
          <Routes>

            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/product/:id" element={<ProductScreen />}></Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>

        </Container>


      </main>
      <Footer />

    </Router>

  );
}

export default App;
