import React from 'react';

const EstadoPedido = ({ estado, onNovoPedido }) => {
  return (
    <div className="delivery-estado">
      <h1 className="delivery-title">Estado do Pedido</h1>
      <p>{estado}</p>
      <button className="delivery-btn delivery-btn-primary" onClick={onNovoPedido}>
        Novo Pedido
      </button>
    </div>
  );
};

export default EstadoPedido;
