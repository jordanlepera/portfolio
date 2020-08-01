// @flow
import * as React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import Typography from "@material-ui/core/Typography"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Link from "@material-ui/core/Link"
import Fade from "@material-ui/core/Fade"
import ProjectHeader from "../ProjectHeader/ProjectHeader"

type Props = {
  projectData: any,
}

const Project = (props: Props) => {
  const { projectData } = props
  const { t } = useTranslation()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
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
        <Typography variant="body2">Lorep ipsum</Typography>
        <br />
        <Typography variant="body2">
          Inventory is an app aiming to realize inventory for little businesses
          like restaurants, hairdressers, retailing shop and many others.
        </Typography>
        <Typography variant="body2">
          The app is available on Android as well as on iOS.
        </Typography>
        <br />
        <Typography variant="h4">{t("project-page.features")}</Typography>
        <ul>
          <Typography variant="body2">
            <li>Lorep ipsum</li>
            <li>Lorep ipsum</li>
            <li>Lorep ipsum</li>
          </Typography>
        </ul>
        <br />
        <Typography variant="h4">{t("project-page.author")}</Typography>
        <Typography variant="body2">Jordan LE PERA</Typography>
      </Container>
    </Fade>
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
