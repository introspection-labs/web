import React, { useState, useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Privacy from './pages/Privacy'

function App() {
  const [currentHash, setCurrentHash] = useState(() => {
    // Get initial hash, removing the '#' if present
    const hash = window.location.hash.slice(1);
    return hash || '';
  });

  useEffect(() => {
    // Function to handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentHash(hash || '');
    };

    // Listen for hashchange events
    window.addEventListener('hashchange', handleHashChange);

    // Also check on mount in case hash was set before component mounted
    handleHashChange();

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Determine which page to render based on hash
  const renderPage = () => {
    if (currentHash === 'about') {
      return <About />;
    }
    if (currentHash === 'privacy') {
      return <Privacy />;
    }
    // Default to Home for empty hash or '/'
    return <Home />;
  };

  return renderPage();
}

export default App;

