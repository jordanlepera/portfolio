// @flow
import React from "react"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa"
import styled from "styled-components"

const Footer = () => {
  const matches = useMediaQuery("(max-width:959px)")

  return (
    <footer>
      <FooterContainer matches={matches}>
        <CopyrightContainer matches={matches}>
          2020 © Jordan LE PERA - All rights reserved
        </CopyrightContainer>
        <SocialContainer matches={matches}>
          <SocialLink href="https://twitter.com/Jordanlepera" target="blank">
            <FaTwitter />
            &nbsp;@jordanlepera
          </SocialLink>
          <SocialLink href="https://github.com/jordanlepera" target="blank">
            <FaGithub />
            &nbsp;jordanlepera
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/codinov.dev/"
            target="blank"
          >
            <FaInstagram />
            &nbsp;codinov.dev
          </SocialLink>
        </SocialContainer>
      </FooterContainer>
    </footer>
  )
}

const FooterContainer = styled.div`
  border-top: 1px solid #dddddd;
  display: flex;
  flex-direction: ${(props) => (props.matches ? "column-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  max-width: 1000px;
  margin-top: 30px;
  width: 90%;
`

const CopyrightContainer = styled.div`
  flex-grow: 1;
  text-align: ${(props) => (props.matches ? "center" : "left")};
  color: #3d3d3d;
  margin: 10px;
  padding: 10px;
`

const SocialContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.matches ? "column" : "row")};
  align-items: ${(props) => (props.matches ? "center" : "flex-start")};
  justify-content: flex-end;
`

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
  color: #3d3d3d;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: rgba(61, 61, 61, 0.5);
  }
`

export default Footer
