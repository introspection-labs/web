function App() {
  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      overflow: 'hidden'
    }}>
      {/* Section 1: Header - TIC and Contact */}
      <header style={{ 
        height: '10vh',
        width: '100%',
        maxWidth: '1100px',
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '0 1rem',
        boxSizing: 'border-box'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center'
        }}>
          <img 
            src="/logo.png" 
            alt="Logo" 
            draggable="false"
            style={{ 
              height: '2rem',
              width: 'auto'
            }}
          />
        </div>
        <a 
          href="https://calendly.com/ahitagnid/new-meeting"
          target="_blank"
          rel="noopener noreferrer"
          draggable="false"
          style={{ 
            backgroundColor: 'rgba(200, 200, 200, 0.3)', 
            color: '#333',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            padding: '0.5rem 2rem',
            borderRadius: '6px',
            fontSize: '0.95rem',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(200, 200, 200, 0.5)'
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(200, 200, 200, 0.3)'
          }}
        >
          Contact
        </a>
      </header>

      {/* Section 2: Image */}
      <div style={{ 
        height: '75vh',
        width: '100%', 
        maxWidth: '1100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 1rem',
        boxSizing: 'border-box'
      }}>
        <div style={{ 
          width: '100%',
          height: '100%',
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
        }}>
          <img 
            src="/hero.png" 
            alt="Introspection Labs" 
            draggable="false"
            style={{ 
              width: '100%', 
              height: '100%', 
              display: 'block',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </div>
      </div>

      {/* Section 3: Title */}
      <div style={{ 
        height: '20vh',
        width: '100%',
        maxWidth: '1100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 1rem',
        boxSizing: 'border-box'
      }}>
        <h1 style={{ 
          fontFamily: "'Instrument Serif', serif",
          fontSize: 'clamp(3rem, 7vw, 6.5rem)',
          fontWeight: 400,
          margin: 0,
          textAlign: 'center',
          lineHeight: '1',
          color: '#1a1a1a',
          width: '100%',
          whiteSpace: 'nowrap'
        }}>
          the Introspection Labs
        </h1>
      </div>
    </div>
  )
}

export default App
