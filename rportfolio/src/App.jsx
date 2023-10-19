import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/nav/Nav";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductsList from "./components/ProductList/ProductsList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./components/Context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        background: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Nav />
      <Routes>
        <Route path="/Rport" element={<Intro />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<ProductsList />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/" element={<Intro />}></Route>
      </Routes>
      <Toggle />
    </div>
  );
};

export default App;
