import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import BirdsPage from './pages/BirdsPage';
import ReservationPage from './pages/ReservationPage';
import './styles/custom.scss';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aves" element={<BirdsPage />} />
        <Route path="/reservas" element={<ReservationPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;