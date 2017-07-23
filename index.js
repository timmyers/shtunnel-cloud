const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const fetch = require('node-fetch');

const PORT = 8080;

const wsConnections = [];

const app = express();

app.get('/', (req, res) => {
  res.send(`${wsConnections.length} ws connections`);
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  wsConnections.push(ws);
  ws.on('message', (message) => {
    console.log('received: %s', message);
    ws.send(message);
  });
});

server.listen(PORT, () => {
  console.log('Listening on %d', server.address().port);
});

setInterval(() => {
  console.log('Interval!');

  fetch('https://github.com/')
    .then(res => res.text())
    .then(body => console.log(body));
}, 10000);
