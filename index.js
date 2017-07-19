const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Tim\'s World!');
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('received: %s', message);
    ws.send(message);
  });
});

server.listen(PORT, () => {
  console.log('Listening on %d', server.address().port);
});
