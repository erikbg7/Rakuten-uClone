import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ changeMenuMarker, page }) => (
  <div className="navbar-menu-option-container">
    <Link to='/' onClick={() => changeMenuMarker('inicio')}>
      <span
        className="navbar-menu-option"
        style={{ borderColor: page === 'inicio' ? '#B8130D' : null }}
      >
        Inicio
      </span>
    </Link>
    <Link to='/favorites' onClick={() => changeMenuMarker('lista')}>
      <span
        className="navbar-menu-option"
        style={{ borderColor: page === 'lista' ? '#B8130D' : null }}
      >
        Lista Favoritos
      </span>
    </Link>
  </div>
);

export { Menu };
