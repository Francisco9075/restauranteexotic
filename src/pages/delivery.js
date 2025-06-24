import React, { useState, useEffect } from 'react';
import { ShoppingCart, Plus, Minus, Star, Clock, Truck, CheckCircle, ArrowLeft, CreditCard, Smartphone, DollarSign, Package, MapPin, User, X } from 'lucide-react';
import '../styles/DeliveryApp.css';

const produtos = [
  { 
    id: 1, 
    nome: 'Pizza Margherita', 
    preco: 8.99, 
    descricao: 'Molho de tomate, mozzarella fresca, manjericão',
    categoria: 'Pizza',
    tempo: '25-30 min',
    rating: 4.8,
    imagem: '🍕'
  },
  { 
        id: 2, 
        nome: 'Hambúrguer Artesanal', 
        preco: 6.5, 
        descricao: 'Carne angus, queijo cheddar, alface, tomate',
        categoria: 'Hambúrguer',
        tempo: '15-20 min',
        rating: 4.6,
        imagem: '🍔'
    },
    { 
        id: 3, 
        nome: 'Taco Mexicano', 
        preco: 7.2, 
        descricao: 'Carne temperada, guacamole, pico de gallo',
        categoria: 'Mexicano',
        tempo: '10-15 min',
        rating: 4.7,
        imagem: '🌮'
    },
    { 
        id: 4, 
        nome: 'Sushi Combo', 
        preco: 12.99, 
        descricao: '12 peças variadas de sushi e sashimi',
        categoria: 'Japonês',
        tempo: '20-25 min',
        rating: 4.9,
        imagem: '🍣'
    },
    { 
        id: 5, 
        nome: 'Salada Caesar', 
        preco: 5.99, 
        descricao: 'Alface romana, frango grelhado, parmesão',
        categoria: 'Salada',
        tempo: '10-12 min',
        rating: 4.5,
        imagem: '🥗'
    },
    { 
        id: 6, 
        nome: 'Lasanha Bolognesa', 
        preco: 9.99, 
        descricao: 'Massa, molho bolognesa, queijos gratinados',
        categoria: 'Italiano',
        tempo: '30-35 min',
        rating: 4.8,
        imagem: '🍝'
    }
];

const ProdutoCard = ({ produto, onAdd, onRemove, quantidade = 0 }) => {
  return (
    <div className="produto-card">
      <div className="produto-imagem">
        <span className="emoji-icon">{produto.imagem}</span>
        <div className="produto-rating">
          <Star className="star-icon" />
          <span>{produto.rating}</span>
        </div>
      </div>
      <div className="produto-info">
        <div className="produto-header">
          <h3 className="produto-nome">{produto.nome}</h3>
          <span className="produto-categoria">{produto.categoria}</span>
        </div>
        <p className="produto-descricao">{produto.descricao}</p>
        <div className="produto-detalhes">
          <div className="produto-tempo">
            <Clock size={16} />
            <span>{produto.tempo}</span>
          </div>
          <span className="produto-preco">€{produto.preco.toFixed(2)}</span>
        </div>
        <div className="produto-actions">
          {quantidade > 0 ? (
            <div className="quantidade-controls">
              <button className="btn-quantidade" onClick={() => onRemove(produto)}>
                <Minus size={16} />
              </button>
              <span className="quantidade">{quantidade}</span>
              <button className="btn-quantidade" onClick={() => onAdd(produto)}>
                <Plus size={16} />
              </button>
            </div>
          ) : (
            <button className="btn-adicionar" onClick={() => onAdd(produto)}>
              <Plus size={16} />
              Adicionar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const AlertaSucesso = ({ mensagem, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="alerta-sucesso">
      <div className="alerta-conteudo">
        <CheckCircle className="alerta-icon" size={20} />
        <span>{mensagem}</span>
        <button className="alerta-close" onClick={onClose}>
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

const FormularioPagamento = ({ pagamento, dadosPagamento, setDadosPagamento }) => {
  const handleChange = (field, value) => {
    setDadosPagamento(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (pagamento === 'cartao') {
    return (
      <div className="formulario-pagamento">
        <h4>Dados do Cartão</h4>
        <div className="form-group">
          <label>Número do Cartão</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            maxLength="19"
            value={dadosPagamento.numeroCartao || ''}
            onChange={(e) => {
              const valor = e.target.value.replace(/\D/g, '');
              const valorFormatado = valor.replace(/(\d{4})(?=\d)/g, '$1 ');
              handleChange('numeroCartao', valorFormatado);
            }}
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Validade</label>
            <input
              type="text"
              placeholder="MM/AA"
              maxLength="5"
              value={dadosPagamento.validade || ''}
              onChange={(e) => {
                const valor = e.target.value.replace(/\D/g, '');
                const valorFormatado = valor.replace(/(\d{2})(\d)/, '$1/$2');
                handleChange('validade', valorFormatado);
              }}
            />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input
              type="text"
              placeholder="123"
              maxLength="3"
              value={dadosPagamento.cvv || ''}
              onChange={(e) => handleChange('cvv', e.target.value.replace(/\D/g, ''))}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Nome no Cartão</label>
          <input
            type="text"
            placeholder="João Silva"
            value={dadosPagamento.nomeCartao || ''}
            onChange={(e) => handleChange('nomeCartao', e.target.value)}
          />
        </div>
      </div>
    );
  }

  if (pagamento === 'mbway') {
    return (
      <div className="formulario-pagamento">
        <h4>MB Way</h4>
        <div className="form-group">
          <label>Número de Telemóvel</label>
          <input
            type="text"
            placeholder="+351 9XX XXX XXX"
            maxLength="13"
            value={dadosPagamento.telefone || ''}
            onChange={(e) => {
              const valor = e.target.value.replace(/\D/g, '');
              const valorFormatado = valor.replace(/(\d{3})(\d{3})(\d{3})/, '+351 $1 $2 $3');
              handleChange('telefone', valorFormatado);
            }}
          />
        </div>
      </div>
    );
  }

  if (pagamento === 'dinheiro') {
    return (
      <div className="formulario-pagamento">
        <h4>Pagamento em Dinheiro</h4>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={dadosPagamento.precisaTroco || false}
              onChange={(e) => handleChange('precisaTroco', e.target.checked)}
            />
            Preciso de troco
          </label>
        </div>
        {dadosPagamento.precisaTroco && (
          <div className="form-group">
            <label>Valor para troco</label>
            <input
              type="number"
              placeholder="20.00"
              step="0.01"
              min="0"
              value={dadosPagamento.valorTroco || ''}
              onChange={(e) => handleChange('valorTroco', e.target.value)}
            />
          </div>
        )}
      </div>
    );
  }

  return null;
};

const Carrinho = ({ carrinho, total, pagamento, setPagamento, dadosPagamento, setDadosPagamento, onFinalizar, onVoltar, onRemove, onAdd }) => {
  const itensAgrupados = carrinho.reduce((acc, item) => {
    const existing = acc.find(i => i.id === item.id);
    if (existing) {
      existing.quantidade += 1;
    } else {
      acc.push({ ...item, quantidade: 1 });
    }
    return acc;
  }, []);

  const metodospagamento = [
    { value: 'mbway', label: 'MB Way', icon: <Smartphone size={20} /> },
    { value: 'cartao', label: 'Cartão de Crédito', icon: <CreditCard size={20} /> },
    { value: 'dinheiro', label: 'Dinheiro', icon: <DollarSign size={20} /> }
  ];

  const validarPagamento = () => {
    if (!pagamento) return false;
    
    if (pagamento === 'cartao') {
      return dadosPagamento.numeroCartao && 
             dadosPagamento.validade && 
             dadosPagamento.cvv && 
             dadosPagamento.nomeCartao;
    }
    
    if (pagamento === 'mbway') {
      return dadosPagamento.telefone && dadosPagamento.telefone.length >= 13;
    }
    
    if (pagamento === 'dinheiro') {
      return !dadosPagamento.precisaTroco || dadosPagamento.valorTroco;
    }
    
    return true;
  };

  return (
    <div className="carrinho-container">
        <br></br>
        <br></br>
        <br></br>

      <div className="carrinho-header">
        <button className="btn-voltar" onClick={onVoltar}>
          <ArrowLeft size={20} />
        </button>
        <h1>Carrinho de Compras</h1>
      </div>

      {itensAgrupados.length === 0 ? (
        <div className="carrinho-vazio">
          <ShoppingCart size={64} className="carrinho-vazio-icon" />
          <p>Seu carrinho está vazio</p>
          <button className="btn-primary" onClick={onVoltar}>
            Voltar ao Menu
          </button>
        </div>
      ) : (
        <>
          <div className="carrinho-items">
            {itensAgrupados.map((item) => (
              <div key={item.id} className="carrinho-item">
                <div className="item-info">
                  <span className="item-emoji">{item.imagem}</span>
                  <div>
                    <h4>{item.nome}</h4>
                    <p>€{item.preco.toFixed(2)} cada</p>
                  </div>
                </div>
                <div className="item-controls">
                  <button className="btn-quantidade" onClick={() => onRemove(item)}>
                    <Minus size={16} />
                  </button>
                  <span className="quantidade">{item.quantidade}</span>
                  <button className="btn-quantidade" onClick={() => onAdd(item)}>
                    <Plus size={16} />
                  </button>
                </div>
                <div className="item-total">
                  €{(item.preco * item.quantidade).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="carrinho-resumo">
            <div className="total-section">
              <div className="total-line">
                <span>Subtotal:</span>
                <span>€{total}</span>
              </div>
              <div className="total-line">
                <span>Taxa de entrega:</span>
                <span>€2.50</span>
              </div>
              <div className="total-line total-final">
                <span>Total:</span>
                <span>€{(parseFloat(total) + 2.5).toFixed(2)}</span>
              </div>
            </div>

            <div className="pagamento-section">
              <h3>Método de Pagamento</h3>
              <div className="pagamento-options">
                {metodospagamento.map((metodo) => (
                  <label key={metodo.value} className={`pagamento-option ${pagamento === metodo.value ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      value={metodo.value}
                      checked={pagamento === metodo.value}
                      onChange={(e) => setPagamento(e.target.value)}
                    />
                    <div className="option-content">
                      {metodo.icon}
                      <span>{metodo.label}</span>
                    </div>
                  </label>
                ))}
              </div>
              
              <FormularioPagamento 
                pagamento={pagamento}
                dadosPagamento={dadosPagamento}
                setDadosPagamento={setDadosPagamento}
              />
            </div>

            <button 
              className={`btn-finalizar ${!validarPagamento() ? 'disabled' : ''}`} 
              onClick={onFinalizar}
              disabled={!validarPagamento()}
            >
              Finalizar Pedido - €{(parseFloat(total) + 2.5).toFixed(2)}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const EstadoPedido = ({ estado, progresso, onNovoPedido, numeroPedido }) => {
  const etapas = [
    { id: 'confirmado', label: 'Pedido Confirmado', icon: <CheckCircle size={24} />, cor: '#27ae60' },
    { id: 'preparando', label: 'Preparando', icon: <Package size={24} />, cor: '#f39c12' },
    { id: 'recolhendo', label: 'Estafeta Recolhendo', icon: <User size={24} />, cor: '#e67e22' },
    { id: 'recolhido', label: 'Pedido Recolhido', icon: <CheckCircle size={24} />, cor: '#3498db' },
    { id: 'a-caminho', label: 'Estafeta a Caminho', icon: <Truck size={24} />, cor: '#9b59b6' },
    { id: 'proximo', label: 'Estafeta Próximo', icon: <MapPin size={24} />, cor: '#e74c3c' },
    { id: 'entregue', label: 'Entregue', icon: <CheckCircle size={24} />, cor: '#27ae60' }
  ];

  const etapaAtual = etapas.findIndex(etapa => etapa.id === estado);
  const progressoPercentual = ((etapaAtual + 1) / etapas.length) * 100;

  const getStatusText = () => {
    switch (estado) {
      case 'confirmado':
        return 'Seu pedido foi confirmado!';
      case 'preparando':
        return 'Preparando seu pedido...';
      case 'recolhendo':
        return 'Estafeta está recolhendo seu pedido';
      case 'recolhido':
        return 'Estafeta recolheu o pedido!';
      case 'a-caminho':
        return 'Estafeta está a caminho!';
      case 'proximo':
        return 'Estafeta está próximo de você!';
      case 'entregue':
        return 'Pedido entregue com sucesso!';
      default:
        return 'Processando pedido...';
    }
  };

  const getStatusIcon = () => {
    const etapa = etapas.find(e => e.id === estado);
    return React.cloneElement(etapa.icon, { 
      size: 48, 
      className: `status-icon ${estado}`,
      style: { color: etapa.cor }
    });
  };

  return (
    <div className="estado-container">

      <div className="estado-card">
        <br></br>
        <br></br>
        
        
        <div className="pedido-numero">
          <h3>Pedido #{numeroPedido}</h3>
        </div>
        
        {getStatusIcon()}
        <h2>{getStatusText()}</h2>
        
        <div className="progress-container">
          <div className="progress-bar-main">
            <div 
              className="progress-fill-main" 
              style={{ width: `${progressoPercentual}%` }}
            />
          </div>
          <div className="progress-text">
            {Math.round(progressoPercentual)}% Completo
          </div>
        </div>

        <div className="etapas-timeline">
          {etapas.map((etapa, index) => {
            const isCompleted = index <= etapaAtual;
            const isCurrent = index === etapaAtual;
            
            return (
              <div key={etapa.id} className={`timeline-item ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`}>
                <div className="timeline-icon" style={{ backgroundColor: isCompleted ? etapa.cor : '#e0e0e0' }}>
                  {React.cloneElement(etapa.icon, { 
                    size: 16, 
                    color: isCompleted ? '#fff' : '#999'
                  })}
                </div>
                <div className="timeline-content">
                  <span className="timeline-label">{etapa.label}</span>
                  {isCurrent && (
                    <div className="timeline-status">
                      <div className="pulse-dot" />
                      Em andamento
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {estado === 'entregue' && (
          <div className="entrega-completa">
            <div className="celebracao">🎉</div>
            <p>Obrigado pela sua preferência!</p>
            <div className="rating-section">
              <p>Como foi sua experiência?</p>
              <div className="stars">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} size={24} className="star-rating" />
                ))}
              </div>
            </div>
          </div>
        )}

        <button className="btn-primary" onClick={onNovoPedido}>
          {estado === 'entregue' ? 'Fazer Novo Pedido' : 'Voltar ao Menu'}
        </button>
      </div>
    </div>
  );
};

const DeliveryApp = () => {
  const [pagina, setPagina] = useState('menu');
  const [carrinho, setCarrinho] = useState([]);
  const [pagamento, setPagamento] = useState('');
  const [dadosPagamento, setDadosPagamento] = useState({});
  const [estadoPedido, setEstadoPedido] = useState('confirmado');
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todos');
  const [progresso, setProgresso] = useState(0);
  const [numeroPedido, setNumeroPedido] = useState('');
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const categorias = ['Todos', ...new Set(produtos.map(p => p.categoria))];

  const produtosFiltrados = categoriaFiltro === 'Todos' 
    ? produtos 
    : produtos.filter(p => p.categoria === categoriaFiltro);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const removerDoCarrinho = (produto) => {
    const index = carrinho.findIndex(item => item.id === produto.id);
    if (index > -1) {
      const novoCarrinho = [...carrinho];
      novoCarrinho.splice(index, 1);
      setCarrinho(novoCarrinho);
    }
  };

  const getQuantidadeProduto = (produtoId) => {
    return carrinho.filter(item => item.id === produtoId).length;
  };

  const gerarNumeroPedido = () => {
    return Math.floor(Math.random() * 900000) + 100000;
  };

  const finalizarCompra = () => {
    if (carrinho.length === 0) {
      alert('Adicione produtos ao carrinho.');
      return;
    }
    
    // Mostrar alerta de sucesso
    setMostrarAlerta(true);
    
    // Gerar número do pedido
    setNumeroPedido(gerarNumeroPedido().toString());
    
    // Aguardar um pouco antes de ir para o acompanhamento
    setTimeout(() => {
      setEstadoPedido('confirmado');
      setProgresso(0);
      setPagina('estado');
      
      // Simular as etapas do pedido
      const etapas = [
        { estado: 'preparando', tempo: 3000 },
        { estado: 'recolhendo', tempo: 5000 },
        { estado: 'recolhido', tempo: 7000 },
        { estado: 'a-caminho', tempo: 10000 },
        { estado: 'proximo', tempo: 13000 },
        { estado: 'entregue', tempo: 16000 }
      ];

      etapas.forEach(({ estado, tempo }) => {
        setTimeout(() => {
          setEstadoPedido(estado);
        }, tempo);
      });
    }, 2000);
  };

  const novoPedido = () => {
    setCarrinho([]);
    setPagamento('');
    setDadosPagamento({});
    setEstadoPedido('confirmado');
    setProgresso(0);
    setNumeroPedido('');
    setPagina('menu');
  };

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0).toFixed(2);
  const totalItens = carrinho.length;

  return (
    
    <div className="delivery-app">
        
        {mostrarAlerta && (
            
        <AlertaSucesso 
        
          mensagem="Pedido realizado com sucesso! Acompanhe seu pedido."
          onClose={() => setMostrarAlerta(false)}
        />
      )}
       
      {pagina === 'menu' && (
        <div className="menu-container">
            
       <br></br>
        <br></br>
        <br></br>
          <div className="menu-header">
            <h1>🍽️ Delivery Exotic</h1>
            <p>Sabores únicos entregues na sua porta</p>
             <div className="categorias-filter">
            {categorias.map(categoria => (
              <button
                key={categoria}
                className={`categoria-btn ${categoriaFiltro === categoria ? 'active' : ''}`}
                onClick={() => setCategoriaFiltro(categoria)}
              >
                {categoria}
              </button>
            ))}
          </div>
          </div>

         <div className="produtos-grid">
            {produtosFiltrados.map((produto) => (
              <ProdutoCard
                key={produto.id}
                produto={produto}
                onAdd={() => adicionarAoCarrinho(produto)}
                onRemove={() => removerDoCarrinho(produto)}
                quantidade={getQuantidadeProduto(produto.id)}
              />
            ))}
          </div>
           

          {totalItens > 0 && (
            <button className="carrinho-fixo" onClick={() => setPagina('carrinho')}>
              <ShoppingCart size={20} />
              <span>Ver Carrinho</span>
              <div className="carrinho-badge">{totalItens}</div>
              <span>€{total}</span>
            </button>
          )}
        </div>
        
      )}

      {pagina === 'carrinho' && (
        <Carrinho
          carrinho={carrinho}
          total={total}
          pagamento={pagamento}
          setPagamento={setPagamento}
          dadosPagamento={dadosPagamento}
          setDadosPagamento={setDadosPagamento}
          onFinalizar={finalizarCompra}
          onVoltar={() => setPagina('menu')}
          onRemove={removerDoCarrinho}
          onAdd={adicionarAoCarrinho}
        />
      )}

      {pagina === 'estado' && (
        <EstadoPedido
          estado={estadoPedido}
          progresso={progresso}
          onNovoPedido={novoPedido}
          numeroPedido={numeroPedido}
        />
      )}
    </div>
  );
};

export default DeliveryApp; 