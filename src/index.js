import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --backgroundCol: rgb(220,220,220);
    --backgroundColBright: rgb(240,240,240);
    --textCol: rgb(60,60,60);
    --myGrey: rgb(190,190,190);
    --boxShadow: 0 0 2px 2px rgba(0,0,0,0.1), 3px 3px 3px 3px rgba(0,0,0,0.2);
    --pad: 2rem;
    --borad: 2rem;
    --maxWidth: 1200px;
  }

  html, body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100vw;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  li {
    list-style: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  body {
    background: var(--backgroundCol);
    color: var(--textCol);
    font-family: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
  }
`;

const AppStyles = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: var(--maxWidth);
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App AppStyles={AppStyles}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
