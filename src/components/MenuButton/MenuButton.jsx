import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const MenuButton = () => {
  return (
    <MenuButtonContainer>
      <FaBars color="#3D3D3D" size={20} />
      <MenuButtontext>MENU</MenuButtontext>
    </MenuButtonContainer>
  );
};

const MenuButtontext = styled.div`
  margin-left: 10px;
  font-size: 20px;
`;

const MenuButtonContainer = styled.button`
  border: solid 1px #EEEEEE;
  padding: 20px;
  margin: 20px;
  display: flex;
  align-self: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  color: #3D3D3D;
  user-select: none;
  transition: color 0.3s, background 0.3s;
  &:hover {
    background-color: #EEEEEE;
  }
`;

export default MenuButton;
