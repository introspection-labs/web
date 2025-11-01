import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Navbar'

function App() {
  return (
    <main style={{
      background: '#1a1a1a',
      color: '#eee',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Navbar />
      <div style={{ flex: 1 }} />
      <img src="/dawn.png" alt="Dawn" style={{ width: '100%', display: 'block' }} />
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)