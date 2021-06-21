import React from "react";
import styled from "styled-components";

function Contactus() {
  return (
    <FormMain>
      <Head>
        <Text>Envie-nos uma mensagem</Text>
      </Head>
      <Forms>
        <Input id="name" type="text" placeholder="Digite aqui seu nome..." />
        <Input
          id="email"
          type="email"
          placeholder="Digite aqui seu e-mail..."
        />
        <Message id="message" placeholder="Digite aqui sua mensagem..." />
        <Button type="button">Enviar e-mail</Button>
      </Forms>
    </FormMain>
  );
}

export const FormMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  margin: auto;
  border: 1px solid #dfdfdf;
  border-radius: 15px;
  box-shadow: 5px 5px 15px rgba(33, 37, 41, 0.1);
`;

export const Head = styled.div`
  background: #f7f7f7;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px 15px 0 0;
  border: 1px solid #dfdfdf;
  height: 5em;
  padding: 0;
`;

export const Text = styled.h1`
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  color: #212529;
  margin: 0;
  padding: 0;
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 30em;
`;

export const Input = styled.input`
  background: #ffffff;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 0 1em;
  width: 18em;
  height: 4em;

  :focus {
    outline: none;
  }

  ::-webkit-input-placeholder {
    color: #dfdfdf;
  }
`;

export const Message = styled.textarea`
  background: #ffffff;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 1em 0 1em 1em;
  width: 18em;
  height: 10em;

  :focus {
    outline: none;
  }

  ::-webkit-input-placeholder {
    color: #dfdfdf;
  }
`;

export const Button = styled.button`
  width: 10em;
  height: 2em;
  background: #ffffff;
  border: 1px solid #0b5ed6;
  box-sizing: border-box;
  border-radius: 6px;
  color: #0b5ed6;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;

  :hover {
    transition: 0.2s;
    background: #0b5ed6;
    color: #ffffff;
  }
`;

export default Contactus;
