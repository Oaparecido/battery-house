import React from "react";
import ReactWhatsapp from "react-whatsapp";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

function Header() {
  return (
    <Headers>
      <Title>Casa das baterias</Title>
      <Block>
        <About href="#">Sobre</About>
        <ReactWhatsappCustom
          element="button"
          number="551146420571"
          message="Olá, encontrei seu catálogo online, vim saber sobre as baterias, podemos conversar ?!"
        >
          Contato
        </ReactWhatsappCustom>
      </Block>
    </Headers>
  );
}

export const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  margin: 1em auto;
  border-bottom: 2px solid #dedede;
  padding: 0.5em 0em;

  button {
  }

  @media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  color: #212529;
`;

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10vw;

  @media (max-width: 800px) {
    width: auto;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const About = styled.a`
  margin-top: 0.2em;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  color: #212529;

  :hover {
    text-decoration: none;
    color: #212529;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ReactWhatsappCustom = styled(ReactWhatsapp)`
  padding: 0.4em 1.5em;
  background: #0b5ed6;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  font-size: 16px;

  @media (max-width: 800px) {
    width: 10em;
  }
`;
export default Header;
