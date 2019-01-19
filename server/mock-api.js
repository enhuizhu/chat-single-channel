const players = {
  "rebecka": {
      "name": "Rebecka Awesome",
      "avatar": "images/avatar/rebecka.jpg",
      "event": "Last seen gambling on Starburst.",
      "password": "secret"
  },
  "eric": {
      "name": "Eric Beard",
      "avatar": "images/avatar/eric.jpg",
      "event": "I saw you won 500 SEK last time!",
      "password": "dad"

  },
  "stoffe": {
      "name": "Stoffe Rocker",
      "avatar": "images/avatar/stoffe.jpg",
      "event": "Your are a rock star",
      "password": "rock"
  }
};

module.exports = (req, res, next) => {
  if (req.method === 'POST') {
      if(req.path === '/login') {
          console.log('rawbody', req.body);
          const userInfo = JSON.parse(req.body);
          const username = userInfo.username;
          const password = userInfo.password;
          console.log(username);
          if (username in players && players[username].password === password) {
              const player = Object.assign({}, players[username], {username: username}); //Creating a copy of player
              delete player.password;
              res.status(200).json({
                  status: 'success',
                  player
              });
          } else {
              res.status(400).json({
                  status: 'fail',
                  error: 'player does not exist or wrong password'
              });

          }

      } else if(req.path === '/logout') {
          const body = JSON.parse(req.body);
          const username = body.username;
          
          if (username in players) {
              res.status(200).json({
                  status: 'success'
              });
          } else {
              res.status(400).json({
                  status: 'fail',
                  error: 'Username do not match!'
              });
          }
      }
  } else {
      next()
  }
}