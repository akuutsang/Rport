import './App.css';
import Nav from "./components/nav/Nav"
import Intro from './components/intro/Intro'
import About from './components/about/About';
function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />
    </div>
  );
}

export default App;
