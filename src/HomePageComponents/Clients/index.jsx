import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Container } from './styles';


const Clients = () => {

  const fadeImages = [
    "Nosso anjo vinny, fez nosso sonho se torna realidade foi além do que imaginamos você pensou nos minimos detalhes, com muito carinho e paciência e muito bom gosto. Você cuidou do dia mais importante das nossas vidas com tanta elegância, alegria,  carinho e profissionalismo.",

    "Vinny, parabéns pelo excelente trabalho com os fofos Luizinho e da Gabi. Pude ver de perto o brilhantismo e o profissionalismo do seu trabalho!. Cada detalhe regrado com muito amor, Gratidão por estar por perto em todos os momentos.",
  ];
  

 
  return (
<Container>
<div className="row">

<CarouselProvider  style={{  height:"auto"}}
       
        totalSlides={2}
 
    
  
      >
        <Slider  style={{  height:"auto" , zIndex:"2"}}> 
       
      <Slide index={0} >
        
        <blockquote>
 <p>Nosso anjo vinny, fez nosso sonho se torna realidade foi além do que imaginamos você pensou nos minimos detalhes, com muito carinho e paciência e muito bom gosto. Você cuidou do dia mais importante das nossas vidas com tanta elegância, alegria,  carinho e profissionalismo.</p>

 <footer>
- <mark>Juliana carmo</mark>
</footer>
        </blockquote>
       
      </Slide>
      <Slide index={1}>
      <blockquote>
 <p>Vinny, parabéns pelo excelente trabalho com os fofos Luizinho e da Gabi. Pude ver de perto o brilhantismo e o profissionalismo do seu trabalho!. Cada detalhe regrado com muito amor, Gratidão por estar por perto em todos os momentos.</p>

<footer>
- <mark>Clara Mendes</mark>
</footer>
        </blockquote>
      </Slide>
    
        </Slider>
<div className="controls">

<ButtonBack><img src="/assets/icons/back.svg" alt="arrow next"/></ButtonBack>
|
    <ButtonNext><img src="/assets/icons/next.svg" alt="arrow next"/></ButtonNext>
</div>
   
      </CarouselProvider>
</div>
</Container>
  );
};

export default Clients;
