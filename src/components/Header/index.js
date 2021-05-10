import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <h2>
        <Link to='/'>Todoconta</Link>
      </h2>
      <ul>
        <li>Inicio</li>
        <li>Detalles</li>
        <li>FAQ</li>
        <li>Registro</li>
      </ul>
    </nav>
  );
}

export default Header;
