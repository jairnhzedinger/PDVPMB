const WebSocket = require('ws');

function initChat(server) {
  const wss = new WebSocket.Server({ server });
  wss.on('connection', (ws, req) => {
    const params = new URLSearchParams(req.url.replace('/?', ''));
    const username = params.get('username') || 'Anon';
    ws.on('message', (msg) => {
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(`${username}: ${msg}`);
        }
      });
    });
  });
}
module.exports = initChat;
