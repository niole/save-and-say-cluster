const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.get('/save/:toSave', function(req, res) {
  const { toSave } = req.params;
  fs.appendFile(path.resolve(__dirname, 'saved.csv'), `${toSave}\n`, function (err) {
      if (err) {
        throw err;
      } else {
        console.log(`saved ${toSave}`);
        res.send(`saved ${toSave}`);
      }
  });
});

app.get('/saved', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'saved.csv'));
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
