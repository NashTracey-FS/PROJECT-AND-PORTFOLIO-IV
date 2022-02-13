import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Astro from './components/pages/Astro';
import Current from './components/pages/Current';
import Four from './components/pages/Four';
import Nav from './components/Nav';

function App() {
  return (
    <main>
      <Nav/>
    <div className="App">
     <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path='home' element={<Home />}/>
       <Route path='current' element={<Current />} />
       <Route path='four' element={<Four />} />
       <Route path='astro' element={<Astro />} />
     </Routes>
    </div>
</main>
  );
}

export default App;
