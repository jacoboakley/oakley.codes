import styled from 'styled-components';
import { rotate } from '../animations/animations';

const StyledImage = styled.img`
  border-radius: 100%;
  height: 15vmin;
  width: 15vmin;

  :hover {
    animation: ${rotate} 1.15s forwards;
  }
`

const Avatar = () => <StyledImage src='assets/images/avatar.png' alt='Avatar depicting likeness of author' />;


export default Avatar;