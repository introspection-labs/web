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
        background: 'linear-gradient(to bottom, #2c3e50 0%, #1a1a1a 70%, #0a0a0a 90%, #000000 100%)'
      }}>
      </section>

      <section style={{
        padding: '0',
        height: 'clamp(20vh, 40vw, 50vh)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
      }}>
        <img 
          src="/dawn.png" 
          alt="Dawn"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block'
          }}
        />
      </section>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)