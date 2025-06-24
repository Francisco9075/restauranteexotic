
import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  Package, 
  Clock, 
  TrendingUp, 
  Eye,
  ChefHat,
  CreditCard,
  UserCheck,
  Truck,
  Menu,
  X,
  Home,
  BarChart3,
  Settings,
  Edit,
  Trash2,
  Plus,
  Save
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const [selectedTable, setSelectedTable] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('add');
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);

  // Dados simulados baseados na estrutura da base de dados
  const [mockData, setMockData] = useState({
    reservas: [
      { id: 1, nome_cliente: 'João Silva', email_cliente: 'joao@email.com', contacto_cliente: '912345678', data_reserva: '2024-06-23', data_criacao: '2024-06-20', num_pessoas: 4, observacoes: 'Mesa junto à janela' },
      { id: 2, nome_cliente: 'Maria Santos', email_cliente: 'maria@email.com', contacto_cliente: '923456789', data_reserva: '2024-06-24', data_criacao: '2024-06-21', num_pessoas: 2, observacoes: 'Aniversário' },
      { id: 3, nome_cliente: 'Carlos Ferreira', email_cliente: 'carlos@email.com', contacto_cliente: '934567890', data_reserva: '2024-06-25', data_criacao: '2024-06-22', num_pessoas: 6, observacoes: 'Jantar de negócios' }
    ],
    mesas: [
      { id: 1, quant_pessoas: 4, ocupada: false },
      { id: 2, quant_pessoas: 2, ocupada: true },
      { id: 3, quant_pessoas: 6, ocupada: false },
      { id: 4, quant_pessoas: 4, ocupada: true },
      { id: 5, quant_pessoas: 8, ocupada: false }
    ],
    pedidos: [
      { id: 1, quantidade: 2, preco: 25.50, data_pedido: '2024-06-23 12:30' },
      { id: 2, quantidade: 1, preco: 18.90, data_pedido: '2024-06-23 13:15' },
      { id: 3, quantidade: 3, preco: 42.75, data_pedido: '2024-06-23 14:00' },
      { id: 4, quantidade: 1, preco: 15.20, data_pedido: '2024-06-23 15:30' }
    ],
    ementa_items: [
      { id: 1, nome_items: 'Francesinha', descricao: 'Especialidade da casa', preco: 12.50, imagem: 'francesinha.jpg', tempo_estimado: '25 min', ingredientes: 'Pão, fiambre, linguiça, salsicha, queijo, molho' },
      { id: 2, nome_items: 'Bacalhau à Brás', descricao: 'Prato tradicional', preco: 15.90, imagem: 'bacalhau.jpg', tempo_estimado: '20 min', ingredientes: 'Bacalhau, batata palha, ovos, cebola' },
      { id: 3, nome_items: 'Bifana', descricao: 'Sanduíche tradicional', preco: 8.50, imagem: 'bifana.jpg', tempo_estimado: '10 min', ingredientes: 'Pão, bifana, mostarda' }
    ],
    empregados: [
      { id: 1, nome_empregados: 'Carlos Mendes', email: 'carlos@restaurante.com', contacto: '912000111', cargo: 'Chef', iban: 'PT50123456789', data_admissao: '2023-01-15', salario: 1200.00, ativo: true },
      { id: 2, nome_empregados: 'Ana Costa', email: 'ana@restaurante.com', contacto: '913000222', cargo: 'Empregada Mesa', iban: 'PT50987654321', data_admissao: '2023-03-10', salario: 800.00, ativo: true },
      { id: 3, nome_empregados: 'Pedro Santos', email: 'pedro@restaurante.com', contacto: '914000333', cargo: 'Cozinheiro', iban: 'PT50111222333', data_admissao: '2023-05-20', salario: 900.00, ativo: true }
    ]
  });

  const [chartData, setChartData] = useState([
    { month: 'Jan', vendas: 180, reservas: 45 },
    { month: 'Fev', vendas: 200, reservas: 52 },
    { month: 'Mar', vendas: 165, reservas: 48 },
    { month: 'Abr', vendas: 220, reservas: 61 },
    { month: 'Mai', vendas: 185, reservas: 55 },
    { month: 'Jun', vendas: 240, reservas: 68 }
  ]);

  const [pieData, setPieData] = useState([
    { name: 'Francesinha', value: 35, color: '#c8a97e' },
    { name: 'Bacalhau', value: 25, color: '#3d6b7a' },
    { name: 'Bifana', value: 20, color: '#2d4a53' },
    { name: 'Outros', value: 20, color: '#1a2e35' }
  ]);

  const [metrics, setMetrics] = useState({
    reservasAtivas: { value: '12', change: '8.2' },
    receitaTotal: { value: '€2,847', change: '12.5' },
    mesasOcupadas: { value: '8/12', change: '5.1' },
    pedidosHoje: { value: '47', change: '-2.3' }
  });

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Função para atualizar todos os dados
  const handleUpdateAll = async () => {
    setIsUpdating(true);
    
    // Simular chamada à API
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Gerar novos dados aleatórios para simular atualizações
    const generateRandomData = () => {
      const newChartData = chartData.map(item => ({
        ...item,
        vendas: Math.floor(Math.random() * 100) + 150,
        reservas: Math.floor(Math.random() * 30) + 40
      }));
      
      const newPieData = pieData.map(item => ({
        ...item,
        value: Math.floor(Math.random() * 20) + 15
      }));
      
      const newMetrics = {
        reservasAtivas: { 
          value: String(Math.floor(Math.random() * 20) + 5), 
          change: (Math.random() * 20 - 10).toFixed(1) 
        },
        receitaTotal: { 
          value: `€${(Math.random() * 2000 + 2000).toFixed(0)}`, 
          change: (Math.random() * 30 - 5).toFixed(1) 
        },
        mesasOcupadas: { 
          value: `${Math.floor(Math.random() * 12) + 1}/12`, 
          change: (Math.random() * 15 - 5).toFixed(1) 
        },
        pedidosHoje: { 
          value: String(Math.floor(Math.random() * 40) + 30), 
          change: (Math.random() * 20 - 10).toFixed(1) 
        }
      };
      
      return { newChartData, newPieData, newMetrics };
    };
    
    const { newChartData, newPieData, newMetrics } = generateRandomData();
    
    setChartData(newChartData);
    setPieData(newPieData);
    setMetrics(newMetrics);
    setCurrentTime(new Date());
    
    setIsUpdating(false);
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'reservas', label: 'Reservas', icon: Calendar },
    { id: 'mesas', label: 'Mesas', icon: Package },
    { id: 'pedidos', label: 'Pedidos', icon: ShoppingCart },
    { id: 'ementa_items', label: 'Ementa', icon: ChefHat },
    { id: 'empregados', label: 'Empregados', icon: Users },
    { id: 'entregas', label: 'Entregas', icon: Truck },
    { id: 'transacoes', label: 'Transações', icon: CreditCard },
    { id: 'fornecedores', label: 'Fornecedores', icon: Truck },
    { id: 'admin', label: 'Admin', icon: UserCheck }
  ];

  // Funções do Modal
  const openModal = (type, item = null) => {
    setModalType(type);
    setEditingItem(item);
    if (type === 'edit' && item) {
      setFormData(item);
    } else {
      setFormData({});
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingItem(null);
    setFormData({});
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = () => {
    if (modalType === 'add') {
      const newId = Math.max(...mockData[selectedTable].map(item => item.id)) + 1;
      const newItem = { ...formData, id: newId };
      setMockData(prev => ({
        ...prev,
        [selectedTable]: [...prev[selectedTable], newItem]
      }));
    } else if (modalType === 'edit') {
      setMockData(prev => ({
        ...prev,
        [selectedTable]: prev[selectedTable].map(item => 
          item.id === editingItem.id ? { ...formData, id: editingItem.id } : item
        )
      }));
    }
    closeModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Tem certeza que deseja apagar este item?')) {
      setMockData(prev => ({
        ...prev,
        [selectedTable]: prev[selectedTable].filter(item => item.id !== id)
      }));
    }
  };

  const MetricCard = ({ title, value, change, changeType, icon: Icon, color }) => (
    <div className="metric-card">
      <div className="metric-header">
        <div className="metric-info">
          <h3>{title}</h3>
          <div className="metric-value">{value}</div>
        </div>
        <div className={`metric-icon ${color}`}>
          <Icon size={24} />
        </div>
      </div>
      <div className={`metric-change ${changeType}`}>
        <span className="change-indicator">
          {changeType === 'positive' ? '+' : ''}{change}%
        </span>
      </div>
    </div>
  );

  const Modal = () => {
    if (!showModal) return null;

    const currentData = mockData[selectedTable];
    const fields = currentData.length > 0 ? Object.keys(currentData[0]).filter(key => key !== 'id') : [];

    return (
      <div className="modal-overlay" onClick={closeModal}>
       
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
             
          <div className="modal-header">
            <h3>{modalType === 'add' ? 'Adicionar Novo' : 'Editar'} {selectedTable.charAt(0).toUpperCase() + selectedTable.slice(1)}</h3>
            <button className="modal-close" onClick={closeModal}>
              <X size={20} />
            </button>
          </div>
          <div className="modal-body">
            <div>
              {fields.map(field => (
                <div key={field} className="form-group">
                  <label>{field.replace(/_/g, ' ').toUpperCase()}</label>
                  {field === 'observacoes' || field === 'descricao' || field === 'ingredientes' ? (
                    <textarea
                      name={field}
                      value={formData[field] || ''}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  ) : field.includes('data') ? (
                    <input
                      type="date"
                      name={field}
                      value={formData[field] || ''}
                      onChange={handleInputChange}
                    />
                  ) : field === 'ocupada' || field === 'ativo' ? (
                    <input
                      type="checkbox"
                      name={field}
                      checked={formData[field] || false}
                      onChange={handleInputChange}
                    />
                  ) : field === 'preco' || field === 'salario' ? (
                    <input
                      type="number"
                      step="0.01"
                      name={field}
                      value={formData[field] || ''}
                      onChange={handleInputChange}
                    />
                  ) : field === 'num_pessoas' || field === 'quant_pessoas' || field === 'quantidade' ? (
                    <input
                      type="number"
                      name={field}
                      value={formData[field] || ''}
                      onChange={handleInputChange}
                    />
                  ) : field === 'email' || field === 'email_cliente' ? (
                    <input
                      type="email"
                      name={field}
                      value={formData[field] || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <input
                      type="text"
                      name={field}
                      value={formData[field] || ''}
                      onChange={handleInputChange}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn-secondary" onClick={closeModal}>
              <X size={16} />
              Cancelar
            </button>
            <button className="btn-primary" onClick={handleSave}>
              <Save size={16} />
              Guardar
            </button>
          </div>
        </div>
      </div>
    );
  };

  const TableView = ({ data, tableName }) => (
    <div className="table-container">
        <br></br>
         <br></br>
          <br></br>
          <br></br>
        
      <div className="table-header">
        <h2>{tableName.charAt(0).toUpperCase() + tableName.slice(1)}</h2>
        <button className="btn-update" onClick={() => openModal('add')}>
          <Plus size={16} />
          Adicionar Novo
        </button>
      </div>
      <div className="enhanced-table-wrapper">
        <table className="enhanced-table">
          <thead>
            <tr>
              {data.length > 0 && Object.keys(data[0]).map(key => (
                <th key={key}>{key.replace(/_/g, ' ').toUpperCase()}</th>
              ))}
              <th>AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, i) => (
                  <td key={i}>
                    {typeof value === 'boolean' ? (
                      <span className={`status-badge ${value ? 'active' : 'inactive'}`}>
                        {value ? 'Sim' : 'Não'}
                      </span>
                    ) : typeof value === 'number' && value > 100 ? (
                      `€${value.toFixed(2)}`
                    ) : (
                      value?.toString() || '-'
                    )}
                  </td>
                ))}
                <td>
                  <div className="action-buttons">
                    <button 
                      className="btn-action btn-edit"
                      onClick={() => openModal('edit', row)}
                      title="Editar"
                    >
                      <Edit size={16} />
                    </button>
                    <button 
                      className="btn-action btn-delete"
                      onClick={() => handleDelete(row.id)}
                      title="Apagar"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const DashboardView = () => (
    <div className="dashboard-content">
        <br></br>
         <br></br>
          <br></br>
           <br></br>
            <br></br>
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Visão geral das suas métricas</p>
          <div className="last-update">
            Última atualização: {currentTime.toLocaleTimeString('pt-PT')}
          </div>
        </div>
        <button 
          className={`btn-update ${isUpdating ? 'updating' : ''}`}
          onClick={handleUpdateAll}
          disabled={isUpdating}
        >
          <TrendingUp size={16} className={isUpdating ? 'rotating' : ''} />
          {isUpdating ? 'Atualizando...' : 'Atualizar Tudo'}
        </button>
      </div>

      <div className="metrics-grid">
        <MetricCard
          title="Reservas Ativas"
          value={metrics.reservasAtivas.value}
          change={metrics.reservasAtivas.change}
          changeType={parseFloat(metrics.reservasAtivas.change) >= 0 ? 'positive' : 'negative'}
          icon={Calendar}
          color="gold"
        />
        <MetricCard
          title="Receita Total"
          value={metrics.receitaTotal.value}
          change={metrics.receitaTotal.change}
          changeType={parseFloat(metrics.receitaTotal.change) >= 0 ? 'positive' : 'negative'}
          icon={DollarSign}
          color="primary"
        />
        <MetricCard
          title="Mesas Ocupadas"
          value={metrics.mesasOcupadas.value}
          change={metrics.mesasOcupadas.change}
          changeType={parseFloat(metrics.mesasOcupadas.change) >= 0 ? 'positive' : 'negative'}
          icon={Package}
          color="accent"
        />
        <MetricCard
          title="Pedidos Hoje"
          value={metrics.pedidosHoje.value}
          change={metrics.pedidosHoje.change}
          changeType={parseFloat(metrics.pedidosHoje.change) >= 0 ? 'positive' : 'negative'}
          icon={ShoppingCart}
          color="secondary"
        />
      </div>

      <div className="charts-section">
        <div className="chart-container">
          <div className="chart-header">
            <h3>Estatísticas</h3>
            <div className="chart-tabs">
              <button className="tab active">Mensal</button>
              <button className="tab">Trimestral</button>
              <button className="tab">Anual</button>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorVendas" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3d6b7a" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3d6b7a" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorReservas" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#c8a97e" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#c8a97e" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip />
              <Area type="monotone" dataKey="vendas" stroke="#3d6b7a" fillOpacity={1} fill="url(#colorVendas)" />
              <Area type="monotone" dataKey="reservas" stroke="#c8a97e" fillOpacity={1} fill="url(#colorReservas)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="pie-chart-container">
          <div className="chart-header">
            <h3>Pratos Mais Pedidos</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="legend">
            {pieData.map((item, index) => (
              <div key={index} className="legend-item">
                <div className="legend-color" style={{ backgroundColor: item.color }}></div>
                <span>{item.name}: {item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="recent-activity">
        <h3>Atividade Recente</h3>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon">
              <Calendar size={16} />
            </div>
            <div className="activity-content">
              <div className="activity-title">Nova reserva para Mesa 5</div>
              <div className="activity-time">Há 5 minutos</div>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">
              <ShoppingCart size={16} />
            </div>
            <div className="activity-content">
              <div className="activity-title">Pedido #127 completado</div>
              <div className="activity-time">Há 12 minutos</div>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">
              <Users size={16} />
            </div>
            <div className="activity-content">
              <div className="activity-title">Novo empregado adicionado</div>
              <div className="activity-time">Há 1 hora</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="app">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background-color: #f8fafc;
          color: #1e293b;
        }

        .app {
          display: flex;
          height: 100vh;
          overflow: hidden;
        }

        /* Sidebar Styles */
        .sidebar {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          color: white;
          width: ${sidebarOpen ? '280px' : '70px'};
          transition: width 0.3s ease;
          display: flex;
          flex-direction: column;
          box-shadow: 2px 0 10px rgba(0,0,0,0.1);
          position: relative;
        }

        .menu-toggle {
          position: absolute;
          top: 20px;
          right: 15px;
          background: rgba(255,255,255,0.1);
          border: none;
          color: white;
          padding: 8px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10;
        }

        .menu-toggle:hover {
          background: rgba(255,255,255,0.2);
        }

        .sidebar-header {
          padding: 60px 20px 30px 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .logo {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #c8a97e, #b8956e);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 18px;
          color: white;
        }

        .sidebar-title {
          font-size: 20px;
          font-weight: 600;
          white-space: nowrap;
        }

        .sidebar-menu {
          flex: 1;
          padding: 20px 0;
        }

        .menu-item {
          width: 100%;
          background: none;
          border: none;
          color: rgba(255,255,255,0.8);
          padding: 15px 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 14px;
        }

        .menu-item:hover {
          background: rgba(255,255,255,0.1);
          color: white;
        }

        .menu-item.active {
          background: rgba(200,169,126,0.2);
          color: #c8a97e;
          border-right: 3px solid #c8a97e;
        }

        .menu-item span {
          white-space: nowrap;
        }

        /* Main Content */
        .main-content {
          flex: 1;
          overflow: auto;
          background: #f8fafc;
        }

        .dashboard-content {
          padding: 30px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 30px;
        }

        .dashboard-header h1 {
          font-size: 32px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 5px;
        }

        .dashboard-header p {
          color: #64748b;
          font-size: 16px;
        }

        .last-update {
          color: #94a3b8;
          font-size: 14px;
          margin-top: 5px;
        }

        .btn-update {
          background: linear-gradient(135deg, #3d6b7a, #2d4a53);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .btn-update:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(61,107,122,0.3);
        }

        .btn-update:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .btn-update.updating {
          background: linear-gradient(135deg, #94a3b8, #64748b);
        }

        .rotating {
          animation: rotate 1s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Metrics Grid */
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .metric-card {
          background: white;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .metric-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .metric-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 15px;
        }

        .metric-info h3 {
          font-size: 14px;
          font-weight: 500;
          color: #64748b;
          margin-bottom: 8px;
        }

        .metric-value {
          font-size: 28px;
          font-weight: 700;
          color: #1e293b;
        }

        .metric-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .metric-icon.primary { background: linear-gradient(135deg, #3d6b7a, #2d4a53); color: white; }
        .metric-icon.secondary { background: linear-gradient(135deg, #64748b, #475569); color: white; }
        .metric-icon.accent { background: linear-gradient(135deg, #0ea5e9, #0284c7); color: white; }
        .metric-icon.gold { background: linear-gradient(135deg, #c8a97e, #b8956e); color: white; }

        .metric-change {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .change-indicator {
          font-size: 14px;
          font-weight: 500;
          padding: 4px 8px;
          border-radius: 6px;
        }

        .metric-change.positive .change-indicator {
          background: #dcfce7;
          color: #16a34a;
        }

        .metric-change.negative .change-indicator {
          background: #fee2e2;
          color: #dc2626;
        }

        /* Charts Section */
        .charts-section {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
          margin-bottom: 30px;
        }

        .chart-container, .pie-chart-container {
          background: white;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          border: 1px solid #e2e8f0;
        }

        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .chart-header h3 {
          font-size: 18px;
          font-weight: 600;
          color: #1e293b;
        }

        .chart-tabs {
          display: flex;
          gap: 5px;
        }

        .tab {
          background: none;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #64748b;
        }

        .tab.active {
          background: #f1f5f9;
          color: #1e293b;
          font-weight: 500;
        }

        .legend {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 15px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #64748b;
        }

        .legend-color {
          width: 12px;
          height: 12px;
          border-radius: 3px;
        }

        /* Recent Activity */
        .recent-activity {
          background: white;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          border: 1px solid #e2e8f0;
        }

        .recent-activity h3 {
          font-size: 18px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 20px;
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .activity-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          background: #f8fafc;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .activity-item:hover {
          background: #f1f5f9;
        }

        .activity-icon {
          width: 35px;
          height: 35px;
          background: #e2e8f0;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
        }

        .activity-content {
          flex: 1;
        }

        .activity-title {
          font-weight: 500;
          color: #1e293b;
          margin-bottom: 2px;
        }

        .activity-time {
          font-size: 12px;
          color: #94a3b8;
        }

        /* Table Styles */
        .table-container {
          padding: 30px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .table-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .table-header h2 {
          font-size: 28px;
          font-weight: 700;
          color: #1e293b;
        }

        .btn-primary {
          background: linear-gradient(135deg, #3d6b7a, #2d4a53);
          color: white;
          border: none;
          padding: 12px 15px;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: all 0.3s ease;
          width: 20% !important;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(61,107,122,0.3);
        }

        .enhanced-table-wrapper {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          border: 1px solid #e2e8f0;
        }

        .enhanced-table {
          width: 100%;
          border-collapse: collapse;
        }

        .enhanced-table thead {
          background: #f8fafc;
        }

        .enhanced-table th {
          padding: 15px 20px;
          text-align: left;
          font-weight: 600;
          color: #475569;
          font-size: 12px;
          letter-spacing: 0.5px;
          border-bottom: 1px solid #e2e8f0;
        }

        .enhanced-table td {
          padding: 15px 20px;
          border-bottom: 1px solid #f1f5f9;
          color: #334155;
        }

        .enhanced-table tbody tr:hover {
          background: #f8fafc;
        }

        .status-badge {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
        }

        .status-badge.active {
          background: #dcfce7;
          color: #16a34a;
        }

        .status-badge.inactive {
          background: #fee2e2;
          color: #dc2626;
        }

        .action-buttons {
          display: flex;
          gap: 8px;
        }

        .btn-action {
          background: none;
          border: 1px solid #e2e8f0;
          padding: 8px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-edit:hover {
          background: #dbeafe;
          border-color: #3b82f6;
          color: #3b82f6;
        }

        .btn-delete:hover {
          background: #fee2e2;
          border-color: #ef4444;
          color: #ef4444;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          background: white;
          border-radius: 12px;
          width: 90%;
          max-width: 500px;
          max-height: 80vh;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0,0,0,0.25);
        }

        .modal-header {
          padding: 20px 25px;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-header h3 {
          font-size: 18px;
          font-weight: 600;
          color: #1e293b;
        }

        .modal-close {
          background: none;
          border: none;
          padding: 5px;
          border-radius: 4px;
          cursor: pointer;
          color: #64748b;
        }

        .modal-close:hover {
          background: #f1f5f9;
        }

        .modal-body {
          padding: 25px;
          max-height: 60vh;
          overflow-y: auto;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 6px;
          font-weight: 500;
          color: #374151;
          font-size: 14px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
          transition: all 0.2s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #3d6b7a;
          box-shadow: 0 0 0 3px rgba(61,107,122,0.1);
        }

        .form-group input[type="checkbox"] {
          width: auto;
          margin-right: 8px;
        }

        .modal-footer {
          padding: 20px 25px;
          border-top: 1px solid #e2e8f0;
          display: flex;
          gap: 10px;
          justify-content: flex-end;
        }

        .btn-secondary {
          background: #f8fafc;
          color: #64748b;
          border: 1px solid #e2e8f0;
          padding: 10px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .btn-secondary:hover {
          background: #f1f5f9;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .sidebar {
            width: ${sidebarOpen ? '100%' : '70px'};
            ${sidebarOpen ? 'position: absolute; z-index: 1000;' : ''}
          }

          .charts-section {
            grid-template-columns: 1fr;
          }

          .metrics-grid {
            grid-template-columns: 1fr;
          }

          .dashboard-header {
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
          }
        }
      `}</style>
      <div className="sidebar">
        <button 
          className="menu-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
        <br></br>
           <br></br>
            <br></br>
        <div className="sidebar-header">
          <div className="logo">R</div>
          {sidebarOpen && <div className="sidebar-title">Restaurante</div>}
        </div>
        
        <div className="sidebar-menu">
          {menuItems.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={`menu-item ${selectedTable === item.id ? 'active' : ''}`}
                onClick={() => setSelectedTable(item.id)}
              >
                <Icon size={20} />
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            );
          })}
        </div>
      </div>

      <div className="main-content">
        {selectedTable === 'dashboard' ? (
          <DashboardView />
        ) : mockData[selectedTable] ? (
          <TableView data={mockData[selectedTable]} tableName={selectedTable} />
        ) : (
          <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
            <h2>Tabela em Desenvolvimento</h2>
            <p>Esta secção estará disponível em breve.</p>
          </div>
        )}
      </div>

      <Modal />
    </div>
  );
};

export default Dashboard;