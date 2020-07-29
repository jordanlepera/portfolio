// @flow
import * as React from "react"
import styled from "styled-components"
import uniqueId from "lodash/uniqueId"
import Typography from "@material-ui/core/Typography"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Link from "@material-ui/core/Link"
import Fade from "@material-ui/core/Fade"
import { useTranslation } from "react-i18next"
import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import ProjectListCard from "../../components/ProjectListCard/ProjectListCard"

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = process.env.REACT_APP_GITHUB_API_TOKEN
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : "",
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

const Projects = () => {
  const { t } = useTranslation()
  const [projects, setProjects] = React.useState([])

  const ProjectsList = () =>
    projects.map((repo) => (
      <ProjectListCard
        projectData={repo}
        key={uniqueId("project-list-card-")}
      />
    ))

  client
    .query({
      query: gql`
        {
          viewer {
            repositories(
              first: 20
              privacy: PUBLIC
              ownerAffiliations: OWNER
              orderBy: { field: CREATED_AT, direction: DESC }
            ) {
              edges {
                node {
                  id
                  createdAt
                  description
                  homepageUrl
                  name
                  owner {
                    avatarUrl(size: 100)
                    login
                  }
                  languages(first: 10) {
                    edges {
                      node {
                        color
                        name
                      }
                      size
                    }
                    totalSize
                  }
                  pushedAt
                  openGraphImageUrl
                  usesCustomOpenGraphImage
                  url
                }
              }
            }
          }
        }
      `,
    })
    .then((result) => {
      setProjects(result.data.viewer.repositories.edges)
    })

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
        <ProjectsList />
      </Container>
    </Fade>
  )
}

const Container = styled.div`
  width: 90%;
`

export default Projects
