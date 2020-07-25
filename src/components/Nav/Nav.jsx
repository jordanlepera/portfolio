import React, { Suspense } from "react"
import styled from "styled-components"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTranslation } from "react-i18next"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import { NavLink } from "react-router-dom"
import uniqueId from "lodash/uniqueId"
import MenuButton from "../MenuButton/MenuButton"
import Loading from "../Loading/Loading"
import LogoImg from "../../img/codinov_logo1txt-white.svg"

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

const Nav = () => {
  const matches = useMediaQuery("(max-width:959px)")
  const { t, i18n } = useTranslation()

  const navButtons = [
    {
      text: t("projects"),
      url: "/projects",
    },
    {
      text: t("articles"),
      url: "/articles",
    },
    {
      text: t("about"),
      url: "/about",
    },
  ]

  const languageMenuItemsList = languages.map((elem) => (
    <MenuItem value={elem.value} key={uniqueId("languageMenuItem-")}>
      <span role="img" aria-label={elem.ariaLabel}>
        {elem.emoji}
      </span>{" "}
      {elem.text}
    </MenuItem>
  ))

  const navButtonsList = navButtons.map((elem) => (
    <NavLink to={elem.url} key={uniqueId("navbuttons-")}>
      <NavButton type="button">{elem.text}</NavButton>
    </NavLink>
  ))

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <Suspense fallback={<Loading />}>
      <NavBar matches={matches}>
        <NavLink to="/">
          <Logo src={LogoImg} alt="Codinov's logo" />
        </NavLink>
        <Space />
        {matches ? <MenuButton /> : navButtonsList}
        <Select
          autoWidth
          value={i18n.language.substring(0, 2)}
          defaultValue={i18n.language.substring(0, 2)}
          variant="outlined"
          onChange={handleChange}
        >
          {languageMenuItemsList}
        </Select>
      </NavBar>
    </Suspense>
  )
}

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.matches ? "column" : "row")};
  min-height: 80px;
  max-width: 1000px;
  margin-top: 30px;
  width: 90%;
  border-bottom: 1px solid #dddddd;
  padding: 10px;
`

const Logo = styled.img`
  width: 300px;
  height: auto;
`

const Space = styled.span`
  flex-grow: 1;
`

const NavButton = styled.button`
  font-weight: bold;
  width: 100px;
  height: 80px;
  border-radius: 10px;
  text-transform: capitalize;
  font-size: large;
  cursor: pointer;
  border: none;
  padding: 10px;
  margin: 10px;
  background-color: transparent;
  outline: none;
  color: #3d3d3d;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: rgba(61, 61, 61, 0.5);
  }
`

export default Nav
