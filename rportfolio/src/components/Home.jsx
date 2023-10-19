import React from "react";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Intro from "./intro/Intro";
import ProductsList from "../pages/ProductList/ProductsList";

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
