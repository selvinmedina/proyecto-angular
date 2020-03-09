//Install express server
const express = require('express'),
  path = require('path'),
  app = express();

app.use(express.static(__dirname + '/dist/proyecto-angular'));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/proyecto-angular/index.html'));
});

app.listen(process.env.PORT || 5000);
