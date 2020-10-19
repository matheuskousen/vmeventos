import React from 'react';

import { Container } from './styles';

const Nav = () => {
  return (
    <Container>
     <ul className="navbar">
       <li className="nav-item"><a href="/" className="nav-link">Inicio</a></li>
       <li className="nav-item"><a href="/" className="nav-link">Sobre</a></li>
       <li className="nav-item"><a href="/" className="nav-link">Portfolio</a></li>
       <li className="nav-item"><a href="/" className="nav-link">Contato</a></li>
     </ul>
    </Container>
  );
};

export default Nav;
