import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Intro from "./components/intro/Intro";
import About from "./pages/about/About";
import ProductsList from "./pages/ProductList/ProductsList";
import Contact from "./pages/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./components/Context";
import Shared from "./pages/shared/Shared";
import Skills from "./components/skills/Skills";
import { FullPage } from "./components/fullPage/FullPage";

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
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/shared" element={<Shared />}></Route>
        <Route path="/fullpage" element={<FullPage />}></Route>
      </Routes>

      <Toggle />
    </div>
  );
};

export default App;
