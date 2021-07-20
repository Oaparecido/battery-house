import React from "react";
import styled from "styled-components";
import ReactWhatsapp from "react-whatsapp";

function Card(props) {
  return (
    <CardMain>
      <FirstBox>
        <ImgBattery src={props.img} />
        <Text>
          <Model>{props.model}</Model>
          <p>Modelo</p>
        </Text>
      </FirstBox>
      <Secondbox>
        <Price>
          <Dolla>$</Dolla>
          <p>{props.price}</p>
        </Price>
        <ReactWhatsappCustom
          element="button"
          number="551146420571"
          message={`Gostei muito da bateria ${props.model}, podemos conversar sobre ?!`}
        >
          Pedir Agora
        </ReactWhatsappCustom>
      </Secondbox>
    </CardMain>
  );
}

export const CardMain = styled.div`
  border: 1px solid blue;
  margin: 2em;
  width: 20em;
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

export const FirstBox = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  padding: 1em 2em 0em 2em;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p {
    color: #6c757d;
    font-size: 20px;
  }
`;

export const Model = styled.h2`
  font-size: 40px;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

export const ImgBattery = styled.img`
  width: 6em;
  height: 4em;
`;

export const Secondbox = styled.div`
  display: flex;
  justify-content: space-between;
  width: inherit;
  padding: 0 2em;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Price = styled.p`
  display: flex;
  aling-items: flex-start;

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 55px;
    margin: 0;
  }
`;

export const Dolla = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap');
  font-family: 'Barlow', sans-serif
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  padding-top: 15px;
`;

export const ReactWhatsappCustom = styled(ReactWhatsapp)`
  width: 7em;
  height: 3em;
  border: none;
  box-sizing: border-box;
  border-radius: 6px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  margin: 0 0 1em 0;
  background: #0b5ed6;
  color: #ffffff;
`;

export default Card;
