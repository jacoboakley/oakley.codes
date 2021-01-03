import {useEffect, useRef} from 'react';
import { World } from '../../World/World.js';
import styled from 'styled-components';

/* Components */
import Nametag from '../../Components/nametag/Nametag.jsx';

import './animations/fade.css';

const StyledSplashContainer = styled.div `
  height: 100vh;
`

export const LandingPage = () => {

  const sceneRef = useRef();

  useEffect(() => {

    const container = sceneRef.current;

    const world = new World(container);

    world.start();

  }, [])

  return (
    <StyledSplashContainer ref={sceneRef}>
      <Nametag />
    </StyledSplashContainer>
  );
}