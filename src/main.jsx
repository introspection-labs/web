import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function App() {
  return (
    <main style={{
      background: '#000',
      color: '#eee',
      minHeight: '100vh',
      margin: 0,
      padding: 0
    }}>
      <section style={{
        height: '100vh',
        position: 'relative',
        overflow: 'clip',
        WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, #000 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.4) 85%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, #000 0%, #000 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.4) 85%, transparent 100%)',
        WebkitMaskComposite: 'source-over'
      }}>
        <img 
          src="/mon.png" 
          alt="Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
          loading="eager"
        />
      </section>

      <section style={{
        padding: '4rem 2rem',
        minHeight: '30vh'
      }}>
        <div style={{
          maxWidth: '72ch',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
        </div>
      </section>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)