import React from 'react';
import { FaAward, FaHome, FaUsers } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-5">
      <div className="container py-5">
        <h2 className="text-center display-5 fw-bold">Sobre Nós</h2>
        <p className="text-center fs-5 text-muted">Conheça a nossa história</p>
        <div className="gold-divider"></div>

        <div className="row align-items-center mt-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h3 className="fw-bold mb-4">Uma jornada de sabores exóticos</h3>
            <p className="mb-4">
              O Exotic RESTAURANT/BAR nasceu da paixão por sabores únicos e experiências gastronômicas memoráveis. Desde 2010, temos servido pratos que combinam técnicas culinárias de diversos países com ingredientes frescos e de alta qualidade.
            </p>
            <p className="mb-4">
              Nossa equipe é formada por chefs talentosos e apaixonados, treinados nas melhores escolas culinárias do mundo.
            </p>
            <p>
              No Exotic, acreditamos que a comida tem o poder de unir pessoas e criar memórias duradouras.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="ratio ratio-16x9">
              <img 
                src="/assets/images/about.jpg" 
                alt="Restaurante" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>

        <div className="row mt-5 g-4">
          <div className="col-md-4">
            <div className="feature-card p-4 rounded text-center h-100">
              <FaAward className="feature-icon mx-auto mb-3" />
              <h4 className="fw-bold">Ingredientes Premium</h4>
              <p>Utilizamos apenas ingredientes frescos e de alta qualidade</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card p-4 rounded text-center h-100">
              <FaHome className="feature-icon mx-auto mb-3" />
              <h4 className="fw-bold">Ambiente Sofisticado</h4>
              <p>Espaço elegante e aconchegante para momentos especiais</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card p-4 rounded text-center h-100">
              <FaUsers className="feature-icon mx-auto mb-3" />
              <h4 className="fw-bold">Experiência Única</h4>
              <p>Gastronomia de alta qualidade com serviço memorável</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;