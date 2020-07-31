// @flow
import React from "react"
import styled, { keyframes } from "styled-components"

const Loading = () => {
  return (
    <>
      <LoadingContainer>
        <Spinner />
        <LoadingText>LOADING</LoadingText>
      </LoadingContainer>
    </>
  )
}

const LoadingContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const LoadingText = styled.div`
  font-size: 2em;
  color: #3d3d3d;
`

const webkitRotateplane = keyframes`
  0% { -webkit-transform: perspective(120px) }
  50% { -webkit-transform: perspective(120px) rotateY(180deg) }
  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
`

const rotateplane = keyframes`
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) 
  } 50% { 
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) 
  } 100% { 
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
`

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  background-color: #3d3d3d;

  margin: 20px auto;
  -webkit-animation: ${webkitRotateplane} 1.2s infinite ease-in-out;
  animation: ${rotateplane} 1.2s infinite ease-in-out;
`

export default Loading
