import React, { useState } from 'react';

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        specialRequests: ''
      });
    }, 3000);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: '#ffffff',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    },
    header: {
      background: 'linear-gradient(135deg, #1a2e35 0%, #2d4a53 50%, #3d6b7a 100%)',
      padding: '4rem 0',
      position: 'relative',
      overflow: 'hidden'
    },
    headerDecoration: {
      position: 'absolute',
      top: '0',
      right: '0',
      width: '300px',
      height: '300px',
      background: 'radial-gradient(circle, rgba(200, 169, 126, 0.1) 0%, transparent 70%)',
      borderRadius: '50%',
      transform: 'translate(50%, -50%)'
    },
    headerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem',
      textAlign: 'center',
      position: 'relative',
      zIndex: '2'
    },
    title: {
      fontSize: '4rem',
      fontWeight: '800',
      color: '#f5f5f5',
      marginBottom: '1rem',
      letterSpacing: '-0.03em',
      textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
    },
    subtitle: {
      fontSize: '1.4rem',
      color: '#c8a97e',
      fontWeight: '300',
      letterSpacing: '0.05em',
      textTransform: 'uppercase'
    },
    main: {
      padding: '5rem 2rem',
      display: 'flex',
      justifyContent: 'center',
      background: 'linear-gradient(180deg, #ffffff 0%, #fafafa 100%)'
    },
    formContainer: {
      background: '#ffffff',
      borderRadius: '24px',
      padding: '3.5rem',
      maxWidth: '650px',
      width: '100%',
      boxShadow: '0 32px 64px rgba(26, 46, 53, 0.08), 0 8px 32px rgba(26, 46, 53, 0.04)',
      border: '1px solid rgba(200, 169, 126, 0.1)',
      position: 'relative'
    },
    formDecoration: {
      position: 'absolute',
      top: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      background: 'linear-gradient(90deg, #c8a97e 0%, #b8966e 100%)',
      borderRadius: '2px'
    },
    formTitle: {
      fontSize: '2.2rem',
      fontWeight: '700',
      color: '#1a2e35',
      marginBottom: '0.5rem',
      textAlign: 'center',
      letterSpacing: '-0.01em'
    },
    formSubtitle: {
      fontSize: '1rem',
      color: '#666666',
      textAlign: 'center',
      marginBottom: '3rem',
      fontWeight: '400'
    },
    inputGroup: {
      marginBottom: '2rem'
    },
    label: {
      display: 'block',
      fontSize: '0.95rem',
      fontWeight: '600',
      color: '#2d4a53',
      marginBottom: '0.75rem',
      letterSpacing: '0.01em'
    },
    input: {
      width: '100%',
      padding: '1rem 1.25rem',
      fontSize: '1rem',
      border: '2px solid #e5e7eb',
      borderRadius: '16px',
      background: '#fafafa',
      color: '#333333',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      fontFamily: 'inherit',
      outline: 'none',
      boxSizing: 'border-box'
    },
    row: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.5rem',
      marginBottom: '2rem'
    },
    textarea: {
      minHeight: '120px',
      resize: 'vertical',
      fontFamily: 'inherit'
    },
    button: {
      width: '100%',
      padding: '1.25rem 2rem',
      fontSize: '1.1rem',
      fontWeight: '700',
      color: '#ffffff',
      background: 'linear-gradient(135deg, #1a2e35 0%, #2d4a53 100%)',
      border: 'none',
      borderRadius: '16px',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      outline: 'none',
      position: 'relative',
      overflow: 'hidden'
    },
    buttonAccent: {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      height: '3px',
      background: 'linear-gradient(90deg, #c8a97e 0%, #b8966e 100%)',
      borderRadius: '16px 16px 0 0'
    },
    successMessage: {
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      color: 'white',
      padding: '1.25rem',
      borderRadius: '16px',
      textAlign: 'center',
      fontWeight: '600',
      marginBottom: '2rem',
      boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)'
    },
    loadingSpinner: {
      display: 'inline-block',
      width: '20px',
      height: '20px',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      borderTopColor: '#ffffff',
      animation: 'spin 1s ease-in-out infinite',
      marginRight: '0.75rem'
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      marginBottom: '1rem',
      color: '#666666',
      fontSize: '0.9rem'
    },
    featureIcon: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #c8a97e 0%, #b8966e 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      fontSize: '12px',
      fontWeight: 'bold'
    }
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = '#c8a97e';
    e.target.style.background = '#ffffff';
    e.target.style.boxShadow = '0 0 0 4px rgba(200, 169, 126, 0.1)';
    e.target.style.transform = 'translateY(-2px)';
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = '#e5e7eb';
    e.target.style.background = '#fafafa';
    e.target.style.boxShadow = 'none';
    e.target.style.transform = 'none';
  };

  const handleButtonHover = (e) => {
    if (!isSubmitting) {
      e.target.style.transform = 'translateY(-3px)';
      e.target.style.boxShadow = '0 20px 40px rgba(26, 46, 53, 0.3)';
      e.target.style.background = 'linear-gradient(135deg, #0f1f24 0%, #1f3a44 100%)';
    }
  };

  const handleButtonLeave = (e) => {
    if (!isSubmitting) {
      e.target.style.transform = 'none';
      e.target.style.boxShadow = 'none';
      e.target.style.background = 'linear-gradient(135deg, #1a2e35 0%, #2d4a53 100%)';
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .fade-in {
            animation: fadeIn 0.6s ease-out;
          }
          
          @media (max-width: 768px) {
            .reservation-form {
              padding: 2.5rem 2rem !important;
            }
            .reservation-title {
              font-size: 2.8rem !important;
            }
            .reservation-row {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
            }
          }
        `}
      </style>
      
      <header style={styles.header}>
        <div style={styles.headerDecoration}></div>
        <div style={styles.headerContent}>
          <br></br>
          <br></br>
          <h1 style={styles.title} className="reservation-title">Reserva</h1>
          <p style={styles.subtitle}>Uma experiência gastronômica inesquecível</p>
        </div>
      </header>

      <main style={styles.main}>
        <div style={styles.formContainer} className="reservation-form fade-in">
          <div style={styles.formDecoration}></div>
          <h2 style={styles.formTitle}>Fazer Reserva</h2>
          <p style={styles.formSubtitle}>Preencha os dados abaixo para garantir sua mesa</p>
          
          {showSuccess && (
            <div style={styles.successMessage}>
              ✅ Reserva confirmada com sucesso! Entraremos em contato em breve.
            </div>
          )}

          <div style={{ marginBottom: '2rem' }}>
            <div style={styles.featureItem}>
              <div style={styles.featureIcon}>✓</div>
              <span>Confirmação imediata por email e SMS</span>
            </div>
            <div style={styles.featureItem}>
              <div style={styles.featureIcon}>⭐</div>
              <span>Mesa reservada por até 15 minutos após o horário</span>
            </div>
            <div style={styles.featureItem}>
              <div style={styles.featureIcon}>🍽️</div>
              <span>Atendimento personalizado para ocasiões especiais</span>
            </div>
          </div>

          <div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Nome Completo *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                style={styles.input}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Digite seu nome completo"
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={styles.input}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="seu@email.com"
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Telefone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                style={styles.input}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="+351 929 929 929"
                required
              />
            </div>

            <div style={styles.row} className="reservation-row">
              <div>
                <label style={styles.label}>Data *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  style={styles.input}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
              </div>
              <div>
                <label style={styles.label}>Hora *</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  style={styles.input}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
              </div>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Número de Pessoas</label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                style={styles.input}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'pessoa' : 'pessoas'}
                  </option>
                ))}
              </select>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Pedidos Especiais</label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                style={{...styles.input, ...styles.textarea}}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Alergias alimentares, restrições dietéticas, aniversário, aniversário de casamento..."
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              style={{
                ...styles.button,
                ...(isSubmitting ? { opacity: '0.8', cursor: 'not-allowed' } : {})
              }}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
              disabled={isSubmitting}
            >
              <div style={styles.buttonAccent}></div>
              {isSubmitting ? (
                <>
                  <span style={styles.loadingSpinner}></span>
                  Processando Reserva...
                </>
              ) : (
                'Confirmar Reserva'
              )}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReservationPage;