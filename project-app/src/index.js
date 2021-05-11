import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.Fragment>
  <BrowserRouter><App></App></BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);

