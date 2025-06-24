import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Dashboard from './components/dashboard';
import BirdsPage from './pages/BirdsPage';
import ReservationPage from './pages/ReservationPage';
import DeliveryApp from './pages/delivery';
import './styles/custom.scss';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aves" element={<BirdsPage />} />
        <Route path="/reservas" element={<ReservationPage />} />
        <Route path='/Delivery' element={<DeliveryApp/>}/>
        <Route path='/Dashboard' element={<Dashboard />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;