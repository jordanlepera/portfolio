// @flow
import * as React from "react"
import { useTranslation } from "react-i18next"
import Typography from "@material-ui/core/Typography"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Link from "@material-ui/core/Link"

type Props = {
  projectData: any,
}

const Project = (props: Props) => {
  const { projectData } = props
  const { t } = useTranslation()

  return (
    <>
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
      <div>{projectData}</div>
    </>
  )
}

export default Project
