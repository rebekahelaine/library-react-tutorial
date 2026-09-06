import './index.css';
import Nav from './components/Nav.jsx'
import Landing from './components/Landing.jsx'
import Highlights from './components/Highlights.jsx'
import Features from './components/Features.jsx'
import Discounted from './components/Discounted.jsx'

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Features />
      <Discounted />
    </div>
  );
}

export default App;
