import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Astro from './components/pages/Astro';
import Current from './components/pages/Current';
import Four from './components/pages/Four';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path='current' element={<Current />} />
       <Route path='four' element={<Four />} />
       <Route path='astro' element={<Astro />} />
     </Routes>
    </div>
  );
}

export default App;
