import React from 'react';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import styled from 'styled-components';


const Footer = () => {
  const matches = useMediaQuery('(max-width:959px)');

  const FooterContainer = styled.footer`
    border-top: 1px solid #dddddd;
    display: flex;
    flex-direction: ${props => props.matches ? 'column' : 'row'};
    align-items: center;
    min-height: 80px;
    max-width: 1000px;
    margin-top: 30px;
    width: 90%;
  `;

  const CopyrightContainer = styled.div`
    flex-grow: 1;
    text-align: ${props => props.matches ? 'center' : 'left'};
    color: #3D3D3D;
    margin: 10px;
    padding: 10px;
  `;

  const SocialLink = styled.a`
    display: flex;
    align-items: flex-end;
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

  return (
    <FooterContainer matches={matches}>
      <Grid container direction={matches ? 'column-reverse' : 'row'} alignItems="center" justify="space-between" style={{ flexGrow: 1 }}>
        <Grid item xs>
          <CopyrightContainer>
            2020 © Jordan LE PERA - All rights reserved
          </CopyrightContainer>
        </Grid>
        <Grid item container xs justify="flex-end" direction={matches ? 'column' : 'row'} alignItems={matches ? 'center' : 'flex-start'}>
          <Grid item>
            <SocialLink href="https://twitter.com/Jordanlepera" target="blank">
              <FaTwitter />
              &nbsp;@jordanlepera
            </SocialLink>
          </Grid>
          <Grid itemType>
            <SocialLink href="https://github.com/jordanlepera" target="blank">
              <FaGithub />
            &nbsp;jordanlepera
          </SocialLink>
          </Grid>
          <Grid item>
            <SocialLink href="https://www.instagram.com/codinov.dev/" target="blank">
              <FaInstagram />
            &nbsp;codinov.dev
          </SocialLink>
          </Grid>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
