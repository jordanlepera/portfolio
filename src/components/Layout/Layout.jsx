import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Layout = (props) => {
  const { children } = props;

  return (
    <LayoutContainer>
      <Nav />
      <LayoutContent>
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
  max-width: 1000px;
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
