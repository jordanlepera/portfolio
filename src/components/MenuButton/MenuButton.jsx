// @flow
import * as React from "react"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"

type Props = {
  onClick?: () => any,
}

const MenuButton = (props: Props) => {
  const { onClick } = props
  return (
    <>
      <MenuButtonContainer onClick={() => onClick && onClick()}>
        <FaBars color="#3D3D3D" size={25} />
      </MenuButtonContainer>
    </>
  )
}

MenuButton.defaultProps = {
  onClick: undefined,
}

const MenuButtonContainer = styled.button`
  border: solid 1px transparent;
  display: flex;
  align-self: center;
  padding: 6px;
  justify-content: center;
  flex-direction: row;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  color: #3d3d3d;
  user-select: none;
  transition: color 0.3s, background 0.3s;
`

export default MenuButton
