import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import emailkey from "../../services/emailkey";
import { init } from 'emailjs-com';
init("user_OMlc59RhKoVNZOjjBAfu1");

function Contactus() {

    const handleSubmit = (e) => {
        e.preventDefault();

        const target = {
            "name": e.target.name.value,
            "email": e.target.email.value,
            "message": e.target.message.value,
        };

        emailjs.send(`service_7igtymp`, emailkey.TEMPLATE_ID, target)
            .then((result) => {
                alert("Sua mensagem foi enviada!");
            }, (error) => {
                alert("Não conseguimos enviar sua mensagem, entre em contato mais tarde!");
            })
    };

  return (
    <FormMain>
      <Head>
        <Text>Envie-nos uma mensagem</Text>
      </Head>
      <Forms onSubmit={handleSubmit}>
        <Input id="name" type="text" placeholder="Digite aqui seu nome..." />
        <Input
          id="email"
          type="email"
          placeholder="Digite aqui seu e-mail..."
        />
        <Message id="message" placeholder="Digite aqui sua mensagem..." />
        <Button type="submit">Enviar e-mail</Button>
      </Forms>
    </FormMain>
  );
}

export const FormMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  border: 1px solid #dfdfdf;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 5px 5px 15px rgba(33, 37, 41, 0.1);

  @media (max-width: 800px) {
    width: auto;
    padding: 1em;
  }
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

  @media (max-width: 800px) {
    font-size: 20px;
    padding: 1.3em;
  }
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
