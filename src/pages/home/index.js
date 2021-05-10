import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <h1>Página de bienvenida</h1>
      <p>Lista de talleres:</p>
      <ul>
        <li>
          <Link to='/dass'>Declaración anual de Personas físicas</Link>
        </li>
        <li>
          <Link to='/cc'>
            De 0 a genera estados financieros con Contpaq i® Contabilidad
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Home;
