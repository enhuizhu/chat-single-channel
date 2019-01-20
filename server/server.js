import React from 'react';
import { renderToString } from 'react-dom/server';
import AppContainer from '../src/AppContainer';
import Html from './html';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from '../src/reducers/';
import { receiveGames } from '../src/actions/';

const games = require('./mock-data.json');
const store = createStore(allReducers);
store.dispatch(receiveGames(games));
const mockApi = require('./mock-api');
const express = require('express');
const fs = require('fs');
const cors = require('cors')

const port = 3000;
const server = express();

server.use(cors());

server.use(express.static(`${process.cwd()}/server`));
server.use('/script', express.static(`${process.cwd()}/dist/public`));

server.use(function(req, res, next) {
  const contentType = req.headers['content-type'] || '';
  const mime = contentType.split(';')[0];

  if (mime != 'text/plain' && mime != 'application/json') {
    return next();
  }

  let data = '';
  
  req.setEncoding('utf8');
  
  req.on('data', function(chunk) {
    data += chunk;
  });
  
  req.on('end', function() {
    req.body = data;
    next();
  });
});

server.use(mockApi);

server.get('/game-data', (req, res) => {
  res.setHeader('content-type', 'application/json');
  const readStream = fs.createReadStream(process.cwd() + '/server/mock-data.json');
  readStream.pipe(res);
});

server.get('/', (req, res) => {
  /**
   * renderToString() will take our React app and turn it into a string
   * to be inserted into our Html template function.
   */
  const frontend = (<Provider store = {store}>
      <AppContainer/>
    </Provider>);
  
  const body = renderToString(frontend);
  const title = 'Server side Rendering with Styled Components';
  
  res.send(
    Html({
      body,
      title,
      games
    })
  );
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);