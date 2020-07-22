import React from 'react';
import styled from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import uniqueId from 'lodash/uniqueId';
import LogoImg from '../../img/codinov_logo1txt-white.svg';

const navButtons = [
  {
    text: 'Projects',
    url: '/projects',
  },
  {
    text: 'Articles',
    url: 'articles',
  },
  {
    text: 'About',
    url: 'about',
  }
];

const Nav = () => {
  const matches = useMediaQuery('(max-width:959px)');

  const NavBar = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: ${props => props.matches ? 'column' : 'row'};
  min-height: 80px;
  max-width: 1000px;
  margin-top: 30px;
  width: 90%;
  border-bottom: 1px solid #dddddd;
  padding: 10px;
`;

  const navButtonsList = navButtons.map((elem) => (
    <NavLink to={elem.url} key={uniqueId('navbuttons-')}>
      <NavButton type="button">{elem.text}</NavButton>
    </NavLink>
  ));

  const MenuButton = () => {
    return (
      <MenuButtonContainer>
        <FaBars color="#3D3D3D" size={20} />
        <MenuButtontext>MENU</MenuButtontext>
      </MenuButtonContainer>
    );
  };

  return (
    <NavBar matches={matches}>
      <NavLink to="/">
        <Logo src={LogoImg} alt="Codinov's logo" />
      </NavLink>
      <Space />
      {matches ? <MenuButton /> : navButtonsList}
    </NavBar>
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
