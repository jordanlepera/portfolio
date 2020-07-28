// @flow
import React from "react"
import styled from "styled-components"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Typography from "@material-ui/core/Typography"
import Fade from "@material-ui/core/Fade"
import moment from "moment"
import { useTranslation } from "react-i18next"
import myPhoto from "../../img/moi.jpeg"
// import WorkInProgress from "../../components/WorkInProgress/WorkInProgress"

const About = () => {
  const { t } = useTranslation()
  const matches = useMediaQuery("(max-width:959px)")
  const matchesPhone = useMediaQuery("(max-width:375px)")

  const myAge = moment().diff(
    moment().set({ day: 29, month: 8, year: 1994 }),
    "years"
  )

  return (
    <>
      <Fade in timeout={500}>
        <Container>
          <ImageContainer>
            <Image src={myPhoto} alt="photo de moi :)" matches={matches} />
          </ImageContainer>
          <Typography variant={matchesPhone ? "h4" : "h2"} align="center">
            Hello world !
          </Typography>
          <Typography variant="h2" align="center">
            <span role="img" aria-label="emoji wink">
              🌍
            </span>
          </Typography>
          <br />
          <Typography variant="body1">{t("about-page.paragraph1")}</Typography>
          <br />
          <Typography variant="body1">
            {t("about-page.paragraph2-1")}
            {myAge}
            {t("about-page.paragraph2-2")}
            <br />
            <br />
            {t("about-page.paragraph3")}
          </Typography>
          <br />
          <Typography variant="h4">
            {t("about-page.paragraph4-title")}
          </Typography>
          <br />
          <Typography variant="body1">{t("about-page.paragraph4")}</Typography>
          <br />
          <Typography variant="body1">{t("about-page.paragraph5")}</Typography>
        </Container>
      </Fade>
    </>
  )
}

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`

const Image = styled.img`
  width: ${(props) => (props.matches ? "100%" : "350px")};
  max-width: 350px;
  height: auto;
  border-radius: 10px;
  filter: grayscale(0%);
  transition: filter 1s ease-out;
  &:hover {
    filter: grayscale(100%);
  }
`

const Container = styled.div`
  width: 90%;
`

export default About
