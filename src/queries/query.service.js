import { gql } from "@apollo/client"

function QueryService() {}

QueryService.prototype.getProjects = () => {
  const GET_PROJECTS = gql`
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
  `
  return GET_PROJECTS
}

export default new QueryService()
