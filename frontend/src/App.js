import React from "react";
import Header from "./components/Header"
import Footer from './components/Footer'
import HomeScreen from "../src/components/screens/HomeScreen"
import { Container } from "react-bootstrap"
import "./app.css"



const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">

        <Container>
          <HomeScreen />
        </Container>


      </main>
      <Footer />

    </>
  );
}

export default App;
