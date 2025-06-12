import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Home';
import Classmates from './Components/Classmates';
import MemoryPage from './Components/MemoryPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/classmates" element={<Classmates />} />
        <Route path="/memory/:name" element={<MemoryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
