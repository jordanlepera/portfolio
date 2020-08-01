// @flow
import * as React from "react"
import styled from "styled-components"
import uniqueId from "lodash/uniqueId"
import { Flipper, Flipped } from "react-flip-toolkit"
import anime from "animejs"
import Typography from "@material-ui/core/Typography"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Link from "@material-ui/core/Link"
import Fade from "@material-ui/core/Fade"
import { useTranslation } from "react-i18next"
import { useQuery } from "@apollo/client"
import ProjectListCard from "../../components/ProjectListCard/ProjectListCard"
import Loading from "../../components/Loading/ComponentLoading"
import QueryService from "../../queries/query.service"

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

const animateElementIn = (el, i) => {
  anime({
    targets: el,
    opacity: [0, 1],
    translateX: [100, 0],
    translateZ: 0,
    duration: 1000,
    delay: i * 100,
    easing: "cubicBezier(0.165, 0.84, 0.44, 1)",
  })
}

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const Projects = () => {
  const { t } = useTranslation()
  const { loading, error, data } = useQuery(QueryService.getProjects(), {
    errorPolicy: "all",
  })

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const ProjectList = () => {
    if (loading) return <Loading />
    if (error)
      return (
        <>
          {error.graphQLErrors.map(({ message }) => (
            <span key={uniqueId("error-message")}>{message}</span>
          ))}
        </>
      )

    return data.viewer.repositories.edges.map((repo) => (
      <Flipped
        flipId={uniqueId("project-list-card-")}
        onAppear={animateElementIn}
        key={uniqueId("project-list-card-")}
      >
        {(flippedProps) => (
          <ProjectListCard projectData={repo} flippedProps={flippedProps} />
        )}
      </Flipped>
    ))
  }

  return (
    <Fade in timeout={500}>
      <Container>
        <Typography variant="h3">{t("projects")}</Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            {t("home")}
          </Link>
          <Typography color="textPrimary">{t("projects")}</Typography>
        </Breadcrumbs>
        <Space />
        <Flipper
          handleEnterUpdateDelete={exitThenFlipThenEnter}
          flipKey={data}
          spring="gentle"
          decisionData={data}
          element={ContentContainer}
        >
          <ProjectList />
        </Flipper>
      </Container>
    </Fade>
  )
}

const Space = styled.div`
  width: 100%;
  height: 10px;
`

const Container = styled.div`
  width: 90%;
`

export default Projects
