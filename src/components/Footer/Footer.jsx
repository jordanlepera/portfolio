import React from 'react';
import { FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import styled from 'styled-components';


const Footer = () => (
  <FooterContainer>
    <CopyrightContainer>
      2020 © Jordan LE PERA - All rights reserved
    </CopyrightContainer>
    <SocialContainer>
      <SocialLink href="https://twitter.com/Jordanlepera" target="blank">
        <FaTwitter />
        &nbsp;@jordanlepera
      </SocialLink>
      <SocialLink href="https://github.com/jordanlepera" target="blank">
        <FaGithub />
        &nbsp;jordanlepera
      </SocialLink>
      <SocialLink href="https://www.instagram.com/codinov.dev/" target="blank">
        <FaInstagram />
        &nbsp;codinov.dev
      </SocialLink>
    </SocialContainer>
  </FooterContainer>
);

const SocialLink = styled.a`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  cursor: pointer;
  border: none;
  padding: 10px;
  margin: 10px;
  background-color: transparent;
  color: #3D3D3D;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: rgba(61, 61, 61, 0.5)
  }
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CopyrightContainer = styled.div`
  flex-grow: 1;
  color: #3D3D3D;
`;

const FooterContainer = styled.footer`
  border-top: 1px solid #dddddd;
  display: flex;
  align-items: center;
  height: 80px;
  max-width: 1200px;
  margin-top: 30px;
  min-width: 414px;
  width: 1000px;

`;

export default Footer;
