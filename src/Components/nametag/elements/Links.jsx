import styled from 'styled-components';

const StyledLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  a {
    padding: 6vmin 1em 0em 1em;

    img {
      width: 6vmin;
    }
  }
`

const Links = () => (
  <StyledLinksContainer>
    <a href='http://codepen.io/jacoboakley/#' target='_blank'><img src='assets/icons/codepen.png' alt='Codepen'/></a>
    <a href='assets/other/resume.pdf'><img src='assets/icons/document.png' alt='Resume'/></a>
    <a href='https://github.com/jacoboakley' target='_blank'><img src='assets/icons/github.png' alt='Github'/></a>
    <a href='https://www.linkedin.com/in/jacoboakley' target='_blank'><img src='assets/icons/linkedin.png' alt='Linkedin'/></a>
  </StyledLinksContainer>
);


export default Links;

//<a href='https://medium.com/@jacoboakley21' target='_blank'><img src='assets/icons/medium.png' alt='Medium'/></a>
//<a href='https://twitter.com/jacoboakley21' target='_blank'><img src='assets/icons/twitter.png' alt='Twitter'/></a>