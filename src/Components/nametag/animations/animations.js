
import { keyframes } from 'styled-components';

export const buttonActive = keyframes`
  0%   { background: #8a0099; color: white; border: 1px solid white; }
  100% { background: transparent; color: #8a0099; }
`

export const buttonHover = keyframes`
  0%   { background: transparent; color: #8a0099; }
  100% { background: #8a0099; color: white; border: 1px solid white; }
`

export const rotate = keyframes`
  0%   { transform: rotateZ(0deg) }
  99% { transform: rotateZ(360deg) }
  100% { transform: rotateZ(0deg) }
`