import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavLinkClick = () => {
    setMenuOpen(!menuOpen); // Cierra el menú al hacer clic en cualquier enlace del menú
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
    <div className="wrapper">
      <nav>
        <div className="header-brand">
          <NavLink to="/" className="logo">
            <img src="./assets/LogoECOPRE2.png" alt="Logo_EcoPre" className='logoEcoPre'/>
          </NavLink>
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
    </header>
  );
}
