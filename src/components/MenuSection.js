import React, { useState } from 'react';
import { FaUtensils, FaWineGlassAlt, FaIceCream, FaCheese } from 'react-icons/fa';

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('entradas');

  const menuItems = {
    entradas: [
      { name: 'Ceviche Exótico', description: 'Peixe branco marinado em lima com pimenta, coentro e manga', price: '€42,90' },
      { name: 'Camarão Flambado', description: 'Camarões flambados no conhaque com ervas finas e manteiga de limão', price: '€56,50' }
    ],
    principais: [
      { name: 'Risoto de Frutos do Mar', description: 'Camarão, lula, polvo e mexilhões em risoto de açafrão', price: '€89,90' },
      { name: 'Filé Mignon ao Funghi', description: 'Medalhão grelhado com molho de cogumelos selvagens', price: '€95,90' }
    ],
    sobremesas: [
      { name: 'Crème Brûlée de Lavanda', description: 'Clássico francês com infusão de lavanda', price: '€32,90' },
      { name: 'Soufflé de Chocolate', description: 'Soufflé quente com calda de frutas vermelhas', price: '€36,90' }
    ],
    bebidas: [
      { name: 'Exotic Signature', description: 'Coquetel com rum, licor de coco e maracujá', price: '€34,90' },
      { name: 'Vinho Tinto Reserva', description: 'Taça de vinho selecionado', price: '€42,90' }
    ]
  };
  const tabIcons = {
    entradas: <FaCheese className="me-2" />,
    principais: <FaUtensils className="me-2" />,
    sobremesas: <FaIceCream className="me-2" />,
    bebidas: <FaWineGlassAlt className="me-2" />
  };

  return (
    <section id="menu" className="py-5 bg-light">
      <div className="container py-5">
        <h2 className="text-center display-5 fw-bold text-menu">Os nossos menus</h2>
        <p className="text-center fs-5 text-menu">Sabores exclusivos</p>
        <div className="gold-divider"></div>

        <div className="mt-5  ">
          <ul className="nav nav-pills justify-content-center flex-wrap mb-4 ">
            {Object.keys(menuItems).map(tab => (
              <li key={tab} className="nav-item mx-1 mb-2">
                <button
                  className={`nav-link text-menu ${activeTab === tab ? 'active bg-secondary' : ''} d-flex align-items-center`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tabIcons[tab]}
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          <div className="row g-4 ">
            {menuItems[activeTab].map((item, index) => (
              <div key={index} className="col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100">
                  <div className="d-flex justify-content-between mb-2">
                    <h4 className="fw-bold text-primary">{item.name}</h4>
                    <span className="text-warning fw-bold">{item.price}</span>
                  </div>
                  <p className="text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;