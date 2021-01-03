import { useRef } from 'react';
import {
  Link
} from 'react-router-dom';
import styled from 'styled-components';

// Styles
// import './animations/buttonEffects.css';

// const styles = {
//   button: {
//     // marginTop: '6vmin',

//     // height: '8vmin',
//     // width: '30vmin',

//     // alignItems: 'center',
//     // display: 'flex',
//     // justifyContent: 'center',

//     // background: 'transparent',
//     // border: '1px solid #8a0099',
//     // color: '#8a0099',
//     // cursor: 'pointer',
//     // fontFamily: 'Parisienne',
//     // fontSize: '5vmin',

//     // textDecoration: "none"
//   }
// }

const StyledButton = styled.button`
  margin-top: 6vmin;

  height: 8vmin;
  width: 30vmin;

  align-items: center;
  display: flex;
  justify-content: center;

  background: transparent;
  border: 1px solid #8a0099;
  color: #8a0099;
  cursor: pointer;
  font-family: Parisienne;
  font-size: 5vmin;
`

const HiddenLink = styled.div`
  visibility: hidden;
`

const Button = () => {
  const linkRef = useRef();

  const handleClick = () => {    
    var landingPage = document.querySelector('#landingPage');
      landingPage?.classList.remove("fadeIn");
      landingPage?.classList.add("fadeOut");

    var mainPage = document.querySelector('#content');
      mainPage?.classList.remove("hide");
      mainPage?.classList.toggle("scaleUp");
      mainPage?.classList.toggle("scaleDown");

    var nav = document.querySelector('#nav');
      nav?.classList.toggle("display");
      nav?.classList.toggle("hide");

      setTimeout(() => {
        if(linkRef) {
          linkRef.current.click();
        }
      }, 1000);
  }

  return (
    <>
      <StyledButton 
        className='button-hover button-active'
        onClick={handleClick}
      >
        Continue
      </StyledButton>
      <HiddenLink>
        <Link to="/about" ref={linkRef}>about</Link>
      </HiddenLink>
    </>
  )
}

export default Button