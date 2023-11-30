import React from "react";
import Nav from "../nav/Nav";
import Intro from "../intro/Intro";
import About from "../../pages/about/About";
import ProductsList from "../../pages/ProductList/ProductsList";
import Contact from "../../pages/contact/Contact";
// import Toggle from "../toggle/Toggle";
// import { ThemeContext } from "./components/Context";
import Shared from "../../pages/shared/Shared";
import Skills from "../skills/Skills";

export const FullPage = () => {
  return (
    <div className="FullPage">
      <Intro />
      <About />
      <ProductsList />
      <Contact />
      <Shared />
      {/* <Skills /> */}
      {/* <ThemeContext/> */}
    </div>
  );
};
