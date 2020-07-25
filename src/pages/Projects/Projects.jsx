// @flow
import React from "react"
import styled from "styled-components"
// import { useTranslation } from 'react-i18next';
import WorkInProgress from "../../components/WorkInProgress/WorkInProgress"

const Projects = () => {
  // const { t } = useTranslation();

  return (
    <>
      <Container>
        <WorkInProgress />
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 90%;
`

export default Projects
