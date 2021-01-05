import styled from 'styled-components';

// Import Elements
import Title from './elements/Title';
import Links from './elements/Links';
import Avatar from './elements/Avatar';
import Button from './elements/Button';

const StyledNametag = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
`

const Nametag = () => (
  <StyledNametag   id='landingPage'>
    <Avatar />
    <Title />
    <Links />
    <Button />
  </StyledNametag>
)

export default Nametag