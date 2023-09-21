import Nav from "./components/nav/Nav"
import Intro from './components/intro/Intro'
import About from './components/about/About';
import SkillsList from "./components/skillsList/SkillsList";
import Contact from "./components/contact/Contact";
const App= () =>{
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />
      <SkillsList />
      <Contact />
    </div>
  );
}

export default App;
