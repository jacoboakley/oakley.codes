import styled from 'styled-components';

const styles = {
  image: {
    height: '15vmin',
    width: '15vmin',

    borderRadius: '100%'
  }
}

const StyledImage = styled.img`
  borderRadius: 100%;
  height: 15vmin;
  width: 15vmin;
`

const Avatar = () => <StyledImage style={styles.image} src='assets/images/avatar.png' alt='Avatar depicting likeness of author' />;


export default Avatar;