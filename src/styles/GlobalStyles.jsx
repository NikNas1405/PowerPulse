import styled, { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #000;
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
   font-style: normal;
   color: #fff;
   width: 100%;
   height: 100vh;
  margin: 0;
}

a {
  text-decoration: none;
}

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

 h1,
 h2,
 h3,
 h4,
 h5,
 h6,
 p {
   margin: 0;
 }

img {
  display: block;
  width: 100%;
    height: 100%;
  
}

button {
   cursor: pointer;
 }
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1248px;
    padding: 0 96px;
  }
`;
