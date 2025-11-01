import React, { useState } from 'react'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Shared styles
  const navLinkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    fontFamily: 'Calibri, sans-serif',
    lineHeight: '4.5rem'
  };

  const mobileLinkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: '500',
    fontFamily: 'Calibri, sans-serif',
    textAlign: 'left'
  };

  const buttonStyle = {
    backgroundColor: '#f5f5f5',
    color: '#333',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    fontFamily: 'Calibri, sans-serif'
  };

  const hamburgerLineStyle = {
    position: 'absolute',
    left: '50%',
    width: '2rem',
    height: '3px',
    background: '#fff',
    borderRadius: '3px',
    transition: 'all 0.3s ease'
  };

  return (
    <>
      <div className="navbar-container" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        width: '100%'
      }}>
        <nav className="navbar" style={{
          position: 'relative',
          height: '4.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 3rem',
          fontFamily: 'Calibri, sans-serif',
          backgroundColor: 'transparent'
        }}>
        {/* Left Section: Logo and Links */}
        <div style={{ display: 'flex', alignItems: 'center', height: '100%', gap: '2.5rem' }}>
          <img src="/logo.png" alt="Logo" style={{ height: '2rem', display: 'block' }} />
          <div className="desktop-nav-links" style={{ display: 'flex', alignItems: 'center', height: '100%', gap: '2.5rem' }}>
            <a href="#features" style={navLinkStyle}>Features</a>
            <a href="#price" style={navLinkStyle}>Price</a>
            <a href="#technology" style={navLinkStyle}>Technology</a>
          </div>
        </div>
        
        {/* Right Section: Download Button */}
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <button className="desktop-download-btn" style={buttonStyle}>
            Download for Mac
          </button>
        </div>

        <div className="mobile-nav-right" style={{ display: 'none', alignItems: 'center', gap: '1rem' }}>
          <button style={buttonStyle}>Download for Mac</button>
          
          <div className="hamburger-icon" onClick={toggleMobileMenu} style={{
            display: 'none',
            cursor: 'pointer',
            position: 'relative',
            width: '2rem',
            height: '2rem',
            padding: 0,
            zIndex: 20
          }}>
            <span style={{
              ...hamburgerLineStyle,
              top: isMobileMenuOpen ? '50%' : '20%',
              transform: isMobileMenuOpen 
                ? 'translate(-50%, -50%) rotate(45deg)' 
                : 'translate(-50%, -50%)'
            }} />
            <span style={{
              ...hamburgerLineStyle,
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: isMobileMenuOpen ? '0' : '2rem',
              opacity: isMobileMenuOpen ? 0 : 1
            }} />
            <span style={{
              ...hamburgerLineStyle,
              bottom: isMobileMenuOpen ? '50%' : '20%',
              transform: isMobileMenuOpen 
                ? 'translate(-50%, 50%) rotate(-45deg)' 
                : 'translate(-50%, 50%)'
            }} />
          </div>
        </div>
      </nav>

        <div className="mobile-menu" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: '#1a1a1a',
          zIndex: 15,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          paddingTop: '2rem',
          paddingLeft: '2rem',
          paddingBottom: '2rem',
          gap: '2rem',
          maxHeight: isMobileMenuOpen ? '500px' : '0',
          overflow: 'hidden',
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
          transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out'
        }}>
          <a href="#features" onClick={toggleMobileMenu} style={mobileLinkStyle}>Features</a>
          <a href="#price" onClick={toggleMobileMenu} style={mobileLinkStyle}>Price</a>
          <a href="#technology" onClick={toggleMobileMenu} style={mobileLinkStyle}>Technology</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;

