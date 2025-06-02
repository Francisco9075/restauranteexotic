import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-5 ">
      <div className="container py-5">
        <h2 className="text-center display-5 fw-bold">Contacto</h2>
        <p className="text-center fs-5 text-muted">Fale connosco</p>
        <div className="gold-divider"></div>

        <div className="row mt-5 g-5">
          <div className="col-lg-6">
            <h3 className="fw-bold mb-4">Envie-nos uma mensagem</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome</label>
                <input type="text" className="form-control py-3" id="name" placeholder="Seu nome" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control py-3" id="email" placeholder="Seu email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensagem</label>
                <textarea className="form-control py-3" id="message" rows="5" placeholder="Sua mensagem"></textarea>
              </div>
              <button type="submit" className="btn btn-blue btn-lg w-100 py-3 fw-bold">
                Enviar Mensagem
              </button>
              </form>
          </div>
          
          <div className="col-lg-6">
            <h3 className="fw-bold mb-4">Informações</h3>
            <div className="bg-white p-4 rounded shadow-sm">
              <div className="d-flex mb-4">
                <FaMapMarkerAlt className="text-warning mt-1 me-3 fs-5" />
                <div>
                  <h5 className="fw-bold">Morada</h5>
                  <p className="text-muted mb-0">Av. Principal, 1234, Lisboa</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <FaPhone className="text-warning mt-1 me-3 fs-5" />
                <div>
                  <h5 className="fw-bold">Telefone</h5>
                  <p className="text-muted mb-0">+351 21 123 4567</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <FaEnvelope className="text-warning mt-1 me-3 fs-5" />
                <div>
                  <h5 className="fw-bold">Email</h5>
                  <p className="text-muted mb-0">geral@exoticrestaurante.pt</p>
                </div>
              </div>

              <div className="d-flex">
                <FaClock className="text-warning mt-1 me-3 fs-5" />
                <div>
                  <h5 className="fw-bold">Horário</h5>
                  <p className="text-muted mb-0">Terça a Domingo: 18h00 - 23h00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;