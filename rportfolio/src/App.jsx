import Nav from "./components/nav/Nav"
import Intro from './components/intro/Intro'
import About from './components/about/About';
import SkillsList from "./components/skillsList/SkillsList";
import Contact from "./components/contact/Contact";
import Theme from "./components/theme/Theme";
const App= () =>{
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />
      <SkillsList />
      <Contact />
      <Theme />
    </div>
  );
}

export default App;
