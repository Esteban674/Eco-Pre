import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavLinkClick = () => {
    setMenuOpen(!menuOpen); // Cierra el menú al hacer clic en cualquier enlace del menú
  };

  return (
    <div className="wrapper">
      <nav>
        <div className="header-brand">
          <NavLink to="/" className="logo">
            <img src="/src/assets/LogoEcoPre.png" alt="Logo_EcoPre" className='logoEcoPre'/>
          </NavLink>
          <span className='brand'>ECO-PRE</span>
        </div>
        <label htmlFor="toggle" className="icon-menu" onClick={handleToggleClick}>
          <i className="material-icons">menu</i>
        </label>
        <div className={`${menuOpen ? 'open' : 'closed'}`}>
          <ul>
            {/* Agrega handleNavLinkClick a los enlaces del menú */}
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
