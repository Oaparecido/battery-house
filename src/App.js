import "./App.css";
import Header from "./components/Header/header";
import ContactUs from "./components/Forms/contactUs";
import Main from "./components/Main/main";
import styled from "styled-components";
import CardCral from "./components/Card/cardCral";
import Footer from "./components/Footer/footer";
import imgZetta from "./imgs/battery-zetta.png";
import imgMoura from "./imgs/battery-moura.png";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Main />
        <Line />
        <ContactUs />
      </Container>
      <ImgMoura src={imgMoura} />
      <ImgZetta src={imgZetta} />
      <ContainerCard>
        <CardCral />
        <CardCral />
        <CardCral />
      </ContainerCard>
      <Footer />
    </>
  );
}

export const ImgZetta = styled.img`
  position: absolute;
  top: 80%;
  right: 0%;
  z-index: -1;

  @media (max-width: 800px) {
    display: none;
  }

  @media (max-width: 1100px) {
    top: 50%;
  }
`;

export const ImgMoura = styled.img`
  position: absolute;
  top: 60%;
  left: 0%;
  z-index: -1;

  @media (max-width: 800px) {
    display: none;
  }

  @media (max-width: 1100px) {
    top: 45%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5em;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    margin-top: 3em;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 4em 15em;
  gap: 2rem;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    margin: 5em auto;
    height: 70em;
    align-content: space-around;
  }
`;

export const Line = styled.div`
  height: 35em;
  width: 0.1em;
  background: #dedede;
  border-radius: 50px;
  margin: 0em 2em;

  @media (max-width: 800px) {
    display: none;
  }
`;

export default App;
