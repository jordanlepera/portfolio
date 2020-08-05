// @flow
import * as React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import Typography from "@material-ui/core/Typography"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Link from "@material-ui/core/Link"
import Fade from "@material-ui/core/Fade"
import uniqueId from "lodash/uniqueId"
import ProjectHeader from "../ProjectHeader/ProjectHeader"

type Props = {
  projectData: String,
}

const Project = (props: Props) => {
  const { projectData } = props
  const { t, i18n } = useTranslation()
  const [pageData, setPageData] = React.useState(null)

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  React.useEffect(() => {
    import(`../../documents/projects/${projectData}.json`)
      .then((pageDataJson) => {
        setPageData(pageDataJson)
      })
      .catch((err) => console.log(err.message))
  }, [projectData])

  const Description = () =>
    pageData
      ? pageData[i18n.language].desc.map((desc) => (
          <div key={uniqueId("desc-")}>
            <Typography variant="body2">{desc}</Typography>
            <br />
          </div>
        ))
      : ""

  const Features = () =>
    pageData
      ? pageData[i18n.language].features.map((feature) => (
          <li key={uniqueId("feature-")}>{feature}</li>
        ))
      : ""

  const NextSteps = () =>
    pageData
      ? pageData[i18n.language]["next-steps"].map((step) => (
          <li key={uniqueId("step-")}>{step}</li>
        ))
      : ""

  const Enhancements = () =>
    pageData
      ? pageData[i18n.language].enhancements.map((enhancement) => (
          <li key={uniqueId("enhancements-")}>{enhancement}</li>
        ))
      : ""

  return (
    <React.Suspense fallback="loading ...">
      <Fade in timeout={500}>
        <Container>
          <Typography variant="h3">{t("projects")}</Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              {t("home")}
            </Link>
            <Link color="inherit" href="/projects">
              {t("projects")}
            </Link>
            <Typography color="textPrimary">{projectData}</Typography>
          </Breadcrumbs>
          <ProjectHeader projectData={projectData} />
          <Space />
          <Typography variant="h4">{t("project-page.description")}</Typography>
          <br />
          <Description />
          <Typography variant="h4">{t("project-page.features")}</Typography>
          <ul>
            <Typography variant="body2">
              <Features />
            </Typography>
          </ul>
          {pageData && pageData[i18n.language]["next-steps"].length !== 0 ? (
            <>
              <Typography variant="h4">
                {t("project-page.next-steps")}
              </Typography>
              <ul>
                <Typography variant="body2">
                  <NextSteps />
                </Typography>
              </ul>
            </>
          ) : (
            ""
          )}
          {pageData && pageData[i18n.language].enhancements.length !== 0 ? (
            <>
              <Typography variant="h4">
                {t("project-page.enhancements")}
              </Typography>
              <ul>
                <Typography variant="body2">
                  <Enhancements />
                </Typography>
              </ul>
            </>
          ) : (
            ""
          )}
          <Typography variant="h4">{t("project-page.author")}</Typography>
          <br />
          <Typography variant="body2">Jordan LE PERA</Typography>
        </Container>
      </Fade>
    </React.Suspense>
  )
}
const Space = styled.div`
  height: 50px;
`

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
`

export default Project
