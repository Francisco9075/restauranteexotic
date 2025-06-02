import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo.png';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Exotic Restaurante/Bar" />
          <span className="fs-4 fw-bold">Exotic <span className="text-warning">Restaurante/Bar</span></span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="/#home">Início</a></li>
            <li className="nav-item"><a className="nav-link" href="/#sobre">Sobre</a></li>
            <li className="nav-item"><a className="nav-link" href="/#menu">Menu</a></li>
            <li className="nav-item"><Link className="nav-link" to="/aves">Aves</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/reservas">Reservas</Link></li>
            <li className="nav-item"><a className="nav-link" href="/#contacto">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;