import React from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import Intro from "./intro/Intro";
import ProductsList from "./ProductList/ProductsList";

function Home() {
  return (
    <div>
      <About />
      <Intro />
      <ProductsList />
      <Contact />
    </div>
  );
}

export default Home;
