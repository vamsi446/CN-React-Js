import "./styles.css";
import { Component } from "react";
import Navbar from "./Navbar"
import About from "./About";
import Hero from "./Hero"
export default function App() {
  // Write this code in Navbar.js file


  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
