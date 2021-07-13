import "./App.css";
import Header from "./components/Header/header";
import ContactUs from "./components/Forms/contactUs";
import Main from "./components/Main/main";
import styled from "styled-components";
import Card from "./components/Card/card";
import Footer from "./components/Footer/footer";
import imgZetta from "./imgs/battery-zetta.png";
import imgPowerbat from "./imgs/battery-powerbat.jpg";
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
        <Card img={imgMoura} model="40SD" price="300" />
        <Card img={imgMoura} model="48FD" price="340" />
        <Card img={imgMoura} model="48FE" price="340" />
        <Card img={imgMoura} model="50EX" price="380" />
        <Card img={imgMoura} model="50JD" price="380" />
        <Card img={imgMoura} model="60AX" price="390" />
        <Card img={imgMoura} model="60GD" price="370" />
        <Card img={imgMoura} model="70KD" price="530" />
        <Card img={imgMoura} model="75LX" price="550" />
        <Card img={imgMoura} model="80RD" price="580" />
        <Card img={imgMoura} model="90TD" price="620" />
        <Card img={imgMoura} model="100HE" price="650" />
        <Card img={imgMoura} model="150BD" price="800" />
        <Card img={imgMoura} model="180BD" price="900" />
        <Card img={imgPowerbat} model="40AH" price="150" />
        <Card img={imgPowerbat} model="50AH" price="180" />
        <Card img={imgPowerbat} model="60AH" price="220" />
        <Card img={imgPowerbat} model="70AH" price="280" />
        <Card img={imgPowerbat} model="90AH" price="380" />
        <Card img={imgPowerbat} model="100AH" price="400" />
        <Card img={imgPowerbat} model="150AH" price="500" />
        <Card img={imgZetta} model="60A" price="280" />
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
  flex-wrap: wrap;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    margin: 5em auto;
    height: auto;
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
