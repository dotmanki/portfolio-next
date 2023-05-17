import { createGlobalStyle, keyframes } from 'styled-components'

export const colorPalette = {
  background: '#0F152E',
  text: '#FFF',
  primary: '#B694F6',
  onPrimary: '#321D87',
  toGradient: '#321D87',
  accent: '#f72585',
  hoverAccent: '#b5179e',
}

export const blurAnimation = keyframes`
  0%, 100%{
    filter: blur(2px);
  }

  50% {
    filter: blur(10px);
  }
`

export const transitionCard = 'transform 2s ease-in-out'

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {    
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${colorPalette.background};
    color: ${colorPalette.text};
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    padding: 2.25rem;
`

export const breakpoints = {
  md: '768px',
  lg: '1024px',
}
