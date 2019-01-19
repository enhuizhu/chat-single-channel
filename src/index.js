import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import './styles/index.scss';
import AppContainer from './AppContainer';
import store from './store/store';

ReactDOM.render(
  <Provider store = {store}>
    <AppContainer/>
  </Provider>, 
document.getElementById("app"));
