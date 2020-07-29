// @flow
import * as React from "react"
import styled from "styled-components"
import { Flipper, Flipped } from "react-flip-toolkit"
import { NavLink } from "react-router-dom"
import uniqueId from "lodash/uniqueId"
import anime from "animejs"
import Dialog from "@material-ui/core/Dialog"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Fade from "@material-ui/core/Fade"
import { useTranslation } from "react-i18next"
import { FaTimes } from "react-icons/fa"
import LogoImg from "../../img/codinov_logo1txt-white.svg"

const menuLink = [
  {
    text: "home",
    isExact: true,
    url: "/",
  },
  {
    text: "projects",
    isExact: true,
    url: "/projects",
  },
  {
    text: "articles",
    isExact: true,
    url: "/articles",
  },
  {
    text: "about",
    isExact: true,
    url: "/about",
  },
]

const languages = [
  {
    value: "fr",
    ariaLabel: "french flag",
    emoji: "🇫🇷",
    text: "Français",
  },
  {
    value: "en",
    ariaLabel: "english flag",
    emoji: "🇬🇧",
    text: "English",
  },
]

// wait for exiting elements to be removed
// next, animate updating elements
// finally, after updates are complete,
// animate entering elements
const exitThenFlipThenEnter = ({
  hideEnteringElements,
  animateEnteringElements,
  animateExitingElements,
  animateFlippedElements,
}) => {
  hideEnteringElements()
  animateExitingElements()
    .then(animateFlippedElements)
    .then(animateEnteringElements)
}

const Transition = React.forwardRef(function Transition(props, ref) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Fade ref={ref} {...props} timeout={500} />
})

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
`

type Props = {
  open: boolean,
  setOpen: (param1: boolean) => any,
}

const Menu = (props: Props) => {
  const { open, setOpen } = props
  const { t, i18n } = useTranslation()
  const [links, setLinks] = React.useState([])

  const animateLogo = (el) => {
    anime({
      targets: el,
      opacity: [0, 1],
      duration: 1000,
      easing: "cubicBezier(0.165, 0.84, 0.44, 1)",
    })
  }

  const animateSelectLanguage = (el) => {
    anime({
      targets: el,
      opacity: [0, 1],
      duration: 1000,
      delay: 1000,
      easing: "cubicBezier(0.165, 0.84, 0.44, 1)",
    })
  }

  const animateElementIn = (el, i) => {
    anime({
      targets: el,
      opacity: [0, 1],
      translateX: [40, 0],
      duration: 1000,
      delay: i * 100,
      easing: "cubicBezier(0.165, 0.84, 0.44, 1)",
    })
  }

  const handleClose = () => {
    setOpen(false)
  }

  const menuLinks = links.map((elem) => (
    <Flipped
      flipId={uniqueId("flipped-menu-link")}
      onAppear={animateElementIn}
      key={uniqueId("menuLink-")}
    >
      {(flippedProps) => (
        <MobileMenuLink
          url={elem.url}
          isExact={elem.isExact}
          text={t(elem.text)}
          flippedProps={flippedProps}
          handleClose={handleClose}
        />
      )}
    </Flipped>
  ))

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  const languageMenuItemsList = languages.map((elem) => (
    <MenuItem value={elem.value} key={uniqueId("languageMenuItem-")}>
      <span role="img" aria-label={elem.ariaLabel}>
        {elem.emoji}
      </span>{" "}
      {elem.text}
    </MenuItem>
  ))

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        onExit={() => {
          setLinks([])
        }}
        TransitionComponent={Transition}
        onEntered={() => {
          setLinks([...menuLink])
        }}
      >
        <DialogContainer>
          <IconButton onClick={handleClose}>
            <FaTimes color="3D3D3D" size="30" />
          </IconButton>
          <Flipper
            handleEnterUpdateDelete={exitThenFlipThenEnter}
            flipKey={links}
            spring="gentle"
            decisionData={links}
            element={LinkContainer}
          >
            <Flipped flipId={uniqueId("flipped-logo")} onAppear={animateLogo}>
              <Logo src={LogoImg} alt="Codinov's logo" className="logo" />
            </Flipped>
            {menuLinks}
            <Flipped
              flipId={uniqueId("flipped-logo")}
              onAppear={animateSelectLanguage}
            >
              <SelectContainer>
                <Select
                  autoWidth
                  value={i18n.language.substring(0, 2)}
                  defaultValue={i18n.language.substring(0, 2)}
                  variant="outlined"
                  onChange={handleChange}
                >
                  {languageMenuItemsList}
                </Select>
              </SelectContainer>
            </Flipped>
          </Flipper>
        </DialogContainer>
      </Dialog>
    </div>
  )
}

type MenuLinkProps = {
  url: string,
  isExact: boolean,
  text: string,
  flippedProps: any,
  handleClose: () => any,
}

const MobileMenuLink = (props: MenuLinkProps) => {
  const { url, isExact, text, handleClose, flippedProps } = props

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Container {...flippedProps}>
      <MenuLink to={url} exact={isExact} onClick={handleClose}>
        <TextContainer>{text}</TextContainer>
      </MenuLink>
    </Container>
  )
}

const SelectContainer = styled.div`
  opacity: 0;
  margin-top: 30px;
`

const Logo = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 40px;
  opacity: 0;
`

const Container = styled.div`
  margin: 5px;
`

const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

const IconButton = styled.div`
  position: absolute;
  top: 25.5px;
  right: 25px;
  &:hover {
    cursor: pointer;
  }
`

const TextContainer = styled.div`
  text-transform: uppercase;
  color: #3d3d3d;
  font-weight: 700;
  letter-spacing: 5px;
`

const MenuLink = styled(NavLink)`
  text-decoration: none;
  margin: 10px;
  padding: 10px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

export default Menu
