import './App.css';
import Nav from "./components/nav/Nav"
import Intro from './components/intro/Intro'
import About from './components/about/About';
import Skills from './components/skils/Skills';
function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />
      <Skills />
    </div>
  );
}

export default App;
