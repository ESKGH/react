import React, { useState } from 'react';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <header className="app-header">
      <h1 className="title">SIGN IN</h1>
      <button className={`burger-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="burger-icon">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </button>
    </header>
  );
};