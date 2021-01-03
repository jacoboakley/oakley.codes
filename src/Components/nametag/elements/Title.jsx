import styled from 'styled-components'

const StyledTitleContainer = styled.div`
  color: white;
  text-align: center;

  h1 {
    font-family: Parisienne;
    font-size: 8vmin;
    margin: 0;
  }

  p {
    font-size: 5vmin;
    margin: 0;
    text-shadow: .25vmin .25vmin 0 #8a0099;
  }
`

const Title = () => (
  <StyledTitleContainer className='title'>
    <h1 className='name'>
      Jacob Oakley
    </h1>
    <p>
      Web Developer /<br/>
      Netflix Binge Watcher
    </p>
  </StyledTitleContainer>
);


export default Title;