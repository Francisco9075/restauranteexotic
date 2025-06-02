import React, { useState, useEffect } from 'react';
import arara1 from '../assets/images/arara1.png';
import arara4 from '../assets/images/arara4.png';
import arara5 from '../assets/images/arara5.png';
import arara8 from '../assets/images/arara8.png';

const BirdsPage = () => {
  const [selectedBird, setSelectedBird] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showStory, setShowStory] = useState(false); // novo estado para mostrar história

  const birds = [
    {
      id: 1,
      name: "Eddy",
      description: "Conhecido pela sua cauda colorida e majestosa.",
      habitat: "Originário da Ásia",
      species: "Arara Canindé",
      image: arara8
    },
    {
      id: 2,
      name: "Oscar",
      description: "Uma arara majestosa com cores vibrantes.",
      habitat: "Florestas tropicais da América",
      species: "Arara Canindé",
      image: arara4
    },
    {
      id: 3,
      name: "Iris",
      description: "Ave bela e ameaçada, conhecida por sua inteligência.",
      habitat: "Brasil, Bolívia e Paraguai",
      species: "Arara Canindé",
      image: arara4
    },
    {
      id: 4,
      name: "Tucano Tropical",
      description: "Famoso pelo bico grande e colorido.",
      habitat: "Florestas tropicais da América",
      species: "Ramphastos toco",
      image: arara8
    },
    {
      id: 5,
      name: "Arara Azul",
      description: "Símbolo da conservação da fauna brasileira.",
      habitat: "Brasil, Bolívia e Paraguai",
      species: "Anodorhynchus hyacinthinus",
      image: arara8
    },
    {
      id: 6,
      name: "Tucano Dourado",
      description: "Tucano com tons dourados e elegância natural.",
      habitat: "Florestas tropicais da América",
      species: "Ramphastos vitellinus",
      image: arara4
    },
    {
      id: 7,
      name: "Charlie",
      description: "Arara carismática com habilidades de comunicação.",
      habitat: "Brasil, Bolívia e Paraguai",
      species: "Arara Canindé",
      image: arara8
    }
  ];

  const openModal = (bird) => {
    setSelectedBird(bird);
    setIsModalOpen(true);
    setShowStory(false); // resetar para mostrar detalhes básicos
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBird(null);
    setShowStory(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isModalOpen]);

  const BirdCard = ({ bird, onClick }) => (
    <div className="bird-card" onClick={() => onClick(bird)}>
      <img src={bird.image} alt={bird.name} className="bird-image" />
      <h3 className="bird-name">{bird.name}</h3>
      <p className="bird-description">{bird.description}</p>
      <p className="bird-habitat">Habitat: {bird.habitat}</p>
      <div className="bird-species">{bird.species}</div>
    </div>
  );

  // Conteúdo de exemplo para a história da ave
  const getBirdStory = (bird) => {
    return `
      ${bird.name} é uma ave fascinante. Esta história detalha sua origem,
      comportamento, e importância ecológica. É uma espécie que simboliza a
      beleza da fauna e destaca a necessidade de conservação em seus habitats naturais.
    `;
  };

  const Modal = ({ bird, isOpen, onClose }) => {
    if (!isOpen || !bird) return null;

    return (
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close" onClick={onClose}>×</button>

          {!showStory ? (
            <>
              <img src={bird.image} alt={bird.name} className="modal-image" />
              <h2 className="modal-title">{bird.name}</h2>
              <p className="modal-species">Espécie: {bird.species}</p>
              <p className="modal-description">{bird.description}</p>
              <div className="modal-habitat"><strong>Habitat:</strong> {bird.habitat}</div>

              {/* Botão Leia mais */}
              <button
                className="read-more-button"
                onClick={() => setShowStory(true)}
                aria-label={`Leia mais sobre ${bird.name}`}
              >
                Leia mais sobre a ave <span className="arrow">→</span>
              </button>
            </>
          ) : (
            <>
              <h2 className="modal-title">{bird.name} - História</h2>
              <p className="modal-story">{getBirdStory(bird)}</p>
              {/* Botão para voltar */}
              <button
                className="read-more-button back-button"
                onClick={() => setShowStory(false)}
                aria-label="Voltar para detalhes da ave"
              >
                ← Voltar
              </button>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="birds-page">
      <section className="birds-section">
        <br />
        <div className="container">
          <h1 className="main-title">As Nossas Aves</h1>
          <p className="subtitle">Descubra a beleza e majestade das nossas aves exóticas</p>
          <div className="birds-grid">
            {birds.map((bird) => (
              <BirdCard key={bird.id} bird={bird} onClick={openModal} />
            ))}
          </div>
        </div>
      </section>

      <Modal bird={selectedBird} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default BirdsPage;
