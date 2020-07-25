import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
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
import Projects from '../../pages/Projects/Projects';
import Articles from '../../pages/Articles/Articles';
import About from '../../pages/About/About';
import Project from '../Project/Project';
import Loading from '../Loading/Loading';
import NotFound from '../NotFound/NotFound';

const projectsList = [
  {
    url: 'open-authenticator',
    title: 'Open\nAuthenticator',
    desc: 'electron.js TOTP provider',
    img: OpenAuthImg,
    color: 'white',
    gridSize: 4,
    boxShadowColor: 'rgba(94, 94, 171, 0.5)',
  },
  {
    url: 'inventory',
    title: 'Inventory',
    desc: 'a mobile app\nfor little businesses',
    img: InventoryImg,
    color: 'white',
    gridSize: 4,
    boxShadowColor: 'rgba(94, 94, 171, 0.5)',
  },
  {
    url: 'mamma-giovanna',
    title: 'Mamma Giovanna',
    desc: 'restaurant website',
    img: MammaGioImg,
    color: 'white',
    gridSize: 4,
    boxShadowColor: 'rgba(94, 94, 171, 0.5)',
  },
  {
    url: 'briscola',
    title: 'Briscola',
    desc: 'italian card game',
    img: BriscolaImg,
    color: 'white',
    gridSize: 8,
    boxShadowColor: 'rgba(94, 94, 171, 0.5)',
  },
  {
    url: 'follower-analyzer',
    title: 'follower-analyzer',
    desc: 'python script for instagram',
    img: FollowerImg,
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
    <Grid item xs={12} md={elem.gridSize} key={uniqueId('thumbnail-')}>
      <Flipped
        flipId={createCardFlipId(index)}
        onAppear={animateElementIn}
      >
        {(flippedProps) => <Thumbnail url={elem.url} title={elem.title} desc={elem.desc} img={elem.img} color={elem.color} boxShadowColor={elem.boxShadowColor} className="thumbnail" flippedProps={flippedProps} />}
      </Flipped>
    </Grid>
  )));

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Layout>
          <Switch>
            <Route exact path="/">
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
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path='/projects'>
              <Projects />
            </Route>
            <Route path='/projects/:projectId'>
              <Project test="Hello world" />
            </Route>
            <Route path='/articles'>
              <Articles />
            </Route>
            <Route path='/articles/:articleId'>
              <Articles />
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </Suspense>
    </Router>
  );
};

const ContentContainer = styled(Flipper)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
`;

export default App;
