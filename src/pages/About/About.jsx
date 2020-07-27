// @flow
import React from "react"
import styled from "styled-components"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Typography from "@material-ui/core/Typography"
import Fade from "@material-ui/core/Fade"
import moment from "moment"
import myPhoto from "../../img/moi.jpeg"
// import { useTranslation } from 'react-i18next';
// import WorkInProgress from "../../components/WorkInProgress/WorkInProgress"

const About = () => {
  // const { t } = useTranslation();
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
          <Typography variant="body1">
            Je m&apos;appelle Jordan Le Pera (enchanté !). Passionné par le
            développement informatique, j&apos;expose dans ce portfolio les
            projets que je développe. Je compte également prendre le temps de
            rédiger des articles sur des sujets qui m&apos;intéresse
            principalement autour du développement web/mobile et sur le
            webdesign. Je proposerai également des tutoriaux et je vous
            partagerai mes liens utiles{" "}
            <span role="img" aria-label="emoji wink">
              😉
            </span>
            .
          </Typography>
          <br />
          <Typography variant="body1">
            Pour vous parler un peu plus de moi, j&apos;ai {myAge} ans,
            j&apos;habite en France{" "}
            <span role="img" aria-label="emoji french flag">
              🇫🇷
            </span>
            , en Alsace{" "}
            <span role="img" aria-label="emoji bretzel">
              🥨
            </span>
            , j&apos;adore les emojis (vous allez vite vous en rendre compte{" "}
            <span role="img" aria-label="emoji wink with tongue">
              😜
            </span>
            ) et j&apos;ai terminé mes études il y a peu de temps. J&apos;ai
            obtenu mon diplôme d&apos;Expert en Technologie de
            l&apos;Information (BAC +5) de l&apos;école Epitech en Octobre 2019.
            <br />
            <br />
            En ce moment, je fais beaucoup de développement sur la stack React /
            React Native{" "}
            <span role="img" aria-label="emoji react">
              ⚛️
            </span>{" "}
            , Node.js et GraphQL. Je possède également de très bonnes
            compétences en C/C++, en développement mobile natif iOS, en .NET et
            je m&apos;intéresse beaucoup à Python{" "}
            <span role="img" aria-label="emoji programmer">
              🐍
            </span>
            . Suite à une expérience entrepreunariale dans laquelle j&apos;ai eu
            la chance de pouvoir créer une start-up et d&apos;évoluer dans cet
            éco-système, je suis désormais à la recherche d&apos;un emploi{" "}
            <span role="img" aria-label="emoji programmer">
              👨‍💻
            </span>{" "}
            en France, en Suisse ou bien en télétravail.
          </Typography>
          <br />
          <Typography variant="h4">Qu&apos;est-ce que Codinov ?</Typography>
          <br />
          <Typography variant="body1">
            Codinov, c&apos;est en quelque sorte l&apos;identité sous laquelle
            je souhaite regrouper l&apos;ensemble de mes travaux en lien avec le
            développement informatique.
          </Typography>
          <br />
          <Typography variant="body1">
            Je serai ravi d&apos;échanger avec vous alors n&apos;hésitez pas à
            me contacter à travers mes différents réseaux sociaux et à me suivre
            pour ne rien manquer de mes différentes activités !{" "}
            <span role="img" aria-label="emoji hands raised">
              🙌
            </span>
          </Typography>
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
