
import Clients from "../../HomePageComponents/Clients";
import { Container } from "./styles";

const SlideShow = () => {
  
  return (
    <Container className="slideshow">
      <h3 className="section-title">Depoimentos</h3>
      <div className="sub-title">Carinho de nossos clientes.</div>
      <section className="slideshow">
        <Clients/>
      </section>
    </Container>
  );
};

export default SlideShow;
