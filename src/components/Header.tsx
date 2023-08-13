import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="wrapper">
      <nav>
        <a href="#" className="logo">LOGO</a>
        <input type="checkbox" name="" id="toggle" checked={menuOpen} />
        <label htmlFor="toggle" onClick={handleToggleClick}><i className="material-icons">menu</i></label>
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><NavLink to="/" onClick={handleNavLinkClick}>Home</NavLink></li>
            <li><NavLink to="/especificaciones" onClick={handleNavLinkClick}>Especificaciones</NavLink></li>
            <li><NavLink to="/galeria" onClick={handleNavLinkClick}>Galeria</NavLink></li>
            <li><NavLink to="/proximamente" onClick={handleNavLinkClick}>Proximamente</NavLink></li>
            <li><NavLink to="/contacto" onClick={handleNavLinkClick}>Contacto</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
