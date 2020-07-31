// @flow
import React from "react"
import styled from "styled-components"
import Typography from "@material-ui/core/Typography"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Link from "@material-ui/core/Link"
import Fade from "@material-ui/core/Fade"
import { useTranslation } from "react-i18next"
import WorkInProgress from "../../components/WorkInProgress/WorkInProgress"

const Articles = () => {
  const { t } = useTranslation()

  return (
    <Fade in timeout={500}>
      <Container>
        <Typography variant="h3">{t("articles")}</Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            {t("home")}
          </Link>
          <Typography color="textPrimary">{t("articles")}</Typography>
        </Breadcrumbs>
        <Space />
        <WorkInProgress />
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

export default Articles
