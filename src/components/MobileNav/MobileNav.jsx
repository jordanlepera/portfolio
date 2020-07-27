// @flow
import React, { Suspense } from "react"
import styled from "styled-components"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { NavLink } from "react-router-dom"
import MenuButton from "../MenuButton/MenuButton"
import Loading from "../Loading/Loading"
import Menu from "../Menu/Menu"
import LogoImg from "../../img/codinov_logo1txt-white.svg"

const MobileNav = () => {
  const matches = useMediaQuery("(max-width:959px)")
  const [open, setOpen] = React.useState(false)

  return (
    <Suspense fallback={<Loading />}>
      <Menu open={open} setOpen={setOpen} />
      <MobileNavBarContainer>
        <MobileNavBar matches={matches}>
          <NavLink to="/">
            <Logo src={LogoImg} alt="Codinov's logo" matches={matches} />
          </NavLink>
          <Space />
          <MenuButton onClick={() => setOpen(true)} />
        </MobileNavBar>
      </MobileNavBarContainer>
    </Suspense>
  )
}

const MobileNavBarContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #dddddd;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`

const MobileNavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: "row";
  min-height: 80px;
  max-width: 1000px;
  width: 90%;
`

const Logo = styled.img`
  width: 200px;
  height: auto;
  ${(props) => (props.matches ? "margin: 10px 0" : "")};
  flex-grow: 1;
`

const Space = styled.span`
  flex-grow: 1;
`

export default MobileNav
