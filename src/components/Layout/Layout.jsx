import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Layout = (props) => {
  const { children } = props;
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <LayoutContainer>
      <Nav />
      <LayoutContent matches={matches}>
        {children}
      </LayoutContent>
      <Footer />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LayoutContent = styled.section`
  margin-top: 30px;
  width: 100%;
  max-width: ${props => props.matches ? '90%' : '1000px'};
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

Layout.defaultProps = {
  children: undefined,
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
