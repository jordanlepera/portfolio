import * as React from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/client"
import { useTranslation } from "react-i18next"
import moment from "moment"
import Link from "@material-ui/core/Link"
import Chip from "@material-ui/core/Chip"
import Avatar from "@material-ui/core/Avatar"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import uniqueId from "lodash/uniqueId"
import {
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaPython,
  FaCode,
} from "react-icons/fa"
import Loading from "../Loading/ComponentLoading"
import QueryService from "../../queries/query.service"
import projectPlaceholder from "../../img/project-placeholder.svg"

const iconList = [
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "Python",
    icon: <FaPython />,
  },
]

const techno = [
  { name: "React Native" },
  { name: "GraphQL" },
  { name: "Redux" },
  { name: "MongoDB" },
]

const calculateAccessibleTextColor = (hexacode) => {
  return parseInt(hexacode.substring(1), 16) > 15099493 ? "#3D3D3D" : "white"
}

const ChipStyled = styled(Chip)`
  margin-right: 10px;
  margin-top: 10px;
`

type ProjectData = {
  projectData: any,
}

const ProjectHeader = (props: ProjectData) => {
  const { projectData } = props
  const { t } = useTranslation()
  const matches = useMediaQuery("(max-width: 959px)")
  const { loading, error, data } = useQuery(QueryService.getProject(), {
    variables: { projectData },
    errorPolicy: "all",
  })

  if (loading) return <Loading />
  if (error)
    return (
      <>
        {error.graphQLErrors.map(({ message }) => (
          <span key={uniqueId("error-message")}>{message}</span>
        ))}
      </>
    )

  const languagesChips = data.viewer.repository.languages.edges.map((elem) => (
    <ChipStyled
      key={uniqueId("langage-chip-")}
      label={elem.node.name}
      avatar={
        <Avatar>
          {iconList.filter((icon) => icon.name === elem.node.name)[0] ? (
            iconList.filter((icon) => icon.name === elem.node.name)[0].icon
          ) : (
            <FaCode />
          )}
        </Avatar>
      }
      style={{
        backgroundColor: elem.node.color,
        color: calculateAccessibleTextColor(elem.node.color),
        marginRight: 10,
        marginTop: 10,
      }}
    />
  ))

  const technoChips = techno.map((elem) => (
    <ChipStyled key={uniqueId("techno-chip-")} label={elem.name} />
  ))

  return (
    <Container>
      <Image
        src={
          data.viewer.repository.usesCustomOpenGraphImage
            ? data.viewer.repository.openGraphImageUrl
            : projectPlaceholder
        }
        alt="project image"
        matches={matches}
      />
      <ProjectInfoPanel>
        <ProjectInfoPanelContent>
          <PanelTopSection>
            <PanelTopSectionColumn>
              <PanelSubSection>
                <SubtitlePanelSection>
                  {t("project-page.project-name")}
                </SubtitlePanelSection>
                {data.viewer.repository.name}
              </PanelSubSection>
              {data.viewer.repository.languages.edges.filter(
                (x) => x.node.name === "Python"
              )[0] ? (
                ""
              ) : (
                <PanelSubSection>
                  <SubtitlePanelSection>
                    {t("project-page.current-version")}
                  </SubtitlePanelSection>
                  <img
                    alt="GitHub package.json version"
                    src={`https://img.shields.io/github/package-json/v/jordanlepera/${projectData}`}
                  />
                </PanelSubSection>
              )}
              <PanelSubSection>
                <SubtitlePanelSection>
                  {t("project-page.github-repository")}
                </SubtitlePanelSection>
                <Link
                  href={`https://github.com/jordanlepera/${projectData}`}
                  target="blank"
                >
                  https://github.com/jordanlepera/{projectData}
                </Link>
              </PanelSubSection>
            </PanelTopSectionColumn>
            <PanelTopSectionColumn>
              <PanelSubSection>
                <SubtitlePanelSection>
                  {t("project-page.current-status")}
                </SubtitlePanelSection>
                {t("project-page.development")}
              </PanelSubSection>
              <PanelSubSection>
                <SubtitlePanelSection>
                  {t("project-page.last-commit")}
                </SubtitlePanelSection>
                {moment(
                  data.viewer.repository.pushedAt,
                  "YYYY-MM-DDTHH:mm:ssZ"
                ).format("DD/MM/YYYY HH:mm:ss")}
              </PanelSubSection>
              {data.viewer.repository.homepageUrl ? (
                <PanelSubSection>
                  <SubtitlePanelSection>
                    {t("project-page.website")}
                  </SubtitlePanelSection>
                  <Link
                    href={data.viewer.repository.homepageUrl}
                    target="blank"
                  >
                    {data.viewer.repository.homepageUrl}
                  </Link>
                </PanelSubSection>
              ) : (
                ""
              )}
            </PanelTopSectionColumn>
          </PanelTopSection>
          <PanelBottomSection>
            <PanelSubSection>
              <SubtitlePanelSection>
                {t("project-page.programmation-languages")}
              </SubtitlePanelSection>
              {languagesChips}
            </PanelSubSection>
            <PanelSubSection>
              <SubtitlePanelSection>
                {t("project-page.techno-used")}
              </SubtitlePanelSection>
              {technoChips}
            </PanelSubSection>
          </PanelBottomSection>
        </ProjectInfoPanelContent>
      </ProjectInfoPanel>
    </Container>
  )
}

const SubtitlePanelSection = styled.div`
  font-weight: 700;
`

const PanelBottomSection = styled.div`
  display: flex;
`

const PanelTopSection = styled.div`
  display: flex;
`

const PanelTopSectionColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

const PanelSubSection = styled.div`
  margin: 10px;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

const Image = styled.img`
  width: ${(props) => (props.matches ? "100%" : "70%")};
  height: auto;
  object-fit: cover;
  border-radius: 30px;
`

const ProjectInfoPanelContent = styled.div`
  width: 100%;
  height: 100%;
`

const ProjectInfoPanel = styled.div`
  width: 90%;
  border-radius: 1em;
  margin-top: 30px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.1);
`

export default ProjectHeader
