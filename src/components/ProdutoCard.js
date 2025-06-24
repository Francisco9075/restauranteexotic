import React from 'react';

const ProdutoCard = ({ produto, onAdd }) => {
  return (
    <div className="delivery-card">
      <h3>{produto.nome}</h3>
      <p>€ {produto.preco.toFixed(2)}</p>
      <button className="delivery-btn" onClick={onAdd}>Adicionar</button>
    </div>
  );
};

export default ProdutoCard;
