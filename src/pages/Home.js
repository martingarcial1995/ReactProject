import React from "react";
import Navbar from "../components/Navbar.js";
import "../styles/Home.css";
import logo from "../logo.svg";

const Home = () => (
  <div>
    <Navbar />
    <div className="home__container">
      <h1 className="home__title">Bienvenido al proyecto de React</h1>
      <div className="image">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  </div>
);

export default Home;
