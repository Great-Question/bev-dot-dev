import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from './App';
import * as serviceWorker from './serviceWorker';

//import './App.css';
import './assets/scss/style.scss';

// const history = createBrowserHistory();

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

// this function searches all <p> tags named "m-0" for the word 'bev' and change its color.
// returns an array elements
const element = document.getElementsByClassName('m-0');
// iterate through the elements array to find 'bev'
for (let i = 1; i < element.length; i++) {
  const originalHTML = element[i].innerHTML;
  // if the string 'bev' has been found, replace the word with a <strong> and red color innerHtml.
  const newHTML = originalHTML.replace(/bev/gi, "<span style='color:#ac1f1f'><strong>bev</strong></span>");
  element[i].innerHTML = newHTML;
}




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
