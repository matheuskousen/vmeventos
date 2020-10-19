import React from 'react';
import Instagram from '../../Components/Instagram';
import Right from '../../Components/Right';

import { Container, Content } from './styles';

const Produtions = () => {
  const grid =  [
    
    {id:1,url_grid:"/assets/images/recent/chadebb.jpg" , type:"Cha de Bebe", info:"Ensaio fotografico da nossa pequena alice." },
    {id:2,url_grid:"/assets/images/recent/wedding.jpg", type:"WEDDINGS", info:"Historias de casamento, de muito amor." },
    {id:3,url_grid:"/assets/images/recent/15anos.jpg", type:"15 anos", info:"Um momento único de uma mulher."},

 
 

  ]
  return (
   <Content>
     
         <Container>

           <div className="sub-title">DÊ UMA OLHADA RÁPIDA</div>
      <h3 className="section-title">Trabalhos recentes</h3>
      <div className="divisor"></div>
      <div className="split_grid">
        {
           grid.map(item => (
             <div className={`grid_items item__${item.id}`} key={item.id}> 
                  
                  <img src={item.url_grid} alt={`produções Vm Eventos, ${item.type}-${item.info}`}/>
                   <div className="infomations">
           <h3 className="recent-titles">{item.type}</h3>
           <p className="recent-infomation__text">{item.info} </p>
                   </div>
             </div>
           ))
        }
      </div>

    </Container>
   </Content>
  );
};

export default Produtions;
