import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Fade from "@material-ui/core/Fade"
import notfound from "../../img/404_page_not_found_iso.svg"

const NotFound = () => {
  const { t } = useTranslation()
  const matches = useMediaQuery("(max-width:959px)")

  return (
    <Container>
      <Fade in timeout={500}>
        <Image src={notfound} alt="under construction" matches={matches} />
      </Fade>
      <TextContainer>
        <Typography variant="h3">{t("notfound-page.oops")}</Typography>
        <br />
        {t("notfound-page.page-not-found")}
        <br />
        <br />
        {t("notfound-page.redirect-to-home")}
        <br />
        <br />
        <ButtonLink to="/" exact>
          <ButtonHere size="large" variant="outlined">
            <Typography variant="h6">{t("notfound-page.here")}</Typography>
          </ButtonHere>
        </ButtonLink>
      </TextContainer>
    </Container>
  )
}

const ButtonHere = styled(Button)`
  color: #3d3d3d;
`

const ButtonLink = styled(NavLink)`
  text-decoration: none;
  color: #3d3d3d;
`

const Image = styled.img`
  width: ${(props) => (props.matches ? "90%" : "50%")};
  height: auto;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  color: #3d3d3d;
  width: 100%;
`

const TextContainer = styled.div`
  text-align: center;
  margin: 20px;
`

export default NotFound
