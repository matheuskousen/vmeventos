import React from "react";

import { Container, Content } from "./styles";

const Services = () => {
  const splits = [
    {
      id: "1",
      images: "/assets/images/services1.jpg",
      descriptions: "Cerimonial",
    },
    {
      id: "2",
      images: "/assets/images/services2.jpg",
      descriptions: "Event Planer",
    },
    {
      id: "3",
      images: "/assets/images/services3.jpg",
      descriptions: "Assessoria",
    },
  ];

  return (
    <Content>

    
      <Container>
    <div className="sub-title">  O TRABALHO QUE EU FAÇO</div>
        <div className="split">
          {splits.map((split) => (
            <div className="split__item" key={split.id}>
              <img src={split.images} alt={split.descriptions} />
             <div className="split__i">
          <p>{split.descriptions}</p>
             </div>
            </div>
          ))}
        </div>
      </Container>
    </Content>
  );
};

export default Services;
