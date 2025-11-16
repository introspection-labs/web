import React from 'react'

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

export default NavLink;

