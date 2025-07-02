
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import FraseBienvenida from './components/FraseBienvenida';
import Diseno1 from './Diseño1';

function App() {
  return (
    <Navbar />
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<FraseBienvenida />} />
    //     <Route path="/diseño1" element={<Diseno1 />} />
    //     <Route path="/diseño2" element={<Diseno />} />
    //     <Route path="/diseño3" element={<Diseno3 />} />
    //   </Routes>
    // </Router>
  );
}

export default App;

