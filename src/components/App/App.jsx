import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Flipper, Flipped } from 'react-flip-toolkit';
import anime from 'animejs';
import uniqueId from 'lodash/uniqueId';
import Layout from '../Layout/Layout';
import Thumbnail from '../Thumbnail/Thumbnail';
import InventoryImg from '../../img/inventory-mockup.jpg';
import OpenAuthImg from '../../img/open-auth-mockup.jpg';
import MammaGioImg from '../../img/sallev4.jpg';
import BriscolaImg from '../../img/briscola.jpg';
import FollowerImg from '../../img/follower-analyzer-cover.jpg';

const projectsList = [
  {
    title: 'Open\nAuthenticator',
    desc: 'electron.js TOTP provider',
    img: OpenAuthImg,
    backgroundColor: '#0373fc',
    color: 'white',
    gridSize: 4,
    boxShadowColor: 'rgba(94, 94, 171, 0.5)',
  },
  {
    title: 'Inventory',
    desc: 'a mobile app\nfor little businesses',
    img: InventoryImg,
    backgroundColor: '#fcba03',
    color: 'white',
    gridSize: 4,
    boxShadowColor: 'rgba(94, 94, 171, 0.5)',
  },
  {
    title: 'Mamma Giovanna',
    desc: 'restaurant website',
    img: MammaGioImg,
    backgroundColor: '#635959',
    color: 'white',
    gridSize: 4,
    boxShadowColor: 'rgba(94, 94, 171, 0.5)',
  },
  {
    title: 'Briscola',
    desc: 'italian card game',
    img: BriscolaImg,
    backgroundColor: '#5e5eab',
    color: 'white',
    gridSize: 8,
    boxShadowColor: 'rgba(94, 94, 171, 0.5)',
  },
  {
    title: 'follower-analyzer',
    desc: 'python script for instagram',
    img: FollowerImg,
    backgroundColor: '#03fcdb',
    color: 'white',
    gridSize: 4,
    boxShadowColor: 'rgba(94, 94, 171, 0.5)',
  },
];

const createCardFlipId = (index) => `listItem-${index}`;

// wait for exiting elements to be removed
// next, animate updating elements
// finally, after updates are complete,
// animate entering elements
const exitThenFlipThenEnter = ({
  hideEnteringElements,
  animateEnteringElements,
  animateExitingElements,
  animateFlippedElements,
}) => {
  hideEnteringElements();
  animateExitingElements()
    .then(animateFlippedElements)
    .then(animateEnteringElements);
};

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([...projectsList]);
  }, []);

  const animateElementIn = (el, i) => {
    anime({
      targets: el,
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 1000,
      delay: i * 100,
      easing: 'cubicBezier(0.165, 0.84, 0.44, 1)',
    });
  };

  const displayProjectsThumbnails = projects.map(((elem, index) => (
    <Grid item xs={elem.gridSize} key={uniqueId('thumbnail-')}>
      <Flipped
        flipId={createCardFlipId(index)}
        onAppear={animateElementIn}
      >
        {(flippedProps) => <Thumbnail title={elem.title} desc={elem.desc} img={elem.img} backgroundColor={elem.backgroundColor} color={elem.color} boxShadowColor={elem.boxShadowColor} className="thumbnail" flippedProps={flippedProps} />}
      </Flipped>
    </Grid>
  )));

  return (
    <Layout>
      <ContentContainer
        handleEnterUpdateDelete={exitThenFlipThenEnter}
        flipKey={projects}
        spring="gentle"
        decisionData={projects}
      >
        <Grid container alignItems="center" justify="space-evenly" spacing={3}>
          {displayProjectsThumbnails}
        </Grid>
      </ContentContainer>
    </Layout>
  );
};

const ContentContainer = styled(Flipper)`
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;
`;

export default App;
