import * as React from "react"
import styled from "styled-components"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Typography from "@material-ui/core/Typography"
import Chip from "@material-ui/core/Chip"
import Avatar from "@material-ui/core/Avatar"
import uniqueId from "lodash/uniqueId"
import { NavLink } from "react-router-dom"
import {
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaPython,
  FaJava,
  FaCode,
} from "react-icons/fa"
import projectPlaceholder from "../../img/project-placeholder.svg"

type ProjectInfo = {
  projectData: any,
  flippedProps: any,
}

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
  {
    name: "Java",
    icon: <FaJava />,
  },
]

const calculateAccessibleTextColor = (hexacode) => {
  return parseInt(hexacode.substring(1), 16) > 15099493 ? "#3D3D3D" : "white"
}

const ProjectListCard = (props: ProjectInfo) => {
  const { projectData, flippedProps } = props
  const matches = useMediaQuery("(max-width:959px)")

  const languagesChips = projectData.node.languages.edges.map((language) => (
    <Chip
      label={language.node.name}
      size={matches ? "small" : "medium"}
      avatar={
        <Avatar>
          {iconList.filter((icon) => icon.name === language.node.name)[0] ? (
            iconList.filter((icon) => icon.name === language.node.name)[0].icon
          ) : (
            <FaCode />
          )}
        </Avatar>
      }
      style={{
        backgroundColor: language.node.color,
        color: calculateAccessibleTextColor(language.node.color),
        marginRight: 10,
        marginTop: 10,
      }}
      key={uniqueId("chip-")}
    />
  ))

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <CardLink to={`/projects/${projectData.node.name}`} {...flippedProps}>
      <CardContainer matches={matches}>
        <CardImage
          src={
            projectData.node.usesCustomOpenGraphImage
              ? projectData.node.openGraphImageUrl
              : projectPlaceholder
          }
          alt="repository image"
          matches={matches}
        />
        <CardInfoContainer>
          <CardRepoName>
            <Typography variant="h4">{projectData.node.name}</Typography>
          </CardRepoName>
          <CardRepoDesc>
            <Typography variant="body2">
              {projectData.node.description}
            </Typography>
          </CardRepoDesc>
          <CardRepoChip>{languagesChips}</CardRepoChip>
        </CardInfoContainer>
      </CardContainer>
    </CardLink>
  )
}

const CardLink = styled(NavLink)`
  text-decoration: none;
`

const CardRepoChip = styled.div`
  flex-grow: 1;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`

const CardInfoContainer = styled.div`
  padding: 10px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const CardRepoName = styled.div`
  color: #3d3d3d;
  word-wrap: break-word;
`

const CardRepoDesc = styled.div`
  color: #555555;
  padding: 10px 0;
`

const CardContainer = styled.div`
  border-radius: 20px;
  display: flex;
  flex-direction: ${(props) => (props.matches ? "column" : "row")};
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  margin: 20px 0;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  transform: translateZ(0);
  will-change: box-shadow, transform, border;
  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    transform: translateZ(0) translateY(-10px) scale3d(1.02, 1.02, 1.02);
    cursor: pointer;
    border: 1px solid transparent;
  }
`

const CardImage = styled.img`
  width: ${(props) => (props.matches ? "100%" : "200px")};
  height: auto;
  max-height: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
`

export default ProjectListCard
