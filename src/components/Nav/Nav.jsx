import React from 'react';
import styled from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTranslation } from 'react-i18next';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';
import uniqueId from 'lodash/uniqueId';
import MenuButton from '../MenuButton/MenuButton';
import LogoImg from '../../img/codinov_logo1txt-white.svg';

const Nav = () => {
  const matches = useMediaQuery('(max-width:959px)');
  const { t, i18n } = useTranslation();

  const navButtons = [
    {
      text: t('projects'),
      url: '/projects',
    },
    {
      text: t('articles'),
      url: '/articles',
    },
    {
      text: t('about'),
      url: '/about',
    }
  ];

  const navButtonsList = navButtons.map((elem) => (
    <NavLink to={elem.url} key={uniqueId('navbuttons-')}>
      <NavButton type="button">{elem.text}</NavButton>
    </NavLink>
  ));

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <NavBar matches={matches}>
      <NavLink to="/">
        <Logo src={LogoImg} alt="Codinov's logo" />
      </NavLink>
      <Space />
      {matches ? <MenuButton /> : navButtonsList}
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={i18n.language}
        variant="outlined"
        onChange={handleChange}
      >
        <MenuItem value={'fr'}><span role="img" aria-label="french flag">🇫🇷</span> Français</MenuItem>
        <MenuItem value={'en'}><span role="img" aria-label="english flag">🇬🇧</span> English</MenuItem>
      </Select>
    </NavBar>
  );
};

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
