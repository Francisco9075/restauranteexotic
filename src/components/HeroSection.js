import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section" style={{ minHeight: '100vh',  backgroundSize: 'contain' }}>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-8 mx-auto text-center text-white">
            <h1 className="display-5 fw-bold mb-4"></h1>
            <p className=" text-herosection fs-4 mb-5">Sabores exóticos numa experiência única</p>
            <div className="d-flex flex-column flex-md-row  justify-content-center gap-3">
              <a href="/reservas" className="btn btn-blue btn-lg px-3 py-3 fw-bold">
                Reservar Mesa
              </a>
              <a href="/aves" className="btn-cornwall btn-lg px-3 py-3 fw-bold">
                Conheça Nossas Aves
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;