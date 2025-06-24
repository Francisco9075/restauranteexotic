import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-5">
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-md-4">
            <h4 className="fw-bold fs-3 mb-4">Exotic <span className="text-warning">RESTAURANT/BAR</span></h4>
            <p className="text-white-50">
              Uma experiência gastronômica única com sabores exóticos e ambiente sofisticado.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="#" className="text-white fs-5"><FaFacebook /></a>
              <a href="#" className="text-white fs-5"><FaInstagram /></a>
              <a href="#" className="text-white fs-5"><FaTwitter /></a>
            </div>
          </div>

          <div className="col-md-2">
            <h5 className="fw-bold mb-4">Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/#home" className="text-white-50 text-decoration-none">Início</a></li>
              <li className="mb-2"><a href="/#sobre" className="text-white-50 text-decoration-none">Sobre</a></li>
              <li className="mb-2"><a href="/#menu" className="text-white-50 text-decoration-none">Menu</a></li>
              <li className='mb-2'><a className="text-white-50 text-decoration-none" href="/Delivery">Delivery</a></li>
              <li className="mb-2"><Link className="text-white-50 text-decoration-none" to="/aves">Aves</Link></li>
              <li className="mb-2"><Link className="text-white-50 text-decoration-none"to="/reservas">Reservas</Link></li>
              <li className="mb-2"><a href="/#contacto" className="text-white-50 text-decoration-none">Contato</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="fw-bold mb-4">Horário</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2">Terça - Quinta: 18h - 22h</li>
              <li className="mb-2">Sexta - Sábado: 18h - 23h</li>
              <li>Domingo: 12h - 21h</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="fw-bold mb-4">Newsletter</h5>
            <p className="text-white-50 mb-3">Assine para receber novidades</p>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Seu email" />
              <button className="btn btn-warning" type="button">
                OK
              </button>
            </div>
          </div>
        </div>

        <hr className="my-4 border-secondary" />

        <div className="text-center text-white-50">
          <p className="mb-0">&copy; {new Date().getFullYear()} Exotic RESTAURANT/BAR. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;