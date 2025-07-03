import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FraseBienvenida from './components/FraseBienvenida';
import Diseno1 from './pages/Diseno1';
import Diseno2 from './pages/Diseno2';
import Diseno3 from './pages/Diseno3';
import Card from './pages/Card';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FraseBienvenida />} />
        <Route path="/diseño1" element={<Diseno1 />} />
        <Route path="/diseño2" element={<Diseno2 />} />
        <Route path="/diseño3" element={<Diseno3 />} />
        <Route path="/diseño4" element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;
