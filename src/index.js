import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import './styles/index.scss';
import AppContainer from './AppContainer';
import store from './store/store';
import { Switch, Route, HashRouter} from 'react-router-dom';
import GameWrapper from './components/gameWrapper/gameWrapper';

ReactDOM.render(
  <Provider store = {store}>
    <HashRouter hashType='slash'>
      <Switch>
        <Route exact path='/' component={AppContainer}/>
        <Route path='/:gameCode' component={GameWrapper}/>
      </Switch>
    </HashRouter>
  </Provider>, 
document.getElementById("app"));
