import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-perfect-scrollbar/dist/css/styles.min.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    font-family: 'Roboto', sans-serif;
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #f0f0f3;
  }
  body::-webkit-scrollbar-corner{
    background: transparent;
  }
  body::-webkit-scrollbar {
    width: 10px;
  }
  body::-webkit-scrollbar-track {
    background: #39278a;
  }
  body::-webkit-scrollbar-thumb {
    background: #5b4ca0;
    border-radius: 10px;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
