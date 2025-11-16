import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const NavLink = ({ to, children, isExternal, title }) => {
  const linkStyle = {
    display: 'inline',
    color: '#fff',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    fontFamily: 'Calibri, sans-serif'
  };

  if (isExternal) {
    return (
      <a 
        href={to} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ ...linkStyle, fontSize: '16px' }}
        title={title}
        onMouseEnter={(e) => {
          e.target.style.textDecoration = 'underline';
        }}
        onMouseLeave={(e) => {
          e.target.style.textDecoration = 'none';
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={to}
      className="text-16"
      style={linkStyle}
      title={title}
      onMouseEnter={(e) => {
        e.target.style.textDecoration = 'underline';
      }}
      onMouseLeave={(e) => {
        e.target.style.textDecoration = 'none';
      }}
    >
      {children}
    </a>
  );
};

function App() {
  return (
    <main style={{
      margin: 0,
      padding: 0,
      width: '100%',
      height: '100vh',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img src="/hero.png" alt="Hero" style={{ 
          width: '100%', 
          height: '100%',
          display: 'block',
          objectFit: 'cover',
          objectPosition: 'center'
        }} />
        <div className="dawn-text-overlay" style={{
          position: 'absolute',
          top: '50%',
          right: '2.5%',
          transform: 'translateY(-50%)',
          textAlign: 'right',
          fontFamily: 'Calibri, sans-serif',
          color: '#fff',
          width: '20vw'
        }}>
          <p style={{ 
            margin: 0, 
            fontWeight: 'normal',
            whiteSpace: 'pre-line'
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <img src="/dawnw.png" alt="Dawn logo" style={{ height: '48px', display: 'block' }} />
              <span style={{ fontSize: '48px', textTransform: 'lowercase' }}>dawn</span>
            </span>{'\n\n'}
            <span style={{ fontSize: '20px' }}>Your thoughts shouldn't cost you. {'\n\n'} Dawn is speech-to-text for macOS, powered by AI, free forever</span>
          </p>
          <button className="download-button" style={{
            marginTop: '1.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: 'rgba(128, 128, 128, 0.15)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            color: '#fff',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            fontFamily: 'Calibri, sans-serif',
            whiteSpace: 'nowrap'
          }}>
            Download for macOS
          </button>
        </div>
        <div className="bottom-left-text" style={{
          position: 'absolute',
          bottom: '5%',
          left: '2.5%',
          fontFamily: 'Calibri, sans-serif',
          color: '#fff',
          textAlign: 'left'
        }}>
          <p style={{ 
            margin: 0, 
            fontWeight: 'normal',
            whiteSpace: 'pre-line'
          }}>
            <span style={{ fontSize: '32px', display: 'block', marginBottom: '0.5rem' }}>Type at the speed of thought.</span>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <NavLink to="#about" title="About">About</NavLink>
              <NavLink to="#privacy" title="Privacy Policy">Privacy Policy</NavLink>
            </div>
          </p>
        </div>
      </div>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)