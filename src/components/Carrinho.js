import React from 'react';

const Carrinho = ({ carrinho, total, pagamento, setPagamento, onFinalizar, onVoltar }) => {
  return (
    <div className="delivery-carrinho">
      <h1 className="delivery-title">Carrinho</h1>
      <ul className="delivery-lista">
        {carrinho.map((item, i) => (
          <li key={i}>{item.nome} - € {item.preco.toFixed(2)}</li>
        ))}
      </ul>
      <p><strong>Total:</strong> € {total}</p>

      <label>Método de Pagamento:</label>
      <select value={pagamento} onChange={(e) => setPagamento(e.target.value)}>
        <option value="">Escolhe</option>
        <option value="mbway">MBWay</option>
        <option value="cartao">Cartão de Crédito</option>
        <option value="dinheiro">Dinheiro</option>
      </select>

      <div className="delivery-actions">
        <button className="delivery-btn delivery-btn-primary" onClick={onFinalizar}>
          Finalizar Compra
        </button>
        <button className="delivery-btn" onClick={onVoltar}>Voltar</button>
      </div>
    </div>
  );
};

export default Carrinho;
