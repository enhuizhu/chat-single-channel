const Html = ({ body, title, games }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
      <script>
        window._GAMES = ${JSON.stringify(games)}
      </script>
      <script src='script/css.js'></script>
      <script src='script/client.js'></script>
    </body>
  </html>
`;

export default Html;