import React from "react";

import { Hero } from "./styles";

const Header = () => {
  return (
    <Hero>
         

       <div className="container">
            <h1 className="primary-title p-2">VM </h1>
            <h1 className="primary-title">EVENTOS</h1>
            <p>Nossa maior paixão, é o seu sonho.</p>
       </div>
    <div className="seo"></div>

  <div className="mds">
    <a href="https://www.instagram.com/vm_eventos_/" target="_blank">facebook</a>
    <a href="https://www.facebook.com/comunicacaovm" target="_blank">Instagram</a>
   
   
  </div>
    </Hero>
  );
};

export default Header;
