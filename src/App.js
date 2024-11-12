import React from "react";
import NavBar from "./Components/NavBar/NavBar.js";
import "./App.css";
import Banner from "./Components/Banner/Banner.js";
import HexnodeUem from "./Components/HexnodeUem/HexnodeUem.js";
import "./Components/HexnodeUem/HexnodeUem.css";
import "./main.js"
import Footer from "./Components/Footer/Footer.js";
import Management from "./Components/Management/Management.js";
import './Components/Management/Management.css'
import AccordionComponent from "./Components/MultiPlatform/MultiPlatform.js";
import "./Components/MultiPlatform/MultiPlatform.css"
import CustomersSay from "./Components/CustomersSay/CustomersSay.js";
import "./Components/CustomersSay/CustomersSay.css";



function App() {
  return (
    <div className="App __className_aeca05">
      <NavBar />
      <main class="scroll-smooth main-container ads-container">
        <Banner />
       <HexnodeUem/>
       <Management/>
       <AccordionComponent/>
       <CustomersSay/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
