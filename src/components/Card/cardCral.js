import React from "react";
import styled from "styled-components";
import batteryCral from "../../imgs/battery-cral.png";

function Card() {
  return (
    <CardMain>
      <TitleBlock>
        <Title>Cral</Title>
      </TitleBlock>
      <ImgBattery src={batteryCral} />
      <Container>
        <PriceA>R$30</PriceA>
        <PriceB>/pç</PriceB>
      </Container>

      <Button type="button">Enviar e-mail</Button>
    </CardMain>
  );
}

export const CardMain = styled.div`
  border: 1px solid blue;
  width: 19em;
  height: 19em;
  border-radius: 10px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleBlock = styled.div`
  background: #f7f7f7;
  margin: 0%;
  height: 6em;
  width: inherit;
  top: 0%;
  margin: 0 0 1em 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px 15px 0 0;
  border: 1px solid #dfdfdf;
`;

export const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 26px;
  margin: 0;
`;

export const ImgBattery = styled.img``;

export const Container = styled.div`
  display: flex;
  align-items: baseline;
`;

export const PriceA = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  color: #212529;
`;

export const PriceB = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  color: #6c757d;
`;

export const Button = styled.button`
  width: 10em;
  height: 4em;
  background: #ffffff;
  border: 1px solid #0b5ed6;
  box-sizing: border-box;
  border-radius: 6px;
  color: #0b5ed6;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  margin: 0 0 1em 0;

  :hover {
    transition: 0.2s;
    background: #0b5ed6;
    color: #ffffff;
  }
`;

export default Card;
