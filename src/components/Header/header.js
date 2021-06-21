import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

function Header() {
  return (
    <Headers>
      <Title>Casa das baterias</Title>
      <Block>
        <About href="#">Sobre</About>
        <Button type="button">Contato</Button>
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
`;

export const Button = styled.button`
  padding: 0.4em 1.5em;
  background: #0b5ed6;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  font-size: 16px;
`;
export default Header;
