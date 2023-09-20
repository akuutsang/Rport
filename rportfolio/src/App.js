import './App.css';
import Nav from "./components/nav/Nav"
import Intro from './components/intro/Intro'
import About from './components/about/About';
import SkillsList from './components/pages/skillsList/SkillsList';
function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />
      <SkillsList />
    </div>
  );
}

export default App;
