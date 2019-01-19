// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import App from '../src/App';
// import Html from './html';
const mockApi = require('./mock-api');
const express = require('express');
const fs = require('fs');
const cors = require('cors')

const port = 3000;
const server = express();

server.use(cors());

server.use(express.static(`${process.cwd()}/server`));

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

// server.get('/', (req, res) => {
//   /**
//    * renderToString() will take our React app and turn it into a string
//    * to be inserted into our Html template function.
//    */
//   const body = renderToString(<App />);
//   const title = 'Server side Rendering with Styled Components';

//   res.send(
//     Html({
//       body,
//       title
//     })
//   );
// });

server.listen(port);
console.log(`Serving at http://localhost:${port}`);