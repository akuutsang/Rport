import Nav from "./components/nav/Nav"
import Intro from './components/intro/Intro'
import About from './components/about/About';
import SkillsList from "./components/skillsList/SkillsList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./components/Context";
import { useContext } from "react";

const App= () =>{

    const theme = useContext (ThemeContext);
    const darkMode = theme.state.darkMode;
    
   return ( 
    <div 
    style={{ 
      background:darkMode ? "#222" : "white", 
      color: darkMode && "white"
    }}
    >
      <Nav />
      <Intro />
      <About />
      <SkillsList />
      <Contact />
      <Toggle />
    </div>
  );
   
}

export default App;
