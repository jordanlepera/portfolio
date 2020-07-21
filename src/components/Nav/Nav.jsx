import React from 'react';
import styled from 'styled-components';
import uniqueId from 'lodash/uniqueId';
import LogoImg from '../../codinov_logo1txt-white.svg';

const navButtons = [
  'Projects',
  'Articles',
  'About',
];

const Nav = () => {
  const navButtonsList = navButtons.map((elem) => (
    <NavButton type="button" key={uniqueId('navbuttons-')}>{elem}</NavButton>
  ));

  return (
    <NavBar>
      <Logo src={LogoImg} alt="JL Studio's logo" />
      <Space />
      {navButtonsList}
    </NavBar>
  );
};

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  height: 80px;
  max-width: 1200px;
  margin-top: 30px;
  min-width: 414px;
  width: 1000px;
  border-bottom: 1px solid #dddddd;
  padding: 10px;
`;

const Logo = styled.img`
  width: 300px;
  height: auto;
`;

const Space = styled.span`
  flex-grow: 1;
`;

const NavButton = styled.button`
  font-weight: bold;
  width: 100px;
  height: 80px;
  border-radius: 10px;
  text-transform: capitalize;
  font-size: large;
  cursor: pointer;
  border: none;
  padding: 10px;
  margin: 10px;
  background-color: transparent;
  outline: none;
  color: #3D3D3D;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: rgba(61, 61, 61, 0.5)
  }
`;

export default Nav;
