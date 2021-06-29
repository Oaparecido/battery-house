import React from "react";
import styled from "styled-components";
import imgsmall from "../../imgs/logo-small.png";
import imgInstagram from "../../imgs/instagram 1.png";
import imgFacebook from "../../imgs/logo-do-facebook 1.png";

function Footer() {
  return (
    <FooterMain>
      <Left>
        <ImgLogo src={imgsmall} />
        <Copyright>
          All rights reserved. © Created by{" "}
          <Github href="http://github.com/oaparecido">oAparecido</Github>. 2021
          MIT.
        </Copyright>
      </Left>
      <Right>
        <Label>Redes sociais</Label>
        <SocialNetwork>
          <ImgSocial src={imgInstagram} />
          <LabelSocial href="#">Instagram</LabelSocial>
        </SocialNetwork>
        <SocialNetwork>
          <ImgSocial src={imgFacebook} />
          <LabelSocial href="#">Facebook</LabelSocial>
        </SocialNetwork>
      </Right>
    </FooterMain>
  );
}

export const FooterMain = styled.div`
  height: auto;
  background: #212529;
  bottom: 0%;
  padding: 2em 18em;
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 1em 0;
    align-items: center;
    height: auto;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 800px) {
    align-items: center;
    margin-top: 3em;
  }
`;

export const ImgLogo = styled.img`
  width: 11em;
`;

export const Copyright = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3em;
  color: #fff;
  margin: 0;

  @media (max-width: 800px) {
    text-align: center;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    align-items: center;
    margin-top: 3em;
  }
`;

export const Label = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2em;
  color: #fff;
  margin: 0;
`;

export const SocialNetwork = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgSocial = styled.img`
  width: 1.3em;
  height: 1.3em;
`;

export const LabelSocial = styled.a`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3em;
  color: #6c757d;
  margin: 0 0 0 0.5em;
  text-decoration: none;

  :hover {
    text-decoration: none;
    color: #6c757d;
    cursor: pointer;
  }
`;

export const Github = styled.a`
  color: #6c757d;
  text-decoration: none;
  transition: 0.2s ease-in-out;

  :hover {
    text-decoration: none;
    color: #6294c0;
    cursor: pointer;
  }
`;

export default Footer;
