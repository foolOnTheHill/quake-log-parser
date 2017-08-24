const EJS = require('ejs');

// EJS template to generate the HTML page
const TEMPLATE = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Quake Rank</title>
  </head>
  <body>
    <table>
      <tr>
        <th>#</th>
        <th>Player</th>
        <th>Kills</th>
      </tr>
      <% for(var i = 0; i < rank.players.length; i++) { %>
        <tr>
          <td><%= i+1 %></td>
          <td><%= rank.players[i] %></td>
          <td><%= rank.kills[rank.players[i]] %></td>
        </tr>
      <% } %>
    </table>
  </body>
</html>`;

class Template {

  build(rank) {
    const html = EJS.compile(TEMPLATE)({
      rank: rank
    });
    return html;
  }
}

export default Template;
