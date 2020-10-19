import React from 'react';

import { Container } from './styles';

const Follow = () => {
 const images = [
   {id:1, name:"/assets/images/mo/04.jpg"},
   {id:2, name:"/assets/images/mo/02.jpg"},
   {id:3, name:"/assets/images/mo/03.jpg"},
   {id:4, name:"/assets/images/mo/01.jpg"},
   {id:5, name:"/assets/images/mo/05.jpg"},
   {id:6, name:"/assets/images/mo/06.jpg"},
 ]

  return (
    <Container>

      <div className="sub-title">Siga-nos no Instagram</div>
      <div className="row">
        <a href="https://www.instagram.com/vm_eventos_/" className="btn-follow">@vm_eventos_</a>
        {
         images.map(el => (
           <div className={`image__items image__${el.id}`} key={el.id}>
             <img src={el.name} alt={el.id}/>
           </div>
         ))
        }
      </div>
    </Container>
  );
};

export default Follow;
