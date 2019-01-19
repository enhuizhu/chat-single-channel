const Html = ({ body, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
      <script src='css.js'></script>
      <script src='client.js'></script>
    </body>
  </html>
`;

export default Html;