import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from "styled-components";
const Styles= createGlobalStyle`
  *{
      margin:0;
      padding:0;
      box-sizing:border-box;

  }
  body{
  background:#242424;
  line-height:3.6rem;
  }
`
ReactDOM.render(
  <React.StrictMode>
    <Styles/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

