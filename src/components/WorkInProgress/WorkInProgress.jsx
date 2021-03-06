import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Fade from "@material-ui/core/Fade"
import construction from "../../img/web_developer.svg"

const WorkInProgress = () => {
  const { t } = useTranslation()
  const matches = useMediaQuery("(max-width:959px)")

  return (
    <Container>
      <Fade in timeout={500}>
        <Image src={construction} alt="under construction" matches={matches} />
      </Fade>
      <TextContainer>{t("work-in-progress")}</TextContainer>
    </Container>
  )
}

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
`

const TextContainer = styled.div`
  text-align: center;
  margin: 20px;
`

export default WorkInProgress
