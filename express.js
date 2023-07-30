const express = require('express');
const path = require("path");

const app = express();

const port = 3000;

app.use(express.static("./"));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/firebase-messaging-sw.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'firebase-messaging-sw.js'));
  });

app.listen(port, () => {
  console.log(`Tamam Awi Eshtaghal!!!!!!!!!! 

Port: ${port}`);
});
