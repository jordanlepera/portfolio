/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"
import anime from "animejs"

const Thumbnail = (props) => {
  const { url, title, desc, img, color, boxShadowColor, flippedProps } = props
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const imgRef = useRef(null)

  const animateZoom = (el) => {
    anime({
      targets: el,
      scale: 1.01,
      translateY: -10,
      boxShadow: [
        `0px 0px 0px 0px ${boxShadowColor}`,
        `0px 10px 20px 0px ${boxShadowColor}`,
      ],
      duration: 500,
      delay: 0,
      easing: "easeOutQuint",
    })
  }

  const animateDezoom = (el) => {
    anime({
      targets: el,
      scale: 1,
      translateY: 0,
      boxShadow: [
        `0px 10px 20px 0px ${boxShadowColor}`,
        `0px 0px 0px 0px ${boxShadowColor}`,
      ],
      duration: 500,
      delay: 0,
      easing: "easeOutQuint",
    })
  }

  return (
    <ThumbLink to={`/projects/${url}`}>
      <Container
        ref={containerRef}
        className="thumbnail-container"
        {...flippedProps}
        onMouseEnter={() => {
          animateZoom(containerRef.current)
        }}
        onMouseLeave={() => {
          animateDezoom(containerRef.current)
        }}
        textColor={color}
        boxShadowColor={boxShadowColor}
      >
        <Image ref={imgRef} src={img} alt="thumbnail" className="image" />
        <Title ref={titleRef} className="title">
          {title}
        </Title>
        <Desc ref={descRef} className="desc">
          {desc}
        </Desc>
      </Container>
    </ThumbLink>
  )
}

const ThumbLink = styled(NavLink)`
  text-decoration: none;
`

const Title = styled.div`
  font-size: xx-large;
  font-weight: 600;
  opacity: 0;
  transform: translateY(30px);
  white-space: pre-line;
  text-align: center;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out,
    transform 0.3s ease-out;
`

const Desc = styled.div`
  font-size: x-large;
  font-weight: 200;
  opacity: 0;
  transform: translateY(30px);
  white-space: pre-line;
  text-align: center;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out,
    transform 0.3s ease-out;
`

const Image = styled.img`
  position: absolute;
  opacity: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
`

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #3f96ff, #8739e5);
  transform: translateY(0);
  box-shadow: 0px 0px 0px 0px ${(props) => props.boxShadowColor};
  color: ${(props) => props.textColor};
  flex-direction: column;
  border-radius: 10px;
  user-select: none;
  width: 100%;
  height: 275px;
  overflow: hidden;
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
  &:hover ${Image} {
    opacity: 0;
  }
  &:hover ${Title} {
    transform: translateY(0px);
    opacity: 1;
  }
  &:hover ${Desc} {
    transform: translateY(0px);
    opacity: 1;
  }
`

Thumbnail.defaultProps = {
  url: "/",
  title: "",
  desc: "",
  img: "",
  backgroundColor: "#3D3D3D",
  color: "white",
  boxShadowColor: "rgb(189, 189, 189)",
  flippedProps: undefined,
}

Thumbnail.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  img: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  boxShadowColor: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  flippedProps: PropTypes.object,
}

export default Thumbnail
