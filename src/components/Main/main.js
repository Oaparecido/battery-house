import React from "react";
import styled from "styled-components";
import imgLogo from "../../imgs/logo-battery-house.png";

function Main() {
  return (
    <MainDiv>
      <ImgLogo src={imgLogo} />
      <TextMain>
        Confira aqui os melhores preços da região, tenha em suas mãos o melhor
        serviço, oferecemos troca de baterias, teste de alternador e muito mais!
      </TextMain>
    </MainDiv>
  );
}

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgLogo = styled.img`
  margin: 0 0 2em 0;

  @media (max-width: 800px) {
    margin: 2em 0;
    width: 20em;
  }
`;

export const TextMain = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  text-align: center;
  width: 25em;
  color: #6c757d;

  @media (max-width: 800px) {
    width: auto;
  }
`;

export default Main;
